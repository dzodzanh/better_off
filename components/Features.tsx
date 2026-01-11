
import React from 'react';

const featureList = [
  {
    title: "No-Contact Tracker",
    description: "Real-time timer to celebrate your discipline. Milestones and badges to reward your progress.",
    icon: "⏱️",
    gradient: "from-[#6A00FF] to-[#886EF0]"
  },
  {
    title: "Temptation Kit",
    description: "Breathing exercises, 'Bad Stuff' logs, and fake send features to help you navigate impulsive moments.",
    icon: "🛡️",
    gradient: "from-[#BFA335] to-[#D4AF37]"
  },
  {
    title: "AI Support",
    description: "Beto is always here. A non-judgmental friend to listen when you need it most.",
    icon: "🤖",
    gradient: "from-[#F988FF] to-[#535BFE]"
  },
  {
    title: "Daily Check-ins",
    description: "Track your mood, journal your thoughts, and receive curated affirmations for your recovery.",
    icon: "📓",
    gradient: "from-[#886EF0] to-[#6A00FF]"
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#160035]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Tools for your <span className="text-gradient">Peace of Mind</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to stay strong and focused on yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#1A1A26] border border-white/5 hover:border-[#886EF0]/30 transition-all group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#886EF0] transition-colors">{f.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[40px] bg-[#1A1A26] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#886EF0]/10 rounded-full blur-3xl"></div>
           <div className="relative z-10 max-w-lg space-y-6 text-center md:text-left">
             <h3 className="text-3xl font-bold">Privacy is our <span className="text-[#886EF0]">Non-Negotiable.</span></h3>
             <p className="text-white/60">
               Your Bad Stuff Log, Simulated Messages, and Journal entries are stored <strong>strictly on your device</strong>. We don't see them. AI doesn't see them. They stay with you.
             </p>
             <button
               onClick={() => window.location.hash = 'privacy'}
               className="text-[#886EF0] font-bold flex items-center space-x-2 hover:underline"
             >
               <span>Read our privacy policy</span>
               <span>→</span>
             </button>
           </div>
           <div className="relative mt-8 md:mt-0">
             <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
               <span className="text-6xl">🔒</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
