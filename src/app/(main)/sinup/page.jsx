'use client';

import React from 'react';
import { Leaf, User, Link as LinkIcon } from 'lucide-react';
import { authClient } from '@/lib/auth-clinet';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  // Handling form data submission without React useState
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const imageUrl = formData.get('imageUrl');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Password validation match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: fullName,
      email: email,
      password: password,
      image: imageUrl || undefined,
    });
   
    if (!error) {
      router.push('/');
    } 
  };

  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("Google sign up error:", err);
      alert("Google Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] p-4 md:p-8">
      {/* Container Card */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg">
        
        {/* Left Side: Solid Dark Green Panel with Testimonial */}
        <div className="relative hidden w-1/2 flex-col justify-between bg-[#123517] p-12 text-white md:flex">
          {/* Decorative subtle radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1d5225]/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Center Brand Elements */}
          <div className="my-auto flex flex-col items-center text-center">
            {/* Green Leaf Icon Container (Lucide React) */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#98D83E] text-[#123517]">
              <Leaf className="h-7 w-7" strokeWidth={2} />
            </div>
            
            <h2 className="mb-4 text-4xl font-extrabold leading-tight">
              Freshness delivered<br />to your doorstep.
            </h2>
            <p className="max-w-md text-sm font-light leading-relaxed text-gray-200">
              Join over 50,000 health-conscious families sourcing their organic produce directly from local sustainable farms.
            </p>
          </div>

          {/* Bottom Testimonial Card */}
          <div className="relative z-10 mx-auto w-full max-w-sm rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Sarah J." 
                className="h-10 w-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <p className="text-xs italic text-gray-100">
                  "The best organic subscription I've ever used."
                </p>
                <p className="mt-1 text-[10px] font-semibold text-[#98D83E]">
                  Sarah J., Gold Member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="flex w-full flex-col justify-center px-6 py-10 md:w-1/2 md:px-14">
          <div className="mx-auto w-full max-w-md">
            
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>
            <p className="mt-1 text-sm text-gray-400">
              Start your journey to a healthier lifestyle today.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              
              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700" htmlFor="fullName">
                  Full Name
                </label>
                <div className="relative mt-1.5">
                  {/* Lucide User Icon */}
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                />
              </div>

              {/* Profile Image URL Field */}
              <div>
                <label className="block text-xs font-bold text-gray-700" htmlFor="imageUrl">
                  Profile Image URL
                  <span className="ml-1 font-normal text-gray-400">(optional)</span>
                </label>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <LinkIcon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    placeholder="https://example.com/your-photo.png"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50/50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                  />
                </div>
              </div>

              {/* Password Fields Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700" htmlFor="confirmPassword">
                    Confirm
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50/50 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1e3d1c] focus:bg-white focus:ring-1 focus:ring-[#1e3d1c]"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#123517] focus:ring-[#123517]"
                />
                <label htmlFor="agreeTerms" className="ml-2 text-xs text-gray-500 leading-normal select-none">
                  I agree to the <a href="#" className="font-semibold text-gray-800 hover:underline">Terms of Service</a> and <a href="#" className="font-semibold text-gray-800 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#123517] py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#1a4a21] focus:ring-2 focus:ring-[#123517] focus:ring-offset-2 shadow-md"
              >
                Create Account
                <span>→</span>
              </button>
            </form>

            {/* Social Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px]">
                <span className="bg-white px-3 text-gray-400 font-bold uppercase tracking-widest">
                  Or Continue With
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              {/* Custom Google Button (Pure SVG) */}
              <button
                onClick={handleGoogleSignUp}
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              
              {/* Custom Apple Button (Pure SVG) */}
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94.1.08.2.12.3.12.87 0 1.91-.55 2.52-1.45z"/>
                </svg>
                Apple
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-8 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <a href="/sinin" className="font-bold text-[#123517] hover:underline">
                Sign In
              </a>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}