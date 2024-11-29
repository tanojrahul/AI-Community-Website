import { useEffect, useRef } from 'react';

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Our Community</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transform translate-y-8">
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Learn</h3>
            <p className="text-gray-300">Access curated resources and tutorials from AI experts and practitioners.</p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <p className="text-gray-300">Join a vibrant community of AI enthusiasts, researchers, and developers.</p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Grow</h3>
            <p className="text-gray-300">Share your knowledge, collaborate on projects, and advance your AI career.</p>
          </div>
        </div>
      </div>
    </section>
  );
};