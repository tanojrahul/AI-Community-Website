import { Heart, Share2, MessageCircle } from 'lucide-react';
import { RelatedPosts } from './RelatedPosts';
import { Comments } from './Comments';
import { formatDate } from '../../utils/dateUtils';
import { ShareButton } from './ShareButton';

export const BlogPost = () => {
  const post = {
    title: "The Future of Artificial Intelligence in 2024",
    content: `
      Artificial Intelligence has made remarkable strides in recent years, transforming various industries
      and aspects of our daily lives. As we move forward, the integration of AI into our society becomes
      increasingly sophisticated and nuanced.

      The advancement of large language models and neural networks has opened new possibilities in natural
      language processing, computer vision, and automated decision-making systems. However, with these
      developments come important considerations about ethics, privacy, and the responsible development
      of AI technologies.
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      role: "AI Researcher"
    },
    publishedAt: new Date('2024-03-15'),
    likes: 142,
    comments: 28
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2 bg-gray-800 rounded-xl p-8">
            <header className="mb-8">
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
            </header>

            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700">
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <ShareButton />
            </div>

            <Comments />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <RelatedPosts />
          </aside>
        </div>
      </main>
    </div>
  );
};