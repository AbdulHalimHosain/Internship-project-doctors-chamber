"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const fetchPrescriptions = (role, userId) => {
const prescriptions = [
{
id: 1,
patientName: 'Hosain',
doctorName: 'Dr. Smith',
date: '2024-09-20',
medicines: ['Medicine 1', 'Medicine 2', 'Medicine 3'],
patientId: 1,
},
{
id: 2,
patientName: 'Alex',
doctorName: 'Dr. Smith',
date: '2024-09-21',
medicines: ['Medicine A', 'Medicine B'],
patientId: 2,
},
];

if (role === 'doctor' || role === 'receptionist') {
return prescriptions;
}

if (role === 'patient') {
return prescriptions.filter(prescription => prescription.patientId === userId);
}

return [];
};

const PrescriptionList = () => {
const [prescriptions, setPrescriptions] = useState([]);
const [filteredPrescriptions, setFilteredPrescriptions] = useState([]);
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [openEditDialog, setOpenEditDialog] = useState(false);
const [currentPrescription, setCurrentPrescription] = useState(null);
const [formValues, setFormValues] = useState({
patientName: '',
doctorName: '',
date: '',
medicines: '',
});
const [searchTerm, setSearchTerm] = useState(""); 

useEffect(() => {
const loggedInUser = {
id: 1,
name: 'Dr. Smith',
role: 'doctor',  
};

setUser(loggedInUser);
const prescriptionsData = fetchPrescriptions(loggedInUser.role, loggedInUser.id);
setPrescriptions(prescriptionsData);
setFilteredPrescriptions(prescriptionsData); // Initialized filtered prescriptions
setLoading(false);
}, []);

const handleSearchChange = (e) => {
const term = e.target.value.toLowerCase();
setSearchTerm(term);

const filtered = prescriptions.filter((prescription) =>
prescription.patientName.toLowerCase().includes(term) ||
prescription.doctorName.toLowerCase().includes(term) ||
prescription.date.toLowerCase().includes(term) ||
prescription.medicines.join(', ').toLowerCase().includes(term)
);

setFilteredPrescriptions(filtered); // Updated filtered prescriptions based on search
};

const handleEditClick = (prescription) => {
setCurrentPrescription(prescription);
setFormValues({
patientName: prescription.patientName,
doctorName: prescription.doctorName,
date: prescription.date,
medicines: prescription.medicines.join(', '),
});
setOpenEditDialog(true);
};

const handleDeleteClick = (prescriptionId) => {
const updatedPrescriptions = prescriptions.filter((prescription) => prescription.id !== prescriptionId);
setPrescriptions(updatedPrescriptions);
setFilteredPrescriptions(updatedPrescriptions);
};

const handleDialogClose = () => {
setOpenEditDialog(false);
setCurrentPrescription(null);
};

const handleFormChange = (e) => {
setFormValues({
...formValues,
[e.target.name]: e.target.value,
});
};

const handleSaveChanges = () => {
const updatedPrescriptions = prescriptions.map((prescription) =>
prescription.id === currentPrescription.id
? { ...currentPrescription, ...formValues, medicines: formValues.medicines.split(',').map(med => med.trim()) }
: prescription
);
setPrescriptions(updatedPrescriptions);
setFilteredPrescriptions(updatedPrescriptions);
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

{/* Main Prescription List Content */}
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
<div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
    {/* Create New Dropdown and Search Bar */}
    <div className="flex items-center space-x-4">
    <CreateNewDropdown />
    <div className="flex items-center hidden sm:flex space-x-2">
        <input
        type="text"
        placeholder="Search Prescriptions..."
        className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64"
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <button className="bg-lightblue-400 text-white px-3 py-2 rounded hover:bg-indigo-600">
        <FaSearch />
        </button>
    </div>
    </div>

    {/* Logout Button */}
    <div>
    <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Logout
    </button>
    </div>
</div>

<div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">
    {user.role === 'patient' ? 'Your Prescriptions' : 'All Patients Prescriptions'}
    </h2>

    {/* Prescription List */}
    {filteredPrescriptions.length === 0 ? (
    <p>No prescriptions available.</p>
    ) : (
    <ul className="space-y-4">
        {filteredPrescriptions.map(prescription => (
        <li key={prescription.id} className="border-b border-gray-300 pb-2">
            <p className="text-sm font-medium text-gray-700">Patient Name: {prescription.patientName}</p>
            <p className="text-sm">Doctor: {prescription.doctorName}</p>
            <p className="text-sm">Date: {prescription.date}</p>
            <p className="text-sm">Medicines:</p>
            <ul className="list-disc list-inside text-sm">
            {prescription.medicines.map((medicine, index) => (
                <li key={index}>{medicine}</li>
            ))}
            </ul>
            <div className="flex justify-center space-x-2 mt-2">
            {(user.role === 'doctor' || user.role === 'receptionist') && (
                <>
                <button
                    className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm"
                    onClick={() => handleEditClick(prescription)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                    onClick={() => handleDeleteClick(prescription.id)}
                >
                    Delete
                </button>
                </>
            )}
            </div>
        </li>
        ))}
    </ul>
    )}
</div>

{/* Link to Create Prescription Page */}
{(user.role === 'doctor' || user.role === 'receptionist') && (
    <div className="mt-6">
    <Link href="/create-prescription" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create New Prescription
    </Link>
    </div>
)}
</div>

{/* Edit Prescription Dialog */}
<Dialog open={openEditDialog} onClose={handleDialogClose}>
<DialogTitle>Edit Prescription</DialogTitle>
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
    name="doctorName"
    label="Doctor Name"
    type="text"
    fullWidth
    value={formValues.doctorName}
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
    name="medicines"
    label="Medicines (comma-separated)"
    type="text"
    fullWidth
    value={formValues.medicines}
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

export default PrescriptionList;
