import { CircleCheck } from 'lucide-react';
import React from 'react';

const WhyGreen = () => {
    return (
        <section className="py-20 mt-10 bg-emerald-900 text-white relative overflow-hidden w-11/12 mx-auto lg:w-11/12 mb-20 rounded-2xl shadow-2xl border-4 border-emerald-800/50">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-950 rounded-full opacity-50 blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
                            alt="Nature"
                            className="rounded-2xl shadow-2xl border-4 border-emerald-800/50"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Go Green?</h2>
                        <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
                            Sustainable living isn't just about saving the planet; it's about improving the quality of life for everyone.
                            Small changes in our daily routine can lead to massive global impact.
                        </p>
                        <ul className="space-y-4">
                            <li className='flex gap-2'><CircleCheck /> Reduce your carbon footprint immediately.</li>
                            <li className='flex gap-2'><CircleCheck />  Save money through energy efficiency..</li>
                            <li className='flex gap-2'><CircleCheck /> Improve personal health and well-being.</li>
                            <li className='flex gap-2'><CircleCheck /> Preserve nature for future generations.</li>
                        

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyGreen;