"use client";

import { useState } from "react";
import { PackagePlus, Loader2, CheckCircle, AlertCircle, Plus, Trash2, ImagePlus } from "lucide-react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [imageInputs, setImageInputs] = useState([""]);

  const addImageField = () => setImageInputs((prev) => [...prev, ""]);
  const removeImageField = (i) => setImageInputs((prev) => prev.filter((_, idx) => idx !== i));
  const updateImageField = (i, val) =>
    setImageInputs((prev) => prev.map((v, idx) => (idx === i ? val : v)));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const body = {
      name:        form.name_field.value.trim(),
      category:    form.category.value.trim(),
      price:       Number(form.price.value),
      unit:        form.unit.value.trim(),
      description: form.description.value.trim(),
      images:      imageInputs.filter((url) => url.trim() !== ""),
    };

    try {
      const res = await fetch("http://localhost:5000/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      setSuccess(true);
      form.reset();
      setImageInputs([""]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-[#0f2a13] flex items-center gap-2">
          <PackagePlus className="w-6 h-6" />
          Add New Product
        </h1>
        <p className="text-sm text-gray-500 mt-1">Fill in the details to list a new organic product.</p>
      </div>

      {/* Success Alert */}
      {success && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-semibold">
          <CheckCircle className="w-5 h-5 shrink-0" />
          Product added successfully!
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">

        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="name_field">Product Name *</label>
          <input id="name_field" name="name_field" type="text" required placeholder="e.g. Organic Honey"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition" />
        </div>

        {/* Category + Unit row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="category">Category *</label>
            <input id="category" name="category" type="text" required placeholder="e.g. Sweetener"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="unit">Unit *</label>
            <input id="unit" name="unit" type="text" required placeholder="e.g. 500g, 1kg"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition" />
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="price">Price (USD) *</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
            <input id="price" name="price" type="number" min="0" step="0.01" required placeholder="0.00"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-8 pr-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition" />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5" htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={3} placeholder="Describe the product..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition resize-none" />
        </div>

        {/* Image URLs */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-gray-700">Image URLs (Array)</label>
            <button type="button" onClick={addImageField}
              className="flex items-center gap-1 text-xs font-bold text-[#1B5E20] hover:underline">
              <Plus className="w-3.5 h-3.5" /> Add More
            </button>
          </div>
          <div className="space-y-2">
            {imageInputs.map((url, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <ImagePlus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => updateImageField(i, e.target.value)}
                    placeholder={`Image URL ${i + 1}`}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 py-2.5 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition"
                  />
                </div>
                {/* Preview thumbnail */}
                {url && (
                  <img src={url} alt="" className="w-10 h-10 rounded-lg object-cover border border-gray-100 shrink-0"
                    onError={(e) => { e.target.style.display = "none"; }} />
                )}
                {imageInputs.length > 1 && (
                  <button type="button" onClick={() => removeImageField(i)}
                    className="text-red-400 hover:text-red-600 shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#0f2a13] hover:bg-[#1B431C] disabled:opacity-70 text-white py-3 rounded-xl text-sm font-bold transition-colors shadow-md"
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
          ) : (
            <><PackagePlus className="w-4 h-4" /> Add Product</>
          )}
        </button>
      </form>
    </div>
  );
}
