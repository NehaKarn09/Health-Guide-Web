// import React, { useState } from 'react';

// const FoodCalorie = () => {
//   const [image, setImage] = useState(null);
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleAnalyze = async () => {
//     if (!image) {
//       alert("Please upload an image first.");
//       return;
//     }

//     setLoading(true);

//     // Replace with your actual API endpoint
//     const apiEndpoint = 'https://your-api-endpoint.com/analyze';

//     const formData = new FormData();
//     formData.append('file', image);

//     try {
//       const response = await fetch(apiEndpoint, {
//         method: 'POST',
//         body: formData,
//       });
//       const result = await response.json();
//       setAnalysisResult(result);
//     } catch (error) {
//       console.error('Error analyzing the image:', error);
//       setAnalysisResult(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <div className="bg-white p-6 shadow-md rounded-lg mb-8">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Food Calorie Analysis</h1>
        
//         <div className="mb-4">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//         </div>
        
//         <button
//           onClick={handleAnalyze}
//           className={`bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={loading}
//         >
//           {loading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>
      
//       {analysisResult && (
//         <div className="bg-white p-6 shadow-md rounded-lg">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Result</h2>
//           <pre className="bg-gray-100 p-4 rounded-lg text-gray-700">
//             {JSON.stringify(analysisResult, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoodCalorie;



import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FoodCalorie = () => {
  const [image, setImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);

    // Replace with your actual API endpoint
    const apiEndpoint = 'https://your-api-endpoint.com/analyze';

    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing the image:', error);
      setAnalysisResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-10 p-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 shadow-md rounded-lg mb-8 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Food Calorie Analysis</h1>
        
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <img src={imageUrl} alt="Selected" className="max-w-full h-60 rounded-lg shadow-md" />
          </motion.div>
        )}
        
        <div className="flex justify-center">
          <button
            onClick={handleAnalyze}
            className={`bg-blue-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </motion.div>
      
      {analysisResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 shadow-md rounded-lg w-full max-w-2xl"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Result</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-700">
            {JSON.stringify(analysisResult, null, 2)}
          </pre>
        </motion.div>
      )}
    </div>
  );
};

export default FoodCalorie;
