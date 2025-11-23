import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AllCard = ({ card }) => {
    const { title, category, description, imageUrl, impactMetrics, target } = card;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative h-full w-full"
        >
           
            <div className="card flex-col md:flex-row card-side bg-base-100 shadow-xl h-full overflow-hidden border border-base-content/10 transition-all duration-500 hover:shadow-2xl hover:border-primary/30 rounded-none md:rounded-xl group-hover:-translate-y-1">

             
                <div className="relative w-full md:w-3/5 overflow-hidden">
                    <motion.img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-64 sm:h-56 md:h-60 lg:h-72 xl:h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-widest uppercase text-base-content shadow-sm">
                        {category}
                    </div>
                </div>

                {/* Text Side */}
                <div className="card-body w-full md:w-3/5 p-4 md:p-6 flex flex-col justify-between relative bg-gradient-to-br-from-base-100 to-base-200">
                    {/* Decorative watermark */}
                    <div className="absolute -right-4 -bottom-4 text-6xl md:text-8xl opacity-5 pointer-events-none select-none">
                        {impactMetrics}
                    </div>

                    <div>
                        <h3 className="text-xs font-bold tracking-widest text-primary mb-2 uppercase opacity-70">
                            {target}
                        </h3>
                        <h2 className="card-title text-xl sm:text-2xl md:text-3xl mb-4 relative z-10">
                            {title}
                        </h2>
                        <p className="text-sm sm:text-base md:text-base text-base-content/70 leading-relaxed line-clamp-3 relative z-10">
                            {description}
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-4 md:mt-6 items-center">
                        <button className="btn btn-ghost btn-sm gap-2 group-hover:text-primary transition-colors pl-0">
                            Explore
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AllCard;
