"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/page";
import Link from "next/link";

// Dummy data to simulate fetching from the database
const fetchProfileData = () => {
// Simulate fetching from an API
return {
name: "Hosain",
email: "HOS@example.com",
phone: "+1234567890",
address: "City, Country",
occupation: "Doctor",
role: "receptionist", 
};
};

const ProfilePage = () => {
const [profile, setProfile] = useState(null);

useEffect(() => {
// Fetch the profile data when the component mounts
const data = fetchProfileData();
setProfile(data);
}, []);

if (!profile) {
return <div>Loading...</div>; 
}

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Profile Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg text-center font-semibold mb-4">
        {profile.role === "doctor"
            ? "Doctor Profile"
            : profile.role === "patient"
            ? "Patient Profile"
            : "Receptionist Profile"}
        </h2>

        {/* Profile Display */}
        <div className="space-y-4">
        <div>
            <p className="text-sm font-medium text-gray-700">Full Name</p>
            <p className="mt-1 text-base text-gray-900">{profile.name}</p>
        </div>

        <div>
            <p className="text-sm font-medium text-gray-700">Email</p>
            <p className="mt-1 text-base text-gray-900">{profile.email}</p>
        </div>

        <div>
            <p className="text-sm font-medium text-gray-700">Phone</p>
            <p className="mt-1 text-base text-gray-900">{profile.phone}</p>
        </div>

        <div>
            <p className="text-sm font-medium text-gray-700">Address</p>
            <p className="mt-1 text-base text-gray-900">{profile.address}</p>
        </div>

        <div>
            <p className="text-sm font-medium text-gray-700">Occupation</p>
            <p className="mt-1 text-base text-gray-900">{profile.occupation}</p>
        </div>
        </div>

        {/* Link to Update Profile */}
        <div className="mt-6">
        <Link
            href="update-profile"
            className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
            Update Profile
        </Link>
        </div>
    </div>
    </div>
</div>
);
};

export default ProfilePage;
