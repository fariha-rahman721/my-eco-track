import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Earth } from "lucide-react";

const Hero = ({ banners }) => {
    return (
        <div className="w-11/12 mx-auto h-[350px] md:h-[500px] md:w-11/12 md:mx-auto lg:h-[600px] lg:w-11/12 lg:mx-auto">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 2000 }}
                effect="fade"
                pagination={{ clickable: true }}
                loop={true}
                className="h-full "
            >
                {banners.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div
                            className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                        >
                             <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
                            
                            <div className="relative z-20 flex flex-col justify-center items-center text-center text-white  p-5 rounded-xl">
                                <h1 className="text-3xl  md:text-5xl font-bold mb-3 ">
                                    {item.title}
                                </h1>
                                <p className="text-xl ">{item.target}</p>
                                 <div className="">
                                
                                <p className="font-bold text-2xl flex items-center gap-1"><Earth /> {item.impactMetric}</p>
                                <button className="bg-green-500 hover:bg-green-600 w-40 px-6 py-2 rounded-lg font-semibold mt-3">
                                    View Challenge
                                </button>
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
