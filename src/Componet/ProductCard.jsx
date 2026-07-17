"use client";

import { Star, Leaf, Eye } from "lucide-react";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { name, price, category, images, description, rating, badge, _id, unit } = product;

  // images is an array of URLs — safely get the first one
  const imgSrc = Array.isArray(images) && images.length > 0 ? images[0] : null;
  const fallback = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative overflow-hidden bg-[#F4FAF0] h-52">
        <img
          src={imgSrc || fallback}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = fallback; }}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-[#98D83E] text-[#123517] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {badge}
          </span>
        )}

        {/* Organic tag */}
        <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#1B5E20] text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
          <Leaf className="w-3 h-3 fill-[#1B5E20]" />
          Organic
        </span>

        {/* Details Button Overlay on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
          <Link
            href={`/shop/${_id}`}
            className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2.5 rounded-xl shadow-lg bg-[#123517] hover:bg-[#0D2E10] text-white transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-4 flex-grow">
        {category && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#689F38]">
            {category}
          </span>
        )}
        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-1">
          {name}
        </h3>
        {description && (
          <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mt-auto pt-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-3 h-3 ${
                star <= Math.round(rating || 4)
                  ? "fill-amber-400 text-amber-400"
                  : "text-gray-200 fill-gray-200"
              }`}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({rating || "4.0"})</span>
        </div>
      </div>

      {/* Price Row */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div>
          <span className="text-xl font-extrabold text-[#1B431C]">
            ${Number(price).toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 ml-1">/ item</span>
        </div>

        {/* Details icon button */}
        <Link
          href={`/shop/${_id}`}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#E8F5E9] hover:bg-[#98D83E] text-[#1B5E20] transition-colors duration-200"
          title="View Details"
        >
          <Eye className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
