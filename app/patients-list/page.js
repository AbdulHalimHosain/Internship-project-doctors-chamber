"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';


const fetchPatients = (role, userId) => {
if (role === 'doctor' || role === 'receptionist') {
return [
{ id: 1, name: 'Hosain', age: 30, gender: 'Male', contact: '+1234567890' },
{ id: 2, name: 'John Doe', age: 40, gender: 'Male', contact: '+0987654321' },
];
}
return [];
};

const PatientList = () => {
const [patients, setPatients] = useState([]);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [openEditDialog, setOpenEditDialog] = useState(false);
const [currentPatient, setCurrentPatient] = useState(null);
const [formValues, setFormValues] = useState({
name: '',
age: '',
gender: '',
contact: '',
});

useEffect(() => {
const loggedInUser = {
id: 123,
name: 'Hosain',
role: 'doctor',  
};

setUser(loggedInUser);

const patientsData = fetchPatients(loggedInUser.role, loggedInUser.id);
setPatients(patientsData);
setLoading(false);
}, []);

const handleEditClick = (patient) => {
setCurrentPatient(patient);
setFormValues({ ...patient });
setOpenEditDialog(true);
};

const handleDeleteClick = (patientId) => {
const updatedPatients = patients.filter((patient) => patient.id !== patientId);
setPatients(updatedPatients);
};

const handleDialogClose = () => {
setOpenEditDialog(false);
setCurrentPatient(null);
};

const handleFormChange = (e) => {
setFormValues({
...formValues,
[e.target.name]: e.target.value,
});
};

const handleSaveChanges = () => {
const updatedPatients = patients.map((patient) =>
patient.id === currentPatient.id ? { ...formValues } : patient
);
setPatients(updatedPatients);
handleDialogClose();
};

if (loading) {
return <div>Loading...</div>;
}

if (!user) {
return <div>Loading user data...</div>;
}

if (user.role !== 'doctor' && user.role !== 'receptionist') {
return (
<div className="flex w-full min-h-screen h-screen">
<Sidebar />
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Access Denied</h2>
        <p className="text-gray-700">You do not have permission to view the patient list.</p>
    </div>
</div>
</div>
);
}

return (
<div className="flex w-full min-h-screen h-screen">
<Sidebar />

{/* Main Patient List Content */}
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
<div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
    {/* Create New Dropdown and Search Bar */}
    <div className="flex items-center space-x-4">
        <CreateNewDropdown />
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
    <Link href="/">
        <div>
            <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
                Logout
            </button>
        </div>
    </Link>
</div>

{/* Patient List */}
<div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Patient List</h2>

    {patients.length === 0 ? (
        <p>No patients available.</p>
    ) : (
        <ul className="space-y-4">
            {patients.map((patient) => (
                <li key={patient.id} className="border-b border-gray-300 pb-2">
                    <p className="text-sm font-medium text-gray-700">Name: {patient.name}</p>
                    <p className="text-sm">Age: {patient.age}</p>
                    <p className="text-sm">Gender: {patient.gender}</p>
                    <p className="text-sm">Contact: {patient.contact}</p>
                    <div className="flex justify-center space-x-1 sm:space-x-2 mt-2">
                        <button
                            onClick={() => handleEditClick(patient)}
                            className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteClick(patient.id)}
                            className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )}
</div>
<div className="mt-6">
    <Link href="/sign-up" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create New Patient
    </Link>
</div>
</div>

{/* Edit Patient Dialog */}
<Dialog open={openEditDialog} onClose={handleDialogClose}>
<DialogTitle>Edit Patient</DialogTitle>
<DialogContent>
    <TextField
        margin="dense"
        name="name"
        label="Name"
        type="text"
        fullWidth
        value={formValues.name}
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

export default PatientList;
