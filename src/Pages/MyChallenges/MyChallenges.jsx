import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import AllCard from '../../Components/AllCard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const MyChallenges = () => {
    const {user} = use(AuthContext);
    const [activities, setActivities] = useState([]);
        const [loading, setLoading] = useState(true);

     useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/myChallenges?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${user?.accessToken}`
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                setActivities(data);
                setLoading(false);
            }   )
    }, []);

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="">
            <Navbar></Navbar>

            <h1 className='text-2xl text-green-900 font-bold mt-5'>My Challenges</h1>
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:w-11/12 lg:grid-cols-2 gap-6 p-2 mt-8'>
        
            {activities.map(card => (
                    <AllCard key={card._id} card={card}/>
                ))}
            
        </div>
        <Footer></Footer>
    </div>
    );
};

export default MyChallenges;