import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User as UserIcon, AlertCircle } from 'lucide-react';
import { AuthService } from '../../services/AuthService';
import { useAuthStore } from '../../store';

export default function Register() {
  const [name, setName] = useState('');
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
      const userCredential = await AuthService.register(email, password);
      
      setUser({
        id: userCredential.user.uid,
        name: name,
        email: email,
        role: 'STUDENT',
        createdAt: new Date().toISOString()
      });
      
      navigate('/');
    } catch (err: any) {
      console.error(err);
      setError('Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.');
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
          <div className="w-12 h-12 bg-[#4ECDC4] rounded-xl flex items-center justify-center mb-4">
            <UserPlus className="text-[#0F1117]" size={24} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#E8EAF6]">Yeni Hesap Oluştur</h1>
          <p className="text-[#8B92B8] text-sm mt-2">LearnHub topluluğuna katılın</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-500 text-sm">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-[#8B92B8] uppercase tracking-wider mb-2">Ad Soyad</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92B8]" size={18} />
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0F1117] border border-[#2D3148] rounded-xl py-2.5 pl-10 pr-4 text-[#E8EAF6] focus:outline-none focus:border-[#4ECDC4] transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#8B92B8] uppercase tracking-wider mb-2">Email Adresi</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92B8]" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0F1117] border border-[#2D3148] rounded-xl py-2.5 pl-10 pr-4 text-[#E8EAF6] focus:outline-none focus:border-[#4ECDC4] transition-colors"
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
                className="w-full bg-[#0F1117] border border-[#2D3148] rounded-xl py-2.5 pl-10 pr-4 text-[#E8EAF6] focus:outline-none focus:border-[#4ECDC4] transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <p className="text-[10px] text-[#8B92B8] leading-relaxed">
            Kaydol'a tıklayarak <span className="text-[#4F7CFF]">Kullanım Koşullarını</span> ve <span className="text-[#4F7CFF]">Gizlilik Politikasını</span> kabul etmiş olursunuz.
          </p>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 disabled:opacity-50 text-[#0F1117] font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#4ECDC4]/20 flex items-center justify-center gap-2"
          >
            {isLoading ? 'Hesap oluşturuluyor...' : 'Kayıt Ol'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#2D3148] text-center">
          <p className="text-[#8B92B8] text-sm">
            Zaten hesabınız var mı? <Link to="/login" className="text-[#4F7CFF] font-bold hover:underline">Giriş Yapın</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
