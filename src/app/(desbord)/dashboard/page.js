"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Package, ShoppingCart, DollarSign, TrendingUp,
  PackagePlus, PackageSearch, Eye, ArrowUpRight,
} from "lucide-react";

export default function DashboardOverview() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((r) => r.json())
      .then((data) => { setProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const totalProducts = products.length;
  const avgPrice = totalProducts > 0
    ? (products.reduce((s, p) => s + Number(p.price), 0) / totalProducts).toFixed(2)
    : "0.00";
  const categories = [...new Set(products.map((p) => p.category).filter(Boolean))].length;

  const stats = [
    { label: "Total Products", value: totalProducts, icon: Package,      color: "bg-blue-50 text-blue-600",   border: "border-blue-100" },
    { label: "Categories",     value: categories,    icon: PackageSearch, color: "bg-purple-50 text-purple-600", border: "border-purple-100" },
    { label: "Avg. Price",     value: `$${avgPrice}`, icon: DollarSign,  color: "bg-green-50 text-green-600",  border: "border-green-100" },
    { label: "Active Listings",value: totalProducts, icon: TrendingUp,   color: "bg-amber-50 text-amber-600",  border: "border-amber-100" },
  ];

  const recent = products.slice(0, 5);
  const fallback = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=100&q=80";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0f2a13]">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-0.5">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/dashboard/add-product"
            className="flex items-center gap-2 bg-[#0f2a13] hover:bg-[#1B431C] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm"
          >
            <PackagePlus className="w-4 h-4" />
            Add Product
          </Link>
          <Link
            href="/dashboard/manage-products"
            className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors"
          >
            <PackageSearch className="w-4 h-4" />
            Manage
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ label, value, icon: Icon, color, border }) => (
          <div key={label} className={`bg-white rounded-2xl border ${border} p-5 shadow-sm flex items-center gap-4`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">{label}</p>
              <p className="text-2xl font-extrabold text-gray-900">
                {loading ? <span className="animate-pulse text-gray-200">—</span> : value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <h2 className="text-base font-extrabold text-gray-900">Recent Products</h2>
          <Link href="/dashboard/manage-products" className="text-xs font-bold text-[#1B5E20] hover:underline flex items-center gap-1">
            View all <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">Loading products...</div>
        ) : recent.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">No products yet. <Link href="/dashboard/add-product" className="text-[#1B5E20] font-bold underline">Add one</Link></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Unit</th>
                  <th className="px-6 py-3 text-right">Price</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recent.map((p) => {
                  const imgSrc = Array.isArray(p.images) && p.images[0] ? p.images[0] : fallback;
                  return (
                    <tr key={p._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={imgSrc} alt={p.name}
                            className="w-10 h-10 rounded-xl object-cover border border-gray-100"
                            onError={(e) => { e.target.src = fallback; }} />
                          <span className="font-semibold text-gray-900 line-clamp-1 max-w-[160px]">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{p.category || "—"}</td>
                      <td className="px-6 py-4 text-gray-500">{p.unit || "—"}</td>
                      <td className="px-6 py-4 text-right font-bold text-[#0f2a13]">${Number(p.price).toFixed(2)}</td>
                      <td className="px-6 py-4 text-center">
                        <Link href={`/shop/${p._id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
                          <Eye className="w-3 h-3" /> View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
