import React from 'react';

export default function SignIn() {
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign in</h2>
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
            <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
            />
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
            </label>
            </div>

            <div className="text-sm">
            <a href="/sign-in/forget-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
            </a>
            </div>
        </div>

        <div>
            <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign in
            </button>
        </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
        </a>
        </p>
    </div>
    </div>
);
}
