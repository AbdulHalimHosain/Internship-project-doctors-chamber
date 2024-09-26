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

export default function PrivacyPolicy() {
const currentYear = new Date().getFullYear();

return (
<>
    <Head>
    <title>Privacy Policy - HealthSphere</title>
    <meta name="description" content="Our privacy policy will be announced soon." />
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
        Privacy Policy
        </Typography>
        <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed mb-6">
        At HealthSphere, your privacy is important to us. We are currently preparing a comprehensive privacy policy to ensure transparency and clarity on how we collect, use, and protect your personal information.
        </Typography>
        <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed mb-6">
        Our privacy policy will be announced shortly. Please check back soon for updates.
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
                {/* Add social media links */}
            </div>
            </div>
        </div>
        </Container>
    </footer>
    </div>
</>
);
}
