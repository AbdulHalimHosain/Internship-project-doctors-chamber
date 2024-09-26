import Head from 'next/head';
import { Container, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function ContactUs() {
const currentYear = new Date().getFullYear();

return (
    <>
    <Head>
    <title>Contact Us - HealthSphere</title>
    <meta name="description" content="Get in touch with HealthSphere for inquiries, appointments, and feedback." />
    </Head>
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="flex justify-between items-center p-5 bg-lightblue-400 shadow-md w-full">
        <div className="flex items-center flex-shrink-0">
        <Link href="/" legacyBehavior>
            <a className="flex items-center cursor-pointer">
            <Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="mr-3" />
            <span className="text-xl md:text-3xl font-bold text-white">HealthSphere</span>
            </a>
        </Link>
        </div>
        <div className="flex space-x-1 flex-shrink-0 ml-3">
        <Link href="/sign-in">
            <Button variant="contained" className="bg-lightblue-400 text-white hover:bg-lightblue-500 transition-transform rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow">
            Login
            </Button>
        </Link>
        <Link href="/sign-up">
            <Button variant="outlined" className="text-lightblue-500 hover:bg-lightblue-100 transition-transform rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow">
            Sign Up
            </Button>
        </Link>
        </div>
    </header>

    {/* Main Content */}
    <Container className="py-12 px-5 md:px-10 flex-grow">
        <Typography variant="h4" className="text-lightblue-500 font-bold mb-6 text-center">
        Contact Us
        </Typography>
        <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
        Have questions, concerns, or need to book an appointment? We're here to help. Fill out the form below, and our team
        will get back to you as soon as possible.
        </Typography>

        {/* Contact Form */}
        <form className="space-y-4 max-w-lg mx-auto">
        <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            name="name"
            className="mb-4"
            required
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            name="email"
            className="mb-4"
            required
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Phone Number"
            name="phone"
            className="mb-4"
        />
        <TextField
            fullWidth
            variant="outlined"
            label="Your Message"
            name="message"
            multiline
            rows={4}
            className="mb-4"
            required
        />
        <Button
            type="submit"
            variant="contained"
            className="bg-lightblue-400 text-white hover:bg-lightblue-500 transition-transform rounded-full px-5 py-2 shadow"
        >
            Send Message
        </Button>
        </form>

        {/* Contact Details */}
        <div className="mt-10 text-center">
        <Typography variant="h6" className="text-lightblue-500 font-bold">
            Or Reach Us At
        </Typography>
        <Typography variant="body1" className="text-gray-700 mt-2">
            Phone: +
        </Typography>
        <Typography variant="body1" className="text-gray-700 mt-2">
            Email: info@healthsphere.com
        </Typography>
        <Typography variant="body1" className="text-gray-700 mt-2">
            Address: 123 Health Street, Dhaka, Bangladesh
        </Typography>
        </div>
    </Container>

    {/* Footer */}
    <footer className="bg-lightblue-400 text-white py-8 mt-10">
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
            <Typography variant="h6" gutterBottom>
                © {currentYear} HealthSphere
            </Typography>
            <Typography variant="body2">
                All rights reserved.
            </Typography>
            </div>
            <div>
            <ul className="space-y-2">
                <li>
                <Link href="/about-us" className="hover:text-gray-500 transition-colors">
                    About Us
                </Link>
                </li>
                <li>
                <Link href="/contact-us" className="hover:text-gray-500 transition-colors">
                    Contact Us
                </Link>
                </li>
                <li>
                <Link href="/privacy-policy" className="hover:text-gray-500 transition-colors">
                    Privacy Policy
                </Link>
                </li>
            </ul>
            </div>
            <div>
            <Typography variant="h6" gutterBottom>
                Follow Us
            </Typography>
            <div className="flex justify-center md:justify-start space-x-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            </div>
        </div>
        </Container>
    </footer>
    </div>
</>
);
}
