import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/upcomingEvents`)
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatDate = (isoDate) => {
    if (!isoDate) return { month: '', day: '' };
    const date = new Date(isoDate);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return { month, day };
  };

  if (loading) {
    return <p className="text-center mt-10 text-sm sm:text-base">Loading events...</p>;
  }

  const handleJoin = () => {
    toast.success('You have successfully joined the event!');
  };

  return (
    <div className='w-full sm:w-11/12 lg:w-10/12 mx-auto px-2 sm:px-4'>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between my-6 sm:my-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4 sm:mb-0">Upcoming Events</h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {events.map((event, index) => {
          const { month, day } = formatDate(event.date);

          return (
            <div
              key={event._id || index}
              className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >

              {/* Date Badge */}
              <div className="w-full sm:w-24 flex-shrink-0 bg-emerald-50 flex flex-row sm:flex-col items-center justify-center sm:justify-center p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-emerald-100 group-hover:bg-emerald-600 transition-colors">
                <span className="text-xs sm:text-sm font-bold text-emerald-600 group-hover:text-emerald-200 uppercase tracking-wider">
                  {month}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-white ml-2 sm:ml-0">
                  {day}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1">{event.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-2">{event.description}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">📍 {event.location}</p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-gray-700 gap-2 sm:gap-4">
                  <p className="text-sm sm:text-base text-white bg-emerald-500 p-2 rounded">
                    Max Participants: {event.maxParticipants}
                  </p>
                  <p className='text-xs sm:text-sm p-2 rounded'>👥 {event.currentParticipants} joined</p>
                </div>

                {/* Modal Trigger */}
                <label
                  htmlFor={`event-modal-${index}`}
                  className="btn btn-sm mt-4 sm:mt-6 bg-emerald-600 hover:bg-emerald-700 text-white border-none"
                >
                  Show Details
                </label>

                {/* DaisyUI Modal */}
                <input type="checkbox" id={`event-modal-${index}`} className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box bg-emerald-900 text-white relative">
                    <h3 className="font-bold text-xl mb-2 text-white">{event.title}</h3>
                    <p className="py-2 text-white">{event.description}</p>

                    <div className="mt-4 space-y-2 text-sm sm:text-base">
                      <p><span className="font-semibold">📍 Location:</span> {event.location}</p>
                      <p><span className="font-semibold">📅 Date:</span> {new Date(event.date).toDateString()}</p>
                      <p><span className="font-semibold">👤 Organizer:</span> {event.organizer}</p>
                      <p><span className="font-semibold">👥 Participants:</span> {event.currentParticipants} / {event.maxParticipants}</p>
                    </div>

                    <div className="modal-action flex flex-col sm:flex-row gap-2">
                      <button onClick={handleJoin} className='btn bg-white text-emerald-700 hover:bg-gray-100 w-full sm:w-auto'>Join Now</button>
                      <label htmlFor={`event-modal-${index}`} className="btn w-full sm:w-auto">Close</label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-10 p-6 sm:p-8 bg-emerald-900 rounded-2xl text-white text-center">
        <h3 className="font-bold text-xl sm:text-2xl mb-2">Never miss an update</h3>
        <p className="text-emerald-100 text-sm sm:text-base mb-4">
          Get the latest eco-tips and event invites.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-sm sm:max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button className="bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg text-sm sm:text-base font-bold transition-colors">
            Subscribe
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UpcomingEvents;
