// public/sw.js — MedAssist Service Worker
// NOTE: When built with vite-plugin-pwa injectManifest strategy,
// self.__WB_MANIFEST is injected automatically by the build tool.
// For dev/manual use, we gracefully handle its absence.

const CACHE_NAME = 'medassist-v2';

const STATIC_SHELL = [
  '/',
  '/index.html',
  '/pill-icon.svg',
  '/manifest.json',
];

// Inject precache manifest (populated by vite-plugin-pwa at build time)
const WB_MANIFEST = typeof self.__WB_MANIFEST !== 'undefined' ? self.__WB_MANIFEST : [];
const PRECACHE_URLS = [
  ...STATIC_SHELL,
  ...WB_MANIFEST.map(e => (typeof e === 'string' ? e : e.url)),
];

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(PRECACHE_URLS.filter((u, i, a) => a.indexOf(u) === i))
        .catch(() => cache.addAll(STATIC_SHELL))
    )
  );
  self.skipWaiting();
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// ── Fetch ────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and external/Firebase requests
  if (
    request.method !== 'GET' ||
    url.protocol === 'chrome-extension:' ||
    url.hostname.includes('firestore.googleapis') ||
    url.hostname.includes('identitytoolkit') ||
    url.hostname.includes('securetoken.googleapis') ||
    url.hostname.includes('fonts.googleapis') ||
    url.hostname.includes('fonts.gstatic')
  ) return;

  // SPA navigation — serve app shell
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Static assets — cache-first
  if (
    url.pathname.startsWith('/assets/') ||
    /\.(js|css|svg|png|ico|woff2|woff|ttf)$/.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((res) => {
          if (res.ok) {
            caches.open(CACHE_NAME).then((c) => c.put(request, res.clone()));
          }
          return res;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Everything else — network first, cache fallback
  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          caches.open(CACHE_NAME).then((c) => c.put(request, res.clone()));
        }
        return res;
      })
      .catch(() => caches.match(request))
  );
});

// ── Push Notifications ────────────────────────────────────────
self.addEventListener('push', (event) => {
  let data = { title: '💊 MedAssist', body: "Time to take your medicine!" };
  try { if (event.data) data = event.data.json(); } catch {}

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/pill-icon.svg',
      badge: '/pill-icon.svg',
      tag: data.tag || 'medassist',
      vibrate: [200, 100, 200],
      requireInteraction: false,
      data: data,
      actions: [
        { action: 'taken', title: '✅ Mark Taken' },
        { action: 'snooze', title: '⏰ Snooze 10m' },
      ],
    })
  );
});

// ── Notification click ────────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  const { action, notification } = event;
  notification.close();

  if (action === 'snooze') {
    // Snooze: re-show after 10 minutes
    const snoozeMs = 10 * 60 * 1000;
    event.waitUntil(
      new Promise((resolve) => {
        setTimeout(() => {
          self.registration.showNotification('⏰ ' + notification.title, {
            body: 'Snoozed reminder: ' + notification.body,
            icon: '/pill-icon.svg',
            tag: 'medassist-snoozed',
            vibrate: [200, 100, 200],
          });
          resolve();
        }, snoozeMs);
      })
    );
    return;
  }

  // Default / 'taken': open or focus the app
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ('focus' in client) return client.focus();
      }
      return clients.openWindow('/');
    })
  );
});
