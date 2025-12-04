import { Calendar, MessageSquare, ThumbsUp, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const CommunityTips = () => {
    const [tips, setTips] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const [commentText, setCommentText] = useState('');

    // Local storage for likes
    const getStoredLikes = () => {
        const saved = localStorage.getItem('communityLikes');
        return saved ? JSON.parse(saved) : {};
    };

    // Local storage for comments
    const getStoredComments = () => {
        const saved = localStorage.getItem('communityComments');
        return saved ? JSON.parse(saved) : {};
    };

    const [likes, setLikes] = useState(getStoredLikes());
    const [comments, setComments] = useState(getStoredComments());

    useEffect(() => {
        fetch('https://eco-track-server-two.vercel.app/communityTips')
            .then(res => res.json())
            .then(data => setTips(data));
    }, []);

    // Save likes to localStorage
    useEffect(() => {
        localStorage.setItem('communityLikes', JSON.stringify(likes));
    }, [likes]);

    // Save comments to localStorage
    useEffect(() => {
        localStorage.setItem('communityComments', JSON.stringify(comments));
    }, [comments]);

    // Like
    const handleLike = (id) => {
        setLikes(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    // cmnt box open
    const handleOpenComment = (id) => {
        setActiveComment(id);
    };

    // submit comment
    const handleSubmitComment = (id) => {
        if (!commentText.trim()) {
            toast.error("Please write something first");
            return;
        }

        setComments(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));

        toast.success("Your comment submitted ✅");
        setCommentText('');
        setActiveComment(null);
    };

    return (
        <div className="w-11/12 mx-auto ">
            <Toaster />

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-green-900">Community Tips</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip) => {
                    const totalLikes = tip.upvotes + (likes[tip._id] || 0);
                    const totalComments = comments[tip._id] || 0;

                    return (
                        <article
                            key={tip._id}
                            className="group relative bg-white flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{new Date(tip.createdAt).toLocaleDateString()}</span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase">
                                    Dev
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700">
                                {tip.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                {tip.content}
                            </p>

                            {/* cmnt */}
                            {activeComment === tip._id && (
                                <div className="mb-4 bg-slate-50 p-4 rounded-xl">
                                    <div className="flex justify-between items-start">
                                        <textarea
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            placeholder="Write your comment..."
                                            className="w-full p-2 border rounded-md text-sm outline-none"
                                            rows="3"
                                        />
                                        <button
                                            onClick={() => setActiveComment(null)}
                                            className="ml-2 text-slate-400 hover:text-red-500"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => handleSubmitComment(tip._id)}
                                        className="mt-3 bg-emerald-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-emerald-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}

                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
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

                                <div className="flex items-center gap-4">


                                    <button
                                        onClick={() => handleLike(tip._id)}
                                        className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-600"
                                    >
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="text-xs font-medium">{totalLikes}</span>
                                    </button>


                                    <button
                                        onClick={() => handleOpenComment(tip._id)}
                                        className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        <span className="text-xs font-medium">{totalComments}</span>
                                    </button>

                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default CommunityTips;
