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

const DoctorAvailability = () => {
const [doctorAvailability, setDoctorAvailability] = useState({
date: '',
times: []
});

const [submittedAvailabilities, setSubmittedAvailabilities] = useState([]);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [remainingAvailableTimes, setRemainingAvailableTimes] = useState(allAvailableTimes);

const handleDateChange = (e) => {
const { value } = e.target;
setDoctorAvailability((prev) => ({ ...prev, date: value }));
};

const handleTimeSelection = (time) => {
setDoctorAvailability((prev) => {
    let updatedTimes;

    if (prev.times.includes(time)) {
    updatedTimes = prev.times.filter((t) => t !== time);
    } else {
    updatedTimes = [...prev.times, time];
    }
    return { ...prev, times: updatedTimes };
});
};

const submitAvailability = (e) => {
e.preventDefault();

// Saved the doctor's availability for future patient bookings
setSubmittedAvailabilities([...submittedAvailabilities, doctorAvailability]);

// Removed the selected times from the available times list
setRemainingAvailableTimes((prevTimes) =>
    prevTimes.filter((time) => !doctorAvailability.times.includes(time))
);

setDoctorAvailability({
    date: '',
    times: []
});


setShowSuccessMessage(true);

setTimeout(() => {
    setShowSuccessMessage(false);
}, 3000);

console.log('Submitted availability:', doctorAvailability);
};

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    <div className="flex-1 p-6 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center px-4 sm:px-12 top-4 sm:top-6">
        {/* Title */}
        <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold">Set Your Availability</h1>
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
            Availability submitted successfully!
        </div>
        )}

        <form onSubmit={submitAvailability}>
        {/* Date Selection */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Select Date
            </label>
            <input
            type="date"
            id="date"
            name="date"
            value={doctorAvailability.date}
            onChange={handleDateChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            />
        </div>

        {/* Time Slot Selection */}
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Available Time Slots
            </label>
            <div className="grid grid-cols-4 gap-2">
            {remainingAvailableTimes.length > 0 ? (
                remainingAvailableTimes.map((time, index) => (
                <button
                    type="button"
                    key={index}
                    onClick={() => handleTimeSelection(time)}
                    className={`px-4 py-2 rounded-lg ${
                    doctorAvailability.times.includes(time)
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
            Submit Availability
        </button>
        </form>

        {/* Display Submitted Availabilities */}
        <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Your Submitted Availability</h2>
        {submittedAvailabilities.length > 0 ? (
            <ul className="space-y-4">
            {submittedAvailabilities.map((avail, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                <p className="text-sm font-medium text-gray-700">Date: {avail.date}</p>
                <p className="text-sm">Times: {avail.times.join(', ')}</p>
                </li>
            ))}
            </ul>
        ) : (
            <p>No availability submitted yet.</p>
        )}
        </div>
    </div>
    </div>
</div>
);
};

export default DoctorAvailability;
