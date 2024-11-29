import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BlogCard } from './BlogCard';
import { AnalyticsCard } from './AnalyticsCard';

export const MyBlogs = () => {
  const analyticsData = [
    { name: 'Jan', views: 400, likes: 240, comments: 100 },
    { name: 'Feb', views: 300, likes: 139, comments: 80 },
    { name: 'Mar', views: 500, likes: 221, comments: 150 },
    { name: 'Apr', views: 280, likes: 180, comments: 90 },
    { name: 'May', views: 590, likes: 320, comments: 170 },
    { name: 'Jun', views: 350, likes: 150, comments: 60 },
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with Machine Learning",
      excerpt: "A beginner's guide to understanding machine learning concepts...",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      publishedAt: new Date('2024-03-10'),
      stats: { views: 1234, likes: 89, comments: 23 }
    },
    {
      id: 2,
      title: "The Future of Natural Language Processing",
      excerpt: "Exploring the latest developments in NLP and their implications...",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      publishedAt: new Date('2024-03-15'),
      stats: { views: 892, likes: 56, comments: 15 }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsCard
          title="Total Views"
          value="12.5K"
          change="+12%"
          isPositive={true}
        />
        <AnalyticsCard
          title="Total Likes"
          value="3.2K"
          change="+8%"
          isPositive={true}
        />
        <AnalyticsCard
          title="Total Comments"
          value="892"
          change="-3%"
          isPositive={false}
        />
      </div>

      {/* Analytics Chart */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Performance Overview</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: '#fff'
                }}
              />
              <Bar dataKey="views" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="likes" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="comments" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Blog Posts */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Your Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};