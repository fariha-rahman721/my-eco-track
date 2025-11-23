import React from 'react';
import { MapPin } from 'lucide-react';

const UpcomingEvents = ({ data }) => {
  return (
    <div className='w-11/12 mx-auto lg:w-11/12 lg:mx-auto'>
      <div className="flex items-center justify-between m-12 ">
        <h2 className="text-3xl font-bold text-green-900">Upcoming Events</h2>
        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Calendar</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {data.slice(8, 12).map((event) => {
          const dateParts = event.date?.split(" ");
          const month = dateParts?.[0] || "";
          const day = dateParts?.[1]?.replace(",", "") || "";

          return (
            <div 
              key={event.id || event._id || event.title}
              className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* Date Badge */}
              <div className="w-24 bg-emerald-50 flex flex-col items-center justify-center p-4 border-r border-emerald-100 group-hover:bg-emerald-600 transition-colors">
                <span className="text-sm font-bold text-emerald-600 group-hover:text-emerald-200 uppercase tracking-wider">
                  {month}
                </span>
                <span className="text-2xl font-bold text-gray-900 group-hover:text-white">
                  {day}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{event.title}</h3>

                <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Newsletter CTA Mini-Section */}
      <div className=" mt-10 p-6 bg-emerald-900 rounded-2xl text-white text-center">
        <h3 className="font-bold text-xl mb-2">Never miss an update</h3>
        <p className="text-emerald-100 text-sm mb-4">Get the latest eco-tips and event invites.</p>

        <div className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button className="bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
