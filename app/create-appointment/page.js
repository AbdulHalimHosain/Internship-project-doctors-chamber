"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/page'; 

const allAvailableTimes = [
'08:00 - 08:30', '08:30 - 09:00', '09:00 - 09:30',
'09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00',
'11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30',
'12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00',
'14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30',
'15:30 - 16:00', '16:00 - 16:30'
];

const CreateAppointment = () => {
const [appointmentInfo, setAppointmentInfo] = useState({
patientName: '',
appointmentDate: '',
appointmentTime: ''
});

const [bookedTimes, setBookedTimes] = useState([]); 
const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

const handleInputChange = (e) => {
const { name, value } = e.target;
setAppointmentInfo((prevInfo) => ({
    ...prevInfo,
    [name]: value 
}));
};

const handleTimeSelection = (time) => {
// Set the selected time in appointmentInfo and add it to bookedTimes
setAppointmentInfo((prevInfo) => ({
    ...prevInfo,
    appointmentTime: time
}));
};

const submitAppointment = (e) => {
e.preventDefault();
if (appointmentInfo.appointmentTime) {
    // Add the selected time to bookedTimes
    setBookedTimes([...bookedTimes, appointmentInfo.appointmentTime]);

    // Logic to handle form submission (e.g., API call)
    console.log('Appointment created:', appointmentInfo);

    // Reset form fields after submission
    setAppointmentInfo({
    patientName: '',
    appointmentDate: '',
    appointmentTime: ''
    });

    // Show success message
    setShowSuccessMessage(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
    setShowSuccessMessage(false);
    }, 3000);
} else {
    alert("Please select a time for the appointment.");
}
};

// Filter out already booked times
const availableTimes = allAvailableTimes.filter((time) => !bookedTimes.includes(time));

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    <div className="flex-1 p-6 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center px-4 sm:px-12 top-4 sm:top-6">
        {/* Title Wrapper */}
        <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold">New Appointment</h1>
        </div>

        {/* Logout Button */}
        <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Logout
        </button>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Success Message */}
        {showSuccessMessage && (
        <div className="bg-green-500 text-white p-4 rounded-lg mb-4 shadow-md transition-all transform translate-y-0 ease-in-out duration-300">
            Appointment created successfully!
        </div>
        )}

        <form onSubmit={submitAppointment}>
        {/* Patient Name Input */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
            Patient Name
            </label>
            <input
            type="text"
            id="patientName"
            name="patientName"
            value={appointmentInfo.patientName}
            onChange={handleInputChange}
            placeholder="Enter patient name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Date Selection */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentDate">
            Date
            </label>
            <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={appointmentInfo.appointmentDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Time Selection */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Available Times
            </label>
            <div className="grid grid-cols-4 gap-2">
            {availableTimes.length > 0 ? (
                availableTimes.map((time, index) => (
                <button
                    type="button"
                    key={index}
                    onClick={() => handleTimeSelection(time)}
                    className={`px-4 py-2 rounded-lg ${
                    appointmentInfo.appointmentTime === time
                        ? 'bg-green-500 text-white'
                        : 'bg-green-300 text-black'
                    }`}
                >
                    {time}
                </button>
                ))
            ) : (
                <p>No available times left for this date.</p>
            )}
            </div>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Create Appointment
        </button>
        </form>
    </div>
    </div>
</div>
);
};

export default CreateAppointment;
