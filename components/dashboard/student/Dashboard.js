// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Transition } from '@headlessui/react';
// import Sidenav from './sidenav';
// import Navbar from './navbar';

// const Notification = lazy(() => import('../Data/notidication'));
// const Chat = lazy(() => import('../Data/chat'));
// const Profile = lazy(() => import('../Data/profile'));

// const Dashboard = () => {
//   const [activeButton, setActiveButton] = useState(-1);
//   const [contentComponent, setContentComponent] = useState(null);

//   const handleButtonClick = (index) => {
//     setActiveButton(index);
//   };

//   useEffect(() => {
//     let component = null;
//     switch (activeButton) {
//       case 0:
//         component = <Notification />;
//         break;
//       case 1:
//         component = <Profile />;
//         break;
//       case 2:
//         component = <Chat />;
//         break;
//       default:
//         component = null;
//         break;
//     }
//     setContentComponent(component);
//   }, [activeButton]);

//   return (
//     <div className="flex">
//       <Sidenav activeButton={activeButton} handleButtonClick={handleButtonClick} />
//       <div className="flex-1 bg-white-100">
//         <Navbar />
//         <div className="p-8">
//           <Transition
//             show={activeButton !== -1}
//             enter="transition-opacity duration-500 ease-out delay-500"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity duration-300 ease-in"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Suspense
//               fallback={
//                 <div className="h-64 flex items-center justify-center">
//                   <span className="text-gray-600 text-lg">Loading...</span>
//                 </div>
//               }
//             >
//               {contentComponent}
//             </Suspense>
//           </Transition>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Transition } from '@headlessui/react';
import Sidenav from './sidenav';
import Navbar from './navbar';

const Notification = lazy(() => import('./content/notidication'));
const Chat = lazy(() => import('./content/chat'));
const Profile = lazy(() => import('./content/profile'));

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState(-1);
  const [contentComponent, setContentComponent] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    let component = null;
    switch (activeButton) {
      case 0:
        component = <Notification />;
        break;
      case 1:
        component = <Profile />;
        break;
      case 2:
        component = <Chat />;
        break;
      default:
        component = null;
        break;
    }
    setContentComponent(component);
  }, [activeButton]);

  return (
    <div className={`flex ml-3 mr-4 mt-5 mb-3`}>
      <Sidenav activeButton={activeButton} handleButtonClick={handleButtonClick} />
      <div className="flex-1 ml-3 bg-white-100">
        <Navbar />
        <div className="p-8">
          <Transition
            show={activeButton !== -1}
            enter="transition-opacity duration-500 ease-out delay-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Loading...</span>
                </div>
              }
            >
              {contentComponent}
            </Suspense>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
