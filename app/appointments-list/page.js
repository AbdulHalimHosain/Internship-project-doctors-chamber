"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page'; 
import { FaSearch } from 'react-icons/fa'; 

// Simulating an API response for appointments
const fetchAppointments = (role, userId) => {
if (role === 'doctor' || role === 'receptionist') {
return [
    { id: 1, patientName: 'John Doe', age: 35, gender: 'Male', contact: '555-1234', date: '2024-09-18', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', age: 28, gender: 'Female', contact: '555-5678', date: '2024-09-19', time: '12:00 PM' },
];
}

if (role === 'patient') {
return [
    { id: 3, patientName: 'Hosain', age: 45, gender: 'Male', contact: '555-8765', date: '2024-09-20', time: '02:00 PM' },
];
}

return [];
};

const AppointmentList = () => {
const [appointments, setAppointments] = useState([]);
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true); 

useEffect(() => {
// Simulate fetching the logged-in user info will Replace with actual API call or authentication mechanism
const loggedInUser = {
    id: 123,
    name: 'Hosain',
    role: 'doctor', 
};

setUser(loggedInUser);

// Fetching appointments based on the user's role
const appointmentsData = fetchAppointments(loggedInUser.role, loggedInUser.id);
setAppointments(appointmentsData);
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

    {/* Main Appointment List Content */}
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
            placeholder="Search Patients..."
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
        {user.role === 'patient' ? 'Your Appointments' : 'All Patients Appointments'}
        </h2>

        {/* Appointment List */}
        {appointments.length === 0 ? (
        <p>No appointments available.</p>
        ) : (
        <ul className="space-y-4">
            {appointments.map((appointment) => (
            <li key={appointment.id} className="border-b border-gray-300 pb-2">
                <p className="text-sm font-medium text-gray-700">Patient Name: {appointment.patientName}</p>
                <p className="text-sm">Age: {appointment.age}</p>
                <p className="text-sm">Gender: {appointment.gender}</p>
                <p className="text-sm">Contact: {appointment.contact}</p>
                <p className="text-sm">Date: {appointment.date}</p>
                <p className="text-sm">Time: {appointment.time}</p>
            </li>
            ))}
        </ul>
        )}
    </div>
    </div>
</div>
);
};

export default AppointmentList;
