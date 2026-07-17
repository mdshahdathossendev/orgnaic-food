'use client';

import { useState } from 'react';
import { ChevronDown, Leaf, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'Orders & Payments',
    icon: '🛒',
    faqs: [
      {
        q: 'How do I place an order?',
        a: 'Simply browse our shop, add items to your cart, and proceed to checkout. You can pay securely via credit card, debit card, or other supported payment methods. You will receive an order confirmation email immediately after placing your order.',
      },
      {
        q: 'Can I modify or cancel my order after placing it?',
        a: 'Orders can be modified or cancelled within 1 hour of placement. After that, our team begins preparing your package. Please contact our Help Center immediately at support@organicmeadow.com if you need to make changes.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), Google Pay, Apple Pay, and PayPal. All transactions are encrypted and secured with SSL.',
      },
      {
        q: 'Will I receive an invoice for my order?',
        a: 'Yes. A detailed invoice is automatically sent to your registered email address after every successful order. You can also download your invoice from your account dashboard.',
      },
    ],
  },
  {
    title: 'Products & Quality',
    icon: '🌿',
    faqs: [
      {
        q: 'Are all your products certified organic?',
        a: 'Yes. Every product on Organic Meadow is sourced from USDA-certified organic farms. We perform rigorous third-party testing to ensure zero pesticides, synthetic fertilizers, or GMOs in our supply chain.',
      },
      {
        q: 'How fresh are the products when they arrive?',
        a: 'We harvest to order whenever possible. Most produce is picked 24–48 hours before delivery, ensuring maximum freshness and nutritional value when it reaches your doorstep.',
      },
      {
        q: 'What if I receive a damaged or spoiled product?',
        a: 'Your satisfaction is our priority. If any product arrives damaged or spoiled, contact us within 48 hours with a photo of the item. We will issue a full refund or replacement at no cost to you.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    icon: '🚚',
    faqs: [
      {
        q: 'How long does shipping take?',
        a: 'Standard delivery takes 3–5 business days. Express delivery (1–2 business days) is available for most locations. Free standard shipping is available on all orders over $50.',
      },
      {
        q: 'Do you deliver to my area?',
        a: 'We currently deliver to all 48 contiguous US states. Enter your zip code at checkout to confirm availability. We are actively expanding to Alaska, Hawaii, and Canada.',
      },
      {
        q: 'How do you keep perishables fresh during shipping?',
        a: 'Perishable items are packed in eco-friendly insulated boxes with plant-based ice packs, maintaining optimal temperatures throughout transit. Our packaging is 100% compostable.',
      },
    ],
  },
  {
    title: 'Account & Subscriptions',
    icon: '👤',
    faqs: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign Up" in the top navigation and fill in your name, email, and password. You can also sign up instantly using your Google account. Creating an account lets you track orders, save favorites, and access member discounts.',
      },
      {
        q: 'Can I set up a recurring subscription box?',
        a: 'Yes! Our subscription boxes let you receive weekly, bi-weekly, or monthly deliveries of seasonal organic produce. Subscribers save up to 15% and get free shipping on every order.',
      },
      {
        q: 'How do I reset my password?',
        a: 'On the Sign In page, click "Forgot password?" and enter your email. You will receive a secure reset link within a few minutes. Check your spam folder if you don\'t see it.',
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-left bg-white hover:bg-[#F0F9E8] transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-gray-800 pr-4">{q}</span>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#123517] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="px-6 py-4 text-sm text-gray-600 leading-relaxed bg-[#FAFFF5] border-t border-gray-100">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero Banner */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <HelpCircle className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about Organic Meadow — from placing your first order to managing your subscription.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">FAQs</span>
        </nav>
      </div>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-12 space-y-10">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-lg font-bold text-[#123517]">{cat.title}</h2>
            </div>
            <div className="space-y-3">
              {cat.faqs.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Still have questions CTA */}
        <div className="mt-12 rounded-2xl bg-[#123517] p-8 text-center">
          <Leaf className="mx-auto mb-3 h-8 w-8 text-[#98D83E]" />
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-300 text-sm mb-5">Our support team is available Monday–Friday, 9am–6pm EST.</p>
          <Link
            href="/contact"
            className="inline-block bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
