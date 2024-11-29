import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ImagePlus, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { BlogPost } from '../../types/blog';
import { Toolbar } from './Toolbar';

interface CreateBlogFormProps {
  blogData: BlogPost;
  setBlogData: React.Dispatch<React.SetStateAction<BlogPost>>;
}

export const CreateBlogForm = ({ blogData, setBlogData }: CreateBlogFormProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: blogData.content,
    onUpdate: ({ editor }) => {
      setBlogData(prev => ({
        ...prev,
        content: editor.getHTML()
      }));
    }
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogData(prev => ({
          ...prev,
          coverImage: reader.result as string
        }));
        toast.success('Image uploaded successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const button = e.currentTarget as HTMLButtonElement;
    button.disabled = true;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Blog post saved successfully!');
    } catch (error) {
      toast.error('Failed to save blog post');
    } finally {
      button.disabled = false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Title
        </label>
        <input
          type="text"
          value={blogData.title}
          onChange={(e) => setBlogData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your blog title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Cover Image
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
            {blogData.coverImage ? (
              <img
                src={blogData.coverImage}
                alt="Cover"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImagePlus className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-400">Click to upload cover image</p>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-2">
          Content
        </label>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <Toolbar editor={editor} />
          <EditorContent
            editor={editor}
            className="prose prose-invert max-w-none p-4"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <span>Publish</span>
        </button>
      </div>
    </form>
  );
};