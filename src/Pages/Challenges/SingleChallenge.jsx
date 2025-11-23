import { Calendar, Clock, Heart, Leaf, Share2, Target, Trophy, X } from 'lucide-react';
import React from 'react';

const SingleChallenge = ({ details }) => {

    

    return (
       <div className="card shadow-sm bg-gray-100 
    flex flex-col md:flex-row justify-between">

    {/* IMAGE */}
    <figure className="w-full md:w-1/2">
        <img
            className="w-full h-64 md:h-full object-cover"
            src={details?.imageUrl}
            alt=""
        />
    </figure>

    {/* RIGHT CONTENT */}
    <div className="card-body w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-10">

        <div className="flex-1 flex flex-col h-full overflow-y-auto scrollbar-hide">

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-2">
                        {details.title}
                    </h2>

                    <div className="flex flex-wrap items-center text-slate-500 text-sm space-x-4">
                        <div className="flex items-center">
                            <Calendar size={14} className="mr-1.5" />
                            <span>{details.startDate} - {details.endDate}</span>
                        </div>

                        <div className="flex items-center text-emerald-600 font-medium">
                            <Clock size={14} className="mr-1.5" />
                            <span>{details.duration} Days</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <div className="flex items-center mb-1 text-emerald-800 font-medium">
                        <Trophy size={16} className="mr-2" />
                        Target
                    </div>
                    <p className="text-sm text-emerald-600/80">{details.target}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                    <div className="flex items-center mb-1 text-blue-800 font-medium">
                        <Leaf size={16} className="mr-2" />
                        Impact
                    </div>
                    <p className="text-sm text-blue-600/80">{details.impactMetric}</p>
                </div>
            </div>

            {/* ABOUT CHALLENGE — FIXED ALIGNMENT */}
            <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    About Challenge
                </h3>

                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                    {details.description}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-auto border-t border-slate-100 pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Author Info */}
                    <div className="flex items-center w-full sm:w-auto">
                        <div className="rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm mr-3 p-3">
                            {details.authorName}
                        </div>

                        <div className="text-sm">
                            <p className="font-medium text-slate-900">{details.authorName}</p>
                            <p className="text-slate-500 text-xs">Organizer</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center w-full sm:w-auto gap-3">
                        <div className="flex items-center space-x-1 text-slate-400 text-sm mr-2">
                            <Heart size={18} className="text-rose-500 fill-rose-500" />
                            <span className="font-medium text-slate-600">{details.upVotes}</span>
                        </div>

                        <button className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl border border-slate-200 transition">
                            <Share2 size={20} />
                        </button>

                        <button className="flex-1 sm:flex-none bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition active:scale-95 flex items-center justify-center group">
                            <span>Join Challenge</span>
                            <Target size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

      
    );
};

export default SingleChallenge;