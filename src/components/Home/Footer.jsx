import React from 'react';

function Footer() {
    return (
        <footer
            className="flex flex-col items-center bg-tertiary text-center text-white rounded-t-2xl mt-5">        
            <div className="w-full p-4 text-center bg-gray-900 text-slate-600 bottom-0 text-xs">
                <a href='https://balajirai.netlify.app/' target='_blank'>Copyright © {new Date().getFullYear()} balaji. All rights reserved.</a>
            </div>
        </footer>
    );
};

export default Footer;