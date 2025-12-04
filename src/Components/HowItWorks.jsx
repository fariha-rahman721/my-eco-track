import { BarChart3, Flag, Share2 } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Flag className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-emerald-600" />,
      title: "Join a Challenge",
      desc: "Browse our active challenges and pick one that suits your lifestyle."
    },
    {
      icon: <BarChart3 className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-emerald-600" />,
      title: "Track Progress",
      desc: "Log your daily actions and see your impact statistics grow in real-time."
    },
    {
      icon: <Share2 className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-emerald-600" />,
      title: "Share Tips",
      desc: "Connect with the community, share advice, and inspire others."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative">

          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gray-100 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center px-2 sm:px-4">
              <div className="
                w-20 sm:w-24 h-20 sm:h-24 
                bg-white border border-gray-100 rounded-full shadow-lg 
                flex items-center justify-center mb-4 sm:mb-6 
                group hover:border-emerald-500 transition-colors duration-300
              ">
                <div className="p-3 sm:p-4 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-xs sm:max-w-[15rem] md:max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
