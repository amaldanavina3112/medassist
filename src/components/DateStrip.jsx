// src/components/DateStrip.jsx
import { format, addDays, subDays, startOfDay, isSameDay } from 'date-fns';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function DateStrip({ selectedDate, onDateChange }) {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => addDays(subDays(today, 3), i));

  return (
    <>
      <style>{`
        .date-strip {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 2px 8px;
          scrollbar-width: none;
        }
        .date-strip::-webkit-scrollbar { display: none; }
        .date-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 16px;
          cursor: pointer;
          border: none;
          background: white;
          min-width: 52px;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }
        .date-chip:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
        .date-chip.active {
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white;
          box-shadow: 0 4px 12px rgba(236,72,153,0.3);
          transform: translateY(-2px);
        }
        .date-chip.today-chip .date-num { color: var(--pink-500); font-weight: 900; }
        .date-chip.active.today-chip .date-num { color: white; }
        .date-day {
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .date-chip.active .date-day { color: rgba(255,255,255,0.8); }
        .date-num {
          font-size: 18px;
          font-weight: 800;
          color: var(--gray-700);
          font-family: var(--font-display);
        }
        .date-chip.active .date-num { color: white; }
        .today-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--pink-400);
        }
        .date-chip.active .today-dot { background: white; }
      `}</style>
      <div className="date-strip">
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isToday = isSameDay(day, today);
          return (
            <button
              key={day.toISOString()}
              className={`date-chip ${isSelected ? 'active' : ''} ${isToday ? 'today-chip' : ''}`}
              onClick={() => onDateChange(day)}
            >
              <span className="date-day">{DAYS[day.getDay()]}</span>
              <span className="date-num">{format(day, 'd')}</span>
              {isToday && <span className="today-dot" />}
            </button>
          );
        })}
      </div>
    </>
  );
}
