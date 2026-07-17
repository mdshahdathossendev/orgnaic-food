import { BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Latest Blog | Organic Meadow',
  description: 'Explore expert articles on organic farming, healthy recipes, sustainability tips, and farm-fresh living from the Organic Meadow team.',
};

const featured = {
  slug: 'why-organic-matters-2026',
  category: 'Nutrition',
  title: 'Why Organic Matters More Than Ever in 2026',
  excerpt: 'New research confirms what we have always believed — the nutrient density of certified organic produce is significantly higher than conventionally grown alternatives. Here's what the science says and how to get the most out of every bite.',
  author: 'Clara Mosswood',
  authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  date: 'July 15, 2026',
  readTime: '7 min read',
  img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
};

const posts = [
  {
    slug: '10-seasonal-summer-recipes',
    category: 'Recipes',
    title: '10 Seasonal Summer Recipes Using Farm-Fresh Produce',
    excerpt: 'Make the most of peak-season tomatoes, corn, zucchini, and berries with these vibrant, no-fuss recipes designed for warm evenings and backyard gatherings.',
    author: 'Priya Nair',
    authorImg: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80',
    date: 'July 12, 2026',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'regenerative-farming-explained',
    category: 'Farming',
    title: 'Regenerative Agriculture: What It Is and Why It Matters',
    excerpt: 'Beyond organic — regenerative farming is the next evolution. We visit one of our partner farms in Vermont to see how they're rebuilding soil health and reversing climate damage one season at a time.',
    author: 'James Hartfield',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    date: 'July 8, 2026',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'organic-pantry-essentials',
    category: 'Lifestyle',
    title: 'Building an Organic Pantry: Your Complete Starter Guide',
    excerpt: 'Switching to organic doesn't have to be overwhelming or expensive. Our nutritionist-approved starter list tells you exactly which items to swap first for maximum health impact.',
    author: 'Clara Mosswood',
    authorImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    date: 'July 3, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'plastic-free-kitchen',
    category: 'Sustainability',
    title: 'The Plastic-Free Kitchen: 15 Swaps You Can Make Today',
    excerpt: 'Single-use plastics are one of the biggest environmental challenges of our time. These 15 practical swaps will transform your kitchen into a zero-waste haven — without sacrificing convenience.',
    author: 'Marcus Green',
    authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    date: 'June 28, 2026',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'gut-health-fiber-guide',
    category: 'Nutrition',
    title: 'The Fiber Revolution: How Organic Vegetables Transform Gut Health',
    excerpt: 'The gut-brain connection is no longer a theory — it's science. Learn which organic foods are richest in prebiotic fiber and how to build a microbiome-friendly meal plan in just two weeks.',
    author: 'Priya Nair',
    authorImg: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80',
    date: 'June 22, 2026',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    slug: 'family-farms-partnership',
    category: 'Farming',
    title: 'Meet the Families: Behind the Farms That Feed You',
    excerpt: 'A behind-the-scenes look at three of our founding farm partners — how they started, what drives them, and why they chose organic before it was popular.',
    author: 'James Hartfield',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    date: 'June 15, 2026',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
  },
];

const categoryColors = {
  Nutrition: 'bg-blue-50 text-blue-700',
  Recipes: 'bg-orange-50 text-orange-700',
  Farming: 'bg-[#E8F5E9] text-[#123517]',
  Lifestyle: 'bg-purple-50 text-purple-700',
  Sustainability: 'bg-teal-50 text-teal-700',
};

function CategoryBadge({ cat }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryColors[cat] || 'bg-gray-100 text-gray-600'}`}>
      <Tag className="h-3 w-3" />
      {cat}
    </span>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">

      {/* Hero */}
      <section className="bg-[#123517] py-16 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-[#98D83E] text-[#123517] mb-5 mx-auto">
            <BookOpen className="h-7 w-7" strokeWidth={2} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">The Organic Meadow Blog</h1>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl mx-auto">
            Recipes, farm stories, sustainability tips, and nutrition guides — straight from our fields to your screen.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-[#123517] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#123517] font-semibold">Blog</span>
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Featured Post */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-1 w-8 rounded-full bg-[#98D83E]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#123517]">Featured Article</span>
          </div>
          <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 lg:flex">
            <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <CategoryBadge cat={featured.category} />
              <h2 className="mt-4 text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug group-hover:text-[#123517] transition-colors">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4">
                <img src={featured.authorImg} alt={featured.author} className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-gray-800">{featured.author}</p>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <Clock className="h-3 w-3" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#123517] hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-1 w-8 rounded-full bg-[#98D83E]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#123517]">Latest Articles</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <CategoryBadge cat={post.category} />
                  <h3 className="mt-3 text-sm font-extrabold text-gray-900 leading-snug group-hover:text-[#123517] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>

                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.authorImg} alt={post.author} className="h-6 w-6 rounded-full object-cover" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-800">{post.author}</p>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <Clock className="h-2.5 w-2.5" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-[11px] font-bold text-[#123517] hover:gap-2 transition-all"
                    >
                      Read <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="mt-14 rounded-2xl bg-[#123517] p-10 text-center">
          <BookOpen className="mx-auto mb-3 h-8 w-8 text-[#98D83E]" />
          <h3 className="text-2xl font-extrabold text-white mb-2">Never Miss an Article</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Subscribe to get weekly recipes, farm stories, and health tips delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#98D83E] focus:ring-1 focus:ring-[#98D83E]"
            />
            <button
              type="submit"
              className="bg-[#98D83E] hover:bg-[#a6eb48] text-[#123517] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
