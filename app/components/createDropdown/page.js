"use client";

import React, { useState, useEffect } from 'react';


const fetchUserData = () => {
return {
id: 1,
name: 'Hosain',
role: 'doctor', 
};
};

const CreateNewDropdown = ({ userRole }) => {
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
setDropdownOpen(!dropdownOpen);
};


const getDropdownOptions = () => {
switch (userRole) {
    case 'doctor':
    return (
        <>
        <a href="/sign-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Patient
        </a>
        <a href="create-appointment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Appointment
        </a>
        <a href="create-receptionist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Receptionist
        </a>
        <a href="/create-prescription" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Prescription
        </a>
        </>
    );
    case 'receptionist':
    return (
        <>
        <a href="sign-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Patient
        </a>
        <a href="create-appointment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Appointment
        </a>
        </>
    );
    case 'patient':
    return (
        <>
        <a href="create-appointment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Appointment
        </a>
        </>
    );
    default:
    return null;
}
};

return (
<div className="relative inline-block text-left">
    <div
    onClick={toggleDropdown}
    className="bg-lightblue-400 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-600 
            ml-6 sm:ml-8 md:ml-0 text-sm md:text-base lg:text-lg transition-all duration-300 ease-in-out"
    >
    Create New
    </div>
    {dropdownOpen && (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
        <div className="py-1">{getDropdownOptions()}</div>
    </div>
    )}
</div>
);
};

const Dashboard = () => {
const [user, setUser] = useState(null);

useEffect(() => {
// Fetching the logged-in user's data
const loggedInUser = fetchUserData();
setUser(loggedInUser);
}, []);

if (!user) {
return <div>Loading...</div>; 
}

return (
<div className="flex items-center p-4">
    <CreateNewDropdown userRole={user.role} />
</div>
);
};

export default Dashboard;
