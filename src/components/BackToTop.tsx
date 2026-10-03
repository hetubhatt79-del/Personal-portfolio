import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0a0f24]/90 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-violet-600/80 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] backdrop-blur-xl transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
