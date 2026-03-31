import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { AuthService } from '../../services/AuthService';
import { useAuthStore } from '../../store';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // In this demo, we'll mock the user if Firebase isn't fully configured
      // But we call the service as per SRP
      const userCredential = await AuthService.login(email, password);
      
      // Mock user for the demo since we don't have a real DB yet
      setUser({
        id: userCredential.user.uid,
        name: email.split('@')[0],
        email: email,
        role: 'STUDENT',
        createdAt: new Date().toISOString()
      });
      
      navigate('/');
    } catch (err: any) {
      console.error(err);
      setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#4F7CFF] rounded-xl flex items-center justify-center mb-4">
            <LogIn className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#E8EAF6]">LearnHub'a Hoş Geldiniz</h1>
          <p className="text-[#8B92B8] text-sm mt-2">Öğrenmeye devam etmek için giriş yapın</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-500 text-sm">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#8B92B8] uppercase tracking-wider mb-2">Email Adresi</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92B8]" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0F1117] border border-[#2D3148] rounded-xl py-2.5 pl-10 pr-4 text-[#E8EAF6] focus:outline-none focus:border-[#4F7CFF] transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8B92B8] uppercase tracking-wider mb-2">Şifre</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92B8]" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0F1117] border border-[#2D3148] rounded-xl py-2.5 pl-10 pr-4 text-[#E8EAF6] focus:outline-none focus:border-[#4F7CFF] transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-[#8B92B8] cursor-pointer">
              <input type="checkbox" className="rounded border-[#2D3148] bg-[#0F1117] text-[#4F7CFF] focus:ring-0" />
              <span>Beni Hatırla</span>
            </label>
            <Link to="/forgot-password" title="Şifremi Unuttum" className="text-[#4F7CFF] hover:underline">Şifremi Unuttum</Link>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#4F7CFF]/20 flex items-center justify-center gap-2"
          >
            {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#2D3148] text-center">
          <p className="text-[#8B92B8] text-sm">
            Hesabınız yok mu? <Link to="/register" className="text-[#4F7CFF] font-bold hover:underline">Kayıt Olun</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
