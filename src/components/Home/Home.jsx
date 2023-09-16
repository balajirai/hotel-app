// src/components/Home/Home.jsx
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
import { auth } from '../../Firebase';
import Login from '../Auth/Login'; // Import the Login component
import Logout from '../Auth/Logout'; // Import the Logout component
import HotelCard from '../Cards/HotelCard';
import SearchBar from '../Navbar/SearchBar';
import Notification from './Notification';
import Navbar from '../Navbar/Navbar';
import hotels from '../../api/Hotels';
import Footer from './Footer';
import ExpandedHotelCard from '../Cards/ExpandedHotelCard';

function Home() {
    // State variables for hotels, search text, selected hotel, and notification
    // const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    // search bar

    const [searchQuery, setSearchQuery] = useState('');
    const [Hotels, setHotels] = useState(hotels);
    const filteredCards = Hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (query) => {
        setSearchQuery(query);
    };


    const [user, setUser] = useState(null); // Track user authentication status

    // Check user authentication status when the component mounts
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // User is signed in
                setUser(authUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Cleanup the subscription when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <div className='min-h-screen'>
            <div className='w-full flex flex-wrap'>
                <Navbar handleSearch={handleSearch}/>
            </div>
            <div className="mt-20 min-h-screen">
                {user ? (
                    <div className=''>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-inherit p-5">
                            {filteredCards.map((hotel) => (
                                <HotelCard
                                    key={hotel.id}
                                    hotel={hotel}
                                    onCardClick={() => setSelectedHotel(hotel)}
                                    onBookNowClick={() => setShowNotification(true)}
                                />
                            ))}
                        </div>
                        {selectedHotel && (
                            <ExpandedHotelCard
                                hotel={selectedHotel}
                                onClose={() => setSelectedHotel(null)}
                            />
                        )}
                    </div>
                ) : (
                    <div className='pt-20'>
                        <h1 className="text-3xl font-bold mb-2 flex justify-center items-center">Welcome to My Hotel App</h1>
                        <Login />
                    </div>
                )}
                {showNotification && (
                    <Notification
                        message="Your booking has been confirmed"
                        onClose={() => setShowNotification(false)}
                    />
                )}

            </div>
            <Footer />
        </div>
    );
}

export default Home;


// {/* <div className="mt-4">
//     <h2 className="text-2xl font-bold text-black">Hotel Details</h2>
//     {/* Display selected hotel details and reviews here */}
//     <p>Name: {selectedHotel.name}</p>
//     <p>City: {selectedHotel.city}</p>
//     <p>Star: {selectedHotel.star}</p>
//     <p>Rating: {selectedHotel.rating}</p>
//     {/* You can display reviews here */}
// </div> */}