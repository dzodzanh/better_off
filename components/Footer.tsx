
import React from 'react';

interface FooterProps {
  setView: (view: 'landing' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#0F0A2B] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm text-white/60">
          <button onClick={() => setView('landing')} className="hover:text-white transition-colors">Home</button>
          <a href="mailto:litilabs@outlook.com" className="hover:text-white transition-colors">Support</a>
          <button onClick={() => setView('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Use</a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://apps.apple.com/app/id6757330278"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Download on App Store"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30 italic">
        "Healing isn't starting over, it's starting again."
      </div>
    </footer>
  );
};
