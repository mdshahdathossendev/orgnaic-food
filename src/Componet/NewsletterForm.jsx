'use client';

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
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
  );
}
