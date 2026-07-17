'use client'

import { MessageCircle, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingChatButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/ai" className="fixed bottom-6 right-6 z-50">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center gap-3 bg-[#123517] hover:bg-[#0D2E10] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 bg-[#98D83E] rounded-full flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-[#123517]" />
        </div>
        {isHovered && (
          <span className="text-sm font-bold whitespace-nowrap transition-opacity duration-300">
            Chat with us!
          </span>
        )}
      </button>
    </Link>
  );
}
