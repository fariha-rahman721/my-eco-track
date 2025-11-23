import React from 'react';
import Navbar from '../../Components/Navbar';
import AllCard from '../../Components/AllCard';
import { useLoaderData } from 'react-router';


const Challenges = () => {
    const data = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <section>
                <h1 className='text-3xl font-bold text-green-900 m-10'>All Active Challenges</h1>
             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 mx-auto mb-6">
                {
                    data.map(card => <AllCard key={card._id} card={card}></AllCard>)
                }
            </div>
            </section>
           
        </div>
    );
};

export default Challenges;