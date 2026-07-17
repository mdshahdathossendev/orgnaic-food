"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, ShoppingBag, Search, Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { authClient } from "@/lib/auth-clinet";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const { cartCount } = useCart();

  const handleSignOut = async () => {
    await authClient.signOut({
      callbackURL: "/",
    });
    setShowProfileMenu(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-[#FCFBF7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 sm:px-12 lg:px-24">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-[#1B431C] text-lg sm:text-xl">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#98D83E] text-[#123517] shadow-sm">
            <Leaf className="h-5 w-5 fill-[#123517]" />
          </div>
          <span className="tracking-tight">Organic<span className="text-[#689F38]">Meadow</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 hover:text-[#1B431C] ${
                  isActive ? "text-[#1B431C] font-bold border-b-2 border-[#98D83E] pb-0.5" : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="p-2 text-gray-500 hover:text-[#1B431C] hover:bg-gray-100/50 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/cart" className="relative p-2 text-gray-500 hover:text-[#1B431C] hover:bg-gray-100/50 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#98D83E] text-[10px] font-bold text-[#123517]">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          {/* User Auth Section */}
          <div className="relative">
            {isPending ? (
              <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
            ) : session?.user ? (
              <div>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-1.5 focus:outline-none"
                >
                  <img
                    src={session.user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                    alt={session.user.name}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-[#98D83E]/50"
                  />
                  <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-lg ring-1 ring-black/5">
                    <div className="px-3 py-2 border-b border-gray-50">
                      <p className="text-xs font-bold text-gray-900 truncate">{session.user.name}</p>
                      <p className="text-[10px] text-gray-400 truncate">{session.user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mt-1"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-0.5"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/sinin" className="text-sm font-semibold text-gray-600 hover:text-[#1B431C] px-3 py-2 rounded-lg transition-colors">
                  Sign In
                </Link>
                <Link href="/sinup" className="text-sm font-semibold text-white bg-[#133F17] hover:bg-[#0D2E10] px-4 py-2 rounded-lg transition-colors shadow-sm">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" className="relative p-2 text-gray-500 hover:text-[#1B431C]">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#98D83E] text-[10px] font-bold text-[#123517]">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-[#1B431C] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-50 bg-[#FCFBF7] px-6 py-4 space-y-3">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold py-2 px-3 rounded-lg transition-all ${
                    isActive ? "bg-[#E8F5E9] text-[#1B5E20]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            {session?.user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 px-3">
                  <img
                    src={session.user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"}
                    alt={session.user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{session.user.name}</p>
                    <p className="text-xs text-gray-400">{session.user.email}</p>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <User className="w-4 h-4" />
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 py-2 px-3 text-sm text-red-600 hover:bg-red-50 rounded-lg text-left"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 px-3">
                <Link
                  href="/sinin"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-semibold text-gray-600 hover:text-[#1B431C] py-2 rounded-lg border border-gray-200 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sinup"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-semibold text-white bg-[#133F17] hover:bg-[#0D2E10] py-2 rounded-lg transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
