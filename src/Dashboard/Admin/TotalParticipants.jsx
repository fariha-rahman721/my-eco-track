import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import { Toaster } from 'react-hot-toast';
import { Calendar, User } from 'lucide-react';

const TotalParticipants = () => {
    const { user } = useContext(AuthContext);
    const [participants, setParticipants] = useState([]);
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
                setParticipants(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [user]);

    if (loading) return <Loading />;

    return (
        <div className="max-w-7xl mx-auto mt-6 p-4">
            <h1 className="text-2xl text-green-900 font-bold mb-6">
               My Total Participation ({participants.length})
            </h1>

            {participants.length === 0 && (
                <p className="text-gray-500">No participants have joined yet.</p>
            )}

            <div className="space-y-4">
                {participants.map((p) => (
                    <div
                        key={p._id}
                        className="flex justify-between items-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex gap-4 items-center">
                            {p.userPhoto ? (
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={p.userPhoto}
                                    alt={p.userName || p.createdBy}
                                />
                            ) : (
                                <User className="w-12 h-12 text-gray-400" />
                            )}
                            <div>
                                <h2 className="text-lg font-bold text-emerald-900">Author is {p.authorName || 'No Name'}</h2>
                                <p className="text-sm text-gray-600">{p.createdBy}</p>
                                <p className="text-sm text-gray-500 mt-1">
                                    Challenge: {p.title} ({p.category})
                                </p>
                                <p className="text-xs text-gray-400">
                                    Joined: {new Date(p.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-end gap-4">
                            <span className="text-sm font-semibold text-emerald-900">
                                My Participation {p.participants || 0}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <Toaster />
        </div>
    );
};

export default TotalParticipants;
