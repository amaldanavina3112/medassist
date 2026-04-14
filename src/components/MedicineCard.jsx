// src/components/MedicineCard.jsx
import { Pill, Syringe, Droplets, Wind, CheckCircle2, XCircle, SkipForward, Clock } from 'lucide-react';

const typeIcons = {
  tablet: Pill,
  injection: Syringe,
  syrup: Droplets,
  inhaler: Wind,
};

const statusConfig = {
  taken: { color: '#16a34a', bg: '#dcfce7', icon: CheckCircle2, label: 'Taken' },
  missed: { color: '#ef4444', bg: '#fee2e2', icon: XCircle, label: 'Missed' },
  skipped: { color: '#f97316', bg: '#ffedd5', icon: SkipForward, label: 'Skipped' },
  pending: { color: '#9ca3af', bg: '#f3f4f6', icon: Clock, label: 'Pending' },
};

const timeColors = {
  morning: { bg: '#fef9c3', accent: '#eab308', emoji: '🌅' },
  afternoon: { bg: '#dbeafe', accent: '#3b82f6', emoji: '☀️' },
  evening: { bg: '#fce7f3', accent: '#ec4899', emoji: '🌆' },
  night: { bg: '#ede9fe', accent: '#8b5cf6', emoji: '🌙' },
};

export default function MedicineCard({ medicine, timeSlot, status, onMark }) {
  const Icon = typeIcons[medicine.type] || Pill;
  const statusInfo = statusConfig[status || 'pending'];
  const StatusIcon = statusInfo.icon;
  const timeColor = timeColors[timeSlot] || timeColors.morning;

  return (
    <>
      <style>{`
        .med-card {
          background: white;
          border-radius: var(--radius);
          padding: 16px;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          gap: 14px;
          animation: fadeIn 0.3s ease forwards;
          border: 1.5px solid transparent;
          transition: all 0.2s ease;
        }
        .med-card:hover { box-shadow: var(--shadow); transform: translateY(-1px); }
        .med-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .med-info { flex: 1; min-width: 0; }
        .med-name {
          font-size: 16px; font-weight: 700;
          color: var(--gray-800);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .med-dosage {
          font-size: 13px; color: var(--gray-500);
          font-weight: 500; margin-top: 2px;
        }
        .med-purpose {
          font-size: 12px; color: var(--gray-400);
          margin-top: 2px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .med-actions { display: flex; flex-direction: column; gap: 6px; align-items: flex-end; }
        .status-badge {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px; border-radius: 20px;
          font-size: 12px; font-weight: 700;
          white-space: nowrap;
        }
        .action-btn {
          border: none; background: none;
          padding: 4px 10px; border-radius: 20px;
          font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all 0.15s ease;
        }
        .action-btn:hover { opacity: 0.8; transform: scale(0.97); }
        .mark-btns { display: flex; gap: 6px; }
        .btn-taken { background: var(--green-100); color: var(--green-600); }
        .btn-missed { background: var(--red-100); color: var(--red-500); }
        .btn-skip { background: var(--orange-100); color: var(--orange-500); }
      `}</style>
      <div className="med-card" style={{ borderColor: status ? statusInfo.bg : 'transparent' }}>
        <div className="med-icon-wrap" style={{ background: timeColor.bg }}>
          <Icon size={22} color={timeColor.accent} strokeWidth={2} />
        </div>
        <div className="med-info">
          <div className="med-name">{medicine.name}</div>
          <div className="med-dosage">{medicine.dosage} · {timeColor.emoji} {timeSlot}</div>
          {medicine.purpose && <div className="med-purpose">{medicine.purpose}</div>}
        </div>
        <div className="med-actions">
          {status && status !== 'pending' ? (
            <span className="status-badge" style={{ background: statusInfo.bg, color: statusInfo.color }}>
              <StatusIcon size={12} />
              {statusInfo.label}
            </span>
          ) : (
            <div className="mark-btns">
              <button className="action-btn btn-taken" onClick={() => onMark('taken')}>✓</button>
              <button className="action-btn btn-skip" onClick={() => onMark('skipped')}>⤭</button>
              <button className="action-btn btn-missed" onClick={() => onMark('missed')}>✕</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
