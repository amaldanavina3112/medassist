// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import StockPage from './pages/StockPage';
import ProfilePage from './pages/ProfilePage';
import FamilyDashboard from './pages/FamilyDashboard';
import NotificationSettings from './pages/NotificationSettings';
import BottomNav from './components/BottomNav';
import Loader from './components/Loader';
import PWAInstallPrompt from './components/PWAInstallPrompt';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function AppRoutes() {
  const { user, userProfile, loading } = useAuth();
  if (loading) return <Loader />;

  return (
    <>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="/" element={
          <PrivateRoute>
            {userProfile?.role === 'family' ? <FamilyDashboard /> : <Home />}
          </PrivateRoute>
        } />
        <Route path="/calendar" element={<PrivateRoute><CalendarPage /></PrivateRoute>} />
        <Route path="/stock" element={<PrivateRoute><StockPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><NotificationSettings /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {user && <BottomNav />}
      <PWAInstallPrompt />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
