// src/pages/Home.jsx
import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { Bell, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getMedicines, getIntakeLogsForDate, markIntake } from '../services/medicineService';
import {
  scheduleMedicineReminders,
  getNotificationPermission,
  requestNotificationPermission,
} from '../services/notificationService';
import DateStrip from '../components/DateStrip';
import MedicineCard from '../components/MedicineCard';
import AddMedicineModal from '../components/AddMedicineModal';

const TIME_ORDER = ['morning', 'afternoon', 'evening', 'night'];
const TIME_LABELS = {
  morning: '🌅 Morning',
  afternoon: '☀️ Afternoon',
  evening: '🌆 Evening',
  night: '🌙 Night',
};

const GREETINGS = ['Good morning', 'Good afternoon', 'Good evening', 'Good night'];

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return GREETINGS[0];
  if (h < 17) return GREETINGS[1];
  if (h < 21) return GREETINGS[2];
  return GREETINGS[3];
}

export default function Home() {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [medicines, setMedicines] = useState([]);
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [notifPermission, setNotifPermission] = useState(getNotificationPermission());

  const dateStr = format(selectedDate, 'yyyy-MM-dd');

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [meds, intakeLogs] = await Promise.all([
        getMedicines(user.uid),
        getIntakeLogsForDate(user.uid, dateStr),
      ]);
      setMedicines(meds);
      const logMap = {};
      intakeLogs.forEach(l => {
        logMap[`${l.medId}_${l.timeSlot}`] = l.status;
      });
      setLogs(logMap);
      // Auto-schedule notifications whenever medicines load
      if (getNotificationPermission() === 'granted') {
        scheduleMedicineReminders(meds);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user.uid, dateStr]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleMark = async (med, timeSlot, status) => {
    await markIntake(user.uid, med.id, dateStr, timeSlot, status);
    setLogs(prev => ({ ...prev, [`${med.id}_${timeSlot}`]: status }));
  };

  const handleBellClick = async () => {
    if (notifPermission === 'default') {
      const result = await requestNotificationPermission();
      setNotifPermission(result);
      if (result === 'granted') scheduleMedicineReminders(medicines);
    }
    navigate('/notifications');
  };

  // Group medicines by time slot
  const byTime = {};
  TIME_ORDER.forEach(slot => { byTime[slot] = []; });
  medicines.forEach(med => {
    (med.times || []).forEach(t => {
      if (byTime[t]) byTime[t].push(med);
    });
  });

  const totalToday = medicines.reduce((acc, m) => acc + (m.times?.length || 0), 0);
  const takenToday = Object.values(logs).filter(s => s === 'taken').length;

  return (
    <>
      <style>{`
        .home-page { padding: 0 0 calc(var(--nav-height) + 16px); }
        .home-header {
          background: linear-gradient(135deg, var(--pink-200) 0%, var(--blue-100) 100%);
          padding: 56px 20px 28px;
          position: relative;
          overflow: hidden;
        }
        .header-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
        }
        .greeting { font-size: 14px; color: var(--pink-600, #db2777); font-weight: 600; }
        .user-name {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800); margin-top: 2px;
        }
        .date-label {
          font-size: 14px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }
        .header-row {
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .notif-btn {
          width: 40px; height: 40px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          position: relative;
          margin-top: 4px;
        }
        .notif-dot {
          position: absolute; top: 8px; right: 8px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--pink-400);
          border: 2px solid white;
        }
        .progress-row {
          display: flex; align-items: center; gap: 12px;
          margin-top: 16px;
        }
        .progress-bar-wrap {
          flex: 1; height: 8px;
          background: rgba(255,255,255,0.5);
          border-radius: 4px; overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: var(--green-400);
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        .progress-label {
          font-size: 13px; font-weight: 700; color: var(--gray-700);
          white-space: nowrap;
        }
        .date-section { padding: 16px 20px 8px; }
        .date-month {
          font-size: 12px; font-weight: 700;
          color: var(--gray-400);
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .schedule-section { padding: 0 16px; }
        .time-section { margin-bottom: 20px; }
        .time-header {
          font-size: 15px; font-weight: 800;
          color: var(--gray-600);
          margin-bottom: 10px; padding-left: 4px;
        }
        .med-list { display: flex; flex-direction: column; gap: 10px; }
        .empty-state {
          text-align: center;
          padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .empty-sub { font-size: 14px; margin-top: 6px; font-weight: 500; }
        .fab {
          position: fixed;
          right: 20px;
          bottom: calc(var(--nav-height) + 16px);
          width: 56px; height: 56px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(236,72,153,0.45);
          cursor: pointer;
          z-index: 50;
          transition: all 0.2s ease;
        }
        .fab:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(236,72,153,0.55); }
        .fab:active { transform: scale(0.96); }
        .notif-banner {
          background: var(--blue-50);
          border: 1.5px solid var(--blue-200);
          border-radius: var(--radius-sm);
          margin: 12px 20px 0;
          padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
        }
        .notif-banner-text { flex: 1; font-size: 13px; color: var(--gray-600); font-weight: 500; }
        .notif-enable-btn {
          border: none;
          background: var(--blue-400);
          color: white;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 12px; font-weight: 700;
          cursor: pointer;
        }
        .section-divider {
          height: 1px; background: var(--gray-100);
          margin: 4px 0 16px;
        }
        .skeleton {
          background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
          border-radius: var(--radius-sm);
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      <div className="home-page">
        <div className="home-header">
          <div className="header-bg-circle" style={{ width: 200, height: 200, top: -80, right: -60 }} />
          <div className="header-bg-circle" style={{ width: 120, height: 120, bottom: -40, left: 20 }} />
          <div className="header-row">
            <div>
              <div className="greeting">{getGreeting()} 👋</div>
              <div className="user-name">{userProfile?.name || user?.displayName || 'Friend'}</div>
              <div className="date-label">{format(new Date(), 'EEEE, d MMMM yyyy')}</div>
            </div>
            <button className="notif-btn" onClick={handleBellClick}>
              <Bell size={18} color={notifPermission === 'granted' ? 'var(--pink-500)' : 'var(--gray-600)'} />
              {notifPermission !== 'granted' && <span className="notif-dot" />}
            </button>
          </div>
          {totalToday > 0 && (
            <div className="progress-row">
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ width: `${Math.round((takenToday / totalToday) * 100)}%` }} />
              </div>
              <span className="progress-label">{takenToday}/{totalToday} taken</span>
            </div>
          )}
        </div>

        {notifPermission !== 'granted' && (
          <div className="notif-banner" onClick={handleBellClick} style={{ cursor: 'pointer' }}>
            <Bell size={18} color="var(--blue-400)" />
            <span className="notif-banner-text">Tap to enable medicine reminder notifications</span>
            <span className="notif-enable-btn">Set Times →</span>
          </div>
        )}

        <div className="date-section">
          <div className="date-month">{format(selectedDate, 'MMMM yyyy')}</div>
          <DateStrip selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>

        <div className="schedule-section">
          {loading ? (
            <>
              {[1, 2, 3].map(i => (
                <div key={i} className="skeleton" style={{ height: 76, marginBottom: 10 }} />
              ))}
            </>
          ) : medicines.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">💊</div>
              <div className="empty-title">No medicines yet</div>
              <div className="empty-sub">Tap the + button to add your first medicine</div>
            </div>
          ) : (
            TIME_ORDER.map(slot => {
              const meds = byTime[slot];
              if (meds.length === 0) return null;
              return (
                <div key={slot} className="time-section">
                  <div className="time-header">{TIME_LABELS[slot]}</div>
                  <div className="med-list">
                    {meds.map(med => (
                      <MedicineCard
                        key={med.id}
                        medicine={med}
                        timeSlot={slot}
                        status={logs[`${med.id}_${slot}`]}
                        onMark={(status) => handleMark(med, slot, status)}
                      />
                    ))}
                  </div>
                  <div className="section-divider" style={{ marginTop: 16 }} />
                </div>
              );
            })
          )}
        </div>
      </div>

      <button className="fab" onClick={() => setShowAddModal(true)}>
        <Plus size={26} />
      </button>

      {showAddModal && (
        <AddMedicineModal
          onClose={() => setShowAddModal(false)}
          onAdded={loadData}
        />
      )}
    </>
  );
}
