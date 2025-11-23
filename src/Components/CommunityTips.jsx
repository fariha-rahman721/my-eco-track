import { MessageSquare, ThumbsUp } from 'lucide-react';
import React from 'react';

const CommunityTips = ({ data }) => {
  return (
    <div className="w-11/12 mx-auto ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-green-900 ">Community Tips</h2>
        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          View Forum
        </button>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(0, 5).map((tip) => (
          <div
            key={tip.id}
            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Title & Date */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 hover:text-emerald-600 cursor-pointer">
                {tip.title}
              </h3>
              <span className="text-xs text-gray-400">{tip.createdAt}</span>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm mb-4">{tip.content}</p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                By {tip.authorName}
              </span>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-600">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{tip.upvotes}</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reply</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityTips;
