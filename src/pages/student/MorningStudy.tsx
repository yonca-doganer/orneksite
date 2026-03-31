import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Play, BookOpen, HelpCircle, Trophy } from 'lucide-react';
import { useState } from 'react';
import Flashcard from '../../components/Flashcard/Flashcard';

const ROUTINE_STEPS = [
  { id: 1, title: "Yesterday's Flashcard review", duration: '5 min', icon: BookOpen, completed: true },
  { id: 2, title: "Today's video lesson", duration: '12 min', icon: Play, completed: false },
  { id: 3, title: "Short quiz", duration: '3 min', icon: HelpCircle, completed: false },
  { id: 4, title: "Daily challenge completion", duration: '10 min', icon: Trophy, completed: false },
];

export default function MorningStudy() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold text-[#E8EAF6]">Morning Study</h1>
        <p className="text-[#8B92B8]">Güne verimli bir başlangıç yapın. Günlük rutininizi tamamlayın.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Routine Steps */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4F7CFF] mb-6">Daily Routine</h3>
            <div className="space-y-6">
              {ROUTINE_STEPS.map((step) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "flex items-start gap-4 cursor-pointer group transition-all",
                    activeStep === step.id ? "opacity-100" : "opacity-60 hover:opacity-100"
                  )}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={cn(
                    "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                    step.completed ? "bg-[#4ECDC4] text-[#0F1117]" : "border-2 border-[#2D3148] text-[#8B92B8]"
                  )}>
                    {step.completed ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                  </div>
                  <div className="flex-1">
                    <h4 className={cn(
                      "text-sm font-bold transition-colors",
                      activeStep === step.id ? "text-[#E8EAF6]" : "text-[#8B92B8] group-hover:text-[#E8EAF6]"
                    )}>
                      {step.title}
                    </h4>
                    <span className="text-[11px] text-[#8B92B8]">{step.duration}</span>
                  </div>
                  {activeStep === step.id && (
                    <motion.div layoutId="active-indicator" className="w-1 h-8 bg-[#4F7CFF] rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#4F7CFF] to-[#4ECDC4] rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Streak: 12 Days! 🔥</h3>
            <p className="text-sm opacity-90">Harika gidiyorsun! 3 gün daha devam edersen "Early Bird" rozetini kazanacaksın.</p>
          </div>
        </div>

        {/* Active Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {activeStep === 1 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-xl font-bold">Flashcard Review</h2>
              <Flashcard 
                front="What is the Single Responsibility Principle (SRP)?" 
                back="A principle that states every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class."
              />
              <div className="flex justify-center gap-4">
                <button className="px-8 py-2 rounded-full border border-[#2D3148] text-[#8B92B8] hover:text-[#E8EAF6] hover:bg-[#2D3148]">Again</button>
                <button className="px-8 py-2 rounded-full bg-[#4ECDC4] text-[#0F1117] font-bold">Good</button>
              </div>
            </motion.div>
          )}

          {activeStep === 2 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <h2 className="text-xl font-bold">Today's Lesson: React Hooks Deep Dive</h2>
              <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <img src="https://picsum.photos/seed/react/800/450" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" />
                <div className="w-16 h-16 bg-[#4F7CFF] rounded-full flex items-center justify-center text-white shadow-xl z-10 group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-6">
                <h3 className="font-bold mb-4">Learning Objectives</h3>
                <ul className="space-y-2 text-sm text-[#8B92B8]">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4ECDC4]" /> Understand the rules of Hooks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4ECDC4]" /> Master useState and useEffect</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#4ECDC4]" /> Create your first custom Hook</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeStep > 2 && (
            <div className="h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#2D3148] rounded-full flex items-center justify-center text-[#8B92B8] mb-4">
                <BookOpen size={40} />
              </div>
              <h3 className="text-xl font-bold">Coming Soon</h3>
              <p className="text-[#8B92B8] mt-2">Bu adım henüz aktif değil. Önceki adımları tamamlayın.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function for cn (imported from utils)
import { cn } from '../../utils/cn';
