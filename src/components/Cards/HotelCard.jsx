// HotelCard.jsx
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { Tilt } from 'react-tilt';
import { FaStar } from "react-icons/fa";
import { fadeIn } from "../../utils/Motion"
import ExpandedHotelCard from './ExpandedHotelCard';

function HotelCard({ hotel, onCardClick, onBookNowClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Moving images on hover
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Array of images for the carousel
    const images = hotel.images;
    let intervalId;

    if (isHovered) {
      // Start the slideshow when hovered
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }

    // Clear the interval when the component unmounts or when not hovered
    return () => clearInterval(intervalId);
  }, [hotel, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getImageStyle = (index) => {
    return {
      transform: `translateX(-${index * 100}%)`, // Move the image horizontally
      transition: 'transform 0.5s ease-in-out', // Smooth transition effect
    };
  };

  // const getImageStyle = (index) => {
  //   return {
  //     opacity: index === currentImageIndex ? 1 : 0, // Set opacity to control fading
  //     transition: 'opacity 1s ease-in-out', // Smooth fade-in/fade-out transition
  //   };
  // };


  return (
    // <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-900 p-5 rounded-2xl sm:w-[290px] w-full h-350"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <div className="relative">
            <img
              className={`w-full h-full object-cover rounded-2xl `}
              src={hotel.images[currentImageIndex]}
              alt={hotel.name}
            />
            <button
              onClick={onBookNowClick}
              className="absolute top-2 right-2 px-3 py-1 bg-slate-800 text-white rounded-md"
            >
              Book Now
            </button>
          </div> */}

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform"
              style={getImageStyle(currentImageIndex)}
            >
              {/* Display the current image */}
              {hotel.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={hotel.name}
                  className="w-full h-full object-cover rounded-2xl cursor-pointer"
                  onClick={onCardClick}
                  // style={getImageStyle(index)}
                />
              ))}
            </div>
            <button
              onClick={onBookNowClick}
              className="absolute top-2 right-2 px-3 py-1 bg-slate-800 text-white rounded-md"
            >
              Book Now
            </button>
          </div>
          <div className="p-4 cursor-pointer"
            onClick={onCardClick}
          >
            <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
            <p className="text-gray-600 mb-2">City : {hotel.city}</p>
            <p className="text-gray-600 mb-2 flex">Star : &nbsp;
              <span className='flex pt-1.5 space-x-0.5'>
                {[...Array(hotel.star)].map((index) => (
                  <FaStar key={index} color="#FFD700" size={12} />
                ))}
              </span>
            </p>
            <p className="text-gray-600 flex">Rating : {hotel.rating}</p>
          </div>
        </motion.div>
      </Tilt>
    </div>
    // {/* </motion.div> */}
  );
}

export default HotelCard;



// {
//   isExpanded && (
//     <div className='flex flex-row justify-center items-center mt-10 w-full h-full z-50 '>
//       <ExpandedHotelCard
//         hotel={hotel}
//         onClose={toggleExpand}
//       />
//     </div>
//   )
// }





// {/* <div className="bg-white shadow-md rounded-lg overflow-hidden">
//   <div className="relative">
//     <img
//       className="w-full h-48 object-cover"
//       src={hotel.image}
//       alt={hotel.name}
//     />
//     <button
//       onClick={onBookNowClick}
//       className="absolute top-2 right-2 px-3 py-1 bg-indigo-600 text-white rounded-md"
//     >
//       Book Now
//     </button>
//   </div>
//   <div className="p-4">
//     <h3 className="text-xl font-semibold">{hotel.name}</h3>
//     <p className="text-gray-600 mb-2">City: {hotel.city}</p>
//     <p className="text-gray-600 mb-2">Star: {hotel.star}</p>
//     <p className="text-gray-600">Rating: {hotel.rating}</p>
//   </div>
//   {isExpanded && (
//     <div className="p-4 bg-gray-100">
//       {/* Hotel Reviews can be displayed here */}
//     </div>
//   )}
// </div> */}