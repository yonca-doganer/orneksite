import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './pages/student/Feed';
import Courses from './pages/student/Courses';
import MorningStudy from './pages/student/MorningStudy';
import AhaMoment from './pages/student/AhaMoment';
import Challenge from './pages/student/Challenge';
import FlashcardsPage from './pages/student/FlashcardsPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useAuthStore } from './store';
import { useEffect } from 'react';
import { AuthService } from './services/AuthService';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) return <div className="min-h-screen bg-[#0F1117] flex items-center justify-center text-[#E8EAF6]">Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" />;

  return <>{children}</>;
}

export default function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = AuthService.subscribeToAuthChanges((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          email: firebaseUser.email || '',
          role: 'STUDENT', // Default role
          createdAt: new Date().toISOString()
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
          <Route path="courses" element={<Courses />} />
          <Route path="morning-study" element={<MorningStudy />} />
          <Route path="aha" element={<AhaMoment />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="flashcards" element={<FlashcardsPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
