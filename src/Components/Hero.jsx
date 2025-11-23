import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const Hero = ({ banners }) => {
    return (
        <div className="w-11/12 mx-auto h-[350px] md:h-[500px] md:w-11/12 md:mx-auto lg:h-[600px] lg:w-11/12 lg:mx-auto">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 2000 }}
                effect="fade"
                pagination={{ clickable: true }}
                loop={true}
                className="h-full"
            >
                {banners.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div
                            className="relative w-full h-full bg-cover bg-center bg-no-repeat  overflow-hidden"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                        >
                            {/* Dark Overlay - Increased opacity slightly for text readability */}
                            <div className="absolute inset-0 bg-black/60 z-10"></div>

                            {/* Content Container */}
                            <div className="relative z-20 h-full flex flex-col justify-center items-start text-left text-white px-8 md:px-16 lg:px-20">
                                
                                {/* Featured Challenge Badge */}
                                <div className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                                    Featured Challenge
                                </div>

                                {/* Title */}
                                <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
                                    {item.title}
                                </h1>

                                {/* Target/Description */}
                                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                                    {item.target}
                                </p>

                                {/* Action Area: Button & Impact */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                                        View Challenge 
                                        <span>&rarr;</span>
                                    </button>

                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Impact</span>
                                        <p className="font-bold text-lg text-emerald-400 flex items-center gap-1">
                                            {item.impactMetric}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;