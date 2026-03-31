import { MessageSquare, Heart, Share2, MoreHorizontal } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

function Post({ author, timestamp, content, image, likes, comments }: PostProps) {
  return (
    <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-xl overflow-hidden mb-6">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4F7CFF] flex items-center justify-center text-white font-bold">
            {author.avatar ? <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" /> : author.name[0]}
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#E8EAF6]">{author.name}</h4>
            <div className="flex items-center gap-2 text-[11px] text-[#8B92B8]">
              <span className="bg-[#4F7CFF]/20 text-[#4F7CFF] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{author.role}</span>
              <span>•</span>
              <span>{timestamp}</span>
            </div>
          </div>
        </div>
        <button className="text-[#8B92B8] hover:text-[#E8EAF6]">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="px-4 pb-4">
        <p className="text-[#E8EAF6] text-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </p>
      </div>

      {image && (
        <div className="border-y border-[#2D3148]">
          <img src={image} alt="Post content" className="w-full h-auto max-h-[500px] object-cover" referrerPolicy="no-referrer" />
        </div>
      )}

      <div className="p-3 flex items-center gap-6 border-t border-[#2D3148]">
        <button className="flex items-center gap-2 text-[#8B92B8] hover:text-[#FFB347] transition-colors text-sm">
          <Heart size={18} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 text-[#8B92B8] hover:text-[#4F7CFF] transition-colors text-sm">
          <MessageSquare size={18} />
          <span>{comments}</span>
        </button>
        <button className="flex items-center gap-2 text-[#8B92B8] hover:text-[#4ECDC4] transition-colors text-sm ml-auto">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default function Feed() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-serif font-bold text-[#E8EAF6]">Feed</h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-full bg-[#2D3148] text-sm font-medium text-[#E8EAF6] hover:bg-[#2D3148]/80">
            Latest
          </button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-[#8B92B8] hover:text-[#E8EAF6]">
            Popular
          </button>
        </div>
      </div>

      <div className="bg-[#1C1F2E] border border-[#2D3148] rounded-xl p-4 mb-8">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4F7CFF] flex-shrink-0"></div>
          <textarea 
            placeholder="Share something with the community..." 
            className="w-full bg-transparent border-none focus:ring-0 text-[#E8EAF6] placeholder-[#8B92B8] resize-none text-sm"
            rows={2}
          ></textarea>
        </div>
        <div className="mt-3 pt-3 border-t border-[#2D3148] flex justify-end">
          <button className="bg-[#4F7CFF] hover:bg-[#4F7CFF]/90 text-white px-6 py-1.5 rounded-full text-sm font-bold transition-colors">
            Post
          </button>
        </div>
      </div>

      <Post 
        author={{ name: 'Andrew Ng', avatar: 'https://picsum.photos/seed/andrew/100/100', role: 'Teacher' }}
        timestamp="2 hours ago"
        content="Welcome to the new LearnHub community! 🎓 We're excited to start this journey together. Remember, the key to mastering full-stack development is consistent practice. Don't forget to check your Morning Study routine today!"
        likes={42}
        comments={12}
      />

      <Post 
        author={{ name: 'Rustem Temriyev', avatar: 'https://picsum.photos/seed/rustem/100/100', role: 'Admin' }}
        timestamp="5 hours ago"
        content="Just uploaded the new A1-B1 Theory lessons. Check them out in the Education section! 🚀"
        image="https://picsum.photos/seed/education/800/400"
        likes={28}
        comments={5}
      />
    </div>
  );
}
