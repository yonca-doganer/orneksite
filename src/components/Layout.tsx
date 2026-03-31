import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import TopNav from './TopNav/TopNav';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-[#E8EAF6]">
      <TopNav />
      <Sidebar />
      <main className="pt-[54px] lg:pl-[228px] min-h-screen">
        <div className="max-w-5xl mx-auto p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
