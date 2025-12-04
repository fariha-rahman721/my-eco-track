import Navbar from '../../Components/Navbar';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Components/Loading';

import { use, useEffect, useState } from 'react';
import { ArrowRight, Calendar, Flame } from 'lucide-react';
import Swal from 'sweetalert2';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router';

const MyActivities = () => {


    const { user } = use(AuthContext);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-activities?email=${user?.email}`, {
            method: "GET",
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:3000/my-activities/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${user?.accessToken}`,
                    }

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            const remaining = activities.filter(item => item._id !== id);
                            setActivities(remaining);
                            Swal.fire("Deleted!", "Your challenge has been deleted.", "success");
                        }
                        navigate("/challenges");
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

                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-2 md:p-4 lg:p-6">
                    {activities.map((card) => {
                        const impact = parseFloat(card.impactMetric) || 0;
                        const duration = card.duration || 0;
                        const participants = card.participants || 0;
                        const upVotes = parseInt(card.upVotes) || 0;

                        return (
                            <div
                                key={card._id}
                                className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                            >
                                {/* IMAGE */}
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
                                />

                                {/* CONTENT */}
                                <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-4">
                                    {/* TITLE & CATEGORY */}
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900">
                                        {card.title}
                                    </h2>
                                    <span className="px-3 py-1 text-xs sm:text-sm md:text-sm lg:text-sm font-semibold rounded-full bg-emerald-100 text-emerald-700">
                                        {card.category}
                                    </span>

                                    {/* DESCRIPTION */}
                                    <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed">
                                        {card.description}
                                    </p>

                                    {/* STATS */}
                                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 bg-slate-50 p-3 sm:p-4 md:p-4 rounded-xl shadow">
                                        <div className="text-center">
                                            <div className="text-xs sm:text-xs md:text-xs text-gray-500">Plastic Saved</div>
                                            <div className="text-green-700 font-bold text-sm sm:text-base md:text-lg">{impact} kg</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs sm:text-xs md:text-xs text-gray-500">Duration</div>
                                            <div className="text-blue-600 font-bold text-sm sm:text-base md:text-lg">{duration} days</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs sm:text-xs md:text-xs text-gray-500">Participants</div>
                                            <div className="text-purple-700 font-bold text-sm sm:text-base md:text-lg">{participants}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs sm:text-xs md:text-xs text-gray-500">Upvotes</div>
                                            <div className="text-orange-600 font-bold text-sm sm:text-base md:text-lg">{upVotes}</div>
                                        </div>
                                    </div>

                                    {/* IMPACT & DATE */}
                                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mt-2">
                                        <p className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-sm bg-orange-50 text-orange-600 rounded-full px-2 py-1">
                                            <Flame className="w-3 h-3 sm:w-4 sm:h-4" /> {card.impactMetric}
                                        </p>
                                        <p className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-sm bg-amber-100 text-slate-400 rounded-full px-2 py-1">
                                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {card.startDate}
                                        </p>
                                    </div>

                                    {/* DELETE BUTTON */}
                                    <button
                                        onClick={() => handleDelete(card._id)}
                                        className="mt-2 w-full py-2 sm:py-2.5 text-sm sm:text-sm md:text-base font-semibold flex items-center justify-center gap-2 bg-slate-50 hover:bg-emerald-600 hover:text-white rounded-xl transition-all duration-300"
                                    >
                                        Remove Challenge <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
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
