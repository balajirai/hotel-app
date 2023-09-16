import React from 'react';
import { FaStar } from 'react-icons/fa';

const ExpandedHotelCard = ({ hotel, onClose }) => {
    return (
        <div
            className="fixed top-10 left-0 w-full h-full flex items-center justify-center inset-0 backdrop-blur-md backdrop-filter">
            <div className="bg-black-100 rounded-2xl p-8 w-1/2 z-50 border top-30 backdrop-blur-lg backdrop-filter">
                <div className="relative flex">
                    <img
                        className="w-40 h-50 object-cover rounded-2xl"
                        src={hotel.images[0]}
                        alt={hotel.name}
                    />
                    <div className="ml-8">
                        <h3 className="text-xl font-semibold mb-2 ">{hotel.name}</h3>
                        <p className="text-gray-100 mb-2">City : {hotel.city}</p>
                        <p className="text-gray-100 mb-2 flex">Star : &nbsp;
                            <span className='flex pt-1.5 space-x-0.5'>
                                {[...Array(hotel.star)].map((index) => (
                                    <FaStar key={index} color="#FFD700" size={12} />
                                ))}
                            </span>
                        </p>
                        <ul>
                            {hotel.reviews.map((review, index) => (
                                <li key={index} className='text-gray-400 mb-2'>{review}</li>
                            ))}
                        </ul>
                    </div>
                    <span className=" text-blue-500 hover:text-blue-600 cursor-pointer block text-center z-50 absolute bottom-2 right-2 px-3 py-1"
                        onClick={onClose}
                    >
                        OK
                    </span>
                    {/* <button
                        onClick={onClose}
                        className="absolute bottom-2 right-2 px-3 py-1 bg-slate-800 text-white rounded-md"
                    >
                        Close
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ExpandedHotelCard;



// {/* <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//     <div className="bg-white p-4 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-black">{hotel.name}</h2>
//         {/* <p>{hotel.description}</p> */}
//         <h3 className="text-lg font-semibold mt-4">Reviews</h3>
// <ul>
//     {hotel.reviews.map((review, index) => (
//         <li key={index} className='text-black'>{review}</li>
//     ))}
// </ul>
// {/* <button
//     onClick={onClose}
//     className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
// >
//     Close
// </button> */}
//     </div>
// </div> */}
