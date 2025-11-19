import React from 'react';
import Navbar from '../../Components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Hero from '../../Components/Hero';


const Home = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <Hero key={data._id} data={data}></Hero>
            
        </div>
    );
};

export default Home;