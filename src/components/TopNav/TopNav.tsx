import { Search, Bell, User as UserIcon, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore, useUIStore } from '../../store';
import { Menu } from 'lucide-react';

export default function TopNav() {
  const { isAuthenticated, user } = useAuthStore();
  const { toggleSidebar } = useUIStore();

  return (
    <header className="fixed top-0 left-0 right-0 h-[54px] bg-[#1C1F2E] border-b border-[#2D3148] z-30 flex items-center justify-between px-4 lg:pl-[244px]">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-[#8B92B8] hover:text-[#E8EAF6]"
        >
          <Menu size={24} />
        </button>
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B92B8]" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#0F1117] border border-[#2D3148] rounded-full py-1.5 pl-10 pr-4 text-sm text-[#E8EAF6] focus:outline-none focus:border-[#4F7CFF] w-[300px]"
          />
        </div>
      </div>

      <nav className="flex items-center gap-6">
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#8B92B8]">
          <Link to="/" className="hover:text-[#E8EAF6] transition-colors">Home</Link>
          <Link to="/courses" className="hover:text-[#E8EAF6] transition-colors">Courses</Link>
          <Link to="/events" className="hover:text-[#E8EAF6] transition-colors">Events</Link>
          <Link to="/members" className="hover:text-[#E8EAF6] transition-colors">Members</Link>
          <Link to="/leaderboard" className="hover:text-[#E8EAF6] transition-colors">Leaderboard</Link>
        </div>

        <div className="flex items-center gap-3 border-l border-[#2D3148] pl-6">
          {isAuthenticated ? (
            <>
              <button className="text-[#8B92B8] hover:text-[#E8EAF6] relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFB347] rounded-full border-2 border-[#1C1F2E]"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#4F7CFF] flex items-center justify-center text-white font-bold cursor-pointer overflow-hidden">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <UserIcon size={18} />
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link 
                to="/login" 
                className="text-sm font-medium text-[#8B92B8] hover:text-[#E8EAF6] px-3 py-1.5"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="text-sm font-medium bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white px-4 py-1.5 rounded-full transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
