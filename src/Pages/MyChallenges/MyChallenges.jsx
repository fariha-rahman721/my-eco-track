import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import { Toaster } from 'react-hot-toast';
import { Calendar, Flame } from 'lucide-react';

const MyChallenges = () => {
    const { user } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://eco-track-server-two.vercel.app/my-activities?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                setActivities(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <Loading />;

    return (
        <div className="max-w-7xl mx-auto mt-6">
            <h1 className="text-2xl text-green-900 font-bold mb-6">My Joined Challenges</h1>

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
                            {/* If you have a challenge image stored */}
                            {activity.imageUrl && (
                                <img className="h-18 w-18 rounded-2xl" src={activity.imageUrl} alt={activity.challengeTitle} />
                            )}
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">{activity.challengeTitle}</h2>
                                <p className="text-sm text-gray-600 mt-1">{activity.challengeCategory}</p>
                                <div className="flex justify-start items-center gap-4 text-xs text-gray-500 mt-2">
                                    <span className="flex items-center gap-1">
                                        <Flame className="w-3 h-3" /> {activity.impactMetric || 'N/A'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {new Date(activity.createdAt).toLocaleDateString()}
                                    </span>
                                    <span>Duration: {activity.duration || 0} days</span>
                                </div>
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

            <Toaster />
        </div>
    );
};

export default MyChallenges;
