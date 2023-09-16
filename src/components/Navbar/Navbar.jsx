// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase';
import Logout from '../Auth/Logout';
import { Link } from 'react-router-dom';
import { hotel } from "../../assets";
import SearchBar from './SearchBar';

function Navbar({handleSearch}) {

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

    // Implement login and logout functionality
    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <nav className="bg-slate-900 backdrop-filter bg-opacity-30 border-b border-gray-800 backdrop-blur-lg p-4 w-full m-0 fixed top-0 z-10">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        // setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={hotel} alt="Logo" className="w-11 h-11 object-contain mr-2" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        My Hotel
                    </p>
                </Link>
                <ul className="flex space-x-4 px-auto ml-auto">
                    <li className="">
                        <SearchBar onSearch={handleSearch} />
                    </li>
                </ul>

                <ul className="flex space-x-4 px-4">
                    <li>
                        <button className="flex justify-between items-center relative">
                            {user ? (
                                <Logout onLogout={handleLogout} />
                            ) : null}
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
