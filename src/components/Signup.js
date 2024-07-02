// import React, { useState } from 'react';

// const HealthGuideRegistration = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     location: 'Manual',
//     language: 'English',
//     gender: 'Male',
//     age: '',
//     activeTime: 'Little & No Active',
//     height: '',
//     weight: '',
//     targetWeight: '',
//     goalReachDuration: '0.25 Kg per Week',
//     medicalCondition: 'None',
//     permissions: 'Notification',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-6">Health Guide Registration</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="name" className="mb-1 font-medium">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="location" className="mb-1 font-medium">Location</label>
//           <select
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="Manual">Manual</option>
//             <option value="Automatic">Automatic</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="language" className="mb-1 font-medium">Language</label>
//           <select
//             id="language"
//             name="language"
//             value={formData.language}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="Hindi">Hindi</option>
//             <option value="English">English</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="gender" className="mb-1 font-medium">Gender</label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Transgender">Transgender</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="age" className="mb-1 font-medium">Age</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="activeTime" className="mb-1 font-medium">Active Time</label>
//           <select
//             id="activeTime"
//             name="activeTime"
//             value={formData.activeTime}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="Little & No Active">Little & No Active</option>
//             <option value="Lightly Active">Lightly Active</option>
//             <option value="Moderately Active">Moderately Active</option>
//             <option value="Very Active">Very Active</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="height" className="mb-1 font-medium">Height (Cm)</label>
//           <input
//             type="number"
//             id="height"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="weight" className="mb-1 font-medium">Current Weight (Kg)</label>
//           <input
//             type="number"
//             id="weight"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="targetWeight" className="mb-1 font-medium">Target Weight (Kg)</label>
//           <input
//             type="number"
//             id="targetWeight"
//             name="targetWeight"
//             value={formData.targetWeight}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="goalReachDuration" className="mb-1 font-medium">Goal Reach Duration</label>
//           <select
//             id="goalReachDuration"
//             name="goalReachDuration"
//             value={formData.goalReachDuration}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="0.25 Kg per Week">0.25 Kg per Week</option>
//             <option value="0.5 Kg per Week">0.5 Kg per Week</option>
//             <option value="0.75 Kg per Week">0.75 Kg per Week</option>
//             <option value="1 Kg per Week">1 Kg per Week</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="medicalCondition" className="mb-1 font-medium">Medical Condition</label>
//           <select
//             id="medicalCondition"
//             name="medicalCondition"
//             value={formData.medicalCondition}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="None">None</option>
//             <option value="Diabetes">Diabetes</option>
//             <option value="Anger Issue">Anger Issue</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="permissions" className="mb-1 font-medium">Permissions</label>
//           <select
//             id="permissions"
//             name="permissions"
//             value={formData.permissions}
//             onChange={handleChange}
//             className="px-4 py-2 border rounded-md"
//           >
//             <option value="Notification">Notification</option>
//             <option value="Reminder/Alarm">Reminder/Alarm</option>
//           </select>
//         </div>

//         <div className="flex justify-end">
//           <button type="submit" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default HealthGuideRegistration;


import React, { useState } from 'react';

const HealthGuideRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    language: '',
    gender: '',
    age: '',
    activeTime: '',
    height: '',
    weight: '',
    targetWeight: '',
    goalReachDuration: '0.25 Kg per Week',
    medicalCondition: 'None',
    permissions: 'Notification',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r   shadow-xl rounded-lg bg-emerald-500 mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Health Guide Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-lg font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location" className="mb-2 text-lg font-medium text-white">Location</label>
          <input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="language" className="mb-2 text-lg font-medium text-white">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-2 text-lg font-medium text-white">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="age" className="mb-2 text-lg font-medium text-white">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="activeTime" className="mb-2 text-lg font-medium text-white">Active Time</label>
          <select
            id="activeTime"
            name="activeTime"
            value={formData.activeTime}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="Little & No Active">Little & No Active</option>
            <option value="Lightly Active">Lightly Active</option>
            <option value="Moderately Active">Moderately Active</option>
            <option value="Very Active">Very Active</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="height" className="mb-2 text-lg font-medium text-white">Height (Cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="weight" className="mb-2 text-lg font-medium text-white">Current Weight (Kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="targetWeight" className="mb-2 text-lg font-medium text-white">Target Weight (Kg)</label>
          <input
            type="number"
            id="targetWeight"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="goalReachDuration" className="mb-2 text-lg font-medium text-white">Goal Reach Duration</label>
          <select
            id="goalReachDuration"
            name="goalReachDuration"
            value={formData.goalReachDuration}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="0.25 Kg per Week">0.25 Kg per Week</option>
            <option value="0.5 Kg per Week">0.5 Kg per Week</option>
            <option value="0.75 Kg per Week">0.75 Kg per Week</option>
            <option value="1 Kg per Week">1 Kg per Week</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="medicalCondition" className="mb-2 text-lg font-medium text-white">Medical Condition</label>
          <select
            id="medicalCondition"
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="None">None</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Anger Issue">Anger Issue</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="permissions" className="mb-2 text-lg font-medium text-white">Permissions</label>
          <select
            id="permissions"
            name="permissions"
            value={formData.permissions}
            onChange={handleChange}
            className="px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="Notification">Notification</option>
            <option value="Reminder/Alarm">Reminder/Alarm</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md hover:from-purple-600 hover:to-pink-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HealthGuideRegistration;
