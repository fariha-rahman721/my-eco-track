import React from 'react';
import { NavLink } from 'react-router';
import Footer from './Footer';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            
            <div className="bg-emerald-900 text-white px-4 flex justify-between items-center" style={{
                width: "100vw",
                maxWidth: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                backgroundColor: "#064e3b", 
            }}>
                <div className="flex gap-2 items-center font-bold">
                    <img className='w-10 h-10 rounded-full' src={`/logo.jpeg`} alt="" />
                 <span>Eco-Track</span>
                </div>
              <NavLink to="/">Home</NavLink>
            </div>
            
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-7">
                
                
                <div>
                    <h1 className="text-4xl sm:text-4xl font-bold text-emerald-900 mb-6">
                       Learn more about <br />Eco-Track
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Eco-Track is a sustainability-driven platform built to inspire
                        eco-conscious behavior through structured challenges and
                        progress tracking. It transforms small, everyday actions into
                        measurable environmental impact.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        By participating in green challenges and monitoring activities,
                        users become part of a growing community committed to building
                        a healthier and more sustainable future. Eco-Track proves that
                        consistency drives real change, not perfection.
                    </p>
                </div>

              
                <div className="flex justify-center">
                    <img
                        src={`/p4.jpeg`}
                        alt="Eco sustainability"
                        className="rounded-2xl shadow-xl w-full max-w-md object-cover"
                    />
                </div>

            </section>
            <div className=" grid grid-cols-1 gap-4 mt-8 mb-8">
                <div className="flex gap-4 justify-center items-center">
                    <img className='w-1/2' src={`/p5.jpeg`} alt="" />
                    <div className="">
                        <h1 className='text-2xl font-bold'>Small Actions, Big Environmental Impact</h1>
                        <p>Eco-track works for the power of simple, conscious choices in building a sustainable future. Just as small blocks form the foundation of the word “Eco,” Eco-Track encourages users to take manageable, everyday actions like reducing waste, conserving energy, or participating in green challenges that collectively lead to meaningful environmental change. Sustainability starts with intention, and Eco-Track helps turn intention into action.</p>
                    </div>
                </div>

                <div className="flex gap-4 justify-center items-center mt-8 mb-8">
                    
                    <div className="">
                        <h1 className='text-2xl font-bold'>Protecting Nature Through Responsibility</h1>
                        <p>The thriving tree safeguarded within a transparent sphere symbolizes Earth's fragile ecosystem and our shared responsibility to protect it. Eco-Track empowers individuals to understand their environmental impact and take proactive steps toward preservation. By tracking eco-friendly activities, users become active guardians of nature, ensuring a healthier planet for future generations.</p>
                    </div>
                    <img className='w-1/2' src={`/p2.jpeg`} alt="" />
                </div>
               
                <div className="flex gap-4 justify-center items-center mt-8 mb-8">
                    <img className='w-1/2' src={`/p1.jpeg`} alt="" />
                    <div className="">
                        <h1 className='text-2xl font-bold'> Promoting a Circular and Sustainable Lifestyle</h1>
                        <p>The concept of circular sustainability where resources are reused, emissions are reduced, and growth aligns with environmental balance. Eco-Track promotes responsible consumption and long-term habits through structured challenges and progress tracking. The platform connects individual actions to global sustainability goals, making eco-living measurable and rewarding.</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    
                    <div className="mt-8 mb-8">
                        <h1 className='text-2xl font-bold'>Reducing Carbon Footprint for a Greener Tomorrow</h1>
                        <p>By lowering CO₂ emissions through renewable energy, clean transportation, and conscious choices. Eco-Track helps users monitor their eco-activities and understand how small behavioral changes contribute to carbon reduction. By visualizing impact, the platform motivates users to stay consistent and committed to building a greener, cleaner future.</p>
                    </div>
                    <img className='w-1/2' src={`/p3.jpeg`} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
