import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../../Components/Navbar';
import SingleChallenge from './SingleChallenge';
import Footer from '../../Components/Footer';

const ChallengeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); // match your route param
    const [details, setDetails] = useState({});

    useEffect(() => {
        const singleChallenge = data.find(singleData => singleData._id === id);
        setDetails(singleChallenge);
    }, [data, id]);

    return (
        <div className="">
            <header>
                <Navbar />
            </header>

            <main className="w-11/12 mx-auto md:w-11/12 lg:w-11/12">
                <SingleChallenge key={id} details={details} />
            </main>

            <Footer />
        </div>
    );
};

export default ChallengeDetails;
