// src/pages/Signup.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUpPatient, signUpFamily } from '../services/authService';
import { Eye, EyeOff, User, Heart } from 'lucide-react';

export default function Signup() {
  const [role, setRole] = useState('patient');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    setLoading(true);
    try {
      if (role === 'patient') {
        await signUpPatient({ name, email, password });
      } else {
        await signUpFamily({ name, email, password, patientEmail });
      }
    } catch (err) {
      setError(err.message.includes('email-already-in-use')
        ? 'This email is already registered.'
        : 'Signup failed. Please try again.');
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
          text-align: center; margin-bottom: 24px;
        }
        .logo-icon {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          margin: 0 auto 10px;
          box-shadow: 0 4px 16px rgba(249,168,212,0.4);
        }
        .logo-name {
          font-family: var(--font-display);
          font-size: 24px; font-weight: 800;
          background: linear-gradient(135deg, var(--pink-400), var(--blue-400));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .role-tabs {
          display: flex; gap: 8px;
          background: var(--gray-100);
          border-radius: var(--radius-sm);
          padding: 4px;
          margin-bottom: 24px;
        }
        .role-tab {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px;
          border: none; border-radius: 8px;
          font-size: 14px; font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          color: var(--gray-500);
        }
        .role-tab.active {
          background: white;
          color: var(--pink-500);
          box-shadow: var(--shadow-sm);
        }
        .auth-title {
          font-size: 20px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 16px;
        }
        .field { margin-bottom: 14px; }
        .field label {
          display: block;
          font-size: 13px; font-weight: 700;
          color: var(--gray-500); margin-bottom: 6px;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .input-wrap { position: relative; }
        .auth-input {
          width: 100%;
          padding: 13px 16px;
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-sm);
          font-size: 16px; font-weight: 500;
          color: var(--gray-800);
          outline: none;
          transition: border-color 0.2s;
          background: var(--gray-50);
        }
        .auth-input:focus { border-color: var(--pink-300); background: white; }
        .eye-btn {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: var(--gray-400); cursor: pointer;
        }
        .error-msg {
          background: var(--red-100); color: var(--red-500);
          padding: 10px 14px; border-radius: var(--radius-sm);
          font-size: 14px; font-weight: 600; margin-bottom: 16px;
        }
        .auth-btn {
          width: 100%; padding: 16px; border: none;
          border-radius: var(--radius);
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 17px; font-weight: 800; font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(236,72,153,0.35);
          transition: all 0.2s; margin-top: 4px;
        }
        .auth-btn:hover { transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .auth-footer {
          text-align: center; margin-top: 20px;
          font-size: 14px; color: var(--gray-500); font-weight: 500;
        }
        .auth-link { color: var(--pink-500); font-weight: 700; text-decoration: none; }
        .hint-text {
          font-size: 12px; color: var(--gray-400);
          margin-top: 4px; font-weight: 500;
        }
      `}</style>
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-icon">💊</div>
            <div className="logo-name">MedAssist</div>
          </div>

          <div className="role-tabs">
            <button className={`role-tab ${role === 'patient' ? 'active' : ''}`} onClick={() => setRole('patient')}>
              <User size={15} /> Patient
            </button>
            <button className={`role-tab ${role === 'family' ? 'active' : ''}`} onClick={() => setRole('family')}>
              <Heart size={15} /> Family
            </button>
          </div>

          <div className="auth-title">
            {role === 'patient' ? 'Create your account 🌟' : 'Join as caregiver 🤝'}
          </div>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSignup}>
            <div className="field">
              <label>Full Name</label>
              <input className="auth-input" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input className="auth-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="input-wrap">
                <input
                  className="auth-input"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required style={{ paddingRight: 44 }}
                />
                <button type="button" className="eye-btn" onClick={() => setShowPass(s => !s)}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            {role === 'family' && (
              <div className="field">
                <label>Patient's Email (optional)</label>
                <input className="auth-input" type="email" placeholder="patient@example.com" value={patientEmail} onChange={e => setPatientEmail(e.target.value)} />
                <div className="hint-text">Enter the email of the patient you're caring for</div>
              </div>
            )}
            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
