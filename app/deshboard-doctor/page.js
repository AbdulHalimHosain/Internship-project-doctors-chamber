"use client";
import React, { useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page'; 
import Link from 'next/link';

const DashboardLayout = () => {
const [appointments, setAppointments] = useState([
{ id: 1, patientName: 'John Doe', date: '2024-09-25', timeSlot: '10:00 AM', status: 'Confirmed' },
]);


const addAppointment = (newAppointment) => {
setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
};

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Dashboard Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">

    {/* Header with Dropdown, Search, and Logout Button */}
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        {/* Create New Dropdown and Search Bar */}
        <div className="flex items-center space-x-4">
        {/* Create New Dropdown */}
        <CreateNewDropdown onAddAppointment={addAppointment} />

        </div>

        {/* Logout Button */}
        <Link href="/">
        <div>
            <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
            Logout
            </button>
        </div>
        </Link>
    </div>

    {/* Dashboard Content */}
    <div className="text-2xl font-bold mb-4 text-center">Dashboard</div>

    {/* Dashboard Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">New Appointments</h2>
        <p className="text-3xl">{appointments.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Appointments</h2>
        <p className="text-3xl">{appointments.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">New Patients</h2>
        <p className="text-3xl">5</p> {/* Example data */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">All Patients</h2>
        <p className="text-3xl">50</p> {/* Example data */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Prescriptions</h2>
        <p className="text-3xl">15</p> {/* Example data */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Total Payments</h2>
        <p className="text-3xl">$5,000</p> {/* Example data */}
        </div>
    </div>

    {/* Appointment List */}
    <div className="bg-white p-6 rounded-lg shadow-md">
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
            </tr>
            </thead>
            <tbody>
            {appointments.map((appointment) => (
                <tr key={appointment.id} className="text-center">
                <td className="py-2 px-2 sm:px-4">{appointment.id}</td>
                <td className="py-2 px-2 sm:px-4">{appointment.patientName}</td>
                <td className="py-2 px-2 sm:px-4">{appointment.date}</td>
                <td className="py-2 px-2 sm:px-4">{appointment.timeSlot}</td>
                <td className="py-2 px-2 sm:px-4">
                    <span className={`text-${appointment.status === 'Confirmed' ? 'green' : 'yellow'}-600`}>
                    {appointment.status}
                    </span>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    </div>
</div>
);
};

export default DashboardLayout;
