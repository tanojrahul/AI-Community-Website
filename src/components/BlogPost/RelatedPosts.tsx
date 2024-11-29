export const RelatedPosts = () => {
  const relatedPosts = [
    {
      title: "Understanding Neural Networks",
      excerpt: "A deep dive into the fundamentals of neural networks and their applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      date: "Mar 10, 2024"
    },
    {
      title: "AI Ethics in Practice",
      excerpt: "Exploring real-world scenarios where AI ethics play a crucial role.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      date: "Mar 12, 2024"
    },
    {
      title: "Machine Learning Trends",
      excerpt: "Latest developments and future predictions in machine learning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
      date: "Mar 14, 2024"
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Related Posts</h2>
      <div className="space-y-6">
        {relatedPosts.map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{post.excerpt}</p>
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  );
};