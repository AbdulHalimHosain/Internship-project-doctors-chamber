import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaUser, FaPrescriptionBottleAlt, FaDollarSign, FaCogs, FaHeart, FaFlask, FaFileInvoiceDollar } from 'react-icons/fa';
import SettingsDropdown from '../dropdownSetting/SettingsDropdown';

const Sidebar = () => {
return (
<div className="h-screen w-64 bg-lightblue-400 text-white flex flex-col justify-between shadow-lg">
    {/* Sidebar Header */}
    <div className="px-6 py-8">
    <Link href="/" className="text-3xl font-semibold tracking-wide text-center block">
        HealthSphere
    </Link>
    </div>

    {/* Sidebar Items */}
    <nav className="flex-1 px-6">
    <ul className="space-y-4">
        <li>
        <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
            <FaCalendarAlt className="mr-3 text-xl" /> Dashboard
        </Link>
        </li>
        <li>
        <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
            <FaCalendarAlt className="mr-3 text-xl" /> Appointment
        </Link>
        </li>
        <li>
        <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
            <FaPrescriptionBottleAlt className="mr-3 text-xl" /> Prescriptions
        </Link>
        </li>

        <li>
        <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
            <FaFileInvoiceDollar className="mr-3 text-xl" /> Billing
        </Link>
        </li>
        {/* Settings with Dropdown */}
        <SettingsDropdown /> {/* Client-side dropdown component */}
    </ul>
    </nav>

    {/* Sidebar Footer */}
    <div className="px-6 py-6">
    <p className="text-xs text-center">&copy; Created by Hosain</p>
    </div>
</div>
);
};

export default Sidebar;
