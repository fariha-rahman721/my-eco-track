import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../../Components/Navbar';
import SingleChallenge from './SingleChallenge';
import Footer from '../../Components/Footer';

const ChallengeDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    
    const details = data.find(item => String(item._id) === String(id));

    return (
        <div>
            <Navbar />

            <main className="w-11/12 mx-auto mt-8 md:w-11/12 lg:w-11/12">
                {details ? (
                    <SingleChallenge details={details} />
                ) : (
                    <p className="text-center mt-10">Challenge not found...</p>
                )}
            </main>

            

            <Footer />
        </div>
    );
};

export default ChallengeDetails;
