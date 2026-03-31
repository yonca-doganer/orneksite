import { Play, Clock, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessonsCount: number;
  duration: string;
  rating: number;
  category: string;
}

export default function CourseCard({ id, title, description, thumbnail, lessonsCount, duration, rating, category }: CourseCardProps) {
  return (
    <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-2xl overflow-hidden group hover:border-[#4F7CFF] transition-all">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="w-12 h-12 bg-[#4F7CFF] rounded-full flex items-center justify-center text-white shadow-xl">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-[#1C1F2E]/80 backdrop-blur-md text-[#4ECDC4] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-[#4ECDC4]/20">
            {category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 text-[#FFB347] mb-2">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold">{rating}</span>
        </div>
        
        <h3 className="text-lg font-bold text-[#E8EAF6] mb-2 line-clamp-1 group-hover:text-[#4F7CFF] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#8B92B8] text-sm line-clamp-2 mb-6">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-[#2D3148]">
          <div className="flex items-center gap-4 text-[11px] text-[#8B92B8]">
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              <span>{lessonsCount} Lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
          </div>
          <Link 
            to={`/courses/${id}`}
            className="text-xs font-bold text-[#4F7CFF] hover:underline"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}
