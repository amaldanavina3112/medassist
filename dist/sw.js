const o = "medassist-v2", a = [
  "/",
  "/index.html",
  "/pill-icon.svg",
  "/manifest.json"
], l = typeof self.__WB_MANIFEST < "u" ? self.__WB_MANIFEST : [], r = [
  ...a,
  ...l.map((e) => typeof e == "string" ? e : e.url)
];
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(o).then(
      (t) => t.addAll(r.filter((n, i, s) => s.indexOf(n) === i)).catch(() => t.addAll(a))
    )
  ), self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(
      (t) => Promise.all(t.filter((n) => n !== o).map((n) => caches.delete(n)))
    )
  ), self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  const { request: t } = e, n = new URL(t.url);
  if (!(t.method !== "GET" || n.protocol === "chrome-extension:" || n.hostname.includes("firestore.googleapis") || n.hostname.includes("identitytoolkit") || n.hostname.includes("securetoken.googleapis") || n.hostname.includes("fonts.googleapis") || n.hostname.includes("fonts.gstatic"))) {
    if (t.mode === "navigate") {
      e.respondWith(
        fetch(t).catch(() => caches.match("/index.html"))
      );
      return;
    }
    if (n.pathname.startsWith("/assets/") || /\.(js|css|svg|png|ico|woff2|woff|ttf)$/.test(n.pathname)) {
      e.respondWith(
        caches.match(t).then((i) => i || fetch(t).then((s) => (s.ok && caches.open(o).then((c) => c.put(t, s.clone())), s)).catch(() => i))
      );
      return;
    }
    e.respondWith(
      fetch(t).then((i) => (i.ok && caches.open(o).then((s) => s.put(t, i.clone())), i)).catch(() => caches.match(t))
    );
  }
});
self.addEventListener("push", (e) => {
  let t = { title: "💊 MedAssist", body: "Time to take your medicine!" };
  try {
    e.data && (t = e.data.json());
  } catch {
  }
  e.waitUntil(
    self.registration.showNotification(t.title, {
      body: t.body,
      icon: "/pill-icon.svg",
      badge: "/pill-icon.svg",
      tag: t.tag || "medassist",
      vibrate: [200, 100, 200],
      requireInteraction: !1,
      data: t,
      actions: [
        { action: "taken", title: "✅ Mark Taken" },
        { action: "snooze", title: "⏰ Snooze 10m" }
      ]
    })
  );
});
self.addEventListener("notificationclick", (e) => {
  const { action: t, notification: n } = e;
  if (n.close(), t === "snooze") {
    e.waitUntil(
      new Promise((s) => {
        setTimeout(() => {
          self.registration.showNotification("⏰ " + n.title, {
            body: "Snoozed reminder: " + n.body,
            icon: "/pill-icon.svg",
            tag: "medassist-snoozed",
            vibrate: [200, 100, 200]
          }), s();
        }, 6e5);
      })
    );
    return;
  }
  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: !0 }).then((i) => {
      for (const s of i)
        if ("focus" in s) return s.focus();
      return clients.openWindow("/");
    })
  );
});
