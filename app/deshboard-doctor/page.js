import React from 'react';
import Sidebar from '../components/sidebarDoctor/page';

const DashboardLayout = () => {
return (
<div className="flex">
    <Sidebar />

    {/* Main Dashboard Content */}
    <div className="flex-1 p-10 bg-gray-100 relative">
    {/* Header with Logout Button */}
    <div className="absolute right-10 top-6">
        <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Logout
        </button>
    </div>

    {/* Dashboard Content */}
    <div className="text-2xl font-bold mb-4 text-center">Dashboard</div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
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
        <h2 className="text-lg font-semibold mb-2">New Patients</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">All Patients</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Prescriptions</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Payments</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 7 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Payments This Month</h2>
        <p className="text-3xl">0</p>
        </div>
        {/* Card 8 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Payments This Year</h2>
        <p className="text-3xl">0</p>
        </div>
    </div>

    {/* Appointment List */}
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Appointment List</h2>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto">
            <thead>
            <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Patient Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time Slot</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr className="text-center">
                <td className="py-2 px-4">0</td>
                <td className="py-2 px-4">NA</td>
                <td className="py-2 px-4">NA</td>
                <td className="py-2 px-4">NA</td>
                <td className="py-2 px-4">
                <span className="text-yellow-600">NA</span>
                </td>
                <td className="py-2 px-4">
                <div className="flex justify-center space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">View</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
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
