// src/pages/StockPage.jsx
import { useState, useEffect, useCallback } from 'react';
import { AlertTriangle, Plus, Minus, Trash2, Package } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getMedicines, updateMedicine, deleteMedicine } from '../services/medicineService';
import AddMedicineModal from '../components/AddMedicineModal';

function StockCard({ med, onUpdate, onDelete }) {
  const remaining = med.remainingTablets ?? med.totalTablets ?? 0;
  const total = med.totalTablets ?? 30;
  const timesPerDay = med.times?.length || 1;
  const daysLeft = timesPerDay > 0 ? Math.floor(remaining / timesPerDay) : remaining;
  const isLow = daysLeft <= 3;
  const isCritical = daysLeft <= 1;
  const percent = total > 0 ? Math.min(100, Math.round((remaining / total) * 100)) : 0;

  const barColor = isCritical
    ? 'var(--red-400)'
    : isLow
    ? 'var(--orange-400)'
    : 'var(--green-400)';

  return (
    <>
      <style>{`
        .stock-card {
          background: white;
          border-radius: var(--radius);
          padding: 18px 16px;
          box-shadow: var(--shadow-sm);
          border: 2px solid transparent;
          transition: all 0.2s;
          animation: fadeIn 0.3s ease;
        }
        .stock-card.low { border-color: var(--orange-200); background: #fffbf5; }
        .stock-card.critical { border-color: var(--red-200); background: #fff5f5; }
        .stock-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .stock-name {
          font-size: 17px; font-weight: 800;
          color: var(--gray-800);
        }
        .stock-type {
          font-size: 12px; color: var(--gray-400);
          font-weight: 600; text-transform: capitalize;
          margin-top: 2px;
        }
        .stock-purpose {
          font-size: 12px; color: var(--gray-400);
          font-weight: 500;
        }
        .low-badge {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px; font-weight: 700;
          background: var(--orange-100); color: var(--orange-500);
          white-space: nowrap;
        }
        .critical-badge {
          background: var(--red-100); color: var(--red-500);
        }
        .stock-bar-wrap {
          height: 8px;
          background: var(--gray-100);
          border-radius: 4px;
          overflow: hidden;
          margin: 14px 0 10px;
        }
        .stock-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }
        .stock-stats {
          display: flex; justify-content: space-between; align-items: center;
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-size: 20px; font-weight: 900;
          font-family: var(--font-display);
          color: var(--gray-800);
        }
        .stat-lbl {
          font-size: 11px; font-weight: 600;
          color: var(--gray-400);
        }
        .stock-actions {
          display: flex; gap: 8px; margin-top: 14px;
          align-items: center;
        }
        .qty-btn {
          width: 34px; height: 34px;
          border-radius: 50%; border: 2px solid var(--gray-200);
          background: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.15s;
        }
        .qty-btn:hover { background: var(--pink-50); border-color: var(--pink-300); }
        .qty-input {
          flex: 1;
          padding: 8px 12px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 15px; font-weight: 700;
          text-align: center;
          color: var(--gray-800);
          outline: none;
        }
        .qty-input:focus { border-color: var(--pink-300); }
        .del-btn {
          width: 34px; height: 34px;
          border-radius: 50%; border: none;
          background: var(--red-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.15s;
          color: var(--red-400);
          margin-left: auto;
        }
        .del-btn:hover { background: var(--red-400); color: white; }
        .days-left-label {
          font-size: 12px; font-weight: 700;
          color: var(--gray-500);
        }
      `}</style>
      <div className={`stock-card ${isCritical ? 'critical' : isLow ? 'low' : ''}`}>
        <div className="stock-top">
          <div>
            <div className="stock-name">{med.name}</div>
            <div className="stock-type">{med.type} · {med.dosage}</div>
            {med.purpose && <div className="stock-purpose">{med.purpose}</div>}
          </div>
          {isLow && (
            <span className={`low-badge ${isCritical ? 'critical-badge' : ''}`}>
              <AlertTriangle size={12} />
              {isCritical ? 'Critical!' : 'Low Stock'}
            </span>
          )}
        </div>

        <div className="stock-bar-wrap">
          <div className="stock-bar-fill" style={{ width: `${percent}%`, background: barColor }} />
        </div>

        <div className="stock-stats">
          <div className="stat-item">
            <div className="stat-num" style={{ color: barColor }}>{remaining}</div>
            <div className="stat-lbl">Remaining</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">{total}</div>
            <div className="stat-lbl">Total</div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: barColor }}>{daysLeft}</div>
            <div className="stat-lbl">Days Left</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">{timesPerDay}x</div>
            <div className="stat-lbl">Per Day</div>
          </div>
        </div>

        <div className="stock-actions">
          <button className="qty-btn" onClick={() => onUpdate(med.id, Math.max(0, remaining - 10))}>
            <Minus size={14} />
          </button>
          <input
            className="qty-input"
            type="number"
            value={remaining}
            min="0"
            onChange={e => onUpdate(med.id, Math.max(0, parseInt(e.target.value) || 0))}
          />
          <button className="qty-btn" onClick={() => onUpdate(med.id, remaining + 10)}>
            <Plus size={14} />
          </button>
          <button className="del-btn" onClick={() => onDelete(med.id)} title="Delete medicine">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </>
  );
}

