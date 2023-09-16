// Notification.jsx
import React from 'react';

function Notification({ message, onClose }) {
  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-green-500 text-white p-3 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-2 focus:outline-none">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Notification;
