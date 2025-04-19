'use client';

import { useEffect } from 'react';

export default function ButtonBackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById('backToTopBtn') as HTMLButtonElement | null;
      if (button) {
        if (document.documentElement.scrollTop > 100) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="backToTopBtn" className="fixed bottom-4 right-4 z-50 none" style={{ display: 'none' }}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="cursor-pointer bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-300"
      >
        ↑
      </button>
    </div>
  );
}