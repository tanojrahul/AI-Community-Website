import { useState } from 'react';
import { Send } from 'lucide-react';

export const Comments = () => {
  const [comment, setComment] = useState('');

  const comments = [
    {
      id: 1,
      author: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      content: "This is a fascinating perspective on AI development. I particularly agree with the points about ethical considerations.",
      date: new Date('2024-03-15T10:30:00'),
      likes: 12
    },
    {
      id: 2,
      author: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      content: "Great article! Would love to see more content about practical applications of AI in everyday scenarios.",
      date: new Date('2024-03-15T11:45:00'),
      likes: 8
    }
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Comments</h2>
      
      {/* Comment Form */}
      <div className="mb-8">
        <div className="flex gap-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 bg-gray-700 text-white rounded-lg p-4 min-h-[100px] focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex justify-end mt-2">
          <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            <Send className="w-4 h-4" />
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{comment.author}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-gray-300">{comment.content}</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                ❤️ {comment.likes}
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};