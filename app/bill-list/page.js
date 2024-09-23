"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page';
import { FaSearch } from 'react-icons/fa';


const fetchBillingRecords = (role, userId) => {
if (role === 'doctor' || role === 'receptionist') {

return [
{ id: 'INV-001', patientName: 'John', date: '2024-09-20', amount: '$500', status: 'Paid' },
{ id: 'INV-002', patientName: 'Jane', date: '2024-09-21', amount: '$300', status: 'Unpaid' },
];
}

if (role === 'patient') {
return [
{ id: 'INV-003', patientName: 'Hosain', date: '2024-09-22', amount: '$200', status: 'Paid' },
];
}

return [];
};

const BillingList = () => {
const [billingRecords, setBillingRecords] = useState([]);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true); // Add loading state

useEffect(() => {
// Simulate logged-in user
const loggedInUser = {
id: 123, 
name: 'Hosain',
role: 'doctor',  
};

setUser(loggedInUser);

// Fetching billing records based on user role
const records = fetchBillingRecords(loggedInUser.role, loggedInUser.id);
setBillingRecords(records);
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

{/* Main Billing List Content */}
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
{/* Header with Dropdown, Search, and Logout Button */}
<div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
    {/* Create New Dropdown and Search Bar */}
    <div className="flex items-center space-x-4">
    {/* Create New Dropdown */}
    <CreateNewDropdown />

    {/* Search Bar */}
    <div className="flex items-center hidden sm:flex space-x-2">
        <input
        type="text"
        placeholder="Search Billing Records..."
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

{/* Billing List */}
<div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">
    {user.role === 'patient' ? 'Your Billing Records' : 'All Patients Billing Records'}
    </h2>
    <div className="overflow-x-auto touch-pan-x">
    <table className="min-w-full bg-white table-auto">
        <thead>
        <tr>
            <th className="py-2 px-2 sm:px-4">Invoice ID</th>
            <th className="py-2 px-2 sm:px-4">Patient Name</th>
            <th className="py-2 px-2 sm:px-4">Date</th>
            <th className="py-2 px-2 sm:px-4">Amount</th>
            <th className="py-2 px-2 sm:px-4">Status</th>
            <th className="py-2 px-2 sm:px-4">Actions</th>
        </tr>
        </thead>
        <tbody>
        {billingRecords.length === 0 ? (
            <tr>
            <td colSpan="6" className="py-4 text-center">
                No billing records available.
            </td>
            </tr>
        ) : (
            billingRecords.map((record) => (
            <tr key={record.id} className="text-center">
                <td className="py-2 px-2 sm:px-4">{record.id}</td>
                <td className="py-2 px-2 sm:px-4">{record.patientName}</td>
                <td className="py-2 px-2 sm:px-4">{record.date}</td>
                <td className="py-2 px-2 sm:px-4">{record.amount}</td>
                <td className="py-2 px-2 sm:px-4">{record.status}</td>
                <td className="py-2 px-2 sm:px-4">
                <div className="flex justify-center space-x-1 sm:space-x-2">
                    {user.role === 'doctor' || user.role === 'receptionist' ? (
                    <>
                        <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm">
                        Edit
                        </button>
                        <button className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-yellow-700 text-xs sm:text-sm">
                        Invoice
                        </button>
                        <button className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm">
                        Delete
                        </button>
                    </>
                    ) : (
                    <button className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-yellow-700 text-xs sm:text-sm">
                        Invoice
                    </button>
                    )}
                </div>
                </td>
            </tr>
            ))
        )}
        </tbody>
    </table>
    </div>
</div>
</div>
</div>
);
};

export default BillingList;
