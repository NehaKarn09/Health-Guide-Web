import React from 'react';
import { motion } from 'framer-motion';

const trackersData = [
  { name: 'Sleep', icon: '🛏️', color: 'bg-blue-200', unit: 'hours', value: 7.5 },
  { name: 'Medicine', icon: '💊', color: 'bg-green-200', unit: 'doses', value: 2 },
  { name: 'Heart Rate', icon: '❤️', color: 'bg-red-200', unit: 'bpm', value: 75 },
  { name: 'Respiratory', icon: '🌬️', color: 'bg-yellow-200', unit: 'rpm', value: 16 },
  { name: 'Calories', icon: '🔥', color: 'bg-orange-200', unit: 'kcal', value: 2200 },
  { name: 'Water', icon: '💧', color: 'bg-blue-300', unit: 'liters', value: 2.5 },
  { name: 'Steps', icon: '👟', color: 'bg-purple-200', unit: 'steps', value: 10000 },
  { name: 'Workout', icon: '🏋️', color: 'bg-pink-200', unit: 'minutes', value: 45 },
  { name: 'Weight', icon: '⚖️', color: 'bg-teal-200', unit: 'kg', value: 70 },
];

const Trackers = () => {
  return (
    <>
    <div className="pt-2 pr-8 pb-8 pl-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 shadow-md rounded-lg mb-8 w-full max-w-5xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Health Trackers</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trackersData.map((tracker, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-lg shadow ${tracker.color} flex flex-col items-center`}
            >
              <div className="text-5xl">{tracker.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mt-2">{tracker.name}</h2>
              <p className="text-lg text-gray-600">{tracker.value} {tracker.unit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
      </>
  );
};

export default Trackers;
