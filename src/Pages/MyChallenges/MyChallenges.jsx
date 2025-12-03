import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Toaster } from 'react-hot-toast';
import { Calendar, Flame } from 'lucide-react';


const MyChallenges = () => {
    const { user } = use(AuthContext);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`http://localhost:3000/myChallenges?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setActivities(data);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <Loading />;

    return (
        <div>
            <Navbar />

            <div className="w-11/12 mx-auto mt-6">
                <h1 className="text-2xl text-green-900 font-bold mb-6">My Challenges</h1>

                <div className="space-y-4">
                    {activities.length === 0 && (
                        <p className="text-gray-500">You haven't joined any challenges yet.</p>
                    )}

                    {activities.map(activity => (
                        <div
                            key={activity._id}
                            className="flex justify-between items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-4 items-center">
                                <img className='h-18 w-18 rounded-2xl' src={activity.imageUrl} alt="" />
                                <div className="">
                                <h2 className="text-lg font-bold text-gray-800">{activity.title}</h2>
                                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                </div>
                                <div className="flex justify-center items-center gap-4 text-xs text-gray-500 mt-2">
                                    <span className="flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> {activity.impactMetric || "N/A"}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {new Date(activity.startDate).toLocaleDateString()}
                                    </span>
                                    <span>Duration: {activity.duration || 0} days</span>
                                </div>
                            </div>

                            <div className="flex items-end gap-4">
                                <span className="text-sm font-semibold text-purple-700">
                                    {activity.participants || 0} Participants
                                </span>
                                <span className="text-sm font-semibold text-orange-600">
                                    {activity.upVotes || 0} Upvotes
                                </span>
                            </div>
                             
                        </div>

                    ))}
                </div>
               
            </div>

            <Footer />
            <Toaster />
        </div>
    );
};

export default MyChallenges;
