import Link from 'next/link';
import { ShoppingBag, Leaf } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#E8F5E9] to-[#C5E1A5]">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[#123517] text-[#98D83E] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          <Leaf className="w-4 h-4" />
          Limited Time Offer
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B431C] mb-6 leading-tight">
          Start Your Organic Journey Today
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
          Get 15% off your first order! Experience the best organic products delivered to your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/shop" className="flex items-center gap-2 bg-[#123517] hover:bg-[#0D2E10] text-white px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-md">
            <ShoppingBag className="w-5 h-5" />
            Shop Now
          </Link>
          <Link href="/about" className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#1B431C] px-8 py-4 rounded-xl text-sm font-bold transition-colors shadow-sm border border-gray-200">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
