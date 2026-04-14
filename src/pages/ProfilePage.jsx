// src/pages/ProfilePage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Shield, Bell, Info, ChevronRight, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../services/authService';
import { getNotificationPermission } from '../services/notificationService';

function SettingRow({ icon: Icon, label, sublabel, color = 'var(--gray-400)', onClick, badge }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 0', background: 'none', border: 'none',
        borderBottom: '1px solid var(--gray-100)', cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left',
      }}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: color + '20',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={18} color={color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--gray-800)' }}>{label}</div>
        {sublabel && <div style={{ fontSize: 12, color: 'var(--gray-400)', fontWeight: 500, marginTop: 1 }}>{sublabel}</div>}
      </div>
      {badge && (
        <span style={{ background: 'var(--pink-100)', color: 'var(--pink-500)', borderRadius: 12, padding: '2px 8px', fontSize: 11, fontWeight: 700 }}>
          {badge}
        </span>
      )}
      {onClick && <ChevronRight size={16} color="var(--gray-300)" />}
    </button>
  );
}

export default function ProfilePage() {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const notifPermission = getNotificationPermission();

  const handleLogout = async () => {
    if (!confirm('Are you sure you want to sign out?')) return;
    setLoggingOut(true);
    try {
      await logoutUser();
    } catch (err) {
      console.error(err);
      setLoggingOut(false);
    }
  };

  const name = userProfile?.name || user?.displayName || 'User';
  const email = user?.email || '';
  const role = userProfile?.role || 'patient';
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  return (
    <>
      <style>{`
        .profile-page { min-height: 100vh; padding-bottom: calc(var(--nav-height) + 16px); }
        .profile-header {
          background: linear-gradient(135deg, var(--purple-100), var(--pink-100));
          padding: 56px 20px 32px;
          text-align: center;
        }
        .avatar {
          width: 88px; height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-300), var(--blue-300));
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; font-weight: 900;
          color: white;
          margin: 0 auto 14px;
          box-shadow: 0 4px 20px rgba(249,168,212,0.5);
          font-family: var(--font-display);
        }
        .profile-name {
          font-family: var(--font-display);
          font-size: 24px; font-weight: 800;
          color: var(--gray-800);
        }
        .profile-email {
          font-size: 14px; color: var(--gray-500);
          font-weight: 500; margin-top: 4px;
        }
        .role-pill {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 10px;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px; font-weight: 700;
          background: white;
          color: var(--pink-500);
          box-shadow: var(--shadow-sm);
        }
        .section-card {
          background: white;
          border-radius: var(--radius);
          padding: 4px 16px;
          margin: 16px 16px 0;
          box-shadow: var(--shadow-sm);
        }
        .section-title {
          font-size: 12px; font-weight: 800;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 14px 0 2px;
        }
        .logout-btn {
          width: calc(100% - 32px);
          margin: 16px;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: var(--red-100);
          color: var(--red-500);
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.2s;
        }
        .logout-btn:hover { background: var(--red-400); color: white; }
        .logout-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .stats-row {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 16px 0;
        }
        .stat-card {
          background: white; border-radius: var(--radius-sm);
          padding: 16px 10px; text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .stat-emoji { font-size: 22px; }
        .stat-num {
          font-size: 22px; font-weight: 900;
          font-family: var(--font-display);
          color: var(--gray-800);
          margin-top: 4px;
        }
        .stat-lbl { font-size: 11px; font-weight: 600; color: var(--gray-400); margin-top: 2px; }
        .app-version {
          text-align: center;
          color: var(--gray-300);
          font-size: 12px; font-weight: 500;
          padding: 16px;
        }
      `}</style>

      <div className="profile-page">
        <div className="profile-header">
          <div className="avatar">{initials}</div>
          <div className="profile-name">{name}</div>
          <div className="profile-email">{email}</div>
          <div className="role-pill">
            {role === 'family' ? <Heart size={13} /> : <User size={13} />}
            {role === 'family' ? 'Family Caregiver' : 'Patient'}
          </div>
        </div>

        {role === 'family' && userProfile?.linkedPatientEmail && (
          <div className="section-card">
            <div className="section-title">Linked Patient</div>
            <SettingRow
              icon={Heart}
              label={userProfile.linkedPatientEmail}
              sublabel="Monitoring this patient"
              color="var(--pink-400)"
            />
          </div>
        )}

        <div className="section-card">
          <div className="section-title">Account</div>
          <SettingRow icon={User} label="Full Name" sublabel={name} color="var(--blue-400)" />
          <SettingRow icon={Shield} label="Email" sublabel={email} color="var(--purple-500)" />
        </div>

        <div className="section-card">
          <div className="section-title">Preferences</div>
          <SettingRow
            icon={Bell}
            label="Notifications & Reminders"
            sublabel={
              notifPermission === 'granted'
                ? 'Reminders active — tap to change times'
                : notifPermission === 'denied'
                ? 'Blocked in browser settings'
                : 'Tap to set up medicine reminders'
            }
            color="var(--orange-400)"
            onClick={() => navigate('/notifications')}
            badge={
              notifPermission === 'granted' ? 'ON'
              : notifPermission === 'denied' ? 'OFF'
              : 'SET UP'
            }
          />
        </div>

        <div className="section-card">
          <div className="section-title">About</div>
          <SettingRow icon={Info} label="MedAssist" sublabel="Version 1.0.0 — Medicine Reminder App" color="var(--green-500)" />
        </div>

        <button className="logout-btn" onClick={handleLogout} disabled={loggingOut}>
          <LogOut size={18} />
          {loggingOut ? 'Signing out…' : 'Sign Out'}
        </button>

        <div className="app-version">Made with ❤️ for better health</div>
      </div>
    </>
  );
}
