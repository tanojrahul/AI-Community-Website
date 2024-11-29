import { Share2 } from 'lucide-react';
import { useState } from 'react';

export const ShareButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const shareOptions = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'Facebook', icon: 'f' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'Copy Link', icon: '🔗' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>

      {showTooltip && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg p-2 z-10">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              className="w-full text-left px-4 py-2 text-gray-200 hover:bg-gray-600 rounded-lg flex items-center gap-3"
            >
              <span className="w-6 text-center">{option.icon}</span>
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};