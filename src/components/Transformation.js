// import React from 'react';
// import { motion } from 'framer-motion';

// const Transformation = ({ beforeImage, afterImage }) => {
//   const transformations = [
//     {
//       title: 'Fitness Transformation',
//       details: 'Lost 15kg in 3 months through consistent exercise and balanced diet.',
//     },
//     {
//       title: 'Strength Building Journey',
//       details: 'Gained muscle mass and improved strength with a structured workout plan.',
//     },
//     {
//       title: 'Healthy Lifestyle Change',
//       details: 'Transformed health habits, resulting in increased energy levels and overall well-being.',
//     },
//   ];

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-8 bg-white shadow-md rounded-lg overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
//       {transformations.map((transformation, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col space-y-4"
//           style={{ minWidth: '320px' }}
//         >
//           <h2 className="text-2xl font-bold text-gray-800">{transformation.title}</h2>
//           <div className="flex space-x-4 overflow-x-scroll">
//             <div className="w-80 flex-none">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="rounded-lg overflow-hidden shadow-md"
//               >
//                 <img src={beforeImage} alt="Before Transformation" className="w-full" />
//               </motion.div>
//               <p className="text-sm text-gray-600 mt-2">Before</p>
//             </div>
//             <div className="w-80 flex-none">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="rounded-lg overflow-hidden shadow-md"
//               >
//                 <img src={afterImage} alt="After Transformation" className="w-full" />
//               </motion.div>
//               <p className="text-sm text-gray-600 mt-2">After</p>
//             </div>
//           </div>
//           <p className="text-sm text-gray-600">{transformation.details}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Transformation;


import React from 'react';
import { motion } from 'framer-motion';

const Transformation = ({ beforeImage, afterImage }) => {
  const transformations = [
    {
      title: 'Fitness Transformation',
      details: 'Lost 15kg in 3 months through consistent exercise and balanced diet.',
    },
    {
      title: 'Strength Building Journey',
      details: 'Gained muscle mass and improved strength with a structured workout plan.',
    },
    {
      title: 'Healthy Lifestyle Change',
      details: 'Transformed health habits, resulting in increased energy levels and overall well-being.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-white shadow-md rounded-lg overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="flex flex-no-wrap space-x-4 overflow-x-auto">
        {transformations.map((transformation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4 w-96"
          >
            <h2 className="text-2xl font-bold text-gray-800">{transformation.title}</h2>
            <div className="flex space-x-4 overflow-x-scroll">
              <div className="w-80 flex-none">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img src={beforeImage} alt="Before Transformation" className="w-full" />
                </motion.div>
                <p className="text-sm text-gray-600 mt-2">Before</p>
              </div>
              <div className="w-80 flex-none">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <img src={afterImage} alt="After Transformation" className="w-full" />
                </motion.div>
                <p className="text-sm text-gray-600 mt-2">After</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{transformation.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Transformation;
