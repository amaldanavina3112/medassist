// src/components/BottomNav.jsx
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Package, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/stock', icon: Package, label: 'Stock' },
  { to: '/profile', icon: User, label: 'Profile' },
];

export default function BottomNav() {
  const { userProfile } = useAuth();

  return (
    <>
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          height: var(--nav-height);
          background: white;
          border-radius: 24px 24px 0 0;
          box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 8px;
          z-index: 100;
        }
        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          border-radius: 16px;
          text-decoration: none;
          color: var(--gray-400);
          font-size: 11px;
          font-weight: 600;
          font-family: var(--font-body);
          transition: all 0.2s ease;
          min-width: 64px;
        }
        .nav-item.active {
          color: var(--pink-500);
          background: var(--pink-50);
        }
        .nav-item:hover { color: var(--pink-400); }
        .nav-icon {
          width: 24px; height: 24px;
          transition: transform 0.2s ease;
        }
        .nav-item.active .nav-icon { transform: scale(1.1); }
      `}</style>
      <nav className="bottom-nav">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon className="nav-icon" strokeWidth={2} />
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
