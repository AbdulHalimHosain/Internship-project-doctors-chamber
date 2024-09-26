import React from 'react';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function Footer() {
const currentYear = new Date().getFullYear(); 

return (
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
            <Link href="/about-us" passHref>
                <Typography component="a" className="hover:text-gray-500 transition-colors">About Us</Typography>
            </Link>
            </li>
            <li>
            <Link href="/contact-us" passHref>
                <Typography component="a" className="hover:text-gray-500 transition-colors">Contact Us</Typography>
            </Link>
            </li>
            <li>
            <Link href="/privacy-policy" passHref>
                <Typography component="a" className="hover:text-gray-500 transition-colors">Privacy Policy</Typography>
            </Link>
            </li>
        </ul>
        </div>
        <div>
        <Typography variant="h6" gutterBottom>
            Follow Us
        </Typography>
        <div className="flex justify-center md:justify-start space-x-5">
            <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
            >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
            >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
            >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
        </div>
    </div>
    </Container>
</footer>
);
}
