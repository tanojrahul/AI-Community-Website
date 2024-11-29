import { Newspaper } from 'lucide-react';

export const TrendingPosts = () => {
  const posts = [
    {
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.",
      likes: 234,
      comments: 45,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Machine Learning Basics",
      excerpt: "A comprehensive guide to understanding the fundamentals of machine learning.",
      likes: 189,
      comments: 32,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Ethics in AI Development",
      excerpt: "Discussing the importance of ethical considerations in AI advancement.",
      likes: 156,
      comments: 28,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2">
          <Newspaper />
          Trending Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-gray-500">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};