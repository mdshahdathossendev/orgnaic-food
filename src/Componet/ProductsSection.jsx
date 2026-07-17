"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal, Search, Loader2, PackageSearch, Leaf } from "lucide-react";
import ProductCard from "./ProductCard";

const CATEGORIES = ["All", "Sweetener", "Superfood", "Spreads", "Snacks", "Cooking Oil"];

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Fetch products from local API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://bag-house-server.vercel.app/foods");
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter + sort whenever dependencies change
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter(
        (p) =>
          p.category?.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.category?.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "name") result.sort((a, b) => a.name?.localeCompare(b.name));

    setFiltered(result);
  }, [products, searchQuery, activeCategory, sortBy]);

  return (
    <section className="bg-[#FCFBF7] py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              <Leaf className="w-3.5 h-3.5 fill-[#1B5E20]" />
              Fresh & Organic
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B431C] leading-tight">
              Our Product Range
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Farm-picked, certified organic produce delivered straight to your door.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-white outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition"
              />
            </div>
            {/* Sort */}
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-9 pr-8 py-2.5 text-sm border border-gray-200 rounded-xl bg-white outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition appearance-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#123517] text-white border-[#123517] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#123517] hover:text-[#123517]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-[#1B431C]">
            <Loader2 className="w-10 h-10 animate-spin" />
            <p className="text-sm font-semibold">Loading fresh products...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="text-5xl">⚠️</div>
            <p className="text-base font-bold text-red-600">Failed to load products</p>
            <p className="text-sm text-gray-400 max-w-xs text-center">
              Could not connect to <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">localhost:5000/foods</code>. Make sure your server is running.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-5 py-2 bg-[#123517] text-white text-sm font-bold rounded-lg hover:bg-[#0D2E10] transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <PackageSearch className="w-12 h-12 text-gray-300" />
            <p className="text-base font-bold text-gray-500">No products found</p>
            <p className="text-sm text-gray-400">Try adjusting your search or category filter.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-2 px-5 py-2 bg-[#123517] text-white text-sm font-bold rounded-lg hover:bg-[#0D2E10] transition"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && filtered.length > 0 && (
          <>
            <p className="text-xs text-gray-400 mb-5">
              Showing <span className="font-bold text-gray-700">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product._id || product.id || product.name} product={product} />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
