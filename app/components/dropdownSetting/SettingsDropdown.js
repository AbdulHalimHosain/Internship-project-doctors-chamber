
"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCogs, FaChevronDown } from 'react-icons/fa';

const SettingsDropdown = () => {
const [settingsOpen, setSettingsOpen] = useState(false);

const toggleSettingsDropdown = () => {
setSettingsOpen(!settingsOpen);
};

return (
<li>
    <div
    className="flex items-center justify-between text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all cursor-pointer"
    onClick={toggleSettingsDropdown}
    >
    <div className="flex items-center">
        <FaCogs className="mr-3 text-xl" /> Settings
    </div>
    <FaChevronDown className="ml-2 text-sm" />
    </div>

    {settingsOpen && (
    <ul className="pl-10 space-y-2">
        <li>
        <Link href="#" className="flex items-center text-base font-medium hover:bg-indigo-600 rounded-lg py-2 px-4 transition-all">
            Update Profile
        </Link>
        </li>

    </ul>
    )}
</li>
);
};

export default SettingsDropdown;
