import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import AllCard from '../../Components/AllCard';
import { useLoaderData } from 'react-router';
import Footer from '../../Components/Footer';


const Challenges = () => {
    const data = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = [...new Set(data.map(item => item.category))];

    const filteredChallenges =
        selectedCategory === ""
            ? data
            : data.filter(item => item.category === selectedCategory);

    return (
        <div>
            <Navbar />

            <section>
                <h1 className="text-3xl font-bold text-green-900 m-10">
                    All Active Challenges
                </h1>

                <div className="space-y-6">
                    {/* Dropdown */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="select select-bordered w-full max-w-md"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {filteredChallenges.length > 0 ? (
                            filteredChallenges.map((card) => (
                                <AllCard key={card._id} card={card} />
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">
                                No challenges found for this category
                            </p>
                        )}
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};


export default Challenges;