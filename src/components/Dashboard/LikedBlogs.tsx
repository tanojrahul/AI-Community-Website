import { BlogCard } from './BlogCard';

export const LikedBlogs = () => {
  const likedBlogs = [
    {
      id: 1,
      title: "Understanding Deep Learning",
      excerpt: "A comprehensive guide to deep learning architectures...",
      coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      publishedAt: new Date('2024-03-12'),
      stats: { views: 2341, likes: 156, comments: 45 }
    },
    {
      id: 2,
      title: "AI Ethics and Society",
      excerpt: "Exploring the ethical implications of AI development...",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      publishedAt: new Date('2024-03-14'),
      stats: { views: 1567, likes: 98, comments: 32 }
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">Posts You've Liked</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {likedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};