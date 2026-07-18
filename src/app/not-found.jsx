'use client';

import Link from 'next/link';
import { ArrowLeft, Leaf } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FCFBF7] px-6 py-12">
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 h-24 w-24 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                    <Leaf className="h-12 w-12 text-[#1B5E20]" />
                </div>
                
                {/* Content */}
                <h1 className="text-6xl sm:text-7xl font-extrabold text-[#1B431C] mb-4">404</h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B431C] mb-3">Page Not Found</h2>
                <p className="text-gray-600 text-sm mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 bg-[#123517] hover:bg-[#0D2E10] text-white px-8 py-3 rounded-xl text-sm font-bold transition-colors shadow-md"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link
                        href="/shop"
                        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1B431C] px-8 py-3 rounded-xl text-sm font-bold transition-colors border border-gray-200 shadow-sm"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
