import { useState } from 'react';
import { CreateBlogForm } from './CreateBlogForm';
import { BlogPreview } from './BlogPreview';
import { BlogPost } from '../../types/blog';

export const CreateBlogPage = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [blogData, setBlogData] = useState<BlogPost>({
    title: '',
    content: '',
    coverImage: '',
    publishedAt: new Date(),
    author: {
      name: 'John Doe', // This would come from auth context in a real app
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
      role: 'AI Researcher'
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create New Blog Post</h1>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            {previewMode ? 'Edit Post' : 'Preview'}
          </button>
        </div>

        {previewMode ? (
          <BlogPreview post={blogData} />
        ) : (
          <CreateBlogForm
            blogData={blogData}
            setBlogData={setBlogData}
          />
        )}
      </div>
    </div>
  );
};