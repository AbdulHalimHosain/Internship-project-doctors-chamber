"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/page';

const CreatePrescription = () => {
const [prescriptionDetails, setPrescriptionDetails] = useState({
patientName: '',
doctorName: '',
date: '',
medicines: [''],
});

const handleInputChange = (e) => {
const { name, value } = e.target;
setPrescriptionDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value,
}));
};

const handleMedicineChange = (index, value) => {
const updatedMedicines = [...prescriptionDetails.medicines];
updatedMedicines[index] = value;
setPrescriptionDetails((prevDetails) => ({
    ...prevDetails,
    medicines: updatedMedicines,
}));
};

const addMedicineField = () => {
setPrescriptionDetails((prevDetails) => ({
    ...prevDetails,
    medicines: [...prevDetails.medicines, ''],
}));
};

const handleSubmit = (e) => {
e.preventDefault();
console.log('Prescription details submitted:', prescriptionDetails);
window.location.href = '/';
};

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    <div className="flex-1 p-6 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        <h1 className="text-2xl font-bold text-center w-full">Create New Prescription</h1>

        {/* Logout and Back Buttons */}
        <div className="flex items-center space-x-2">
        <a href="/" className="bg-lightblue-500 text-white px-3 py-1 rounded text-sm w-full hover:bg-indigo-600">
            Back to Prescriptions
        </a>
        <button className="bg-lightblue-400 text-white px-3 py-2 rounded text-sm hover:bg-indigo-600">
            Logout
        </button>
        </div>
    </div>

    {/* Form Content */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
        {/* Patient Name Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
            Patient Name
            </label>
            <input
            type="text"
            id="patientName"
            name="patientName"
            value={prescriptionDetails.patientName}
            onChange={handleInputChange}
            placeholder="Enter patient name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Date Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
            </label>
            <input
            type="date"
            id="date"
            name="date"
            value={prescriptionDetails.date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Medicines Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Medicines</label>
            {prescriptionDetails.medicines.map((medicine, index) => (
            <div key={index} className="mb-2 flex items-center">
                <input
                type="text"
                value={medicine}
                onChange={(e) => handleMedicineChange(index, e.target.value)}
                placeholder={`Enter medicine ${index + 1}`}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
            </div>
            ))}
            <button
            type="button"
            onClick={addMedicineField}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
            Add Medicine
            </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create Prescription
        </button>
        </form>
    </div>
    </div>
</div>
);
};

export default CreatePrescription;
