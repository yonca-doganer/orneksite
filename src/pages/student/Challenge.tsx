import { motion } from 'framer-motion';
import { Trophy, Medal, Target, ArrowUp, ArrowDown } from 'lucide-react';

const LEADERBOARD = [
  { id: 1, name: 'Ahmet Yılmaz', points: 2450, rank: 1, trend: 'up', avatar: 'https://picsum.photos/seed/1/100/100' },
  { id: 2, name: 'Zeynep Kaya', points: 2320, rank: 2, trend: 'down', avatar: 'https://picsum.photos/seed/2/100/100' },
  { id: 3, name: 'Mehmet Demir', points: 2100, rank: 3, trend: 'up', avatar: 'https://picsum.photos/seed/3/100/100' },
  { id: 4, name: 'Elif Şahin', points: 1950, rank: 4, trend: 'same', avatar: 'https://picsum.photos/seed/4/100/100' },
  { id: 5, name: 'Can Özkan', points: 1800, rank: 5, trend: 'up', avatar: 'https://picsum.photos/seed/5/100/100' },
];

export default function Challenge() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold text-[#E8EAF6]">Challenge & Leaderboard</h1>
        <p className="text-[#8B92B8]">Sınırlarını zorla, puanları topla ve zirveye tırman.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Challenge */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-r from-[#1C1F2E] to-[#2D3148] border border-[#2D3148] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target size={120} className="text-[#4F7CFF]" />
            </div>
            
            <div className="relative z-10">
              <span className="bg-[#4F7CFF] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Active Challenge</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Build a Custom Hook</h2>
              <p className="text-[#8B92B8] text-sm max-w-md mb-8">
                Kendi `useLocalStorage` hook'unuzu yazın ve bir form bileşeninde kullanın. 
                En temiz kod yazan 3 kişiye 500 bonus puan!
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8B92B8] uppercase font-bold">Reward</span>
                  <span className="text-[#FFB347] font-bold flex items-center gap-1">
                    <Trophy size={16} /> 500 Points
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8B92B8] uppercase font-bold">Time Left</span>
                  <span className="text-[#E8EAF6] font-bold">2d 14h 32m</span>
                </div>
              </div>
              
              <button className="bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#4F7CFF]/20">
                Görevi Başlat
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#8B92B8] mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Points</span>
                  <span className="font-bold text-[#4F7CFF]">1,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Rank</span>
                  <span className="font-bold text-[#E8EAF6]">#12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Challenges Done</span>
                  <span className="font-bold text-[#4ECDC4]">8</span>
                </div>
              </div>
            </div>
            <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-[#8B92B8] mb-4">Recent Badges</h3>
              <div className="flex gap-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full bg-[#2D3148] flex items-center justify-center text-[#4F7CFF] border border-[#4F7CFF]/20">
                    <Medal size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="lg:col-span-1">
          <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-[#2D3148]">
              <h3 className="font-bold flex items-center gap-2">
                <Trophy size={20} className="text-[#FFB347]" />
                <span>Leaderboard</span>
              </h3>
            </div>
            
            <div className="divide-y divide-[#2D3148]">
              {LEADERBOARD.map((user) => (
                <div key={user.id} className="p-4 flex items-center justify-between hover:bg-[#2D3148]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-6 text-center font-bold text-sm text-[#8B92B8]">
                      {user.rank === 1 ? <Medal className="text-[#FFB347]" size={18} /> : 
                       user.rank === 2 ? <Medal className="text-[#C0C0C0]" size={18} /> :
                       user.rank === 3 ? <Medal className="text-[#CD7F32]" size={18} /> : user.rank}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#2D3148] overflow-hidden">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#E8EAF6]">{user.name}</p>
                      <p className="text-[10px] text-[#8B92B8]">{user.points} pts</p>
                    </div>
                  </div>
                  <div className={cn(
                    "text-xs font-bold flex items-center gap-1",
                    user.trend === 'up' ? "text-[#4ECDC4]" : 
                    user.trend === 'down' ? "text-red-400" : "text-[#8B92B8]"
                  )}>
                    {user.trend === 'up' && <ArrowUp size={12} />}
                    {user.trend === 'down' && <ArrowDown size={12} />}
                    {user.trend === 'same' && <span className="w-3 h-0.5 bg-[#8B92B8] rounded-full"></span>}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-[#2D3148]/50 text-center">
              <button className="text-xs font-bold text-[#4F7CFF] hover:underline">View All Rankings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from '../../utils/cn';
