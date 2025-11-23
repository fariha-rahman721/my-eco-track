import React from 'react';

const CommunityImpacts = ({ data }) => {
    return (
        <div className='w-11/12 mx-auto lg:w-11/12 lg:mx-auto m-10'>
            <h1 className='text-2xl font-bold text-green-900'>Community Impact</h1>
            <p>Live aggregated data from EcoTrack users worldwide.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                {
                    data.slice(0, 6).map((item) => (
                        <div key={item._id}  className="card mx-auto lg:w-80 card-md  bg-gray-100 rounded-lg shadow-md p-4 my-4 flex justify-between items-center">
                            <div className="card-body">
                                <h2 className="card-title">{item.category}</h2>
                                <p className='text-xl font-bold text-green-800'>{item.impactMetric}</p>
                        
                                </div>
                                
                            </div>
                       
                        
                    ))
                }
            </div>

        </div>
    );
};

export default CommunityImpacts;