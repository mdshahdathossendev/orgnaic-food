import { Leaf, Award, Users, Heart, Sprout } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Organic Meadow',
  description: 'Learn about Organic Meadow — our mission, story, values, and the farming families behind your food.',
};

const values = [
  { icon: <Leaf className="h-6 w-6" />, title: '100% Organic', desc: 'Every product is USDA-certified organic — no pesticides, no GMOs, no compromises.' },
  { icon: <Heart className="h-6 w-6" />, title: 'Community First', desc: 'We partner with over 200 family-run farms, ensuring fair wages and sustainable livelihoods.' },
  { icon: <Sprout className="h-6 w-6" />, title: 'Planet-Positive', desc: 'Eco-friendly packaging, carbon-offset shipping, and a commitment to net-zero by 2030.' },
  { icon: <Award className="h-6 w-6" />, title: 'Quality Guaranteed', desc: 'Rigorous third-party lab testing on every batch — we stand behind every leaf, root, and grain.' },
];

const stats = [
  { value: '50K+', label: 'Happy Families' },
  { value: '200+', label: 'Partner Farms' },
  { value: '500+', label: 'Organic Products' },
  { value: '12', label: 'States Served' },
];

const team = [
  { name: 'Clara Mosswood', role: 'Co-Founder & CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
  { name: 'James Hartfield', role: 'Co-Founder & Head of Sourcing', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
  { name: 'Priya Nair', role: 'Head of Sustainability', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80' },
  { name: 'Marcus Green', role: 'Operations Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">

      {/* Hero */}
      <section className="bg-[#123517] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1d5225]/50 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <Users className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Growing Goodness.<br />Building Community.
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Organic Meadow was born from a simple belief: everyone deserves access to fresh, honest, and sustainably grown food.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">About Us</span>
        </nav>
      </div>

      {/* Our Story */}
      <section className="mx-auto max-w-5xl px-6 py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#98D83E] mb-3">Our Story</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123517] mb-4 leading-snug">
            From a single farm stand to 50,000 families
          </h2>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              In 2018, Clara and James Hartfield stood at a local farmers' market in Portland, frustrated that the organic produce they loved was inaccessible and unaffordable for most families. They had a simple idea — what if they could connect people directly with the farmers who care most about what they grow?
            </p>
            <p>
              With $12,000 in savings and a truck borrowed from a neighbor, Organic Meadow made its first delivery to 40 households. Word spread fast. Within 6 months, they had 500 subscribers. By 2022, they were serving communities across 12 states.
            </p>
            <p>
              Today, Organic Meadow partners with over 200 USDA-certified family farms across the country. Every single product on our platform is traceable back to the soil it grew in. We believe that knowing where your food comes from is not a luxury — it's a right.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80"
            alt="Organic farm at sunrise"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#123517] py-14 px-6">
        <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#98D83E] mb-1">{s.value}</p>
              <p className="text-sm text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#98D83E] mb-2">What We Stand For</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123517]">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#E8F5E9] text-[#123517] mx-auto mb-4">
                {v.icon}
              </div>
              <p className="font-bold text-gray-900 mb-2">{v.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-14 px-6 border-t border-gray-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#98D83E] mb-2">The People Behind the Mission</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123517]">Meet Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-[#E8F5E9]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                <p className="text-xs text-[#123517] font-medium mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-2xl bg-[#123517] p-10 text-center">
          <Leaf className="mx-auto mb-3 h-8 w-8 text-[#98D83E]" />
          <h3 className="text-2xl font-extrabold text-white mb-2">Ready to eat better?</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Join over 50,000 families who have made the switch to farm-fresh organic food.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white/30 text-white hover:bg-white/10 font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
