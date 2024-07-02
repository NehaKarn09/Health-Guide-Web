// import React from 'react';

// const Home = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-200 to-blue-50 min-h-screen p-6">
//       <header className="bg-white p-6 shadow-lg rounded-lg mb-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Hello User!</h1>
//         <div className="flex items-center space-x-3">
//           <span className="text-md text-gray-600">How do you feel today?</span>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">Start</button>
//         </div>
//       </header>

//       <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">Today's Plan</h2>
//         <div className="flex justify-between items-center">
//           <span className="text-3xl font-bold text-blue-500">2,894</span>
//           <div className="w-full max-w-xs">
//             <div className="flex items-center mb-2">
//               <span className="text-sm text-gray-600 mr-3">Calories</span>
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <div className="h-full bg-green-500 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
//               </div>
//             </div>
//             <div className="flex items-center mb-2">
//               <span className="text-sm text-gray-600 mr-3">Exercise</span>
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <div className="h-full bg-yellow-500 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600 mr-3">Stand</span>
//               <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                 <div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{ width: '33%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-6 shadow-lg rounded-lg mb-6 flex items-center justify-between">
//         <h2 className="text-xl font-semibold text-gray-800">Scan Your Food</h2>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition">Scan</button>
//       </div>

//       <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">User Trackers</h2>
//         <div className="flex justify-between items-center space-x-6">
//           {[
//             { label: 'Weight', value: '78' },
//             { label: 'Body Fat %', value: '23%' },
//             { label: 'Muscle Mass', value: '39' },
//             { label: 'BMI', value: '22.5' },
//           ].map((tracker, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <span className="text-2xl font-bold text-blue-500">{tracker.value}</span>
//               <span className="text-sm text-gray-600">{tracker.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-3">Transformations</h2>
//         <div className="flex overflow-x-scroll space-x-6 py-2">
//           {['path-to-image1.jpg', 'path-to-image2.jpg', 'path-to-image3.jpg', 'path-to-image4.jpg'].map((src, index) => (
//             <div key={index} className="flex-shrink-0 w-40 h-40 rounded-md overflow-hidden shadow-lg">
//               <img
//                 src={src}
//                 alt={`Transformation ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg rounded-t-lg">
//         <div className="flex justify-around items-center">
//           {[
//             { label: 'Home', icon: 'home' },
//             { label: 'Plan', icon: 'fitness_center' },
//             { label: 'Profile', icon: 'person' },
//           ].map((item, index) => (
//             <button key={index} className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
//               <span className="material-icons">{item.icon}</span>
//               <span className="text-sm">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <header className="bg-white p-6 shadow-md rounded-lg mb-8 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-gray-800">Hello User!</h1>
//         <div className="flex items-center space-x-4">
//           <span className="text-md text-gray-600">How do you feel today?</span>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">Start</button>
//         </div>
//       </header>

//       <div className="grid grid-cols-3 gap-8">
//         <div className="bg-white p-6 shadow-md rounded-lg col-span-2">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Plan</h2>
//           <div className="flex items-center justify-between">
//             <span className="text-4xl font-bold text-blue-500">2,894</span>
//             <div className="w-full max-w-md">
//               <div className="flex items-center mb-4">
//                 <span className="text-md text-gray-600 mr-4">Calories</span>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="h-full bg-green-500 rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
//                 </div>
//               </div>
//               <div className="flex items-center mb-4">
//                 <span className="text-md text-gray-600 mr-4">Exercise</span>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="h-full bg-yellow-500 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <span className="text-md text-gray-600 mr-4">Stand</span>
//                 <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="h-full bg-red-500 rounded-full transition-all duration-500" style={{ width: '33%' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-md rounded-lg flex items-center justify-between">
//           <h2 className="text-2xl font-semibold text-gray-800">Scan Your Food</h2>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">Scan</button>
//         </div>

//         <div className="bg-white p-6 shadow-md rounded-lg col-span-2">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Trackers</h2>
//           <div className="grid grid-cols-4 gap-4">
//             {[
//               { label: 'Weight', value: '78' },
//               { label: 'Body Fat %', value: '23%' },
//               { label: 'Muscle Mass', value: '39' },
//               { label: 'BMI', value: '22.5' },
//             ].map((tracker, index) => (
//               <div key={index} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
//                 <span className="text-3xl font-bold text-blue-500">{tracker.value}</span>
//                 <span className="text-md text-gray-600">{tracker.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white p-6 shadow-md rounded-lg col-span-3">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transformations</h2>
//           <div className="flex space-x-6 overflow-x-auto">
//             {['path-to-image1.jpg', 'path-to-image2.jpg', 'path-to-image3.jpg', 'path-to-image4.jpg'].map((src, index) => (
//               <div key={index} className="flex-shrink-0 w-48 h-48 bg-gray-300 rounded-md overflow-hidden shadow-md">
//                 <img
//                   src={src}
//                   alt={`Transformation ${index + 1}`}
//                   className="w-full h-full object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <footer className="mt-8 bg-white p-6 shadow-md rounded-lg">
//         <div className="flex justify-around items-center">
//           {[
//             { label: 'Home', icon: 'home' },
//             { label: 'Plan', icon: 'fitness_center' },
//             { label: 'Profile', icon: 'person' },
//           ].map((item, index) => (
//             <button key={index} className="flex flex-col items-center text-gray-700 hover:text-blue-500 transition">
//               <span className="material-icons">{item.icon}</span>
//               <span className="text-md">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from 'react'
import FoodCalorie from './FoodCalorie'
import UserTrackers from './UserTrackers'
import Trackers from './Trackers'
import Transformation from './Transformation'
import Feedback from './Feedback'

const Home = () => {
  return (
    <div>
      <FoodCalorie/>
      <UserTrackers/>
      <Trackers />
      <Transformation/>
      <Feedback/>
    </div>
  )
}

export default Home
