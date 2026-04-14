// src/components/Loader.jsx
export default function Loader() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--pink-50)',
      gap: 16
    }}>
      <div style={{
        width: 56, height: 56,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--pink-300), var(--blue-300))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'spin 1.2s linear infinite',
        boxShadow: '0 4px 16px rgba(249,168,212,0.4)'
      }}>
        <span style={{ fontSize: 24 }}>💊</span>
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--pink-400)', fontSize: 18 }}>
        MedAssist
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
