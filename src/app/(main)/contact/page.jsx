import { Mail, Phone, MapPin, Clock, MessageSquare, Leaf } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Help Center | Organic Meadow',
  description: 'Get help with orders, delivery, returns, and account issues at the Organic Meadow Help Center.',
};

const topics = [
  { icon: '🛒', title: 'Orders & Payments', desc: 'Track, modify, or cancel an order. Payment issues and invoices.', href: '/faq#acceptance' },
  { icon: '🚚', title: 'Shipping & Delivery', desc: 'Delivery times, tracking your package, address changes.', href: '/shipping' },
  { icon: '🔄', title: 'Returns & Refunds', desc: 'Initiate a return, understand refund timelines.', href: '/shipping#return' },
  { icon: '👤', title: 'Account & Password', desc: 'Login issues, password reset, profile settings.', href: '/faq#account' },
  { icon: '🌿', title: 'Product Questions', desc: 'Certifications, ingredients, freshness, and sourcing.', href: '/faq#products' },
  { icon: '📦', title: 'Subscriptions', desc: 'Manage, pause, or cancel your subscription box.', href: '/faq#subscriptions' },
];

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-[#123517]" />,
    title: 'Email Support',
    desc: 'We reply within 24 business hours.',
    action: 'support@organicmeadow.com',
    link: 'mailto:support@organicmeadow.com',
    badge: 'Recommended',
  },
  {
    icon: <Phone className="h-6 w-6 text-[#123517]" />,
    title: 'Phone Support',
    desc: 'Mon–Fri, 9am–6pm EST.',
    action: '+1 (555) 019-2834',
    link: 'tel:+15550192834',
    badge: null,
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-[#123517]" />,
    title: 'Live Chat',
    desc: 'Available during business hours.',
    action: 'Start a chat',
    link: '#',
    badge: 'Fastest',
  },
];

export default function HelpCenterPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <MessageSquare className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Help Center</h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
            We're here to help. Browse common topics below or reach out to our support team directly.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">Help Center</span>
        </nav>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12 space-y-14">

        {/* Browse Topics */}
        <section>
          <h2 className="text-xl font-bold text-[#123517] mb-6">Browse Help Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#98D83E] transition-all duration-200"
              >
                <span className="text-2xl mb-3 block">{t.icon}</span>
                <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#123517] transition-colors">
                  {t.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section>
          <h2 className="text-xl font-bold text-[#123517] mb-6">Contact Our Team</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {contactMethods.map((m) => (
              <div key={m.title} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
                {m.badge && (
                  <span className="absolute top-4 right-4 bg-[#98D83E] text-[#123517] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {m.badge}
                  </span>
                )}
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#E8F5E9] mx-auto mb-4">
                  {m.icon}
                </div>
                <p className="font-bold text-gray-900 mb-1">{m.title}</p>
                <p className="text-xs text-gray-400 mb-3">{m.desc}</p>
                <a
                  href={m.link}
                  className="inline-block text-sm font-semibold text-[#123517] hover:text-[#0D2E10] underline underline-offset-2 transition-colors"
                >
                  {m.action}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Business Hours */}
        <section>
          <h2 className="text-xl font-bold text-[#123517] mb-6">Support Hours & Location</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#123517]" />
                </div>
                <p className="font-bold text-gray-900">Business Hours</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  ['Monday – Friday', '9:00am – 6:00pm EST'],
                  ['Saturday', '10:00am – 3:00pm EST'],
                  ['Sunday', 'Closed'],
                ].map(([day, time]) => (
                  <li key={day} className="flex justify-between border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium text-gray-700">{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#123517]" />
                </div>
                <p className="font-bold text-gray-900">Our Office</p>
              </div>
              <address className="not-italic text-sm text-gray-600 space-y-1.5 leading-relaxed">
                <p className="font-semibold text-gray-800">Organic Meadow Inc.</p>
                <p>120 Sweetgrass Farm Rd</p>
                <p>Portland, Oregon 97201</p>
                <p>United States</p>
              </address>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-[#123517] p-8 text-center">
          <Leaf className="mx-auto mb-3 h-8 w-8 text-[#98D83E]" />
          <h3 className="text-xl font-bold text-white mb-2">Didn't find your answer?</h3>
          <p className="text-gray-300 text-sm mb-5">Check our full FAQ page for detailed answers to common questions.</p>
          <Link
            href="/faq"
            className="inline-block bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
          >
            Browse All FAQs
          </Link>
        </div>

      </div>
    </div>
  );
}
