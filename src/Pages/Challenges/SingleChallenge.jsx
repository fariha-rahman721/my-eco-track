import { Calendar, Clock, Heart, Leaf, Share2, Target, Trophy } from 'lucide-react';
import React, { use, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router';

const SingleChallenge = ({ details }) => {
    const { user } = use(AuthContext);
    const [joined, setJoined] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        if (!user?.email) return;
        fetch(`https://eco-track-server-two.vercel.app/cards/${details._id}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const isJoined = data.participants?.some(
                    (participant) => participant.createdBy === user?.email
                );
                setJoined(isJoined);
            });
    }, [user, refetch]);

    const handleJoin = () => {
        const finalJoined = {
            title: details.title,
            category: details.category,
            imageUrl: details.imageUrl,
            duration: details.duration,
            impactMetric: details.impactMetric,
            target: details.target,
            startDate: details.startDate,
            endDate: details.endDate,
            authorName: details.authorName,
            upVotes: details.upVotes,
            description: details.description,
            createdAt: new Date().toISOString(),
            participants: details.participants,
            createdBy: user?.email,
        };

        fetch(`https://eco-track-server-two.vercel.app/join-challenges/${details._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${user?.accessToken}`,
            },
            body: JSON.stringify(finalJoined),
        })
            .then((res) => res.json())
            .then(() => {
                setJoined(true);
                toast.success('Challenge Joined Successfully!');
                setRefetch(!refetch);
            })
            .catch(() => {
                toast.error('Something went wrong!');
            });
    };

    return (
        <div className="">
            <div className="card shadow-sm bg-gray-100 flex flex-col md:flex-row justify-between w-full rounded-lg overflow-hidden">

                <figure className="w-full md:w-1/2">
                    <img
                        className="w-full h-64 md:h-full object-cover"
                        src={details?.imageUrl}
                        alt={details.title}
                    />
                </figure>


                <div className="card-body w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-2">
                            {details.title}
                        </h2>
                        <div className="flex flex-wrap items-center text-slate-500 text-sm gap-4">
                            <div className="flex items-center">
                                <Calendar size={14} className="mr-1.5" />
                                <span>
                                    {details.startDate} - {details.endDate}
                                </span>
                            </div>
                            <div className="flex items-center text-emerald-600 font-medium">
                                <Clock size={14} className="mr-1.5" />
                                <span>{details.duration} Days</span>
                            </div>
                        </div>
                    </div>

                    {/* Target & Impact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                            <div className="flex items-center mb-1 text-emerald-800 font-medium">
                                <Trophy size={16} className="mr-2" /> Target
                            </div>
                            <p className="text-sm text-emerald-600/80">{details.target}</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            <div className="flex items-center mb-1 text-blue-800 font-medium">
                                <Leaf size={16} className="mr-2" /> Impact
                            </div>
                            <p className="text-sm text-blue-600/80">{details.impactMetric}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">
                            About Challenge
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                            {details.description}
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between gap-6 items-center">
                        {/* Author Info */}
                        <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                            <div className="rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm mr-3 p-3">
                                {details.authorName[0]}
                            </div>
                            <div className="text-sm">
                                <p className="font-medium text-slate-900">{details.authorName}</p>
                                <p className="text-slate-500 text-xs">Organizer</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                            <div className="flex items-center space-x-1 text-slate-400 text-sm mr-2">
                                <Heart size={18} className="text-rose-500 fill-rose-500" />
                                <span className="font-medium text-slate-600">{details.upVotes}</span>
                            </div>

                            <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl border border-slate-200 transition">
                                <Share2 size={20} />
                            </button>

                            <button
                                onClick={handleJoin}
                                disabled={joined}
                                className={`px-8 py-3 rounded-xl font-semibold shadow-lg transition active:scale-95 flex items-center justify-center group
                ${joined ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                            >
                                <span>{joined ? 'Joined' : 'Join Challenge'}</span>
                                {!joined && <Target size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                            </button>

                            <Link
                                to={`/updateChallenge/${details._id}`}
                                className="btn bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 w-18 rounded-2xl"
                            >
                                Update Challenge
                            </Link>
                        </div>
                    </div>
                </div>


                <Toaster />
            </div>
            <section className='mt-8'>
                <div className="">
                    <h1 className='text-xl font-bold text-emerald-900'>{details.h1}</h1>
                    <p className='text-gray-700 m-4'>{details.intro}</p>
                    <div className="flex gap-4 mt-6">
                        <img className='w-1/2 h-70' src={details.img1} alt="" />
                        <img className='w-1/2 h-70' src={details.img2} alt="" />
                    </div>
                    
                </div>
                
            </section>
        </div>
    );
};

export default SingleChallenge;
