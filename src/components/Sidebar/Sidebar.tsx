import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  Trophy, 
  MessageSquare, 
  Image as ImageIcon, 
  FileText, 
  Book, 
  Lightbulb, 
  HelpCircle, 
  Zap, 
  Layers, 
  Link as LinkIcon, 
  Mic, 
  Library,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useUIStore } from '../../store';
import { motion, AnimatePresence } from 'framer-motion';

const TOGETHER_ITEMS = [
  { icon: LayoutDashboard, label: 'Feed', path: '/', badge: null },
  { icon: BookOpen, label: 'Buradan Başla', path: '/start', badge: null },
  { icon: Calendar, label: 'Morning Study', path: '/morning-study', badge: null },
  { icon: MessageSquare, label: 'Social Space', path: '/social', badge: null },
  { icon: ImageIcon, label: 'Photo Space', path: '/photos', badge: 'New' },
  { icon: FileText, label: "Teacher's Notes", path: '/notes', badge: null },
  { icon: Book, label: 'E-books', path: '/ebooks', badge: '5' },
  { icon: Lightbulb, label: 'Aha! Moment', path: '/aha', badge: null },
  { icon: HelpCircle, label: 'Sorularınız', path: '/questions', badge: '7' },
  { icon: Zap, label: 'Challenge', path: '/challenge', badge: null },
  { icon: Layers, label: 'Flashcards', path: '/flashcards', badge: null },
  { icon: LinkIcon, label: 'Blog & Kaynaklar', path: '/resources', badge: null },
  { icon: Mic, label: 'Podcast', path: '/podcast', badge: null },
  { icon: Library, label: 'Kitap Kulübü', path: '/book-club', badge: null },
  { icon: MessageSquare, label: 'Chat', path: '/chat', badge: null },
];

const EDUCATION_ITEMS = [
  { icon: Zap, label: 'Çalışma Akışı', path: '/workflow' },
  { icon: BookOpen, label: 'A1-B1 Teori Dersleri', path: '/theory' },
  { icon: Mic, label: 'A1-B1 Reading-Listening', path: '/practice' },
];

export default function Sidebar() {
  const location = useLocation();
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  const SidebarContent = (
    <div className="flex flex-col h-full bg-[#1C1F2E] border-r border-[#2D3148] w-[228px] overflow-y-auto custom-scrollbar">
      <div className="p-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4F7CFF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">L</span>
          </div>
          <span className="text-[#E8EAF6] font-serif text-xl font-bold">LearnHub</span>
        </Link>
        <button onClick={toggleSidebar} className="lg:hidden text-[#8B92B8]">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 px-3 py-4 space-y-6">
        <div>
          <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#4F7CFF] mb-2">
            TOGETHER
          </h3>
          <nav className="space-y-1">
            {TOGETHER_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-md transition-colors group",
                  location.pathname === item.path 
                    ? "bg-[#2D3148] text-[#E8EAF6]" 
                    : "text-[#8B92B8] hover:bg-[#2D3148]/50 hover:text-[#E8EAF6]"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={cn(
                    location.pathname === item.path ? "text-[#4F7CFF]" : "group-hover:text-[#4F7CFF]"
                  )} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#4F7CFF] text-white rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#4ECDC4] mb-2">
            EĞİTİMLER
          </h3>
          <nav className="space-y-1">
            {EDUCATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors group",
                  location.pathname === item.path 
                    ? "bg-[#2D3148] text-[#E8EAF6]" 
                    : "text-[#8B92B8] hover:bg-[#2D3148]/50 hover:text-[#E8EAF6]"
                )}
              >
                <item.icon size={18} className={cn(
                  location.pathname === item.path ? "text-[#4ECDC4]" : "group-hover:text-[#4ECDC4]"
                )} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 z-40">
        {SidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -228 }}
            animate={{ x: 0 }}
            exit={{ x: -228 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 z-[60]"
          >
            {SidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
