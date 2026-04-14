// src/components/PWAInstallPrompt.jsx
import { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('pwa-dismissed')) return;

    // Detect iOS
    const ios = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
    const standalone = window.navigator.standalone;
    setIsIOS(ios);

    if (ios && !standalone) {
      // iOS can't use beforeinstallprompt, show manual guide
      setTimeout(() => setShow(true), 3000);
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setTimeout(() => setShow(true), 2000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Hide if already installed
    window.addEventListener('appinstalled', () => setShow(false));

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setShow(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('pwa-dismissed', '1');
  };

  if (!show || dismissed) return null;

  return (
    <>
      <style>{`
        .pwa-banner {
          position: fixed;
          bottom: calc(var(--nav-height) + 12px);
          left: 12px; right: 12px;
          background: white;
          border-radius: var(--radius-lg);
          padding: 16px;
          box-shadow: var(--shadow-lg);
          display: flex; align-items: center; gap: 14px;
          z-index: 150;
          animation: slideUp 0.4s ease;
          border: 1.5px solid var(--pink-100);
        }
        .pwa-icon-wrap {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--pink-200), var(--blue-200));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 24px;
        }
        .pwa-text { flex: 1; }
        .pwa-title { font-size: 15px; font-weight: 800; color: var(--gray-800); }
        .pwa-sub { font-size: 12px; color: var(--gray-400); font-weight: 500; margin-top: 2px; }
        .pwa-actions { display: flex; gap: 8px; align-items: center; }
        .pwa-install-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 9px 14px;
          border: none; border-radius: 12px;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-500));
          color: white;
          font-size: 13px; font-weight: 800;
          font-family: var(--font-body);
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(236,72,153,0.35);
          white-space: nowrap;
          transition: all 0.2s;
        }
        .pwa-install-btn:hover { transform: scale(1.03); }
        .pwa-dismiss-btn {
          width: 30px; height: 30px;
          border-radius: 50%; border: none;
          background: var(--gray-100);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
        }
        /* iOS guide modal */
        .ios-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          z-index: 300;
          display: flex; align-items: flex-end;
        }
        .ios-sheet {
          width: 100%; background: white;
          border-radius: 28px 28px 0 0;
          padding: 24px 24px 48px;
          animation: slideUp 0.35s ease;
        }
        .ios-title {
          font-family: var(--font-display);
          font-size: 22px; font-weight: 800;
          color: var(--gray-800); margin-bottom: 6px;
        }
        .ios-sub { font-size: 14px; color: var(--gray-500); font-weight: 500; margin-bottom: 20px; }
        .ios-step {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--gray-100);
        }
        .ios-step:last-child { border-bottom: none; }
        .step-num {
          width: 32px; height: 32px; border-radius: 50%;
          background: linear-gradient(135deg, var(--pink-300), var(--pink-400));
          color: white; font-size: 15px; font-weight: 900;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .step-text { font-size: 15px; font-weight: 600; color: var(--gray-700); line-height: 1.4; }
        .step-hint { font-size: 13px; color: var(--gray-400); margin-top: 3px; }
        .ios-close-btn {
          width: 100%; padding: 16px;
          border: none; border-radius: var(--radius);
          background: var(--gray-100);
          color: var(--gray-600);
          font-size: 16px; font-weight: 800;
          font-family: var(--font-body); cursor: pointer;
          margin-top: 20px;
        }
      `}</style>

      {/* Main install banner */}
      <div className="pwa-banner">
        <div className="pwa-icon-wrap">💊</div>
        <div className="pwa-text">
          <div className="pwa-title">Install MedAssist</div>
          <div className="pwa-sub">Add to home screen for quick access</div>
        </div>
        <div className="pwa-actions">
          {isIOS ? (
            <button className="pwa-install-btn" onClick={() => setShowIOSGuide(true)}>
              <Smartphone size={14} /> How to
            </button>
          ) : (
            <button className="pwa-install-btn" onClick={handleInstall}>
              <Download size={14} /> Install
            </button>
          )}
          <button className="pwa-dismiss-btn" onClick={handleDismiss}>
            <X size={14} color="var(--gray-400)" />
          </button>
        </div>
      </div>

      {/* iOS step-by-step guide */}
      {showIOSGuide && (
        <div className="ios-overlay" onClick={() => setShowIOSGuide(false)}>
          <div className="ios-sheet" onClick={e => e.stopPropagation()}>
            <div className="ios-title">📱 Install on iPhone</div>
            <div className="ios-sub">Follow these steps to add MedAssist to your home screen:</div>
            {[
              { n: 1, text: 'Tap the Share button', hint: 'The box with an arrow pointing up at the bottom of Safari' },
              { n: 2, text: 'Scroll down and tap "Add to Home Screen"', hint: 'You may need to scroll the share sheet to find this option' },
              { n: 3, text: 'Tap "Add" in the top right corner', hint: 'MedAssist will appear on your home screen like a native app' },
            ].map(({ n, text, hint }) => (
              <div key={n} className="ios-step">
                <div className="step-num">{n}</div>
                <div>
                  <div className="step-text">{text}</div>
                  <div className="step-hint">{hint}</div>
                </div>
              </div>
            ))}
            <button className="ios-close-btn" onClick={() => { setShowIOSGuide(false); handleDismiss(); }}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
