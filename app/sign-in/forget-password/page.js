import React from 'react';

export default function ForgotPassword() {
return (
<div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
    <h2 className="text-3xl font-bold text-center text-gray-900">Forgot Password</h2>
    <p className="text-center text-sm text-gray-600">
        Enter your email address below and we'll send you a link to reset your password.
    </p>
    <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm space-y-4">
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
        </div>

        <div>
        <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Send reset link
        </button>
        </div>
    </form>
    <div className="text-center text-sm">
        <a href="/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
        Back to Sign in
        </a>
    </div>
    </div>
</div>
);
}
