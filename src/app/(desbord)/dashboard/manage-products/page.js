"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  PackageSearch, Eye, Trash2, Search, Loader2,
  PackagePlus, AlertCircle, RefreshCw,
} from "lucide-react";

const FALLBACK = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=100&q=80";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [confirmId, setConfirmId] = useState(null); // confirm before delete

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:5000/foods");
      if (!res.ok) throw new Error("Failed to load products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:5000/foods/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setDeletingId(null);
      setConfirmId(null);
    }
  };

  const filtered = products.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.name?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#0f2a13] flex items-center gap-2">
            <PackageSearch className="w-6 h-6" />
            Manage Products
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {loading ? "Loading..." : `${filtered.length} product${filtered.length !== 1 ? "s" : ""} found`}
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={fetchProducts}
            className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
          <Link href="/dashboard/add-product"
            className="flex items-center gap-2 bg-[#0f2a13] hover:bg-[#1B431C] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors shadow-sm">
            <PackagePlus className="w-4 h-4" />
            Add Product
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {error} — <button onClick={fetchProducts} className="underline ml-1">Retry</button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-16 text-[#1B431C] gap-3">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-sm font-semibold">Loading products...</span>
        </div>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-sm text-gray-400">
              <PackageSearch className="w-10 h-10 mx-auto mb-3 text-gray-200" />
              No products found.{" "}
              <Link href="/dashboard/add-product" className="text-[#1B5E20] font-bold underline">Add one</Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-3.5 text-left">#</th>
                    <th className="px-5 py-3.5 text-left">Product</th>
                    <th className="px-5 py-3.5 text-left">Category</th>
                    <th className="px-5 py-3.5 text-left">Unit</th>
                    <th className="px-5 py-3.5 text-right">Price</th>
                    <th className="px-5 py-3.5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((p, idx) => {
                    const imgSrc = Array.isArray(p.images) && p.images[0] ? p.images[0] : FALLBACK;
                    const isDeleting = deletingId === p._id;
                    const isConfirming = confirmId === p._id;
                    return (
                      <tr key={p._id} className="hover:bg-gray-50/60 transition-colors">
                        {/* # */}
                        <td className="px-5 py-4 text-gray-400 font-medium">{idx + 1}</td>

                        {/* Product */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={imgSrc}
                              alt={p.name}
                              className="w-11 h-11 rounded-xl object-cover border border-gray-100 shrink-0"
                              onError={(e) => { e.target.src = FALLBACK; }}
                            />
                            <div className="min-w-0">
                              <p className="font-semibold text-gray-900 line-clamp-1">{p.name}</p>
                              <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{p.description || "No description"}</p>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="px-5 py-4">
                          <span className="inline-block bg-[#E8F5E9] text-[#1B5E20] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                            {p.category || "—"}
                          </span>
                        </td>

                        {/* Unit */}
                        <td className="px-5 py-4 text-gray-500">{p.unit || "—"}</td>

                        {/* Price */}
                        <td className="px-5 py-4 text-right font-extrabold text-[#0f2a13]">
                          ${Number(p.price).toFixed(2)}
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-center gap-2">

                            {/* View */}
                            <Link
                              href={`/shop/${p._id}`}
                              target="_blank"
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              View
                            </Link>

                            {/* Delete — with confirm step */}
                            {isConfirming ? (
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleDelete(p._id)}
                                  disabled={isDeleting}
                                  className="px-3 py-1.5 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                                >
                                  {isDeleting ? "..." : "Confirm"}
                                </button>
                                <button
                                  onClick={() => setConfirmId(null)}
                                  className="px-3 py-1.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setConfirmId(p._id)}
                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                Delete
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
