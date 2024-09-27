import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


config.autoAddCss = false;

export default function AboutUs() {
const currentYear = new Date().getFullYear();

return (
<>
    <Head>
    <title>About Us - HealthSphere</title>
    <meta name="description" content="Learn more about HealthSphere and our mission to provide quality healthcare." />
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
            <Button variant="contained" className="bg-lightblue-800 text-white hover:bg-lightblue-500 transition-transform rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow">
            Login
            </Button>
        </Link>
        <Link href="/sign-up">
            <Button variant="contained" className="bg-lightblue-800 text-white hover:bg-lightblue-500 transition-transform rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow">
            Sign Up
            </Button>
        </Link>
        </div>
    </header>

    {/* Main Content */}
    <Container className="py-12 px-5 md:px-10 flex-grow">
        <Typography variant="h4" className="text-lightblue-500 font-bold mb-6 text-center">
        About HealthSphere
        </Typography>
        <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed mb-6">
        HealthSphere is dedicated to providing accessible, high-quality healthcare services. Our mission is to create a
        trusted and compassionate environment for patients, where they can receive comprehensive medical care from highly
        qualified doctors. We believe in using technology and innovation to make healthcare services more convenient,
        efficient, and personalized for everyone.
        </Typography>
        <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed mb-6">
        Our team of experienced professionals is committed to providing exceptional care, ranging from preventative
        health services to specialized treatments. At HealthSphere, we focus on a holistic approach to health, ensuring
        that our patients receive not only treatment but also education and support to lead healthier lives.
        </Typography>
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
