import { Truck, RefreshCw, Package, Clock, AlertTriangle, Leaf } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipping & Returns | Organic Meadow',
  description: 'Learn about our shipping policies, delivery times, and hassle-free returns process at Organic Meadow.',
};

const shippingOptions = [
  { label: 'Standard Shipping', time: '3–5 Business Days', cost: 'Free on orders over $50 | $4.99 below' },
  { label: 'Express Shipping', time: '1–2 Business Days', cost: '$9.99 flat rate' },
  { label: 'Same-Day Delivery', time: 'Order before 10am', cost: '$14.99 (select cities only)' },
];

const returnSteps = [
  { step: '01', title: 'Contact Us', desc: 'Email support@organicmeadow.com or use our Help Center within 7 days of delivery.' },
  { step: '02', title: 'Share Evidence', desc: 'For damaged or spoiled items, send a photo so we can process your request quickly.' },
  { step: '03', title: 'Get Refunded', desc: 'Approved refunds are processed within 3–5 business days back to your original payment method.' },
];

export default function ShippingReturnsPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <Truck className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Shipping & Returns
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
            We're committed to getting fresh organic goodness to your door quickly, safely, and sustainably.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">Shipping & Returns</span>
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12 space-y-14">

        {/* Shipping Options */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
              <Truck className="h-5 w-5 text-[#123517]" />
            </div>
            <h2 className="text-xl font-bold text-[#123517]">Shipping Options</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {shippingOptions.map((opt) => (
              <div key={opt.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-bold text-gray-900 mb-1">{opt.label}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#123517] font-semibold mb-2">
                  <Clock className="h-3.5 w-3.5" />
                  {opt.time}
                </div>
                <p className="text-xs text-gray-500">{opt.cost}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl bg-[#F0F9E8] border border-[#D4EDDA] px-5 py-4 flex items-start gap-3">
            <Leaf className="h-4 w-4 text-[#123517] mt-0.5 shrink-0" />
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong>Eco Packaging:</strong> All orders are packed in 100% compostable insulated boxes with plant-based ice packs. We're committed to net-zero packaging waste by 2026.
            </p>
          </div>
        </section>

        {/* Delivery Info */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
              <Package className="h-5 w-5 text-[#123517]" />
            </div>
            <h2 className="text-xl font-bold text-[#123517]">Delivery Information</h2>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>We currently ship to all <strong>48 contiguous US states</strong>. Orders placed before <strong>12pm (noon) EST on business days</strong> are typically dispatched the same day.</p>
            <p>Once your order ships, you will receive a tracking number via email. You can track your delivery in real-time through our partner courier's website.</p>
            <p>Delivery to <strong>PO Boxes, APO/FPO addresses</strong>, Alaska, and Hawaii is currently unavailable, but we're working on expanding access.</p>
            <p>During peak seasons (holidays, summer), processing times may be extended by 1–2 business days. We'll always notify you of any delays.</p>
          </div>
        </section>

        {/* Returns Policy */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
              <RefreshCw className="h-5 w-5 text-[#123517]" />
            </div>
            <h2 className="text-xl font-bold text-[#123517]">Returns & Refunds</h2>
          </div>

          {/* Step-by-step */}
          <div className="relative">
            <div className="hidden sm:block absolute left-[26px] top-6 bottom-6 w-px bg-[#D4EDDA]" />
            <div className="space-y-5">
              {returnSteps.map((s) => (
                <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-[#123517] text-white text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-0.5">{s.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4 flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Non-returnable items:</strong> For hygiene and food safety reasons, perishable goods cannot be returned once delivered. However, we guarantee satisfaction — if anything is wrong, we'll make it right.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-[#123517] p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need help with an order?</h3>
          <p className="text-gray-300 text-sm mb-5">Our team is here to help you Monday–Friday, 9am–6pm EST.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Visit Help Center
          </Link>
        </div>
      </div>
    </div>
  );
}