export default function StockPage() {
  const { user } = useAuth();
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState('all'); // all | low | ok

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const meds = await getMedicines(user.uid);
      setMedicines(meds);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user.uid]);

  useEffect(() => { load(); }, [load]);

  const handleUpdate = async (medId, newQty) => {
    setMedicines(prev => prev.map(m => m.id === medId ? { ...m, remainingTablets: newQty } : m));
    await updateMedicine(user.uid, medId, { remainingTablets: newQty });
  };

  const handleDelete = async (medId) => {
    if (!confirm('Delete this medicine?')) return;
    await deleteMedicine(user.uid, medId);
    setMedicines(prev => prev.filter(m => m.id !== medId));
  };

  const filtered = medicines.filter(m => {
    const remaining = m.remainingTablets ?? m.totalTablets ?? 0;
    const timesPerDay = m.times?.length || 1;
    const daysLeft = Math.floor(remaining / timesPerDay);
    if (filter === 'low') return daysLeft <= 3;
    if (filter === 'ok') return daysLeft > 3;
    return true;
  });

  const lowCount = medicines.filter(m => {
    const remaining = m.remainingTablets ?? m.totalTablets ?? 0;
    const daysLeft = Math.floor(remaining / (m.times?.length || 1));
    return daysLeft <= 3;
  }).length;

  return (
    <>
      <style>{`
        .stock-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .stock-header {
          background: linear-gradient(135deg, var(--green-100), var(--blue-100));
          padding: 56px 20px 24px;
        }
        .stock-title {
          font-family: var(--font-display);
          font-size: 26px; font-weight: 800; color: var(--gray-800);
        }
        .stock-subtitle { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-top: 2px; }
        .alert-banner {
          background: var(--orange-100);
          border: 2px solid var(--orange-200);
          border-radius: var(--radius);
          padding: 14px 16px;
          display: flex; align-items: center; gap: 12px;
          margin: 16px 16px 0;
        }
        .alert-text {
          font-size: 14px; font-weight: 700; color: var(--orange-500);
        }
        .filter-row {
          display: flex; gap: 8px;
          padding: 16px 16px 8px;
          overflow-x: auto;
        }
        .filter-btn {
          padding: 8px 16px;
          border-radius: 20px; border: 2px solid var(--gray-200);
          background: white;
          font-size: 13px; font-weight: 700; color: var(--gray-500);
          cursor: pointer; white-space: nowrap;
          transition: all 0.15s;
        }
        .filter-btn.active {
          border-color: var(--pink-300);
          background: var(--pink-50);
          color: var(--pink-500);
        }
        .stock-list {
          display: flex; flex-direction: column; gap: 12px;
          padding: 8px 16px;
        }
        .empty-state {
          text-align: center; padding: 48px 24px;
          color: var(--gray-400);
        }
        .empty-icon { font-size: 52px; margin-bottom: 12px; }
        .empty-title { font-size: 18px; font-weight: 700; color: var(--gray-600); }
        .fab {
          position: fixed;
          right: 20px;
          bottom: calc(var(--nav-height) + 16px);
          width: 56px; height: 56px;
          border-radius: 50%; border: none;
          background: linear-gradient(135deg, var(--green-400), var(--green-500));
          color: white;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(34,197,94,0.45);
          cursor: pointer; z-index: 50;
          transition: all 0.2s;
        }
        .fab:hover { transform: scale(1.08); }
      `}</style>

      <div className="stock-page">
        <div className="stock-header">
          <div className="stock-title">📦 Medicine Stock</div>
          <div className="stock-subtitle">Track and manage your inventory</div>
        </div>

        {lowCount > 0 && (
          <div className="alert-banner">
            <AlertTriangle size={20} color="var(--orange-500)" />
            <span className="alert-text">
              {lowCount} medicine{lowCount > 1 ? 's' : ''} running low — restock soon!
            </span>
          </div>
        )}

        <div className="filter-row">
          {[['all', 'All'], ['low', `⚠️ Low Stock (${lowCount})`], ['ok', '✅ Well Stocked']].map(([v, l]) => (
            <button key={v} className={`filter-btn ${filter === v ? 'active' : ''}`} onClick={() => setFilter(v)}>{l}</button>
          ))}
        </div>

        <div className="stock-list">
          {loading ? (
            [1, 2, 3].map(i => (
              <div key={i} style={{ height: 180, borderRadius: 'var(--radius)', background: 'linear-gradient(90deg, var(--gray-100) 25%, var(--gray-50) 50%, var(--gray-100) 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.2s infinite' }} />
            ))
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">{filter === 'low' ? '✅' : '💊'}</div>
              <div className="empty-title">{filter === 'low' ? 'All stocks are good!' : 'No medicines found'}</div>
            </div>
          ) : (
            filtered.map(med => (
              <StockCard key={med.id} med={med} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))
          )}
        </div>
      </div>

      <button className="fab" onClick={() => setShowAddModal(true)}>
        <Plus size={26} />
      </button>

      {showAddModal && (
        <AddMedicineModal onClose={() => setShowAddModal(false)} onAdded={load} />
      )}

      <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
    </>
  );
}
