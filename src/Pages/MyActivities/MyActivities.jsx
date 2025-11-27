// import React, { use, } from 'react';
import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import { use, useEffect, useState } from 'react';
import { Trophy, Leaf, Recycle, Droplet, Flame, ArrowRight } from 'lucide-react';

const MyActivities = () => {
    const { user } = use(AuthContext);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/my-activities?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setActivities(data);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading />;

    // ----------------------------------------
    // 🔥 Dynamic Stats Based Only on Your Data
    // ----------------------------------------

    const totalActivities = activities.length;

    const totalImpact = activities.reduce((sum, item) => {
        const match = item.impactMetric?.match(/(\d+(\.\d+)?)/);
        return sum + (match ? parseFloat(match[1]) : 0);
    }, 0);

    const categories = [...new Set(activities.map(a => a.category))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <Navbar />

            <div className="pt-24 w-11/12 mx-auto pb-20">

                {/* -------------------------------------------------- */}
                {/* 🌿 TOP HEADER SECTION */}
                {/* -------------------------------------------------- */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Your Eco Journey 🌎
                    </h1>
                    <p className="text-gray-600 mt-2 text-lg">
                        Track your actions, impact, and achievements.
                    </p>
                </div>

                {/* -------------------------------------------------- */}
                {/* 🌱 DYNAMIC STATS (No Dummy Numbers) */}
                {/* -------------------------------------------------- */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

                    {/* Total Joined */}
                    <StatCard
                        icon={<Leaf className="w-8 h-8 text-green-600" />}
                        label="Joined Challenges"
                        value={totalActivities}
                        bg="from-green-50 to-white"
                    />

                    {/* Total Impact from your JSON */}
                    <StatCard
                        icon={<Recycle className="w-8 h-8 text-emerald-600" />}
                        label="Total Impact"
                        value={`${totalImpact}+`}
                        bg="from-emerald-50 to-white"
                    />

                    {/* Unique Categories */}
                    <StatCard
                        icon={<Droplet className="w-8 h-8 text-blue-600" />}
                        label="Categories"
                        value={categories.length}
                        bg="from-blue-50 to-white"
                    />
                </div>

                {/* -------------------------------------------------- */}
                {/* 🧩 ALL ACTIVITIES GRID */}
                {/* -------------------------------------------------- */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {activities.map((item, idx) => (
                        <ActivityCard key={idx} data={item} />
                    ))}

                    {activities.length === 0 && (
                        <div className="col-span-2 text-center py-16 bg-white/60 backdrop-blur-xl 
                        rounded-3xl shadow-lg border border-gray-200">
                            <Trophy className="w-14 h-14 mx-auto text-gray-400" />
                            <h2 className="text-2xl font-bold text-gray-800 mt-4">No Activities Yet</h2>
                            <p className="text-gray-500 mt-2">Join a challenge to see it here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/* -------------------------------------------------- */
/* COMPONENT: STAT CARD */
/* -------------------------------------------------- */

const StatCard = ({ icon, label, value, bg }) => (
    <div className={`p-6 rounded-3xl bg-gradient-to-br ${bg} shadow-lg border border-gray-200`}>
        <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                {icon}
            </div>
            <div>
                <p className="text-gray-500 font-medium">{label}</p>
                <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
            </div>
        </div>
    </div>
);

/* -------------------------------------------------- */
/* COMPONENT: ACTIVITY CARD (SUPER UNIQUE) */
/* -------------------------------------------------- */

const ActivityCard = ({ data }) => {
    

    return (
        <div className="group bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-md 
        border border-gray-200 hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300">

            {/* Image */}
            <img
                src={data.imageUrl}
                alt={data.title}
                className="rounded-2xl h-48 w-full object-cover mb-5 shadow"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {data.title}
            </h2>

            {/* Category */}
            <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                {data.category}
            </span>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
                {data.description}
            </p>

            {/* Impact */}
            <div className="mt-5 flex items-center gap-3">
                <Flame className="w-5 h-5 text-orange-600" />
                <p className="font-semibold text-gray-800">
                    Impact: <span className="text-orange-600">{data.impactMetric}</span>
                </p>
            </div>

            {/* Bottom Button */}
            <button className="mt-6 w-full py-3 flex items-center justify-center gap-2 
            bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold 
            rounded-2xl shadow">
                View Details <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    );
};

export default MyActivities;
