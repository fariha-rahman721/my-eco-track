import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router";

const Hero = ({ banners }) => {
    return (
        <div
            className="h-[260px] sm:h-[350px] md:h-[500px] lg:h-[600px]"
            style={{
                width: "100vw",
                maxWidth: "100vw",
                marginLeft: "calc(-50vw + 50%)",
            }}
        >

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
                            className="relative w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                        >

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/60 z-10" />

                            {/* Content Container */}
                            <div className="relative z-20 h-full flex flex-col justify-center items-start 
              text-left text-white 
              px-4 sm:px-8 md:px-16 lg:px-20">

                                {/* Featured Challenge Badge */}
                                <div
                                    className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 
                  text-[10px] sm:text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 sm:mb-4 
                  uppercase tracking-wide"
                                >
                                    Featured Challenge
                                </div>

                                {/* Title */}
                                <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight max-w-[95%] sm:max-w-[80%]">
                                    {item.title}
                                </h1>

                                {/* Target/Description */}
                                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-5 sm:mb-8 max-w-sm sm:max-w-md md:max-w-lg">
                                    {item.target}
                                </p>

                                {/* Action Area */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">

                                    <Link
                                        to="/challenges"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-white 
                                                px-6 sm:px-8 py-2.5 sm:py-3 
                                                text-sm sm:text-base 
                                                rounded-full font-semibold transition-colors 
                                                flex items-center gap-2"
                                    >
                                        View Challenge
                                        <span>&rarr;</span>
                                    </Link>

                                    <div className="flex flex-col">
                                        <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                            Impact
                                        </span>
                                        <p className="font-bold text-base sm:text-lg md:text-xl text-emerald-400 flex items-center gap-1">
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
