
import React from 'react';

const base = import.meta.env.BASE_URL;

const featureList = [
  {
    title: "No-Contact Tracker",
    description: "A real-time timer to celebrate your discipline. Watch the days, hours, and minutes add up as you stay strong on your healing journey.",
    image: `${base}feature_time_tracking.png`,
  },
  {
    title: "Milestones & Badges",
    description: "Unlock 11 beautiful badges as you progress — from Day 1 to Day 180. Each milestone celebrates your strength: Cycle Breaker, Heart Guardian, Inner Anchor, and beyond.",
    image: `${base}feature_milestone.png`,
  },
  {
    title: "Breathing Exercises",
    description: "When urges hit, Beto guides you through calming breathing exercises. Exhale the past and find your center again.",
    image: `${base}feature_breathe.png`,
  },
  {
    title: "Bad Stuff Log",
    description: "Store reminders of why you left. Photos, screenshots, notes — private memories that keep you grounded when you're tempted to forget.",
    image: `${base}feature_bad_stuff.png`,
  },
  {
    title: "Fake Send",
    description: "Write the message you want to send — then don't. Get it out of your system without breaking your streak or your boundaries.",
    image: `${base}feature_fake_sent.png`,
  },
  {
    title: "Mood Check-in",
    description: "How does your heart feel right now? Track your emotions daily and watch your healing progress over time.",
    image: `${base}feature_mood_checkin.png`,
  },
  {
    title: "AI Coaching",
    description: "Weekly guided programs to help you through waves of withdrawal. Structured support with actionable steps for each stage of recovery.",
    image: `${base}feature_coaching.png`,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#160035]/30">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Tools for your <span className="text-gradient">Peace of Mind</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to stay strong and focused on yourself.
          </p>
        </div>

        <div className="space-y-20">
          {featureList.map((feature, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto`}
              >
                {/* Screenshot */}
                <div className="flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-64 md:w-72"
                  />
                </div>

                {/* Content */}
                <div className="text-center md:text-left space-y-4 max-w-md">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    <span className="text-gradient">{feature.title}</span>
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
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
