// src/pages/FamilyDashboard.jsx
import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { Heart, Search, User, CheckCircle2, XCircle, Clock, SkipForward } from 'lucide-react';
import { collection, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { getMedicines, getIntakeLogsForDate } from '../services/medicineService';
import BottomNav from '../components/BottomNav';

export default function FamilyDashboard() {
  const { user, userProfile } = useAuth();
  const [patientEmail, setPatientEmail] = useState(userProfile?.linkedPatientEmail || '');
  const [searchEmail, setSearchEmail] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [medicines, setMedicines] = useState([]);
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedDate] = useState(new Date());

  const dateStr = format(selectedDate, 'yyyy-MM-dd');

  const loadPatient = useCallback(async (email) => {
    if (!email) return;
    setLoading(true);
    setError('');
    try {
      // Find user by email
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email), where('role', '==', 'patient'));
      const snap = await getDocs(q);
      if (snap.empty) {
        setError('No patient found with that email.');
        setPatientData(null);
        setLoading(false);
        return;
      }
      const patient = { id: snap.docs[0].id, ...snap.docs[0].data() };
      setPatientData(patient);

      const [meds, intakeLogs] = await Promise.all([
        getMedicines(patient.id),
        getIntakeLogsForDate(patient.id, dateStr),
      ]);
      setMedicines(meds);
      const logMap = {};
      intakeLogs.forEach(l => { logMap[`${l.medId}_${l.timeSlot}`] = l.status; });
      setLogs(logMap);
    } catch (err) {
      setError('Error loading patient data: ' + err.message);
    } finally {
      setLoading(false);
    }
  }, [dateStr]);

  useEffect(() => {
    if (userProfile?.linkedPatientEmail) {
      loadPatient(userProfile.linkedPatientEmail);
    }
  }, [userProfile, loadPatient]);

  const TIME_ORDER = ['morning', 'afternoon', 'evening', 'night'];
  const TIME_EMOJI = { morning: '🌅', afternoon: '☀️', evening: '🌆', night: '🌙' };

  const totalDoses = medicines.reduce((acc, m) => acc + (m.times?.length || 0), 0);
  const takenCount = Object.values(logs).filter(s => s === 'taken').length;
  const missedCount = Object.values(logs).filter(s => s === 'missed').length;
  const pendingCount = totalDoses - Object.keys(logs).length;

  const statusIcon = (status) => {
    if (status === 'taken') return <CheckCircle2 size={16} color="var(--green-500)" />;
    if (status === 'missed') return <XCircle size={16} color="var(--red-500)" />;
    if (status === 'skipped') return <SkipForward size={16} color="var(--orange-400)" />;
    return <Clock size={16} color="var(--gray-300)" />;
  };

  return (
    <>
      <style>{`
        .family-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .family-header {
          background: linear-gradient(135deg, var(--pink-100), var(--purple-100));
          padding: 56px 20px 28px;
        }
        .family-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800; color: var(--gray-800);
        }
        .family-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .search-section { padding: 16px 16px 0; }
        .search-wrap {
          display: flex; gap: 8px;
        }
        .search-input {
          flex: 1;
          padding: 13px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 15px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          background: white;
        }
        .search-input:focus { border-color: var(--pink-300); }
        .search-btn {
          padding: 0 18px;
          border: none;
          border-radius: var(--radius-sm);
          background: var(--pink-400);
          color: white;
          font-size: 13px; font-weight: 800;
          cursor: pointer;
          transition: all 0.15s;
        }
        .search-btn:hover { background: var(--pink-500); }
        .patient-card {
          background: white; border-radius: var(--radius);
          padding: 16px; margin: 16px 16px 0;
          box-shadow: var(--shadow-sm);
          display: flex; align-items: center; gap: 14px;
        }
        .patient-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; font-weight: 900; color: white;
          font-family: var(--font-display);
          flex-shrink: 0;
        }
        .patient-name { font-size: 17px; font-weight: 800; color: var(--gray-800); }
        .patient-email { font-size: 12px; color: var(--gray-400); font-weight: 500; margin-top: 2px; }
        .stats-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; padding: 16px 16px 0;
        }
        .stat-card {
          background: white; border-radius: var(--radius-sm);
          padding: 14px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-num { font-size: 26px; font-weight: 900; font-family: var(--font-display); }
        .stat-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
        .schedule-section { padding: 16px; }
        .day-label {
          font-size: 15px; font-weight: 800;
          color: var(--gray-700); margin-bottom: 12px;
        }
        .time-group { margin-bottom: 16px; }
        .time-label {
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 8px;
          text-transform: capitalize;
        }
        .med-row {
          background: white; border-radius: var(--radius-sm);
          padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 6px;
        }
        .med-name { font-size: 15px; font-weight: 700; color: var(--gray-800); flex: 1; }
        .med-dosage { font-size: 12px; color: var(--gray-400); font-weight: 500; }
        .error-msg {
          background: var(--red-100); color: var(--red-500);
          padding: 12px 16px; margin: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600;
        }
        .empty-state {
          text-align: center; padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .empty-sub { font-size: 14px; margin-top: 6px; font-weight: 500; }
      `}</style>

      <div className="family-page">
        <div className="family-header">
          <div className="family-title">👨‍👩‍👧 Family Dashboard</div>
          <div className="family-subtitle">Monitor your loved one's health</div>
        </div>

        <div className="search-section">
          <div className="search-wrap">
            <input
              className="search-input"
              placeholder="Enter patient's email…"
              value={searchEmail || patientEmail}
              onChange={e => setSearchEmail(e.target.value)}
            />
            <button className="search-btn" onClick={() => loadPatient(searchEmail || patientEmail)}>
              <Search size={16} />
            </button>
          </div>
        </div>

        {error && <div className="error-msg">{error}</div>}

        {loading && (
          <div className="empty-state">
            <div className="empty-icon">⏳</div>
            <div className="empty-title">Loading patient data…</div>
          </div>
        )}

        {patientData && !loading && (
          <>
            <div className="patient-card">
              <div className="patient-avatar">
                {patientData.name?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="patient-name">{patientData.name}</div>
                <div className="patient-email">{patientData.email}</div>
              </div>
              <Heart size={18} color="var(--pink-400)" style={{ marginLeft: 'auto' }} />
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-num" style={{ color: 'var(--green-500)' }}>{takenCount}</div>
                <div className="stat-lbl">✅ Taken</div>
              </div>
              <div className="stat-card">
                <div className="stat-num" style={{ color: 'var(--red-500)' }}>{missedCount}</div>
                <div className="stat-lbl">❌ Missed</div>
              </div>
              <div className="stat-card">
                <div className="stat-num" style={{ color: 'var(--gray-400)' }}>{pendingCount}</div>
                <div className="stat-lbl">⏳ Pending</div>
              </div>
            </div>

            <div className="schedule-section">
              <div className="day-label">Today — {format(selectedDate, 'EEEE, d MMM')}</div>
              {medicines.length === 0 ? (
                <div className="empty-state" style={{ padding: '24px 0' }}>
                  <div className="empty-title">No medicines added yet</div>
                </div>
              ) : (
                TIME_ORDER.map(slot => {
                  const meds = medicines.filter(m => m.times?.includes(slot));
                  if (meds.length === 0) return null;
                  return (
                    <div key={slot} className="time-group">
                      <div className="time-label">{TIME_EMOJI[slot]} {slot}</div>
                      {meds.map(med => {
                        const status = logs[`${med.id}_${slot}`];
                        return (
                          <div key={med.id} className="med-row">
                            {statusIcon(status)}
                            <div style={{ flex: 1 }}>
                              <div className="med-name">{med.name}</div>
                              <div className="med-dosage">{med.dosage}</div>
                            </div>
                            <span style={{
                              fontSize: 11, fontWeight: 700,
                              padding: '3px 8px', borderRadius: 10,
                              background: status === 'taken' ? 'var(--green-100)' : status === 'missed' ? 'var(--red-100)' : status === 'skipped' ? 'var(--orange-100)' : 'var(--gray-100)',
                              color: status === 'taken' ? 'var(--green-600)' : status === 'missed' ? 'var(--red-500)' : status === 'skipped' ? 'var(--orange-500)' : 'var(--gray-400)',
                            }}>
                              {status || 'pending'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}

        {!patientData && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <div className="empty-title">Search for a patient</div>
            <div className="empty-sub">Enter the patient's email address to view their medicine schedule</div>
          </div>
        )}
      </div>
    </>
  );
}
