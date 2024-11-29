import { LayoutDashboard, Users, FileText } from 'lucide-react';

interface AdminNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const AdminNav = ({ activeSection, setActiveSection }: AdminNavProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Manage Users', icon: Users },
    { id: 'blogs', label: 'Manage Blogs', icon: FileText },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto bg-gray-800/90 backdrop-blur-md rounded-full shadow-lg">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-white">Admin Portal</span>
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};