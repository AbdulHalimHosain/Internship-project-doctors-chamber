"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/page';

const UpdateProfilePage = () => {
const [profile, setProfile] = useState({
name: 'Hosain',
email: 'HOS@example.com',
phone: '+1234567890',
address: 'City, Country',
occupation: 'Engineer',
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleInputChange = (e) => {
const { name, value } = e.target;
setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value,
}));
};

const handleSaveChanges = async () => {
try {
    setLoading(true);
    setError(null);

    // Will make an API call to update the profile(await axios.put("/api/update-profile", profile);)

    console.log('Profile updated:', profile);
    alert('Profile updated successfully!');
} catch (err) {
    console.error(err);
    setError("Failed to update profile. Please try again.");
} finally {
    setLoading(false);
}
};

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Update Profile Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg text-center font-semibold mb-4">Update Profile</h2>

        {error && <p className="text-red-600">{error}</p>}

        {/* Update Profile Form */}
        <form className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md"
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <input
            type="text"
            name="occupation"
            value={profile.occupation}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md"
            />
        </div>

        {/* Save Changes Button */}
        <div className="mt-6">
            <button
            type="button"
            onClick={handleSaveChanges}
            className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600"
            disabled={loading}
            >
            {loading ? "Saving..." : "Save Changes"}
            </button>
        </div>
        </form>
    </div>
    </div>
</div>
);
};

export default UpdateProfilePage;
