
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'privacy'>('landing');

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else {
        setView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0A2B]">
      <Navbar setView={(v) => window.location.hash = v === 'landing' ? '' : 'privacy'} />
      
      <main className="flex-grow">
        {view === 'landing' ? (
          <>
            <Hero />
            <Features />
          </>
        ) : (
          <PrivacyPolicy />
        )}
      </main>

      <Footer setView={(v) => window.location.hash = v === 'landing' ? '' : 'privacy'} />
    </div>
  );
};

export default App;
