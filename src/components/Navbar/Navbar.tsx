import { UserCircle2, LogIn, UserPlus, LogOut, Home, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn] = useState(false); // TODO: Replace with actual auth state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <nav className={`mx-auto max-w-7xl rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-gray-900/30 backdrop-blur-sm'
      }`}>
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">AI Community</span>
            </div>
            
            <div className="flex items-center gap-4">
              <NavLink icon={<Home size={20} />} text="Home" />
              <NavLink icon={<Info size={20} />} text="About" />
              
              {!isLoggedIn ? (
                <>
                  <NavLink icon={<LogIn size={20} />} text="Login" />
                  <NavLink icon={<UserPlus size={20} />} text="Register" />
                </>
              ) : (
                <>
                  <NavLink icon={<UserCircle2 size={20} />} text="Profile" />
                  <NavLink icon={<LogOut size={20} />} text="Logout" />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a href="#" className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/10">
    {icon}
    <span>{text}</span>
  </a>
);