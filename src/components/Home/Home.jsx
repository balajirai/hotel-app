import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import toast from 'react-hot-toast';
import Login from '../Auth/Login';
import HotelCard from '../Cards/HotelCard';
import Navbar from '../Navbar/Navbar';
import hotels from '../../api/Hotels';
import Footer from './Footer';
import ExpandedHotelCard from '../Cards/ExpandedHotelCard';

function Home() {
    const [selectedHotel, setSelectedHotel] = useState(null);

    // search bar starts here---------------------------------------------------------
    const [searchQuery, setSearchQuery] = useState('');
    const [Hotels, setHotels] = useState(hotels);

    const filteredCards = Hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.rating.includes(searchQuery) ||
        hotel.star.toString() === searchQuery
    );

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // search bar ends here---------------------------------------------------------



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
                <Navbar handleSearch={handleSearch} />
            </div>
            <div className="mt-20 min-h-screen">
                {user ? (
                    <div className='flex justify-around'>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 bg-inherit p-5">
                            {filteredCards.map((hotel) => (
                                <HotelCard
                                    key={hotel.id}
                                    hotel={hotel}
                                    onCardClick={() => setSelectedHotel(hotel)}
                                    onBookNowClick={() => toast.success('Booking has been confirmed')}
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