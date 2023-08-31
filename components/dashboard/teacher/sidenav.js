

import React from 'react';

const Sidenav = ({ activeButton, handleButtonClick }) => {
  const buttons = [
    { label: 'notification', icon: 'N' },
    { label: 'profile', icon: 'P' },
    { label: 'chat', icon: 'C' }
  ];

  return (
    <div className="bg-blue-400 w-64 h-screen p-3 rounded-lg mb-[-20rem] ">
      <div className="mt-9 mb-8">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" /> {/* Replace with your logo */}
      </div>
      <ul className="space-y-3">
        {buttons.map((button, index) => (
          <li key={index}>
            <button
              className={`w-full py-2 px-4 rounded flex items-center ${
                activeButton === index ? 'bg-purple-500 text-white' : 'bg-white text-gray-700'
              } hover:bg-purple-200 transition-colors duration-200`}
              onClick={() => handleButtonClick(index)}
            >
              <span className="mr-2">{button.icon}</span> {/* Replace with your icon component */}
              <span>{button.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
