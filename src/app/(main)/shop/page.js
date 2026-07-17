import ProductsSection from "@/Componet/ProductsSection";

export const metadata = {
  title: "Shop | Organic Meadow",
  description: "Browse our full range of certified organic products - fresh vegetables, fruits, grains and more.",
};

export default function ShopPage() {
  return (
    <>
      {/* Page Hero Banner */}
      <div className="bg-[#123517] text-white py-14 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#98D83E] text-xs font-bold uppercase tracking-widest mb-2">
            🌿 Organic Meadow
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-3">
            Our Shop
          </h1>
          <p className="text-gray-300 text-base max-w-xl">
            Freshly harvested, certified organic produce sourced directly from trusted local farms and delivered to your door.
          </p>

          {/* Breadcrumb */}
          <nav className="mt-5 flex items-center gap-2 text-xs text-gray-400">
            <a href="/" className="hover:text-[#98D83E] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#98D83E] font-semibold">Shop</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <ProductsSection />
    </>
  );
}
