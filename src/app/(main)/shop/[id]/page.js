"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ShoppingCart, Star, Leaf, Truck, Shield, ArrowLeft,
  Plus, Minus, Check, PackageSearch, Loader2,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FALLBACK = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=800&q=80";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0); // selected thumbnail index

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/foods/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);
        setActiveImg(0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product, quantity);
    router.push("/cart");
  };

  // ---- Loading ----
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-[#1B431C]">
        <Loader2 className="w-10 h-10 animate-spin" />
        <p className="text-sm font-semibold">Loading product details...</p>
      </div>
    );
  }

  // ---- Error ----
  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <PackageSearch className="w-14 h-14 text-gray-300" />
        <p className="text-lg font-bold text-gray-600">Product not found</p>
        <Link href="/shop" className="px-5 py-2 bg-[#123517] text-white text-sm font-bold rounded-lg hover:bg-[#0D2E10] transition">
          Back to Shop
        </Link>
      </div>
    );
  }

  const stars = Math.round(product.rating || 4);
  // images field is an array
  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [FALLBACK];
  const mainImage = images[activeImg] || images[0] || FALLBACK;

  return (
    <div className="bg-[#FCFBF7] min-h-screen py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-[#1B431C] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1B431C] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1B431C] font-semibold truncate max-w-[160px]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ---- Image Gallery Panel ---- */}
          <div className="sticky top-24 flex flex-col gap-4">

            {/* Main Image */}
            <div className="relative bg-[#F4FAF0] rounded-3xl overflow-hidden aspect-square shadow-sm border border-gray-100">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
                onError={(e) => { e.target.src = FALLBACK; }}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#98D83E] text-[#123517] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                  {product.badge}
                </span>
              )}
              <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#1B5E20] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                <Leaf className="w-3.5 h-3.5 fill-[#1B5E20]" />
                100% Organic
              </span>
            </div>

            {/* Thumbnail Strip — only if more than 1 image */}
            {images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                      activeImg === idx
                        ? "border-[#123517] scale-105 shadow-md"
                        : "border-gray-100 hover:border-[#98D83E]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.src = FALLBACK; }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ---- Info Panel ---- */}
          <div className="flex flex-col gap-6">

            {/* Category + Name */}
            {product.category && (
              <span className="text-xs font-bold uppercase tracking-widest text-[#689F38]">
                {product.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B431C] leading-tight">
              {product.name}
            </h1>

            {/* Rating Row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= stars ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">{product.rating || "4.0"}</span>
              <span className="text-xs text-gray-400">(128 reviews)</span>
            </div>

            {/* Price + Unit */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-[#1B431C]">
                ${Number(product.price).toFixed(2)}
              </span>
              {product.unit && (
                <span className="text-sm text-gray-400">/ {product.unit}</span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                {product.description}
              </p>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-700">Quantity:</span>
              <div className="flex items-center gap-0 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-gray-900 border-x border-gray-200 py-2.5">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">
                Subtotal: <strong className="text-[#1B431C]">${(Number(product.price) * quantity).toFixed(2)}</strong>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex flex-1 items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                  added
                    ? "border-[#98D83E] bg-[#E8F5E9] text-[#1B5E20]"
                    : "border-[#123517] bg-white text-[#123517] hover:bg-[#123517] hover:text-white"
                }`}
              >
                {added
                  ? <><Check className="w-4 h-4" /> Added to Cart!</>
                  : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
                }
              </button>

              <button
                onClick={handleBuyNow}
                className="flex flex-1 items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold bg-[#123517] hover:bg-[#0D2E10] text-white transition-colors duration-200 shadow-md"
              >
                Buy Now →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="p-2 bg-[#E8F5E9] rounded-lg">
                  <Truck className="w-5 h-5 text-[#1B5E20]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Free Delivery</p>
                  <p className="text-[10px] text-gray-400">On orders over $30</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <div className="p-2 bg-[#E8F5E9] rounded-lg">
                  <Shield className="w-5 h-5 text-[#1B5E20]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">100% Organic</p>
                  <p className="text-[10px] text-gray-400">Certified & tested</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-[#1B431C] hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Shop
          </Link>
        </div>

      </div>
    </div>
  );
}
