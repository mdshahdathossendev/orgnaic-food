"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, PackagePlus, PackageSearch,
  LogOut, Leaf, Menu, X, ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-clinet";

const navItems = [
  { label: "Overview",        href: "/dashboard",                icon: LayoutDashboard },
  { label: "Add Product",     href: "/dashboard/add-product",    icon: PackagePlus },
  { label: "Manage Products", href: "/dashboard/manage-products",icon: PackageSearch },
];

const Sidebar = ({ pathname, setSidebarOpen, session, handleSignOut }) => (
  <aside className="flex flex-col h-full bg-[#0f2a13] text-white w-64 shrink-0">
    {/* Logo */}
    <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
      <div className="w-9 h-9 bg-[#98D83E] rounded-xl flex items-center justify-center">
        <Leaf className="w-5 h-5 fill-[#0f2a13] text-[#0f2a13]" />
      </div>
      <div>
        <p className="text-sm font-extrabold leading-tight">OrganicMeadow</p>
        <p className="text-[10px] text-gray-400">Admin Panel</p>
      </div>
    </div>

    {/* Nav Links */}
    <nav className="flex-1 px-3 py-4 space-y-1">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
              isActive
                ? "bg-[#98D83E] text-[#0f2a13]"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
            {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
          </Link>
        );
      })}
    </nav>

    {/* User + Sign out */}
    <div className="px-4 py-4 border-t border-white/10">
      {session?.user && (
        <div className="flex items-center gap-3 mb-3 px-2">
          <img
            src={session.user.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"}
            alt={session.user.name}
            className="w-8 h-8 rounded-full object-cover ring-2 ring-[#98D83E]/40"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold truncate">{session.user.name}</p>
            <p className="text-[10px] text-gray-400 truncate">{session.user.email}</p>
          </div>
        </div>
      )}
      <button
        onClick={handleSignOut}
        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </button>
    </div>
  </aside>
);

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({ callbackURL: "/" });
  };

  return (
    <div className="flex h-screen bg-[#F3F7F0] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar 
          pathname={pathname} 
          setSidebarOpen={setSidebarOpen} 
          session={session}
          handleSignOut={handleSignOut}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-50 h-full w-64">
            <Sidebar 
              pathname={pathname} 
              setSidebarOpen={setSidebarOpen} 
              session={session}
              handleSignOut={handleSignOut}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm md:hidden">
          <div className="flex items-center gap-2 font-bold text-[#0f2a13]">
            <Leaf className="w-5 h-5 fill-[#0f2a13]" />
            Dashboard
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
