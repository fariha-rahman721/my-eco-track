import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';
import { Toaster } from 'react-hot-toast';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD', '#E74C3C'];

const AdminStatistics = () => {
    const { user } = useContext(AuthContext);
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.accessToken) return;

        fetch('https://eco-track-server-two.vercel.app/joined-participants', {
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

    // Participants per category
    const categoryStats = participants.reduce((acc, p) => {
        const cat = p.challengeCategory || 'Uncategorized';
        if (!acc[cat]) acc[cat] = 0;
        acc[cat] += 1;
        return acc;
    }, {});
    const pieData = Object.entries(categoryStats).map(([name, value]) => ({ name, value }));

    // Participants per challenge
    const challengeStats = participants.reduce((acc, p) => {
        const title = p.challengeTitle || 'Untitled';
        if (!acc[title]) acc[title] = 0;
        acc[title] += 1;
        return acc;
    }, {});
    const barData = Object.entries(challengeStats).map(([name, value]) => ({ name, value }));

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-green-900 mb-6">Admin Statistics</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Total Participants</h2>
                    <p className="text-2xl font-bold text-purple-700">{participants.length}</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Total Challenges</h2>
                    <p className="text-2xl font-bold text-orange-600">
                        {[...new Set(participants.map(p => p.challengeId))].length}
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
                    <p className="text-2xl font-bold text-green-700">{Object.keys(categoryStats).length}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pie Chart: Participants per Category */}
                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Participants by Category</h2>
                    {pieData.length === 0 ? (
                        <p className="text-gray-500">No participant data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" />
                            </PieChart>
                        </ResponsiveContainer>
                    )}
                </div>

                {/* Bar Chart: Participants per Challenge */}
                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Participants by Challenge</h2>
                    {barData.length === 0 ? (
                        <p className="text-gray-500">No participant data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} height={60} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default AdminStatistics;
