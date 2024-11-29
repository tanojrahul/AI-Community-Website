import { useEffect, useState } from 'react';
import { quotes } from '../../data/quotes';

export const Hero = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
          Welcome to AI Community
        </h1>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
          <p className="text-xl md:text-2xl text-gray-200 italic">"{quote.text}"</p>
          <p className="text-gray-400 mt-4">- {quote.author}</p>
        </div>
      </div>
    </section>
  );
};