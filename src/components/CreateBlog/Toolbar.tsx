import { Editor } from '@tiptap/react';
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
} from 'lucide-react';

interface ToolbarProps {
  editor: Editor | null;
}

export const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) return null;

  return (
    <div className="border-b border-gray-700 p-2 flex gap-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('bold') ? 'bg-gray-700' : ''
        }`}
      >
        <Bold className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('italic') ? 'bg-gray-700' : ''
        }`}
      >
        <Italic className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('heading', { level: 1 }) ? 'bg-gray-700' : ''
        }`}
      >
        <Heading1 className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-700' : ''
        }`}
      >
        <Heading2 className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('bulletList') ? 'bg-gray-700' : ''
        }`}
      >
        <List className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('orderedList') ? 'bg-gray-700' : ''
        }`}
      >
        <ListOrdered className="w-5 h-5 text-gray-200" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-gray-700 transition-colors ${
          editor.isActive('blockquote') ? 'bg-gray-700' : ''
        }`}
      >
        <Quote className="w-5 h-5 text-gray-200" />
      </button>
    </div>
  );
};