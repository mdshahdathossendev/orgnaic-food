"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

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
            {/* Social Icons - inline SVGs (lucide-react v1 removed social brand icons) */}
            <div className="flex gap-4 pt-2">
              {/* Facebook */}
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="h-9 w-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#98D83E] hover:text-[#123517] transition-all duration-200" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#123517" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
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
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#98D83E]" />
                <span>+1 (555) 019-2834</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#98D83E]" />
                <span>support@organicmeadow.com</span>
              </div>
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
