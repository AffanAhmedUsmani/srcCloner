// import React, { useState } from 'react';
// import {
//   Avatar,
// } from "@material-tailwind/react";

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleProfileClick = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleLogout = () => {
//     // Implement logout functionality
//   };

//   return (
//     <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center rounded-lg">
//       <div>
//         <span className="font-bold text-xl">User name</span>
//       </div>
//       <div className="relative">
//         {/* <button
//           className="text-white hover:text-gray-400 transition-colors duration-200"
//           onClick={handleProfileClick}
//         >
//           Profile pic
//         </button>
//         {showDropdown && (
//           <div className="absolute top-12 right-0 bg-white text-gray-800 py-2 px-4 rounded shadow">
//             <button className="block w-full text-left" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         )} */}
//          <Avatar
//             onClick={handleProfileClick}
//             variant="circular"
//             size=""
//             className="w-12 h-12 rounded-full"
//             src="https://th.bing.com/th/id/OIP.0ku1AvUo__-ohxH4EqTXOAHaEo?pid=ImgDet&rs=1"
//           />
//         {showDropdown && (
//           <div className="absolute top-30 right-0 bg-white text-gray-800 py-2 px-4 rounded shadow">
//             <button className="block w-full mt-1 text-center" onClick={handleLogout}>
//               Logout
//             </button>
//             <button className="block w-full mt-1 text-center" onClick={handleLogout}>
//               Settings
//             </button>
//             <button className="block w-full mt-1 text-center" onClick={handleLogout}>
//               Help
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Avatar } from '@material-tailwind/react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center rounded-lg">
      <div>
        <span className="font-bold text-xl font-serif">User name</span>
      </div>
      {/* <button className="items-right text-white mr-6 text-gray-700 hover:text-blue-300 focus:outline-none">
          Home
        </button> */}
      <div className="relative">

        <Avatar
          onClick={handleProfileClick}
          variant="circular"
          size=""
          className="w-12 h-12 rounded-full transition duration-300 transform hover:scale-110 cursor-pointer"
          src="https://th.bing.com/th/id/OIP.0ku1AvUo__-ohxH4EqTXOAHaEo?pid=ImgDet&rs=1"
        />
        {showDropdown && (
          <div className="absolute top-14 right-0 bg-white text-gray-800 py-2 px-4 rounded shadow">
            <button className="block w-full mt-1 text-center hover:text-blue-600 transition-colors duration-200" onClick={handleLogout}>
              Logout
            </button>
            <button className="block w-full mt-1 text-center hover:text-blue-600 transition-colors duration-200" onClick={handleLogout}>
              Settings
            </button>
            <button className="block w-full mt-1 text-center hover:text-blue-600 transition-colors duration-200" onClick={handleLogout}>
              Help
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
