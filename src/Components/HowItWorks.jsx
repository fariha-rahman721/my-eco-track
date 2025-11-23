import { BarChart3, Flag, Share2 } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
    const steps = [
    {
      icon: <Flag className="w-8 h-8 text-emerald-600" />,
      title: "Join a Challenge",
      desc: "Browse our active challenges and pick one that suits your lifestyle."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
      title: "Track Progress",
      desc: "Log your daily actions and see your impact statistics grow in real-time."
    },
    {
      icon: <Share2 className="w-8 h-8 text-emerald-600" />,
      title: "Share Tips",
      desc: "Connect with the community, share advice, and inspire others."
    }
  ];
    return (
        <section className="m-15 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center mb-6 group hover:border-emerald-500 transition-colors duration-300">
                <div className="p-4 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowItWorks;