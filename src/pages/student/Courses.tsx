import CourseCard from '../../components/CourseCard/CourseCard';

const COURSES = [
  {
    id: '1',
    title: 'React 18 Mastery',
    description: 'Learn React from scratch with modern patterns, hooks, and performance optimization techniques.',
    thumbnail: 'https://picsum.photos/seed/react-course/800/450',
    lessonsCount: 24,
    duration: '12h 30m',
    rating: 4.9,
    category: 'Development'
  },
  {
    id: '2',
    title: 'Tailwind CSS for Designers',
    description: 'Master utility-first CSS and build stunning, responsive interfaces with ease.',
    thumbnail: 'https://picsum.photos/seed/tailwind-course/800/450',
    lessonsCount: 18,
    duration: '8h 45m',
    rating: 4.8,
    category: 'Design'
  },
  {
    id: '3',
    title: 'Firebase Fullstack Guide',
    description: 'Build real-time applications with Firebase Auth, Firestore, and Cloud Functions.',
    thumbnail: 'https://picsum.photos/seed/firebase-course/800/450',
    lessonsCount: 15,
    duration: '10h 15m',
    rating: 4.7,
    category: 'Backend'
  }
];

export default function Courses() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold text-[#E8EAF6]">Courses</h1>
        <p className="text-[#8B92B8]">Geleceğin teknolojilerini uzmanlarından öğrenin.</p>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto pb-2 custom-scrollbar">
        {['All', 'Development', 'Design', 'Backend', 'Business'].map((cat) => (
          <button 
            key={cat}
            className="px-6 py-2 rounded-full bg-[#1C1F2E] border border-[#2D3148] text-sm font-medium text-[#8B92B8] hover:text-[#E8EAF6] hover:border-[#4F7CFF] transition-all whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COURSES.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
