// src/pages/NotificationSettings.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, BellOff, ArrowLeft, Send, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import {
  getSavedSlotTimes,
  saveSlotTimes,
  DEFAULT_SLOT_TIMES,
  requestNotificationPermission,
  getNotificationPermission,
  sendTestNotification,
  scheduleMedicineReminders,
} from '../services/notificationService';
import { getMedicines } from '../services/medicineService';
import { useAuth } from '../context/AuthContext';

const SLOTS = [
  { key: 'morning',   label: 'Morning',   emoji: '🌅', color: '#eab308', bg: '#fef9c3' },
  { key: 'afternoon', label: 'Afternoon', emoji: '☀️', color: '#3b82f6', bg: '#dbeafe' },
  { key: 'evening',   label: 'Evening',   emoji: '🌆', color: '#ec4899', bg: '#fce7f3' },
  { key: 'night',     label: 'Night',     emoji: '🌙', color: '#8b5cf6', bg: '#ede9fe' },
];

export default function NotificationSettings() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [permission, setPermission] = useState(getNotificationPermission());
  const [times, setTimes] = useState(getSavedSlotTimes());
  const [saved, setSaved] = useState(false);
  const [testSent, setTestSent] = useState(false);
  const [scheduledCount, setScheduledCount] = useState(0);

  useEffect(() => {
    // Count how many notifications are active
    const slotTimes = getSavedSlotTimes();
    getMedicines(user.uid).then(meds => {
      const count = meds.reduce((acc, m) => acc + (m.times?.length || 0), 0);
      setScheduledCount(count);
    });
  }, [user.uid]);

  const handleEnable = async () => {
    const result = await requestNotificationPermission();
    setPermission(result);
    if (result === 'granted') {
      const meds = await getMedicines(user.uid);
      scheduleMedicineReminders(meds);
    }
  };

  const handleSave = async () => {
    saveSlotTimes(times);
    // Re-schedule with new times
    const meds = await getMedicines(user.uid);
    const count = scheduleMedicineReminders(meds);
    setScheduledCount(count);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleTest = () => {
    sendTestNotification();
    setTestSent(true);
    setTimeout(() => setTestSent(false), 2500);
  };

  const handleReset = () => {
    setTimes({ ...DEFAULT_SLOT_TIMES });
  };

  return (
    <>
      <style>{`
        .notif-page {
          min-height: 100vh;
          padding-bottom: 40px;
          background: var(--pink-50);
        }
        .notif-header {
          background: linear-gradient(135deg, var(--pink-100), var(--purple-100));
          padding: 56px 20px 24px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }
        .back-btn {
          width: 38px; height: 38px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          flex-shrink: 0;
          margin-bottom: 2px;
        }
        .notif-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800);
        }
        .notif-subtitle {
          font-size: 13px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }

        /* Permission card */
        .perm-card {
          margin: 16px;
          background: white;
          border-radius: var(--radius);
          padding: 20px;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 16px;
        }
        .perm-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .perm-label {
          font-size: 16px; font-weight: 800;
          color: var(--gray-800);
        }
        .perm-sublabel {
          font-size: 13px; font-weight: 500;
          color: var(--gray-400); margin-top: 3px;
        }
        .perm-status {
          margin-left: auto;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px; font-weight: 800;
          border: none; cursor: pointer;
          white-space: nowrap;
        }
        .perm-granted  { background: var(--green-100); color: var(--green-600); }
        .perm-denied   { background: var(--red-100);   color: var(--red-500);   }
        .perm-default  { background: var(--blue-400);  color: white;            }

        /* Section label */
        .section-label {
          font-size: 12px; font-weight: 800;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 16px 20px 8px;
        }

        /* Time slot cards */
        .slot-card {
          background: white;
          border-radius: var(--radius);
          margin: 0 16px 10px;
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 14px;
          transition: box-shadow 0.2s;
        }
        .slot-card:hover { box-shadow: var(--shadow); }
        .slot-icon {
          width: 46px; height: 46px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .slot-info { flex: 1; }
        .slot-name {
          font-size: 16px; font-weight: 800;
          color: var(--gray-800);
        }
        .slot-hint {
          font-size: 12px; color: var(--gray-400);
          font-weight: 500; margin-top: 2px;
        }
        .time-picker {
          padding: 10px 14px;
          border: 2px solid var(--gray-200);
          border-radius: 12px;
          font-size: 18px; font-weight: 800;
          color: var(--gray-800);
          font-family: var(--font-display);
          outline: none;
          background: var(--gray-50);
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .time-picker:focus {
          border-color: var(--pink-300);
          background: white;
        }

        /* Action row */
        .action-row {
          display: flex; gap: 10px;
          padding: 8px 16px;
          margin-top: 8px;
        }
        .save-btn {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.3);
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .save-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.4); }
        .save-btn.saved-state {
          background: linear-gradient(135deg, var(--green-400), var(--green-500));
          box-shadow: 0 4px 16px rgba(34,197,94,0.3);
        }
        .reset-btn {
          padding: 16px 18px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius);
          background: white;
          color: var(--gray-500);
          font-size: 14px; font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.2s;
        }
        .reset-btn:hover { border-color: var(--gray-300); background: var(--gray-50); }

        /* Test button */
        .test-row { padding: 0 16px; }
        .test-btn {
          width: 100%;
          padding: 14px;
          border: 2px solid var(--blue-200);
          border-radius: var(--radius);
          background: var(--blue-50);
          color: var(--blue-500);
          font-size: 15px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .test-btn:hover { background: var(--blue-100); }
        .test-btn.sent-state {
          background: var(--green-100); border-color: var(--green-300);
          color: var(--green-600);
        }

        /* Info cards */
        .info-card {
          margin: 12px 16px;
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; gap: 12px; align-items: flex-start;
        }
        .info-text {
          font-size: 13px; font-weight: 600;
          color: var(--gray-600); line-height: 1.5;
        }
        .sched-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: var(--green-100); color: var(--green-700);
          border-radius: 20px; padding: 4px 12px;
          font-size: 12px; font-weight: 800;
          margin-top: 6px;
        }
        .denied-card {
          margin: 0 16px;
          background: var(--orange-100);
          border: 1.5px solid var(--orange-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; gap: 12px; align-items: flex-start;
        }
        .denied-text { font-size: 13px; font-weight: 600; color: var(--orange-700); line-height: 1.5; }
      `}</style>

      <div className="notif-page">
        {/* Header */}
        <div className="notif-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} color="var(--gray-600)" />
          </button>
          <div>
            <div className="notif-title">🔔 Notifications</div>
            <div className="notif-subtitle">Set exact reminder times for each slot</div>
          </div>
        </div>

        {/* Permission status */}
        <div className="perm-card">
          <div className="perm-icon-wrap" style={{
            background: permission === 'granted' ? 'var(--green-100)' : permission === 'denied' ? 'var(--red-100)' : 'var(--blue-100)'
          }}>
            {permission === 'granted'
              ? <Bell size={22} color="var(--green-500)" />
              : permission === 'denied'
              ? <BellOff size={22} color="var(--red-400)" />
              : <Bell size={22} color="var(--blue-400)" />
            }
          </div>
          <div>
            <div className="perm-label">
              {permission === 'granted' ? 'Notifications On' : permission === 'denied' ? 'Blocked' : 'Not Enabled'}
            </div>
            <div className="perm-sublabel">
              {permission === 'granted'
                ? `${scheduledCount} reminders scheduled`
                : permission === 'denied'
                ? 'Enable in browser settings'
                : 'Tap to allow reminders'}
            </div>
          </div>
          {permission !== 'denied' && (
            <button
              className={`perm-status ${permission === 'granted' ? 'perm-granted' : 'perm-default'}`}
              onClick={permission !== 'granted' ? handleEnable : undefined}
              style={{ cursor: permission === 'granted' ? 'default' : 'pointer' }}
            >
              {permission === 'granted' ? '✓ Active' : 'Enable'}
            </button>
          )}
        </div>

        {/* Denied warning */}
        {permission === 'denied' && (
          <div className="denied-card">
            <AlertTriangle size={18} color="var(--orange-500)" style={{ flexShrink: 0, marginTop: 1 }} />
            <div className="denied-text">
              Notifications are blocked by your browser. To enable them, go to your browser settings → Site Settings → Notifications → Allow for this site.
            </div>
          </div>
        )}

        {/* Info */}
        {permission === 'granted' && (
          <div className="info-card">
            <Clock size={16} color="var(--blue-400)" style={{ flexShrink: 0, marginTop: 1 }} />
            <div className="info-text">
              Reminders fire at the exact times you set below — once per slot per day. Times are saved on this device and reminders re-schedule automatically when you open the app.
              {scheduledCount > 0 && (
                <div>
                  <span className="sched-badge"><CheckCircle2 size={12} />{scheduledCount} doses scheduled today</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Slot time pickers */}
        <div className="section-label">Reminder Times</div>

        {SLOTS.map(slot => (
          <div key={slot.key} className="slot-card">
            <div className="slot-icon" style={{ background: slot.bg }}>
              {slot.emoji}
            </div>
            <div className="slot-info">
              <div className="slot-name">{slot.label}</div>
              <div className="slot-hint">
                Reminder fires at{' '}
                <strong style={{ color: slot.color }}>
                  {formatTime12(times[slot.key] || DEFAULT_SLOT_TIMES[slot.key])}
                </strong>
              </div>
            </div>
            <input
              type="time"
              className="time-picker"
              value={times[slot.key] || DEFAULT_SLOT_TIMES[slot.key]}
              onChange={e => setTimes(t => ({ ...t, [slot.key]: e.target.value }))}
            />
          </div>
        ))}

        {/* Actions */}
        <div className="action-row">
          <button
            className={`save-btn ${saved ? 'saved-state' : ''}`}
            onClick={handleSave}
          >
            {saved
              ? <><CheckCircle2 size={18} /> Saved!</>
              : <><Bell size={18} /> Save & Schedule</>
            }
          </button>
          <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>

        {/* Test notification */}
        {permission === 'granted' && (
          <div className="test-row" style={{ marginTop: 8 }}>
            <button
              className={`test-btn ${testSent ? 'sent-state' : ''}`}
              onClick={handleTest}
            >
              {testSent
                ? <><CheckCircle2 size={16} /> Notification Sent!</>
                : <><Send size={16} /> Send Test Notification</>
              }
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// Convert "14:30" → "2:30 PM"
function formatTime12(timeStr) {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, '0')} ${ampm}`;
}
