"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page'; 
import { FaSearch } from 'react-icons/fa'; 
import Link from 'next/link';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

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
const [openEditDialog, setOpenEditDialog] = useState(false);
const [currentAppointment, setCurrentAppointment] = useState(null);
const [formValues, setFormValues] = useState({
patientName: '',
age: '',
gender: '',
contact: '',
date: '',
time: '',
});

useEffect(() => {
const loggedInUser = {
id: 123,
name: 'Hosain',
role: 'doctor',  
};

setUser(loggedInUser);
const appointmentsData = fetchAppointments(loggedInUser.role, loggedInUser.id);
setAppointments(appointmentsData);
setLoading(false); 
}, []);

const handleEditClick = (appointment) => {
setCurrentAppointment(appointment);
setFormValues({ ...appointment });
setOpenEditDialog(true);
};

const handleDeleteClick = (appointmentId) => {
const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
setAppointments(updatedAppointments);
};

const handleCancelClick = (appointmentId) => {
console.log(`Cancelling appointment with ID: ${appointmentId}`);
};

const handleDialogClose = () => {
setOpenEditDialog(false);
setCurrentAppointment(null);
};

const handleFormChange = (e) => {
setFormValues({
...formValues,
[e.target.name]: e.target.value,
});
};

const handleSaveChanges = () => {
const updatedAppointments = appointments.map((appointment) =>
appointment.id === currentAppointment.id ? { ...formValues } : appointment
);
setAppointments(updatedAppointments);
handleDialogClose();
};

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
    <CreateNewDropdown />
    <div className="flex items-center hidden sm:flex space-x-2">
        <input
            type="text"
            placeholder="Search Appointments..."
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64"
        />
        <button className="bg-lightblue-400 text-white px-3 py-2 rounded hover:bg-indigo-600">
            <FaSearch />
        </button>
    </div>
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
                <div className="flex justify-center space-x-2 mt-2">
                    {user.role === 'doctor' && (
                        <>
                            <button
                                className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm"
                                onClick={() => handleEditClick(appointment)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                                onClick={() => handleDeleteClick(appointment.id)}
                            >
                                Delete
                            </button>
                        </>
                    )}
                    {user.role === 'patient' && (
                        <button
                            className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                            onClick={() => handleCancelClick(appointment.id)}
                        >
                            Cancel Appointment
                        </button>
                    )}
                </div>
            </li>
        ))}
    </ul>
)}
</div>
<div className="mt-6">
<Link href="/create-appointment" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
    Create New Appointment
</Link>
</div>
</div>

{/* Edit Appointment Dialog */}
<Dialog open={openEditDialog} onClose={handleDialogClose}>
<DialogTitle>Edit Appointment</DialogTitle>
<DialogContent>
<TextField
    margin="dense"
    name="patientName"
    label="Patient Name"
    type="text"
    fullWidth
    value={formValues.patientName}
    onChange={handleFormChange}
/>
<TextField
    margin="dense"
    name="age"
    label="Age"
    type="number"
    fullWidth
    value={formValues.age}
    onChange={handleFormChange}
/>
<TextField
    margin="dense"
    name="gender"
    label="Gender"
    type="text"
    fullWidth
    value={formValues.gender}
    onChange={handleFormChange}
/>
<TextField
    margin="dense"
    name="contact"
    label="Contact"
    type="text"
    fullWidth
    value={formValues.contact}
    onChange={handleFormChange}
/>
<TextField
    margin="dense"
    name="date"
    label="Date"
    type="date"
    fullWidth
    value={formValues.date}
    onChange={handleFormChange}
/>
<TextField
    margin="dense"
    name="time"
    label="Time"
    type="time"
    fullWidth
    value={formValues.time}
    onChange={handleFormChange}
/>
</DialogContent>
<DialogActions>
<Button onClick={handleDialogClose} color="primary">
    Cancel
</Button>
<Button onClick={handleSaveChanges} color="primary">
    Save
</Button>
</DialogActions>
</Dialog>
</div>
);
};

export default AppointmentList;
