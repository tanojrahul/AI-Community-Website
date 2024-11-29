import { Eye, Heart, MessageCircle, MoreVertical } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    coverImage: string;
    publishedAt: Date;
    stats: {
      views: number;
      likes: number;
      comments: number;
    };
  };
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500/50 transition-all">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{blog.title}</h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-400 mb-4 line-clamp-2">{blog.excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{formatDate(blog.publishedAt)}</span>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{blog.stats.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{blog.stats.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{blog.stats.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};