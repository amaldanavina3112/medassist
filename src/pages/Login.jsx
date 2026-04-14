// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginUser(email, password);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .auth-page {
          min-height: 100vh;
          background: linear-gradient(160deg, var(--pink-100) 0%, var(--blue-50) 50%, var(--green-50) 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 24px;
        }
        .auth-card {
          width: 100%; max-width: 400px;
          background: white;
          border-radius: var(--radius-xl);
          padding: 36px 28px;
          box-shadow: var(--shadow-lg);
          animation: scaleIn 0.35s ease;
        }
        .auth-logo {
          text-align: center;
          margin-bottom: 28px;
        }
        .logo-icon {
          width: 72px; height: 72px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          border-radius: 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 36px;
          margin: 0 auto 12px;
          box-shadow: 0 4px 16px rgba(249,168,212,0.4);
        }
        .logo-name {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 800;
          background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .logo-tagline {
          font-size: 14px; color: var(--gray-400);
          font-weight: 500; margin-top: 4px;
        }
        .auth-title {
          font-size: 22px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 20px;
        }
        .field { margin-bottom: 16px; }
        .field label {
          display: block;
          font-size: 13px; font-weight: 700;
          color: var(--gray-500);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .input-wrap { position: relative; }
        .auth-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 16px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          transition: border-color 0.2s;
          background: var(--gray-50);
        }
        .auth-input:focus {
          border-color: var(--pink-300);
          background: white;
        }
        .eye-btn {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: var(--gray-400); cursor: pointer;
        }
        .error-msg {
          background: var(--red-100);
          color: var(--red-500);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600;
          margin-bottom: 16px;
        }
        .auth-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 17px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.35);
          transition: all 0.2s;
          margin-top: 4px;
        }
        .auth-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(236,72,153,0.45); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-footer {
          text-align: center;
          margin-top: 20px;
          font-size: 14px; color: var(--gray-500); font-weight: 500;
        }
        .auth-link { color: var(--pink-500); font-weight: 700; text-decoration: none; }
        .auth-link:hover { text-decoration: underline; }
      `}</style>
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-icon">💊</div>
            <div className="logo-name">MedAssist</div>
            <div className="logo-tagline">Your health companion</div>
          </div>

          <div className="auth-title">Welcome back 👋</div>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="field">
              <label>Email</label>
              <input
                className="auth-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="input-wrap">
                <input
                  className="auth-input"
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  style={{ paddingRight: 44 }}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(s => !s)}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
