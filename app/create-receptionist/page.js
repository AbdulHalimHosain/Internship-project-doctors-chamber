"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/page'; 
const CreateReceptionist = () => {
const [receptionistDetails, setReceptionistDetails] = useState({
name: '',
email: '',
password: '',
mobileNumber: '',
nidNumber: ''
});

const handleInputChange = (e) => {
const { name, value } = e.target;
setReceptionistDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value
}));
};

const handleSubmit = (e) => {
e.preventDefault();
console.log('Receptionist details submitted:', receptionistDetails);
setReceptionistDetails({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    nidNumber: ''
});
};

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    <div className="flex-1 p-6 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">Create New Receptionist</h1>

        {/* Logout Button */}
        <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Logout
        </button>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
            </label>
            <input
            type="text"
            id="name"
            name="name"
            value={receptionistDetails.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Email Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            value={receptionistDetails.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Password Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input
            type="password"
            id="password"
            name="password"
            value={receptionistDetails.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Mobile Number Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
            Mobile Number
            </label>
            <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={receptionistDetails.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* NID Number Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nidNumber">
            NID Number
            </label>
            <input
            type="text"
            id="nidNumber"
            name="nidNumber"
            value={receptionistDetails.nidNumber}
            onChange={handleInputChange}
            placeholder="Enter NID number"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Create Receptionist
        </button>
        </form>
    </div>
    </div>
</div>
);
};

export default CreateReceptionist;
