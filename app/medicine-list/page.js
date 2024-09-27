"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Sidebar from '../components/sidebar/page';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const ITEMS_PER_PAGE = 10; 
const MAX_VISIBLE_PAGES = 5; 

// Fetch the medicine data from the CSV file
const fetchMedicines = (setMedicines, setLoading) => {
fetch('/medicine.csv')
.then((response) => response.text())
.then((data) => {
    Papa.parse(data, {
    header: true,
    complete: (results) => {
        setMedicines(results.data); 
        setLoading(false); 
    },
    error: (err) => {
        console.error("Error parsing CSV:", err);
        setLoading(false);
    },
    });
})
.catch((err) => {
    console.error("Error fetching the CSV:", err);
    setLoading(false);
});
};

const MedicineList = () => {
const [medicines, setMedicines] = useState([]);
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1); 

useEffect(() => {
fetchMedicines(setMedicines, setLoading);
}, []);

const handleSearchChange = (e) => {
setSearchTerm(e.target.value);
setCurrentPage(1); // Reset 
};

// Filterd medicines based on search term
const filteredMedicines = medicines.filter((medicine) =>
medicine['brand name']?.toLowerCase().includes(searchTerm.toLowerCase())
);

// Calculated paginated data
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const paginatedMedicines = filteredMedicines.slice(
startIndex,
startIndex + ITEMS_PER_PAGE
);

// Calculated total pages
const totalPages = Math.ceil(filteredMedicines.length / ITEMS_PER_PAGE);

// Handled page change
const handlePageChange = (page) => {
if (page >= 1 && page <= totalPages) {
    setCurrentPage(page);
}
};

// Limitd the number of visible page buttons
const startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
const pageNumbers = [];

for (let i = startPage; i <= endPage; i++) {
pageNumbers.push(i);
}

if (loading) {
return <div>Loading...</div>;
}

return (
<div className="flex w-full min-h-screen h-screen">
    <Sidebar />

    {/* Main Medicine List Content */}
    <div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
    <div className="mb-5 flex justify-between items-center space-x-4 px-4 sm:px-12 sm:space-x-6 top-4 sm:top-6">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <input
            type="text"
            placeholder="Search Medicines..."
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

    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">All Medicines</h2>

        {/* Medicine List */}
        {paginatedMedicines.length === 0 ? (
        <p>No medicines found.</p>
        ) : (
        <ul className="space-y-4">
            {paginatedMedicines.map((medicine, index) => (
            <li key={index} className="border-b border-gray-300 pb-2">
                <p className="text-sm font-medium text-gray-700">Brand Name: {medicine['brand name']}</p>
                <p className="text-sm">Type: {medicine['type']}</p>
                <p className="text-sm">Dosage Form: {medicine['dosage form']}</p>
                <p className="text-sm">Generic: {medicine['generic']}</p>
                <p className="text-sm">Strength: {medicine['strength']}</p>
                <p className="text-sm">Manufacturer: {medicine['manufacturer']}</p>
                <p className="text-sm">Package Container: {medicine['package container']}</p>
                <p className="text-sm">Package Size: {medicine['Package Size']}</p>
            </li>
            ))}
        </ul>
        )}

        {/* Pagination Part */}
        <div className="mt-4 flex justify-center space-x-2">
        {/* First and Previous Button */}
        {currentPage > 1 && (
            <>
            <button
                className="px-4 py-2 rounded bg-indigo-600 text-white"
                onClick={() => handlePageChange(1)}
            >
                First
            </button>
            <button
                className="px-4 py-2 rounded bg-indigo-600 text-white"
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Previous
            </button>
            </>
        )}
        {pageNumbers.map((page) => (
            <button
            key={page}
            className={`px-4 py-2 rounded ${
                page === currentPage
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => handlePageChange(page)}
            >
            {page}
            </button>
        ))}

        {endPage < totalPages && (
            <button className="px-4 py-2 rounded bg-gray-300 text-black" disabled>
            ...
            </button>
        )}

        {/* Next and Last Button */}
        {currentPage < totalPages && (
            <>
            <button
                className="px-4 py-2 rounded bg-indigo-600 text-white"
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
            <button
                className="px-4 py-2 rounded bg-indigo-600 text-white"
                onClick={() => handlePageChange(totalPages)}
            >
                Last
            </button>
            </>
        )}
        </div>
    </div>
    </div>
</div>
);
};

export default MedicineList;
