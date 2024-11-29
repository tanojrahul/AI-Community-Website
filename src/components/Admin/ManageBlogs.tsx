import { useState } from 'react';
import { Search, CheckCircle, XCircle, Eye, MoreVertical } from 'lucide-react';

export const ManageBlogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'Getting Started with AI',
      author: 'John Doe',
      status: 'Published',
      date: '2024-03-15',
      views: 1234,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      author: 'Jane Smith',
      status: 'Pending',
      date: '2024-03-16',
      views: 0,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Blogs</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-800 rounded-xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                  <p className="text-gray-400">by {blog.author}</p>
                </div>
                <div className="flex items-center gap-2">
                  {blog.status === 'Published' ? (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Published
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{blog.date}</span>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{blog.views}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                {blog.status === 'Pending' && (
                  <>
                    <button className="p-2 hover:bg-green-500/10 rounded-lg transition-colors">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </button>
                  </>
                )}
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};