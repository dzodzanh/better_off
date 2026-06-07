
import React from 'react';

interface NavbarProps {
  setView: (view: 'landing' | 'privacy' | 'terms') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F0A2B]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setView('landing')}
        >
          <div className="w-10 h-10 bg-[#886EF0] rounded-xl flex items-center justify-center shadow-lg shadow-[#886EF0]/20">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight">Better off</span>
            <p className="text-xs text-white/40">A safe space for recovery and healing. Made with 💜 by Liti Labs.</p>
          </div>
        </div>

      </div>
    </nav>
  );
};
