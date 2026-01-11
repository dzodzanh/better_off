
import React, { useState, useEffect } from 'react';

const moodImages = [
  '/mood_hello.png',
  '/mood_happy.png',
  '/mood_calm.png',
  '/mood_relieved.png',
  '/mood_sad.png',
  '/mood_anxious.png',
  '/mood_lonely.png',
  '/mood_numb.png',
  '/mood_angry.png',
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % moodImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#886EF0]/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#BFA335]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Healing isn't linear. <br />
            <span className="text-gradient">We restart together.</span>
          </h1>
          
          <p className="text-lg text-white/70 max-w-xl mx-auto md:mx-0">
            Maintain your no-contact boundary, stabilize your emotions, and move forward step-by-step with your personal breakup companion.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="https://apps.apple.com/app/id6757330278"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#886EF0] hover:bg-[#7C3AED] px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-[#886EF0]/20 text-center"
            >
              Download App
            </a>
            <a
              href="#features"
              className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-xl text-lg font-bold transition-all text-center"
            >
              Learn More
            </a>
          </div>

        </div>

        <div className="relative flex justify-center items-center" id="mascot">
          <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-[#886EF0]/20 to-transparent rounded-full flex items-center justify-center relative">
            {/* Mascot Beto */}
            <div className="relative z-10 animate-float">
               <div className="w-64 h-64 md:w-96 md:h-96 bg-[#1A1A26] rounded-3xl gradient-border flex flex-col items-center justify-center shadow-2xl overflow-hidden p-6">
                  <img
                    src={moodImages[currentImageIndex]}
                    alt="Beto - Your 24/7 Companion"
                    className="w-full h-auto object-contain transition-opacity duration-500"
                  />
               </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-[#BFA335] rounded-2xl rotate-12 flex items-center justify-center text-2xl shadow-lg animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>✨</div>
            <div className="absolute bottom-20 left-0 w-20 h-20 bg-[#6A00FF] rounded-2xl -rotate-12 flex items-center justify-center text-3xl shadow-lg animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}>💜</div>
            <div className="absolute top-32 left-5 w-12 h-12 bg-[#F988FF] rounded-xl rotate-6 flex items-center justify-center text-xl shadow-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>🌙</div>
            <div className="absolute bottom-10 right-20 w-14 h-14 bg-[#4ADE80] rounded-2xl -rotate-6 flex items-center justify-center text-2xl shadow-lg animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}>🌿</div>
            <div className="absolute top-1/2 right-0 w-10 h-10 bg-[#38BDF8] rounded-xl rotate-12 flex items-center justify-center text-lg shadow-lg animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.8s'}}>💫</div>
            <div className="absolute bottom-32 left-10 w-12 h-12 bg-[#FB7185] rounded-xl -rotate-12 flex items-center justify-center text-xl shadow-lg animate-bounce" style={{animationDelay: '1.2s', animationDuration: '3.3s'}}>🦋</div>
          </div>
        </div>
      </div>
    </section>
  );
};
