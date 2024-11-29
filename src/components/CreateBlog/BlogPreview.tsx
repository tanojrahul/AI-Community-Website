import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateUtils';

interface BlogPreviewProps {
  post: BlogPost;
}

export const BlogPreview = ({ post }: BlogPreviewProps) => {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden">
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-white font-medium">{post.author.name}</p>
            <p className="text-gray-400 text-sm">{post.author.role}</p>
          </div>
          <span className="text-gray-400 text-sm ml-auto">
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};