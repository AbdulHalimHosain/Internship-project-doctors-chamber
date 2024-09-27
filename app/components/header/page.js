import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
return (
<header className="flex justify-between items-center p-5 bg-lightblue-400 shadow-md w-full">
    <div className="flex items-center flex-shrink-0">
    <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
        <Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="mr-3" />
        <span className="text-xl md:text-3xl font-bold text-white">HealthSphere</span>
        </div>
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
);
}
