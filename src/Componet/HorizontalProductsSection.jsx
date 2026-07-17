'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Leaf, Loader2 } from 'lucide-react';

export default function HorizontalProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://bag-house-server.vercel.app/foods');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (!scrollContainerRef.current || products.length === 0) return;

    const scrollAmount = 300; // Amount to scroll each time
    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        // If we've reached the end, scroll back to start
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2000);

    // Cleanup interval on unmount
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [products]);

  // Pause scroll on hover
  const handleMouseEnter = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  // Resume scroll on mouse leave
  const handleMouseLeave = () => {
    if (!scrollContainerRef.current || products.length === 0) return;
    const scrollAmount = 300;
    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2000);
  };

  if (loading) {
    return (
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-2 text-[#1B431C]">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-sm font-semibold">Loading products...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              <Leaf className="w-4 h-4" />
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B431C]">Fresh from the Farm</h2>
          </div>
          <Link href="/shop" className="text-sm font-bold text-[#1B5E20] hover:underline">
            View All →
          </Link>
        </div>
        
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar */}
          <style>{`
            .scroll-smooth::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {products.map((product) => (
            <Link
              key={product._id || product.id}
              href={`/shop/${product._id}`}
              className="flex-shrink-0 w-72 bg-[#FCFBF7] rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative h-52 bg-[#E8F5E9]">
                <img
                  src={Array.isArray(product.images) && product.images[0] ? product.images[0] : 'https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=400&q=80'}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#1B5E20] text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm">
                  <Leaf className="w-3 h-3 fill-[#1B5E20]" />
                  Organic
                </span>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#689F38] mb-2 block">
                  {product.category || 'Product'}
                </span>
                <h3 className="font-bold text-[#1B431C] mb-2 line-clamp-1">{product.name}</h3>
                {product.description && (
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-extrabold text-[#1B431C]">
                    ${Number(product.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
