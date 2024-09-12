import React from 'react';
import Sidebar from '../components/sidebarPatients/page';
import Link from 'next/link';

const DashboardLayout = () => {
return (
<div className="flex">
    <Sidebar />

    {/* Main Dashboard Content */}
    <div className="flex-1 p-10 bg-gray-100">
    <div className="text-2xl font-bold mb-4">Dashboard</div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">New Appointments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Appointments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Prescriptions</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Due Payments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Payments</h2>
        <p className="text-3xl">0</p>
        </div>
    </div>

    {/* Appointment List */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Appointment List | 24 Sep 2020</h2>
        <table className="min-w-full bg-white">
        <thead>
            <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Patient Name</th>
            <th className="py-2">Date</th>
            <th className="py-2">Time Slot</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-center">
            <td className="py-2">0</td>
            <td className="py-2">NA</td>
            <td className="py-2">NA</td>
            <td className="py-2">NA</td>
            <td className="py-2">
                <span className="text-yellow-600">NA</span>
            </td>
            <td className="py-2 ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button> 
                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">View</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
</div>
);
};

export default DashboardLayout;
