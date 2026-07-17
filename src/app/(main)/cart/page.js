"use client";

import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, isMounted } = useCart();

  if (!isMounted || cart.length === 0) {
    return (
      <div className="bg-[#FCFBF7] min-h-[70vh] flex flex-col items-center justify-center gap-5 px-6">
        <div className="p-6 bg-[#E8F5E9] rounded-full">
          <ShoppingBag className="w-12 h-12 text-[#1B5E20]" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#1B431C]">Your cart is empty</h2>
        <p className="text-gray-500 text-sm text-center max-w-xs">
          Looks like you haven't added any organic products yet.
        </p>
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-[#123517] hover:bg-[#0D2E10] text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          Browse Products
        </Link>
      </div>
    );
  }

  const deliveryFee = cartTotal >= 30 ? 0 : 4.99;
  const grandTotal = cartTotal + deliveryFee;

  return (
    <div className="bg-[#FCFBF7] min-h-screen py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1B431C]">Your Cart</h1>
            <p className="text-sm text-gray-500 mt-1">{cart.length} item{cart.length !== 1 ? "s" : ""} in your cart</p>
          </div>
          <button
            onClick={clearCart}
            className="text-xs text-red-500 hover:text-red-700 font-semibold underline transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ---- Cart Items ---- */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
              >
                {/* Image */}
                <Link href={`/shop/${item._id}`} className="shrink-0">
                  <img
                    src={Array.isArray(item.images) && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=200&q=80"}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover border border-gray-100"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {item.category && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#689F38] mb-0.5">
                      {item.category}
                    </p>
                  )}
                  <Link href={`/shop/${item._id}`} className="font-bold text-gray-900 text-sm hover:text-[#1B431C] transition-colors line-clamp-1">
                    {item.name}
                  </Link>
                  <p className="text-[#1B431C] font-extrabold mt-1">
                    ${Number(item.price).toFixed(2)}
                    <span className="text-xs text-gray-400 font-normal"> / item</span>
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-0 rounded-lg border border-gray-200 overflow-hidden shrink-0">
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    className="px-2.5 py-2 text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center text-sm font-bold border-x border-gray-200 py-2">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-2.5 py-2 text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtotal + Remove */}
                <div className="text-right shrink-0 ml-2">
                  <p className="text-sm font-extrabold text-[#1B431C]">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="mt-1.5 text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-[#1B431C] hover:underline mt-2">
              ← Continue Shopping
            </Link>
          </div>

          {/* ---- Order Summary ---- */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-extrabold text-gray-900 mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery fee</span>
                  <span className={`font-semibold ${deliveryFee === 0 ? "text-[#1B5E20]" : ""}`}>
                    {deliveryFee === 0 ? "FREE 🎉" : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-[10px] text-gray-400">
                    Add ${(30 - cartTotal).toFixed(2)} more for free delivery
                  </p>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-extrabold text-base text-[#1B431C]">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Organic Badge */}
              <div className="flex items-center gap-2 mt-4 bg-[#E8F5E9] rounded-xl px-3 py-2.5">
                <Leaf className="w-4 h-4 fill-[#1B5E20] text-[#1B5E20]" />
                <p className="text-xs font-semibold text-[#1B5E20]">
                  All products are 100% certified organic
                </p>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="mt-5 flex w-full items-center justify-center gap-2 bg-[#123517] hover:bg-[#0D2E10] text-white py-3.5 rounded-xl text-sm font-bold transition-colors shadow-md"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
