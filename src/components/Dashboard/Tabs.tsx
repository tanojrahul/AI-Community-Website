interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const tabs = [
    { id: 'my-blogs', label: 'My Blogs' },
    { id: 'liked-blogs', label: 'Liked Blogs' },
  ];

  return (
    <div className="border-b border-gray-700">
      <nav className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-blue-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};