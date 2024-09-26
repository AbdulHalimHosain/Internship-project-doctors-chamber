"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography, Paper, Box, Stack } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { Page, Text, View, Document, PDFDownloadLink } from "@react-pdf/renderer";
import Sidebar from "../components/sidebar/page";

const fetchInvoiceDetails = (invoiceId) => {
return {
id: invoiceId,
patientName: "John Doe",
date: "2024-09-20",
amount: "$500",
status: "Paid",
services: [
{ description: "Consultation", cost: "$200" },
{ description: "X-Ray", cost: "$100" },
{ description: "Medication", cost: "$200" },
],
};
};

const fetchUserDetails = () => {

return {
id: 123,
name: "Hosain",
role: "doctor", 
};
};

// PDF Component
const InvoicePDF = ({ invoice }) => (
<Document>
<Page size="A4" style={{ padding: 20 }}>
<View style={{ marginBottom: 20 }}>
<Text style={{ fontSize: 24, textAlign: "center" }}>Invoice</Text>
</View>
<View style={{ marginBottom: 10 }}>
<Text>Invoice ID: {invoice.id}</Text>
<Text>Patient Name: {invoice.patientName}</Text>
<Text>Date: {invoice.date}</Text>
<Text>Status: {invoice.status}</Text>
</View>
<View>
<Text style={{ marginBottom: 5 }}>Services:</Text>
{invoice.services.map((service, index) => (
    <View key={index} style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <Text>{service.description}</Text>
    <Text>{service.cost}</Text>
    </View>
))}
</View>
<View style={{ marginTop: 20 }}>
<Text>Total Amount: {invoice.amount}</Text>
</View>
</Page>
</Document>
);

const InvoicePage = () => {
const [invoice, setInvoice] = useState(null);
const [user, setUser] = useState(null);

useEffect(() => {
const fetchedInvoice = fetchInvoiceDetails("INV-001");
setInvoice(fetchedInvoice);


const fetchedUser = fetchUserDetails();
setUser(fetchedUser);
}, []);

const handleEdit = () => {
console.log("Editing invoice...");

};

const handleDelete = () => {
console.log("Deleting invoice...");

};

if (!invoice || !user) {
return <div>Loading...</div>;
}

return (
<div className="flex w-full min-h-screen h-screen">
<Sidebar />
<div className="flex-1 p-4 sm:p-6 md:p-10 bg-gray-100 relative min-h-screen h-full overflow-auto">
<Paper sx={{ p: 4, maxWidth: "800px", margin: "auto" }}>
    <Typography variant="h5" gutterBottom>
    Invoice Details
    </Typography>
    <Box mb={3}>
    <Stack spacing={2}>
        <Box display="flex" justifyContent="space-between">
        <Typography>Invoice ID: {invoice.id}</Typography>
        <Typography>Date: {invoice.date}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
        <Typography>Patient Name: {invoice.patientName}</Typography>
        <Typography>Status: {invoice.status}</Typography>
        </Box>
    </Stack>
    </Box>
    <Box>
    <Typography variant="h6">Services</Typography>
    <Stack spacing={2} mt={2}>
        {invoice.services.map((service, index) => (
        <Box key={index} display="flex" justifyContent="space-between">
            <Typography>{service.description}</Typography>
            <Typography>{service.cost}</Typography>
        </Box>
        ))}
    </Stack>
    </Box>
    <Box mt={3}>
    <Typography variant="h6">Total Amount: {invoice.amount}</Typography>
    </Box>

    <Box mt={4} display="flex" justifyContent="space-between">
    {/* Download PDF Button */}
    <PDFDownloadLink document={<InvoicePDF invoice={invoice} />} fileName={`invoice_${invoice.id}.pdf`}>
        {({ blob, url, loading, error }) =>
        loading ? (
            <Button variant="contained" disabled>
            Generating PDF...
            </Button>
        ) : (
            <Button variant="contained" startIcon={<FaDownload />} color="primary">
            Download PDF
            </Button>
        )
        }
    </PDFDownloadLink>
    {user.role === "doctor" || user.role === "receptionist" ? (
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
        </Button>
        </Stack>
    ) : null}
    </Box>
</Paper>
</div>
</div>
);
};

export default InvoicePage;
