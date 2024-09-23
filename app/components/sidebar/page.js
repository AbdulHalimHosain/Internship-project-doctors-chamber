"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaClinicMedical, FaCalendarAlt, FaUser, FaPrescriptionBottleAlt, FaFileInvoiceDollar } from 'react-icons/fa';
import SettingsDropdown from '../dropdownSetting/SettingsDropdown';

const Sidebar = () => {
const [isOpen, setIsOpen] = useState(false);
const [userRole, setUserRole] = useState(null); 

useEffect(() => {
const fetchUserRole = async () => {
    const role = "doctor"; //replace with actual API logic
    setUserRole(role);
};

fetchUserRole();
}, []);

const toggleSidebar = () => {
setIsOpen(!isOpen);
};

return (
<div className="relative flex">
    {/* Sidebar Toggle Button for small screens */}
    <button
    className="lg:hidden p-3 focus:outline-none fixed z-20 top-4 left-4 bg-lightblue-400 text-white rounded-md"
    onClick={toggleSidebar}
    >
    <FaBars className="text-xl" />
    </button>

    {/* Sidebar */}
    <div
    className={`h-screen w-64 bg-lightblue-400 text-white flex flex-col justify-between shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static z-10`}
    >
    {/* Sidebar Header */}
    <div className="px-6 py-8 mt-12 lg:mt-0">
        <Link href="/" className="text-3xl font-semibold tracking-wide text-center block">
        HealthSphere
        </Link>
    </div>

    {/* Sidebar Items */}
    <nav className="flex-1 px-6">
        <ul className="space-y-4">
        {/* Common item for all users */}
        <li>
            <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
            <FaClinicMedical className="mr-3 text-xl" /> Dashboard
            </Link>
        </li>

        {/* Doctor-specific items */}
        {userRole === "doctor" && (
            <>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaUser className="mr-3 text-xl" /> Patients
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
            </>
        )}

        {/* Patient-specific items */}
        {userRole === "patient" && (
            <>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaCalendarAlt className="mr-3 text-xl" /> Appointment
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaPrescriptionBottleAlt className="mr-3 text-xl" /> My Prescriptions
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaFileInvoiceDollar className="mr-3 text-xl" /> My Billing
                </Link>
            </li>
            </>
        )}

        {/* Receptionist-specific items */}
        {userRole === "receptionist" && (
            <>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaCalendarAlt className="mr-3 text-xl" /> Manage Appointments
                </Link>
            </li>
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaFileInvoiceDollar className="mr-3 text-xl" /> Billing
                </Link>
            </li>
            </>
        )}

        {/* Dropdown */}
        <SettingsDropdown />
            <li>
                <Link href="#" className="flex items-center text-lg font-medium hover:bg-indigo-600 rounded-lg py-3 px-4 transition-all">
                <FaUser className="mr-3 text-xl" /> Profile
                </Link>
            </li>
        </ul>
    </nav>

    {/* Sidebar Footer */}
    <div className="px-6 py-6">
        <p className="text-xs text-center">&copy; Created by Hosain</p>
    </div>
    </div>

    {/* Overlay for small screens */}
    {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden" onClick={toggleSidebar}></div>}
</div>
);
};

export default Sidebar;
