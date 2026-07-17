'use client';

import { Leaf, Mail } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#123517] to-[#1B5E20]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-[#98D83E] text-[#123517] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          <Leaf className="w-4 h-4" />
          Stay Updated
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Join Our Newsletter</h2>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8">
          Subscribe to get special discounts, free recipes, and updates on our latest organic products!
        </p>
        
        {subscribed ? (
          <div className="bg-[#E8F5E9] text-[#1B5E20] px-6 py-4 rounded-xl font-bold text-sm">
            Thank you for subscribing! 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border-0 bg-white text-gray-800 text-sm outline-none focus:ring-2 focus:ring-[#98D83E]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] px-8 py-3 rounded-xl text-sm font-bold transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
