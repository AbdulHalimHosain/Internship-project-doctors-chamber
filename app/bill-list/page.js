"use client";

import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Sidebar from '../components/sidebar/page';
import CreateNewDropdown from '../components/createDropdown/page';
import Link from 'next/link';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const fetchBillingRecords = (role, userId) => {
if (role === 'doctor' || role === 'receptionist') {
return [
{ id: 'INV-001', patientName: 'John', date: '2024-09-20', amount: '$500', status: 'Paid' },
{ id: 'INV-002', patientName: 'Jane', date: '2024-09-21', amount: '$300', status: 'Unpaid' },
];
}

if (role === 'patient') {
return [
{ id: 'INV-003', patientName: 'Hosain', date: '2024-09-22', amount: '$200', status: 'Paid' },
];
}

return [];
};

const BillingList = () => {
const [billingRecords, setBillingRecords] = useState([]);
const [filteredBillingRecords, setFilteredBillingRecords] = useState([]); // Filtered records
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [openEditDialog, setOpenEditDialog] = useState(false);
const [currentRecord, setCurrentRecord] = useState(null);
const [formValues, setFormValues] = useState({
patientName: '',
date: '',
amount: '',
status: '',
});
const [searchTerm, setSearchTerm] = useState(""); 

useEffect(() => {
const loggedInUser = {
id: 123,
name: 'Hosain',
role: 'doctor',  
};

setUser(loggedInUser);
const records = fetchBillingRecords(loggedInUser.role, loggedInUser.id);
setBillingRecords(records);
setFilteredBillingRecords(records); // Initialized filtered records
setLoading(false);
}, []);

const handleSearchChange = (e) => {
const term = e.target.value.toLowerCase();
setSearchTerm(term);

const filtered = billingRecords.filter((record) =>
record.patientName.toLowerCase().includes(term) ||
record.date.toLowerCase().includes(term) ||
record.amount.includes(term) || // Amount remains in string format with $
record.status.toLowerCase().includes(term)
);

setFilteredBillingRecords(filtered); // Updated filtered records based on search
};

const handleEditClick = (record) => {
setCurrentRecord(record);
setFormValues({
patientName: record.patientName,
date: record.date,
amount: record.amount.replace('$', ''),
status: record.status,
});
setOpenEditDialog(true);
};

const handleDeleteClick = (recordId) => {
const updatedRecords = billingRecords.filter((record) => record.id !== recordId);
setBillingRecords(updatedRecords);
setFilteredBillingRecords(updatedRecords);
};

const handleDialogClose = () => {
setOpenEditDialog(false);
setCurrentRecord(null);
};

const handleFormChange = (e) => {
setFormValues({
...formValues,
[e.target.name]: e.target.value,
});
};

const handleSaveChanges = () => {
const updatedRecords = billingRecords.map((record) =>
record.id === currentRecord.id
? { ...currentRecord, ...formValues, amount: `$${formValues.amount}` }
: record
);
setBillingRecords(updatedRecords);
setFilteredBillingRecords(updatedRecords);
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

{/* Main Billing List Content */}
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
<div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
    {/* Create New Dropdown and Search Bar */}
    <div className="flex items-center space-x-4">
    <CreateNewDropdown />
    <div className="flex items-center hidden sm:flex space-x-2">
        <input
        type="text"
        placeholder="Search Billing Records..."
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
    <Link href="/">
    <div>
        <button className="bg-lightblue-400 text-white px-4 py-2 rounded hover:bg-indigo-600">
        Logout
        </button>
    </div>
    </Link>
</div>

{/* Billing Records Table */}
<div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">
    {user.role === 'patient' ? 'Your Billing Records' : 'All Patients Billing Records'}
    </h2>

    {filteredBillingRecords.length === 0 ? (
    <p>No billing records available.</p>
    ) : (
    <ul className="space-y-4">
        {filteredBillingRecords.map((record) => (
        <li key={record.id} className="border-b border-gray-300 pb-2">
            <p className="text-sm font-medium text-gray-700">Invoice ID: {record.id}</p>
            <p className="text-sm">Patient Name: {record.patientName}</p>
            <p className="text-sm">Date: {record.date}</p>
            <p className="text-sm">Amount: {record.amount}</p>
            <p className="text-sm">Status: {record.status}</p>
            <div className="flex justify-center space-x-2 mt-2">
            {user.role === 'doctor' && (
                <>
                <button
                    className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-blue-700 text-xs sm:text-sm"
                    onClick={() => handleEditClick(record)}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-700 text-xs sm:text-sm"
                    onClick={() => handleDeleteClick(record.id)}
                >
                    Delete
                </button>
                </>
            )}
            {user.role === 'patient' && (
                <Link href="/invoice">
                <button className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-yellow-700 text-xs sm:text-sm">
                    Invoice
                </button>
                </Link>
            )}
            </div>
        </li>
        ))}
    </ul>
    )}
</div>
</div>

{/* Edit Billing Record Dialog */}
<Dialog open={openEditDialog} onClose={handleDialogClose}>
<DialogTitle>Edit Billing Record</DialogTitle>
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
    name="date"
    label="Date"
    type="date"
    fullWidth
    value={formValues.date}
    onChange={handleFormChange}
    />
    <TextField
    margin="dense"
    name="amount"
    label="Amount"
    type="number"
    fullWidth
    value={formValues.amount}
    onChange={handleFormChange}
    />
    <TextField
    margin="dense"
    name="status"
    label="Status"
    type="text"
    fullWidth
    value={formValues.status}
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

export default BillingList;
