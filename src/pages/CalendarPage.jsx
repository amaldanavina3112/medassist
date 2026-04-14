// src/pages/CalendarPage.jsx
import { useState, useEffect, useCallback } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getMedicines, getIntakeLogsForMonth, getIntakeLogsForDate } from '../services/medicineService';
import MedicineCard from '../components/MedicineCard';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function CalendarPage() {
  const { user } = useAuth();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [monthLogs, setMonthLogs] = useState([]);
  const [dayLogs, setDayLogs] = useState({});
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMonthData = useCallback(async () => {
    setLoading(true);
    try {
      const [meds, logs] = await Promise.all([
        getMedicines(user.uid),
        getIntakeLogsForMonth(user.uid, currentMonth.getFullYear(), currentMonth.getMonth() + 1),
      ]);
      setMedicines(meds);
      setMonthLogs(logs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user.uid, currentMonth]);

  useEffect(() => { loadMonthData(); }, [loadMonthData]);

  const loadDayLogs = useCallback(async (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const logs = await getIntakeLogsForDate(user.uid, dateStr);
    const logMap = {};
    logs.forEach(l => { logMap[`${l.medId}_${l.timeSlot}`] = l.status; });
    setDayLogs(logMap);
  }, [user.uid]);

  useEffect(() => { loadDayLogs(selectedDay); }, [selectedDay, loadDayLogs]);

  // Build a map: dateStr -> { taken, missed, total }
  const dayStatusMap = {};
  monthLogs.forEach(log => {
    if (!dayStatusMap[log.date]) dayStatusMap[log.date] = { taken: 0, missed: 0, skipped: 0 };
    if (log.status === 'taken') dayStatusMap[log.date].taken++;
    else if (log.status === 'missed') dayStatusMap[log.date].missed++;
    else if (log.status === 'skipped') dayStatusMap[log.date].skipped++;
  });

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startPad = getDay(monthStart);

  const getDayStatus = (day) => {
    const key = format(day, 'yyyy-MM-dd');
    const s = dayStatusMap[key];
    if (!s) return null;
    if (s.taken > 0 && s.missed === 0) return 'all-taken';
    if (s.missed > 0 && s.taken === 0) return 'all-missed';
    if (s.taken > 0 && s.missed > 0) return 'partial';
    return null;
  };

  const selectedDateStr = format(selectedDay, 'yyyy-MM-dd');
  const TIME_ORDER = ['morning', 'afternoon', 'evening', 'night'];

  return (
    <>
      <style>{`
        .cal-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .cal-header {
          background: linear-gradient(135deg, var(--blue-100), var(--purple-100));
          padding: 56px 20px 24px;
        }
        .cal-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800;
          color: var(--gray-800);
        }
        .cal-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .month-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 20px 8px;
        }
        .month-label {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 800;
          color: var(--gray-800);
        }
        .nav-btn {
          width: 36px; height: 36px;
          border-radius: 50%; border: none;
          background: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: all 0.15s;
        }
        .nav-btn:hover { box-shadow: var(--shadow); transform: scale(1.05); }
        .cal-grid {
          display: grid; grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          padding: 0 16px;
        }
        .cal-weekday {
          text-align: center;
          font-size: 11px; font-weight: 700;
          color: var(--gray-400);
          text-transform: uppercase;
          padding: 8px 0;
        }
        .cal-day {
          display: flex; flex-direction: column;
          align-items: center;
          padding: 6px 2px;
          border-radius: 12px;
          cursor: pointer;
          border: none;
          background: none;
          transition: all 0.15s;
          position: relative;
        }
        .cal-day:hover { background: var(--gray-100); }
        .cal-day.selected { background: var(--pink-400); }
        .cal-day.today .day-num { color: var(--pink-500); font-weight: 900; }
        .cal-day.selected .day-num { color: white; }
        .cal-day.other-month { opacity: 0.25; }
        .day-num {
          font-size: 15px; font-weight: 700;
          color: var(--gray-700);
          line-height: 1;
        }
        .day-dots {
          display: flex; gap: 2px; margin-top: 4px;
          min-height: 6px;
        }
        .day-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
        }
        .dot-green { background: var(--green-400); }
        .dot-red { background: var(--red-400); }
        .dot-orange { background: var(--orange-400); }
        .legend {
          display: flex; gap: 16px;
          padding: 12px 20px;
          background: white;
          margin: 12px 16px 0;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
        }
        .legend-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; color: var(--gray-500);
        }
        .legend-dot { width: 8px; height: 8px; border-radius: 50%; }
        .day-detail {
          margin: 16px 16px 0;
        }
        .day-detail-header {
          font-size: 16px; font-weight: 800;
          color: var(--gray-700); margin-bottom: 12px;
        }
        .no-data {
          text-align: center; padding: 32px;
          color: var(--gray-400); font-size: 14px; font-weight: 500;
        }
        .time-slot-group { margin-bottom: 16px; }
        .time-slot-title {
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 8px;
          text-transform: capitalize;
        }
        .summary-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; padding: 12px 16px 0;
        }
        .summary-card {
          background: white; border-radius: var(--radius-sm);
          padding: 14px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .summary-num {
          font-size: 24px; font-weight: 900;
          font-family: var(--font-display);
        }
        .summary-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
      `}</style>

      <div className="cal-page">
        <div className="cal-header">
          <div className="cal-title">📅 Calendar</div>
          <div className="cal-subtitle">Your medicine history</div>
        </div>

        <div className="month-nav">
          <button className="nav-btn" onClick={() => setCurrentMonth(m => subMonths(m, 1))}>
            <ChevronLeft size={18} />
          </button>
          <span className="month-label">{format(currentMonth, 'MMMM yyyy')}</span>
          <button className="nav-btn" onClick={() => setCurrentMonth(m => addMonths(m, 1))}>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="cal-grid" style={{ padding: '0 16px 4px' }}>
          {WEEKDAYS.map(d => <div key={d} className="cal-weekday">{d}</div>)}
        </div>

        <div className="cal-grid">
          {Array.from({ length: startPad }, (_, i) => <div key={`pad-${i}`} />)}
          {days.map(day => {
            const status = getDayStatus(day);
            const isSelected = isSameDay(day, selectedDay);
            const isToday = isSameDay(day, new Date());
            return (
              <button
                key={day.toISOString()}
                className={`cal-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                onClick={() => setSelectedDay(day)}
              >
                <span className="day-num">{format(day, 'd')}</span>
                <div className="day-dots">
                  {status === 'all-taken' && <span className="day-dot dot-green" />}
                  {status === 'all-missed' && <span className="day-dot dot-red" />}
                  {status === 'partial' && <>
                    <span className="day-dot dot-green" />
                    <span className="day-dot dot-red" />
                  </>}
                </div>
              </button>
            );
          })}
        </div>

        <div className="legend">
          <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--green-400)' }} /> All taken</div>
          <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--red-400)' }} /> Missed</div>
          <div className="legend-item"><span className="legend-dot" style={{ background: 'var(--orange-400)' }} /> Partial</div>
        </div>

        {/* Summary for selected day */}
        {(() => {
          const s = dayStatusMap[selectedDateStr];
          if (!s) return null;
          return (
            <div className="summary-cards">
              <div className="summary-card">
                <div className="summary-num" style={{ color: 'var(--green-500)' }}>{s.taken}</div>
                <div className="summary-lbl">Taken</div>
              </div>
              <div className="summary-card">
                <div className="summary-num" style={{ color: 'var(--red-500)' }}>{s.missed}</div>
                <div className="summary-lbl">Missed</div>
              </div>
              <div className="summary-card">
                <div className="summary-num" style={{ color: 'var(--orange-400)' }}>{s.skipped}</div>
                <div className="summary-lbl">Skipped</div>
              </div>
            </div>
          );
        })()}

        <div className="day-detail">
          <div className="day-detail-header">
            {format(selectedDay, 'EEEE, d MMMM')}
          </div>
          {medicines.length === 0 ? (
            <div className="no-data">No medicines added yet</div>
          ) : (
            TIME_ORDER.map(slot => {
              const slotMeds = medicines.filter(m => m.times?.includes(slot));
              if (slotMeds.length === 0) return null;
              return (
                <div key={slot} className="time-slot-group">
                  <div className="time-slot-title">
                    {slot === 'morning' ? '🌅' : slot === 'afternoon' ? '☀️' : slot === 'evening' ? '🌆' : '🌙'} {slot}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {slotMeds.map(med => (
                      <MedicineCard
                        key={med.id}
                        medicine={med}
                        timeSlot={slot}
                        status={dayLogs[`${med.id}_${slot}`]}
                        onMark={() => {}}
                      />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
