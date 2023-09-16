import React from 'react';

function Footer() {
    return (
        <footer
            className="flex flex-col items-center bg-tertiary text-center text-white rounded-t-2xl mt-10">        
            <div className="w-full p-7 text-center bg-gray-900 text-secondary bottom-0">
                Copyright © {new Date().getFullYear()} balaji. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;