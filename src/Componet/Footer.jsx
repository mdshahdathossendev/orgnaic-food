"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#123517] text-white/90 pt-16 pb-8 border-t border-[#1d4d23]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        
        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#98D83E] text-[#123517] shadow-sm">
                <Leaf className="h-5 w-5 fill-[#123517]" />
              </div>
              <span className="tracking-tight">Organic<span className="text-[#98D83E]">Meadow</span></span>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Join over 50,000 health-conscious families sourcing their organic produce directly from local sustainable farms.
            </p>
            {/* Call, Mail & Website Icons */}
            <div className="flex gap-4 pt-2">
              <a href="tel:+8801937008534" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Call">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:hmdshahdat@gamil.com" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://organicmeadow.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#98D83E]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Our Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Latest Blog</Link></li>
            </ul>
          </div>

          {/* Customer Support Column */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#98D83E]">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact Details & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#98D83E]">Subscribe</h3>
            <p className="text-xs text-gray-300 leading-normal">
              Subscribe to get special discounts, free giveaway recipes, and farm-fresh updates.
            </p>
            {/* Newsletter input */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 mt-1">
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#98D83E] focus:ring-1 focus:ring-[#98D83E]"
              />
              <button type="submit" className="bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 whitespace-nowrap shadow-sm">
                Subscribe
              </button>
            </form>
            
            {/* Direct Contact Info */}
            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <a href="tel:+15550192834" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#98D83E]" />
                <span>+1 (555) 019-2834</span>
              </a>
              <a href="mailto:support@organicmeadow.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#98D83E]" />
                <span>support@organicmeadow.com</span>
              </a>
              <a href="https://organicmeadow.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-[#98D83E]" />
                <span>organicmeadow.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#98D83E]" />
                <span>120 Sweetgrass Farm Rd, Oregon, USA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1d4d23] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Organic Meadow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
