
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Footer } from './components/Footer';

type View = 'landing' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#terms') {
        setView('terms');
        window.scrollTo(0, 0);
      } else {
        setView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (v: View) => {
    window.location.hash = v === 'landing' ? '' : v;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0A2B]">
      <Navbar setView={navigate} />

      <main className="flex-grow">
        {view === 'landing' && (
          <>
            <Hero />
            <Features />
          </>
        )}
        {view === 'privacy' && <PrivacyPolicy />}
        {view === 'terms' && <TermsOfService />}
      </main>

      <Footer setView={navigate} />
    </div>
  );
};

export default App;
