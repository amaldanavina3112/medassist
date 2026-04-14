// src/components/AddMedicineModal.jsx
import { useState } from 'react';
import { X, Pill, Syringe, Droplets, Wind, Plus, Minus, Clock } from 'lucide-react';
import { addMedicine } from '../services/medicineService';
import { getSavedSlotTimes } from '../services/notificationService';
import { useAuth } from '../context/AuthContext';

const TIME_SLOTS = ['morning', 'afternoon', 'evening', 'night'];
const MEDICINE_TYPES = [
  { value: 'tablet',    label: 'Tablet',    icon: Pill },
  { value: 'syrup',     label: 'Syrup',     icon: Droplets },
  { value: 'injection', label: 'Injection', icon: Syringe },
  { value: 'inhaler',   label: 'Inhaler',   icon: Wind },
];

const SLOT_META = {
  morning:   { emoji: '🌅', color: '#eab308', bg: '#fef9c3' },
  afternoon: { emoji: '☀️', color: '#3b82f6', bg: '#dbeafe' },
  evening:   { emoji: '🌆', color: '#ec4899', bg: '#fce7f3' },
  night:     { emoji: '🌙', color: '#8b5cf6', bg: '#ede9fe' },
};

export default function AddMedicineModal({ onClose, onAdded }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const savedTimes = getSavedSlotTimes();

  const [form, setForm] = useState({
    name: '',
    type: 'tablet',
    dosage: '1 tablet',
    purpose: '',
    times: ['morning'],
    notifTimes: {
      morning:   savedTimes.morning   || '08:00',
      afternoon: savedTimes.afternoon || '13:00',
      evening:   savedTimes.evening   || '18:00',
      night:     savedTimes.night     || '21:00',
    },
    totalTablets: 30,
    numberOfDays: 30,
  });

  const toggleTime = (t) => {
    setForm(f => ({
      ...f,
      times: f.times.includes(t) ? f.times.filter(x => x !== t) : [...f.times, t],
    }));
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return alert('Please enter medicine name');
    if (form.times.length === 0) return alert('Please select at least one time');
    setLoading(true);
    try {
      await addMedicine(user.uid, form);
      onAdded();
      onClose();
    } catch (err) {
      alert('Error adding medicine: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          z-index: 200;
          display: flex; align-items: flex-end;
          animation: fadeIn 0.2s ease;
        }
        .modal-sheet {
          width: 100%;
          max-height: 92vh;
          background: white;
          border-radius: 28px 28px 0 0;
          padding: 0 0 40px;
          overflow-y: auto;
          animation: slideUp 0.35s ease;
          scrollbar-width: none;
        }
        .modal-sheet::-webkit-scrollbar { display: none; }
        .modal-handle {
          width: 36px; height: 4px;
          background: var(--gray-200);
          border-radius: 2px;
          margin: 12px auto 0;
        }
        .modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px 12px;
          position: sticky; top: 0; background: white; z-index: 2;
          border-bottom: 1px solid var(--gray-100);
        }
        .modal-title {
          font-size: 20px; font-weight: 800;
          color: var(--gray-800); font-family: var(--font-display);
        }
        .modal-close {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: var(--gray-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.15s;
        }
        .modal-close:hover { background: var(--gray-200); }
        .modal-body { padding: 12px 20px; }
        .field-label {
          font-size: 12px; font-weight: 800; color: var(--gray-400);
          text-transform: uppercase; letter-spacing: 0.07em;
          margin-bottom: 8px; display: block;
        }
        .field-group { margin-bottom: 20px; }
        .text-input {
          width: 100%; padding: 14px 16px;
          border-radius: var(--radius-sm);
          border: 2px solid var(--gray-200);
          font-size: 16px; font-weight: 600; color: var(--gray-800);
          outline: none; transition: border-color 0.2s; background: var(--gray-50);
        }
        .text-input:focus { border-color: var(--pink-300); background: white; }
        .type-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
        .type-btn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 12px 8px; border-radius: var(--radius-sm);
          border: 2px solid var(--gray-200); background: white;
          cursor: pointer; font-size: 12px; font-weight: 700;
          color: var(--gray-500); transition: all 0.15s ease;
        }
        .type-btn.selected { border-color: var(--pink-300); background: var(--pink-50); color: var(--pink-500); }

        /* Slot rows with time pickers */
        .slot-row {
          display: flex; align-items: center; gap: 10px;
          padding: 11px 12px;
          border-radius: 14px;
          border: 2px solid var(--gray-200);
          background: white;
          margin-bottom: 8px;
          transition: all 0.15s ease;
          cursor: pointer;
        }
        .slot-row.selected-slot { border-color: var(--blue-300); background: var(--blue-50); }
        .slot-checkbox {
          width: 22px; height: 22px; border-radius: 6px;
          border: 2px solid var(--gray-300); background: white;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.15s; font-size: 12px; font-weight: 900; color: white;
        }
        .slot-row.selected-slot .slot-checkbox { background: var(--blue-400); border-color: var(--blue-400); }
        .slot-emoji { font-size: 18px; flex-shrink: 0; }
        .slot-name { font-size: 15px; font-weight: 700; color: var(--gray-600); flex: 1; text-transform: capitalize; }
        .slot-row.selected-slot .slot-name { color: var(--blue-600); }
        .time-picker-wrap { display: flex; align-items: center; gap: 5px; }
        .mini-time-input {
          padding: 6px 8px;
          border: 1.5px solid var(--gray-200); border-radius: 8px;
          font-size: 13px; font-weight: 800; color: var(--gray-800);
          font-family: var(--font-display); outline: none; background: white;
          width: 96px;
        }
        .slot-row.selected-slot .mini-time-input { border-color: var(--blue-300); }
        .mini-time-input:focus { border-color: var(--pink-300); }

        .notif-hint {
          display: flex; align-items: center; gap: 6px;
          background: var(--blue-50); border-radius: 10px;
          padding: 8px 12px; margin-bottom: 10px;
          font-size: 12px; font-weight: 600; color: var(--blue-500);
        }
        .number-input { display: flex; align-items: center; gap: 12px; }
        .num-btn {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: var(--gray-100); display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.15s;
        }
        .num-btn:hover { background: var(--pink-100); }
        .num-value { font-size: 20px; font-weight: 800; color: var(--gray-800); min-width: 40px; text-align: center; }
        .submit-btn {
          width: 100%; padding: 16px; border-radius: var(--radius); border: none;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white; font-size: 17px; font-weight: 800;
          font-family: var(--font-body); cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.3);
          transition: all 0.2s ease; margin-top: 8px;
        }
        .submit-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.4); }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
      `}</style>

      <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="modal-sheet">
          <div className="modal-handle" />
          <div className="modal-header">
            <span className="modal-title">Add Medicine 💊</span>
            <button className="modal-close" onClick={onClose}><X size={18} /></button>
          </div>

          <div className="modal-body">
            <div className="field-group">
              <label className="field-label">Medicine Name</label>
              <input className="text-input" placeholder="e.g. Metformin 500mg"
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>

            <div className="field-group">
              <label className="field-label">Type</label>
              <div className="type-grid">
                {MEDICINE_TYPES.map(({ value, label, icon: Icon }) => (
                  <button key={value} className={`type-btn ${form.type === value ? 'selected' : ''}`}
                    onClick={() => setForm(f => ({ ...f, type: value }))}>
                    <Icon size={20} />{label}
                  </button>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Dosage</label>
              <input className="text-input" placeholder="e.g. 1 tablet, 5ml"
                value={form.dosage} onChange={e => setForm(f => ({ ...f, dosage: e.target.value }))} />
            </div>

            <div className="field-group">
              <label className="field-label">Purpose / Condition</label>
              <input className="text-input" placeholder="e.g. Blood pressure"
                value={form.purpose} onChange={e => setForm(f => ({ ...f, purpose: e.target.value }))} />
            </div>

            <div className="field-group">
              <label className="field-label">Time of Day & Reminder Clock Time</label>
              <div className="notif-hint">
                <Clock size={13} />
                Select slots and set the exact time for each reminder notification
              </div>
              {TIME_SLOTS.map(slot => {
                const meta = SLOT_META[slot];
                const isSelected = form.times.includes(slot);
                return (
                  <div key={slot} className={`slot-row ${isSelected ? 'selected-slot' : ''}`}
                    onClick={() => toggleTime(slot)}>
                    <div className="slot-checkbox">{isSelected && '✓'}</div>
                    <span className="slot-emoji">{meta.emoji}</span>
                    <span className="slot-name">{slot}</span>
                    <div className="time-picker-wrap" onClick={e => e.stopPropagation()}>
                      <Clock size={11} color={isSelected ? 'var(--blue-400)' : 'var(--gray-300)'} />
                      <input
                        type="time"
                        className="mini-time-input"
                        value={form.notifTimes[slot]}
                        onChange={e => setForm(f => ({
                          ...f,
                          notifTimes: { ...f.notifTimes, [slot]: e.target.value }
                        }))}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="field-group">
              <label className="field-label">Total Tablets / Doses</label>
              <div className="number-input">
                <button className="num-btn" onClick={() => setForm(f => ({ ...f, totalTablets: Math.max(1, f.totalTablets - 5) }))}><Minus size={16} /></button>
                <span className="num-value">{form.totalTablets}</span>
                <button className="num-btn" onClick={() => setForm(f => ({ ...f, totalTablets: f.totalTablets + 5 }))}><Plus size={16} /></button>
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Number of Days</label>
              <div className="number-input">
                <button className="num-btn" onClick={() => setForm(f => ({ ...f, numberOfDays: Math.max(1, f.numberOfDays - 1) }))}><Minus size={16} /></button>
                <span className="num-value">{form.numberOfDays}</span>
                <button className="num-btn" onClick={() => setForm(f => ({ ...f, numberOfDays: f.numberOfDays + 1 }))}><Plus size={16} /></button>
              </div>
            </div>

            <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Adding…' : '+ Add Medicine'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
