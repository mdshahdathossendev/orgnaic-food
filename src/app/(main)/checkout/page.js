"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { CheckCircle, Leaf, ArrowLeft, CreditCard, Lock } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const deliveryFee = cartTotal >= 30 ? 0 : 4.99;
  const grandTotal = cartTotal + deliveryFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const orderData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      zip: formData.get("zip"),
      paymentMethod: formData.get("paymentMethod"),
      items: cart,
      total: grandTotal,
      deliveryFee,
      orderDate: new Date().toISOString(),
    };

    console.log("Order Placed:", orderData);

    // Simulate processing
    await new Promise((r) => setTimeout(r, 1500));

    clearCart();
    setSubmitted(true);
    setLoading(false);
  };

  // ---- Success State ----
  if (submitted) {
    return (
      <div className="bg-[#FCFBF7] min-h-[80vh] flex flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="p-5 bg-[#E8F5E9] rounded-full">
          <CheckCircle className="w-14 h-14 text-[#1B5E20]" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-extrabold text-[#1B431C]">Order Confirmed! 🎉</h1>
        <p className="text-gray-500 text-sm max-w-sm">
          Thank you! Your organic produce is being prepared for delivery. You will receive an email confirmation shortly.
        </p>
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-[#123517] hover:bg-[#0D2E10] text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-md"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ---- Empty cart redirect ----
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-lg font-bold text-gray-500">Your cart is empty</p>
        <Link href="/shop" className="px-5 py-2 bg-[#123517] text-white text-sm font-bold rounded-lg hover:bg-[#0D2E10] transition">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFBF7] min-h-screen py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-bold text-[#1B431C] hover:underline mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>
          <h1 className="text-3xl font-extrabold text-[#1B431C]">Checkout</h1>
          <p className="text-sm text-gray-500 mt-1">Complete your order below</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ---- Form Fields ---- */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Delivery Info */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#123517] text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                  Delivery Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" required placeholder="John Doe"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+1 555 000 0000"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="address">Street Address</label>
                    <input id="address" name="address" type="text" required placeholder="123 Main Street"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="city">City</label>
                    <input id="city" name="city" type="text" required placeholder="New York"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1" htmlFor="zip">ZIP Code</label>
                    <input id="zip" name="zip" type="text" required placeholder="10001"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-[#1e3d1c] focus:ring-1 focus:ring-[#1e3d1c] transition" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-base font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#123517] text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                  Payment Method
                </h2>

                <div className="flex flex-col gap-3">
                  {[
                    { value: "card", label: "Credit / Debit Card", icon: "💳" },
                    { value: "paypal", label: "PayPal", icon: "🅿️" },
                    { value: "cod", label: "Cash on Delivery", icon: "💵" },
                  ].map((method) => (
                    <label key={method.value} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 cursor-pointer hover:border-[#1B431C] transition-colors has-[:checked]:border-[#1B431C] has-[:checked]:bg-[#E8F5E9]">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        defaultChecked={method.value === "card"}
                        className="accent-[#123517]"
                      />
                      <span className="text-base">{method.icon}</span>
                      <span className="text-sm font-semibold text-gray-700">{method.label}</span>
                    </label>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-4 text-[10px] text-gray-400">
                  <Lock className="w-3 h-3" />
                  Your payment information is encrypted and secure
                </div>
              </div>

            </div>

            {/* ---- Order Summary ---- */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
                <h2 className="text-base font-extrabold text-gray-900 mb-4">Order Summary</h2>

                {/* Items */}
                <div className="flex flex-col gap-3 mb-4 max-h-48 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item._id} className="flex items-center gap-3">
                      <img
                        src={Array.isArray(item.images) && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=100&q=80"}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=100&q=80";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-800 line-clamp-1">{item.name}</p>
                        <p className="text-[10px] text-gray-400">x{item.quantity}</p>
                      </div>
                      <p className="text-xs font-bold text-[#1B431C] shrink-0">
                        ${(Number(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Delivery</span>
                    <span className={deliveryFee === 0 ? "text-[#1B5E20] font-semibold" : ""}>
                      {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-extrabold text-[#1B431C] text-base border-t border-gray-100 pt-2">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 bg-[#E8F5E9] rounded-xl px-3 py-2.5">
                  <Leaf className="w-4 h-4 fill-[#1B5E20] text-[#1B5E20] shrink-0" />
                  <p className="text-[10px] font-semibold text-[#1B5E20]">100% certified organic</p>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-[#123517] hover:bg-[#0D2E10] disabled:opacity-70 text-white py-3.5 rounded-xl text-sm font-bold transition-colors shadow-md"
                >
                  <CreditCard className="w-4 h-4" />
                  {loading ? "Placing Order..." : `Place Order · $${grandTotal.toFixed(2)}`}
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
