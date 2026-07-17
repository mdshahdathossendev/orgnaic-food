'use client';

import React, { useState } from 'react';
import { Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { authClient } from '@/lib/auth-clinet';

export default function SignInPage() {
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Demo credentials
    const DEMO_EMAIL = 'support@appleemart.com';
    const DEMO_PASSWORD = 'support@appleemart.com';

    const handleDemoLogin = () => {
        setEmail(DEMO_EMAIL);
        setPassword(DEMO_PASSWORD);
    };

    // traditional form event handler - standard HTML form handles the data
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg('');
        setLoading(true);

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        });

        setLoading(false);

        if (error) {
            console.error('Sign in error:', error);
            setErrorMsg(error.message || 'Invalid email or password.');
        } else {
            console.log('Signed in successfully:', data);
        }
    };

    const handleGoogleSignIn = async () => {
        setErrorMsg('');
        setLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/"
            });
        } catch (err) {
            console.error("Google sign in error:", err);
            setErrorMsg("Google Sign-in failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] p-4 md:p-8">
            {/* Container Card */}
            <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">

                {/* Left Side: Image and Branding (Desktop Only) */}
                <div className="relative hidden w-1/2 md:block">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(18, 53, 23, 0.85)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000')`
                        }}
                    />
                    <div className="absolute bottom-12 left-10 right-10 text-white">
                        <h2 className="mb-4 text-3xl font-bold leading-tight">
                            Harvesting freshness daily.
                        </h2>
                        <p className="text-sm font-light text-gray-200">
                            Join our community of eco-conscious foodies and get the best local produce delivered to your door.
                        </p>
                    </div>
                </div>

                {/* Right Side: Sign In Form */}
                <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-16">
                    <div className="mx-auto w-full max-w-md">

                        {/* Header */}
                        <h1 className="text-2xl font-bold text-gray-950">Welcome back</h1>
                        <p className="mt-1.5 text-sm text-gray-500">Please enter your details to sign in.</p>

                        {/* Error Alert */}
                        {errorMsg && (
                            <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <span>{errorMsg}</span>
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                            {/* Demo Login Button */}
                            <button
                                type="button"
                                onClick={handleDemoLogin}
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#E8F5E9] py-2.5 text-sm font-semibold text-[#123517] transition duration-200 hover:bg-[#C5E1A5] disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                Use Demo Login
                            </button>

                            {/* Email Field */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-800" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative mt-1.5">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Mail className="h-4 w-4" />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-xs font-semibold text-gray-800" htmlFor="password">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs font-semibold text-[#1e3d1c] hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative mt-1.5">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Lock className="h-4 w-4" />
                                    </span>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                                    />
                                </div>
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#1e3d1c] focus:ring-[#1e3d1c]"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-xs text-gray-500 select-none">
                                    Remember me for 30 days
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#123517] py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#1a4a21] focus:ring-2 focus:ring-[#123517] focus:ring-offset-2 disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-3 text-gray-400 font-semibold uppercase tracking-wider">
                                    OR
                                </span>
                            </div>
                        </div>

                        {/* Google Sign In */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            type="button"
                            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-75"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                            </svg>
                            Sign in with Google
                        </button>

                        {/* Sign Up Redirect */}
                        <p className="mt-8 text-center text-sm text-gray-500">
                            Don't have an account?{' '}
                            <a href="/sinup" className="font-semibold text-[#123517] hover:underline">
                                Create a new account
                            </a>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
}