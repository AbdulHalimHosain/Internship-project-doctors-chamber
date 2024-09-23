"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page';
import { FaSearch } from 'react-icons/fa';

// Simulating an API response for prescriptions
const fetchPrescriptions = (role, userId) => {
const prescriptions = [
{
    id: 1,
    patientName: 'Hosain',
    doctor: 'Dr. Smith',
    date: '2024-09-20',
    medicines: ['Medicine 1', 'Medicine 2', 'Medicine 3'],
    patientId: 1,
},
{
    id: 2,
    patientName: 'Alex',
    doctor: 'Dr. Smith',
    date: '2024-09-21',
    medicines: ['Medicine A', 'Medicine B'],
    patientId: 2,
},
];

if (role === 'doctor' || role === 'receptionist') {
return prescriptions; 
}

if (role === 'patient') {
return prescriptions.filter(prescription => prescription.patientId === userId); 
}

return [];
};

const PrescriptionList = () => {
const [prescriptions, setPrescriptions] = useState([]);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
// fetching the logged-in user info will replace with actual API call or authentication mechanism
const loggedInUser = {
    id: 1,
    name: 'Hosain',
    role: 'patient', 
};

setUser(loggedInUser);


const prescriptionsData = fetchPrescriptions(loggedInUser.role, loggedInUser.id);
setPrescriptions(prescriptionsData);
setLoading(false);
}, []);

if (loading) {
return <div>Loading...</div>;
}

if (!user) {
return <div>Loading user data...</div>;
}

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Prescription List Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        {/* Create New Dropdown and Search Bar */}
        <div className="flex items-center space-x-4">
        {/* Create New Dropdown */}
        <CreateNewDropdown />

        {/* Search Bar */}
        <div className="flex items-center hidden sm:flex space-x-2">
            <input
            type="text"
            placeholder="Search Prescriptions..."
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64"
            />
            <button className="bg-lightblue-400 text-white px-3 py-2 rounded hover:bg-indigo-600">
            <FaSearch />
            </button>
        </div>
        </div>

        {/* Logout Button */}
        <div>
        <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
            Logout
        </button>
        </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">
        {user.role === 'patient' ? 'Your Prescriptions' : 'All Patients Prescriptions'}
        </h2>

        {/* Prescription List */}
        {prescriptions.length === 0 ? (
        <p>No prescriptions available.</p>
        ) : (
        <ul className="space-y-4">
            {prescriptions.map(prescription => (
            <li key={prescription.id} className="border-b border-gray-300 pb-2">
                <p className="text-sm font-medium text-gray-700">
                Patient Name: {prescription.patientName}
                </p>
                <p className="text-sm">Doctor: {prescription.doctor}</p>
                <p className="text-sm">Date: {prescription.date}</p>
                <p className="text-sm">Medicines:</p>
                <ul className="list-disc list-inside text-sm">
                {prescription.medicines.map((medicine, index) => (
                    <li key={index}>{medicine}</li>
                ))}
                </ul>
                <div className="mt-2">
                {user.role === 'patient' ? (
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 text-xs sm:text-sm">
                    Download PDF
                    </button>
                ) : (
                    <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm">
                        Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm">
                        Delete
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 text-xs sm:text-sm">
                        Download PDF
                    </button>
                    </div>
                )}
                </div>
            </li>
            ))}
        </ul>
        )}
    </div>
    </div>
</div>
);
};

export default PrescriptionList;
