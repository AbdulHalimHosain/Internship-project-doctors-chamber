import React from 'react';

export default function SignUp() {
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign up</h2>
        <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
            <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
            />
            </div>
            <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
            />
            </div>
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
            />
            </div>
            <div>
            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
            <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
            />
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="text-sm">
            <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Sign in
            </a>
            </div>
        </div>

        <div>
            <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign up
            </button>
        </div>

        <div className="flex items-center justify-center">
            <div className="border-t w-full"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="border-t w-full"></div>
        </div>

        <div>
            <button
            type="button"
            className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M47.532 24.5455C47.532 23.1418 47.4091 21.8182 47.2273 20.5455H24V28.0909H37.5636C37 31.3273 35.1273 34.0364 32.3182 35.6545V41.3091H40C44.0364 37.5455 47.532 31.6364 47.532 24.5455Z" fill="#4285F4"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 48C30.5455 48 36 45.9636 40 41.3091L32.3182 35.6545C30.4182 36.8727 27.9636 37.6364 24 37.6364C17.7091 37.6364 12.5455 33.2545 10.6364 27.5273H2.72727V33.4182C6.76364 41.0182 14.7091 48 24 48Z" fill="#34A853"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.6364 27.5273C9.45455 24.2909 9.45455 20.6727 10.6364 17.4364V11.5455H2.72727C-0.254545 17.1091 -0.254545 24.9455 2.72727 30.5091L10.6364 27.5273Z" fill="#FBBC04"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M24 9.09091C27.4182 9.09091 30.4182 10.2909 32.7273 12.5091L40.1818 5.09091C35.9636 1.96364 30.5455 0 24 0C14.7091 0 6.76364 6.98182 2.72727 14.5818L10.6364 17.5636C12.5455 11.8182 17.7091 9.09091 24 9.09091Z" fill="#EA4335"/>
            </svg>
            Sign up with Google
            </button>
        </div>
        </form>
    </div>
    </div>
);
}
