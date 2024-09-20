import React from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page'; 
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const DashboardLayout = () => {
return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Dashboard Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    
    {/* Header with Dropdown, Search, and Logout Button */}
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        {/* create New Dropdown and Search Bar */}
        <div className="flex items-center space-x-4">
            {/* Create New Dropdown */}
            <CreateNewDropdown />

            {/* Search Bar */}
            <div className="flex items-center hidden sm:flex space-x-2"> {/* Hide search bar on small screens */}
                <input
                    type="text"
                    placeholder="Search..."
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

    {/* Dashboard Content */}
    <div className="text-2xl font-bold mb-4 text-center w-full">Dashboard</div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-2">New Appointments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-2">Total Appointments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-2">Due Payments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-2">Total Payments</h2>
        <p className="text-3xl">0</p>
        </div>
    </div>

    {/* Appointment List */}
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-4">Appointment List</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto">
            <thead>
            <tr>
                <th className="py-2 px-2 sm:px-4">ID</th>
                <th className="py-2 px-2 sm:px-4">Patient Name</th>
                <th className="py-2 px-2 sm:px-4">Date</th>
                <th className="py-2 px-2 sm:px-4">Time Slot</th>
                <th className="py-2 px-2 sm:px-4">Status</th>
                <th className="py-2 px-2 sm:px-4">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr className="text-center">
                <td className="py-2 px-2 sm:px-4">0</td>
                <td className="py-2 px-2 sm:px-4">NA</td>
                <td className="py-2 px-2 sm:px-4">NA</td>
                <td className="py-2 px-2 sm:px-4">NA</td>
                <td className="py-2 px-2 sm:px-4">
                <span className="text-yellow-600">NA</span>
                </td>
                <td className="py-2 px-2 sm:px-4">
                <div className="flex justify-center space-x-1 sm:space-x-2">
                    <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm">
                    Edit
                    </button>
                    <button className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-green-700 text-xs sm:text-sm">
                    View
                    </button>
                    <button className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm">
                    Delete
                    </button>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
</div>
);
};

export default DashboardLayout;
