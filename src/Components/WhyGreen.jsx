import { CircleCheck } from 'lucide-react';
import React from 'react';

const WhyGreen = () => {
    return (
        <section className="
      py-12 sm:py-16 md:py-20 
      mt-8 sm:mt-10 
      bg-emerald-900 text-white 
      relative overflow-hidden 
      w-full sm:w-11/12 mx-auto 
      mb-12 sm:mb-16 lg:mb-20 
      rounded-xl sm:rounded-2xl 
      shadow-2xl 
      border-2 sm:border-4 border-emerald-800/50
    ">

            {/* Decorative Circles */}
            <div className="
        absolute top-0 right-0 
        -mr-16 sm:-mr-20 -mt-16 sm:-mt-20 
        w-72 sm:w-96 h-72 sm:h-96 
        bg-emerald-800 
        rounded-full opacity-40 sm:opacity-50 
        blur-3xl
      "></div>

            <div className="
        absolute bottom-0 left-0 
        -ml-16 sm:-ml-20 -mb-16 sm:-mb-20 
        w-60 sm:w-80 h-60 sm:h-80 
        bg-emerald-950 
        rounded-full opacity-40 sm:opacity-50 
        blur-3xl
      "></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-20">

                    {/* IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
                            alt="Nature"
                            className="
                w-full 
                h-64 sm:h-80 md:h-96 lg:h-full 
                object-cover 
                rounded-xl sm:rounded-2xl 
                shadow-2xl 
                border-2 sm:border-4 border-emerald-800/50
              "
                        />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-bold mb-4 sm:mb-6
            ">
                            Why Go Green?
                        </h2>

                        <p className="
              text-emerald-100 
              text-base sm:text-lg 
              mb-6 sm:mb-8 
              leading-relaxed
            ">
                            Sustainable living isn't just about saving the planet; it's about improving the quality of life for everyone.
                            Small changes in our daily routine can lead to massive global impact.
                        </p>

                        <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                            <li className="flex gap-2 sm:gap-3 items-start">
                                <CircleCheck className="min-w-[20px] text-emerald-400" />
                                Reduce your carbon footprint immediately.
                            </li>

                            <li className="flex gap-2 sm:gap-3 items-start">
                                <CircleCheck className="min-w-[20px] text-emerald-400" />
                                Save money through energy efficiency.
                            </li>

                            <li className="flex gap-2 sm:gap-3 items-start">
                                <CircleCheck className="min-w-[20px] text-emerald-400" />
                                Improve personal health and well-being.
                            </li>

                            <li className="flex gap-2 sm:gap-3 items-start">
                                <CircleCheck className="min-w-[20px] text-emerald-400" />
                                Preserve nature for future generations.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyGreen;
