import Image from 'next/image';
import Head from 'next/head';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Footer from './components/footer/page';
import Header from './components/header/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Head>
        <title>Chamber Landing Page</title>
        <meta name="description" content="Welcome to the Chamber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <div className="flex flex-col items-center justify-center text-center py-12 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-lightblue-500 mb-6 animate-loopTypewriter overflow-hidden whitespace-nowrap border-r-4 border-lightblue-500">
              Welcome to HealthSphere
            </h1>
          </div>

          {/* Doctor's Profile Section */}
          <div className="bg-white shadow-md rounded-lg mx-5 md:mx-20 py-8 px-5 md:px-10 mt-10 flex flex-col md:flex-row items-center">
            {/* Doctor's Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <Image
                src="/images/Dr.jpg"  // Replace with actual image path
                alt="Doctor's Image"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>

            {/* Doctor's Details */}
            <div className="mt-5 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-lightblue-500">Dr. Hosain</h2>
              <p className="text-lg text-gray-600 mt-2">Cardiologist</p>
              <p className="text-sm text-gray-500 mt-2">MBBS, ......</p>
              <p className="text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {/* Social Links using legacyBehavior */}
                <Link href="https://facebook.com" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="hover:text-lightblue-500 transition-colors">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                </Link>
                <Link href="https://twitter.com" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="hover:text-lightblue-500 transition-colors">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </Link>
                <Link href="https://linkedin.com" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="hover:text-lightblue-500 transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </Link>
              </div>

              {/* Book Appointment Button */}
              <div className="mt-6">
                <Link href="/sign-in" passHref>
                  <Button
                    variant="contained"
                    className="bg-lightblue-400 text-white hover:bg-lightblue-500 transition-transform rounded-full px-5 py-2 shadow"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
