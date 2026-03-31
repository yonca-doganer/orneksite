import { motion } from 'framer-motion';
import { Lightbulb, Share2, Bookmark } from 'lucide-react';

const AHA_MOMENTS = [
  {
    id: 1,
    title: "React is just JavaScript",
    content: "Once you realize that JSX is just a syntactic sugar for React.createElement() and that components are just functions returning objects, the 'magic' disappears and logic takes over.",
    author: "Andrew Ng",
    date: "Mar 28, 2026"
  },
  {
    id: 2,
    title: "The Power of SRP",
    content: "Single Responsibility Principle isn't just about code; it's about mental models. When a component does only one thing, your brain doesn't have to juggle multiple contexts while debugging.",
    author: "Rustem Temriyev",
    date: "Mar 30, 2026"
  }
];

export default function AhaMoment() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-serif font-bold text-[#E8EAF6]">Aha! Moments</h1>
          <p className="text-[#8B92B8]">Topluluğun paylaştığı en değerli içgörüler ve öğrenme anları.</p>
        </div>
        <button className="bg-[#FFB347] hover:bg-[#FFB347]/90 text-[#0F1117] font-bold px-6 py-2 rounded-full transition-colors flex items-center gap-2">
          <Lightbulb size={18} />
          <span>Paylaş</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {AHA_MOMENTS.map((moment, index) => (
          <motion.div 
            key={moment.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb size={80} className="text-[#FFB347]" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#FFB347] mb-4">{moment.title}</h3>
              <p className="text-[#E8EAF6] text-sm leading-relaxed mb-8 italic">
                "{moment.content}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#2D3148]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D3148]"></div>
                  <div>
                    <p className="text-xs font-bold text-[#E8EAF6]">{moment.author}</p>
                    <p className="text-[10px] text-[#8B92B8]">{moment.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[#8B92B8]">
                  <button className="hover:text-[#4F7CFF] transition-colors"><Share2 size={16} /></button>
                  <button className="hover:text-[#FFB347] transition-colors"><Bookmark size={16} /></button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
