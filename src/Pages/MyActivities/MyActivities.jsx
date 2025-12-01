import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';

import { use, useEffect, useState } from 'react';
import { ArrowRight, Calendar, Flame } from 'lucide-react';
import Swal from 'sweetalert2';
import Footer from '../../Components/Footer';

const MyActivities = () => {
    const { user } = use(AuthContext);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-activities?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setActivities(data);
                setLoading(false);
            });
    }, [user]);

    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                
                fetch(`http://localhost:3000/my-activities/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);

                       
                        setActivities(activities.filter((item) => item._id !== id));

                        Swal.fire("Deleted!", "Your challenge has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Navbar />

            <div className="card w-11/12 mx-auto p-6">

                <h1 className="text-4xl font-extrabold text-green-900 tracking-tight mt-5">
                    Welcome back, {user?.displayName?.split(' ')[0] || 'User'}
                </h1>

                <p className="text-slate-500 mt-2 text-lg">
                    Here's an overview of your sustainability journey.
                </p>

                <h1 className="text-3xl text-green-950 font-bold mt-12">
                    My Joined Challenges
                </h1>

                <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-2 mt-6">
                    {activities.map((card) => {

                        const impact = parseFloat(card.impactMetric) || 0;
                        const duration = card.duration || 0;
                        const participants = card.participants || 0;
                        const upVotes = parseInt(card.upVotes) || 0;

                        return (
                            <div
                                key={card._id}
                                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 space-y-6"
                            >
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="rounded-2xl h-48 w-full object-cover mb-5 shadow"
                                />

                                <h2 className="text-2xl font-bold text-gray-900">
                                    {card.title}
                                </h2>

                                <span className="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                                    {card.category}
                                </span>

                                <p className="text-gray-600 leading-relaxed mt-2">
                                    {card.description}
                                </p>

                                <div className="stats shadow bg-slate-50 rounded-xl p-4 grid grid-cols-4 gap-3">

                                    <div className="stat">
                                        <div className="stat-title text-xs">Plastic Saved</div>
                                        <div className="stat-value text-green-700 text-lg">
                                            {impact} kg
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title text-xs">Duration</div>
                                        <div className="stat-value text-blue-600 text-lg">
                                            {duration} days
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title text-xs ">Participants</div>
                                        <div className="stat-value text-purple-700 text-lg">
                                            {participants}
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title text-xs">Upvotes</div>
                                        <div className="stat-value text-orange-600 text-lg">
                                            {upVotes}
                                        </div>
                                    </div>

                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="bg-orange-50 p-2 text-orange-600 rounded-3xl flex justify-center items-center font-semibold gap-2">
                                        <Flame className="w-4 h-4" /> {card.impactMetric}
                                    </p>

                                    <p className="bg-amber-100 rounded-3xl p-2 text-slate-400 flex gap-2">
                                        <Calendar className="w-4 h-4" /> {card.startDate}
                                    </p>
                                </div>

                                {/* DELETE BUTTON — passes id */}
                                <button
                                    onClick={() => handleDelete(card._id)}
                                    className="mt-1 w-full py-2.5 flex items-center justify-center gap-2 bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-600 font-semibold rounded-xl transition-all duration-300 text-sm"
                                >
                                    Remove Challenge <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyActivities;
