// src/services/notificationService.js
// Handles scheduling, firing, and persisting notification times

const STORAGE_KEY = 'medassist_notif_times';
const SCHEDULED_KEY = 'medassist_scheduled_ids';

// Default notification times for each slot
export const DEFAULT_SLOT_TIMES = {
  morning:   '08:00',
  afternoon: '13:00',
  evening:   '18:00',
  night:     '21:00',
};

// ── Permission ────────────────────────────────────────────────
export async function requestNotificationPermission() {
  if (!('Notification' in window)) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  const result = await Notification.requestPermission();
  return result;
}

export function getNotificationPermission() {
  if (!('Notification' in window)) return 'unsupported';
  return Notification.permission;
}

// ── Saved slot times (persisted to localStorage) ──────────────
export function getSavedSlotTimes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_SLOT_TIMES, ...JSON.parse(raw) };
  } catch {}
  return { ...DEFAULT_SLOT_TIMES };
}

export function saveSlotTimes(times) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(times));
}

// ── Fire a single notification immediately ────────────────────
export function fireNotification(title, body, tag) {
  if (Notification.permission !== 'granted') return;
  try {
    const n = new Notification(title, {
      body,
      tag: tag || 'medassist',
      icon: '/pill-icon.svg',
      badge: '/pill-icon.svg',
      vibrate: [200, 100, 200],
      requireInteraction: false,
    });
    n.onclick = () => { window.focus(); n.close(); };
  } catch (err) {
    console.warn('Notification error:', err);
  }
}

// ── Schedule one notification for a specific HH:MM today ─────
// Returns the timeout ID so it can be cleared
export function scheduleNotificationAt(timeStr, title, body, tag) {
  const [h, m] = timeStr.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);

  // If already past today, schedule for tomorrow
  if (target <= now) target.setDate(target.getDate() + 1);

  const delay = target - now;
  const id = setTimeout(() => {
    fireNotification(title, body, tag);
  }, delay);
  return { id, firesAt: target.toISOString() };
}

// ── Active scheduler: schedules all medicines for the day ─────
let activeTimers = [];

export function clearAllScheduled() {
  activeTimers.forEach(({ id }) => clearTimeout(id));
  activeTimers = [];
}

export function scheduleMedicineReminders(medicines) {
  clearAllScheduled();
  if (Notification.permission !== 'granted') return;

  const slotTimes = getSavedSlotTimes();

  medicines.forEach(med => {
    (med.times || []).forEach(slot => {
      const timeStr = slotTimes[slot] || DEFAULT_SLOT_TIMES[slot];
      const title = `💊 Time for ${med.name}`;
      const body = `${med.dosage} — ${slot} dose`;
      const tag = `med-${med.id}-${slot}`;
      const { id, firesAt } = scheduleNotificationAt(timeStr, title, body, tag);
      activeTimers.push({ id, medId: med.id, slot, firesAt });
    });
  });

  return activeTimers.length;
}

// ── Test notification ─────────────────────────────────────────
export function sendTestNotification() {
  fireNotification(
    '💊 MedAssist Test',
    'Notifications are working! You\'ll get reminders at your scheduled times.',
    'test'
  );
}
