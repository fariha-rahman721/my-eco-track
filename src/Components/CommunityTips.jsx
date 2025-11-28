import { Calendar, MessageSquare, ThumbsUp, User } from 'lucide-react';
import { useEffect, useState } from 'react';


const CommunityTips = () => {
  
  const [tips, setTips] = useState([]);

  useEffect(() => {
         
          fetch(`http://localhost:3000/communityTips`,{
             
          })
              .then(res => res.json())
              .then(data => setTips(data));
      }, []);

  return (
    <div className="w-11/12 mx-auto ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-green-900">Community Tips</h2>
        
      </div>

      {/* Tips Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
            <article
                key={tip._id}
                className="group relative bg-white flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
                {/* Decorative Gradient Blob */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div>
                    {/* Meta Header */}
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{tip.createdAt}</span>
                        </div>
                        {/* Category Tag Mockup */}
                        <span className="text-[10px] font-bold tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase">
                            Dev
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug">
                        {tip.title}
                    </h3>

                    {/* Content */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                        {tip.content}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100/80 mt-auto">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                            <User className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-slate-700">
                                {tip.authorName}
                            </span>
                            <span className="text-[10px] text-slate-400">Contributor</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors group/btn">
                            <ThumbsUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span className="text-xs font-medium">{tip.upvotes}</span>
                        </button>

                        <button className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors group/btn">
                            <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </article>
            ))}
        </div>
      ;
    </div>
  );
};

export default CommunityTips;
