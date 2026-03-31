import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FlashcardProps {
  front: string;
  back: string;
}

export default function Flashcard({ front, back }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full h-[300px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[#1C1F2E] border-2 border-[#2D3148] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4F7CFF] mb-4">Question</span>
          <h3 className="text-xl font-bold text-[#E8EAF6]">{front}</h3>
          <p className="mt-8 text-xs text-[#8B92B8]">Click to flip</p>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden bg-[#1C1F2E] border-2 border-[#4ECDC4] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4ECDC4] mb-4">Answer</span>
          <div className="text-lg text-[#E8EAF6] leading-relaxed">
            {back}
          </div>
          <p className="mt-8 text-xs text-[#8B92B8]">Click to flip back</p>
        </div>
      </motion.div>
    </div>
  );
}
