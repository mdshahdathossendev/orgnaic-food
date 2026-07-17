import React from 'react';
import { Truck, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FCFBF7] flex items-center py-12 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8F5E9] rounded-full blur-3xl opacity-50 pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#F1F8E9] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] px-3 py-1.5 rounded-full w-fit text-sm font-semibold tracking-wide">
            <Leaf className="w-4 h-4 fill-[#1B5E20]" />
            100% Certified Organic
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B431C] leading-[1.15] tracking-tight">
            Nature’s Vitality, <br />
            <span className="text-[#689F38]">Delivered Daily.</span>
          </h1>

          {/* Subheading Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
            Experience the crisp snap of farm-fresh greens and the burst of sun-ripened fruits. 
            Sustainably sourced, ethically grown, and delivered straight to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/shop">
            <button className="bg-[#133F17] hover:bg-[#0D2E10] text-white px-8 py-3.5 rounded-lg font-bold transition-all duration-200 shadow-md">
              Shop Now
            </button>
            </Link>
            <Link href="/ai"> 
            <button className="border-2 border-[#133F17] text-[#133F17] hover:bg-[#F1F8E9] px-8 py-3.5 rounded-lg font-bold transition-all duration-200">
              Question for AI
            </button>
            </Link>
          </div>

          {/* Social Proof (Happy Families) */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            {/* Avatar Stack */}
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FCFBF7] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="User profile"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FCFBF7] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="User profile"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FCFBF7] object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="User profile"
              />
            </div>
            {/* Text */}
            <p className="text-sm text-gray-600 font-medium">
              <span className="font-bold text-[#1B431C]">2,500+</span> happy families fed this week
            </p>
          </div>

        </div>

        {/* Right Side: Masonry Image Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 relative">
          
          {/* Column 1 */}
          <div className="space-y-4 sm:space-y-6 self-center">
            {/* Card 1: Greens (Kale) */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=500&q=80" 
                alt="Fresh Kale" 
                className="rounded-xl w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-2 pt-3">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base">Week's Harvest</h3>
                <p className="text-xs text-gray-500 mt-0.5">Freshly picked from local farm</p>
              </div>
            </div>

            {/* Card 2: Green Box (Carbon Neutral) */}
            <div className="bg-[#C5E1A5] p-6 rounded-2xl flex flex-col justify-between h-40 sm:h-48 shadow-sm">
              <div className="bg-[#9CCC65] p-2.5 rounded-lg w-fit">
                <Truck className="w-6 h-6 text-[#1B5E20]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1B5E20] text-lg sm:text-xl leading-tight">
                  Carbon Neutral Delivery
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 sm:space-y-6">
            {/* Card 3: Citrus Fruit Board */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80" 
                alt="Citrus fruits" 
                className="rounded-xl w-full h-44 sm:h-52 object-cover"
              />
            </div>

            {/* Card 4: Colorful Carrots */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=400&q=80" 
                alt="Organic Carrots" 
                className="rounded-xl w-full h-52 sm:h-64 object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}