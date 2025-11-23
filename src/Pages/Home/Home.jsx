import React from 'react';

import { Link, Outlet, useLoaderData } from 'react-router';
import Hero from '../../Components/Hero';
import AllCard from '../../Components/AllCard';
import Footer from '../../Components/Footer';
import CommunityImpacts from '../../Components/HowItWorks';
import { ArrowRightIcon } from 'lucide-react';
import CommunityTips from '../../Components/CommunityTips';
import WhyGreen from '../../Components/WhyGreen';
import UpcomingEvents from '../../Components/UpcomingEvents';
import HowItWorks from '../../Components/HowItWorks';


const Home = () => {
    const data = useLoaderData();
    
    
    return (
        <div>
             <Hero banners={data} />

            
             
             {/* card */}
             <div className="">
               <h1 className='text-3xl font-bold text-green-900 m-10'>Active Challenges</h1>
             <div className="w-11/12 mx-auto grid grid-cols-1 lg:w-11/12 lg:grid-cols-2 gap-6 p-2">
             
                {data.slice(0, 5).map(card => (
                    <AllCard key={card._id} card={card} />
                ))}
                <Link to='/challenges' className="bg-stone-100 rounded-xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center p-6 text-center min-h-[300px] hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mb-4 group-hover:bg-emerald-100 text-stone-400 group-hover:text-emerald-600 transition-colors">
                <ArrowRightIcon />
              </div>
              <h3 className="text-stone-600 font-semibold group-hover:text-emerald-700">Discover More</h3>
              <p className="text-xs text-stone-400 mt-1">Browse 50+ other challenges</p>
           </Link>
            </div>
            </div>

           
             {/* why green */}
            <WhyGreen></WhyGreen>

              {/* community impacts */}

            <HowItWorks data={data}></HowItWorks>
             
            {/* community tips */}
            
            <CommunityTips data={data}></CommunityTips>
           


           {/* upcoming events */}
            
              
              <div>
              <UpcomingEvents data={data}></UpcomingEvents>
              </div>


           



            <Footer></Footer>
        </div>
    );
};

export default Home;