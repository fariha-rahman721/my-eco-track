import React from 'react';

const CommunityTips = ({ data }) => {
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm m-10">
            {
                    data.slice(0, 6).map((item) => (
                        <div key={item._id}  className="card mx-auto lg:w-80 card-md  bg-gray-100 rounded-lg shadow-md p-4 my-4 flex justify-between items-center">
                            <div className="card-body">
                                <h2 className="card-title">Community</h2>
                                <p className='text-xl font-bold text-green-800'>{item.impactMetric}</p>
                        
                                </div>
                                
                            </div>
                       
                        
                    ))
                }
        </div>
    );
};

export default CommunityTips;