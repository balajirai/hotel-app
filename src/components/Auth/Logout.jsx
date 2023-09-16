// Logout.js
import React from 'react';
import { auth } from '../../Firebase';
import {logout} from "../../assets"

function Logout() {
    const handleLogout = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}><img src={logout} alt="Logo" className="w-8 h-8 object-contain mr-2" /></button>
        </div>
    );
}

export default Logout;
