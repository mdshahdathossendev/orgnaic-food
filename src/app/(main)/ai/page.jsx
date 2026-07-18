'use client'

import { useState, useRef, useEffect } from 'react';
import { Leaf, Send, Loader2, Bot, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi there! 🌿 Welcome to Organic Meadow! I\'m your organic produce assistant. How can I help you today?'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  // Suggested questions
  const suggestedQuestions = [
    "What is Organic Meadow?",
    "Do you offer free delivery?",
    "What products do you sell?",
    "How can I contact support?",
    "Are your products really organic?"
  ];

  // Auto-scroll to bottom of messages container
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('https://bag-house-server.vercel.app/groq-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content: `You are a friendly, knowledgeable assistant for Organic Meadow, an organic food e-commerce store 🌿. Here's everything you need to know:

About Organic Meadow:
- We are an online store selling 100% certified organic produce and products
- Our mission is to deliver fresh, healthy organic food directly to your doorstep
- We source from trusted local organic farms
- Our branding uses green colors to reflect nature and sustainability

Website Features:
- Home page: Hero section with our mission, product showcase
- Shop page (/shop): Browse all our organic products with filters (categories, search, price sort)
- Product detail page (/shop/[id]): View product info, add to cart, buy now
- Cart page (/cart): View cart items, update quantities, see order summary (free delivery on orders over $30)
- Checkout page (/checkout): Complete your order
- About page (/about): Learn about our story and farms
- Contact page (/contact): Get in touch with us
- FAQ page (/faq): Frequently asked questions
- Sign in (/sinin) and Sign up (/sinup): Create an account or log in
- Dashboard (/dashboard): For authenticated users to manage products (add, view, delete)

Products:
- Categories include Sweetener, Superfood, Spreads, Snacks, Cooking Oil (and more!)
- All products are 100% organic
- You can view our product range on the Shop page

FAQs:
- Q: Do you offer free delivery?
  A: Yes! We offer free delivery on all orders over $30 🌿
- Q: Are your products really organic?
  A: Absolutely! All our products are 100% certified organic!
- Q: Can I track my order?
  A: Yes, once your order is placed, you'll receive a confirmation email with tracking details.
- Q: What if I'm not satisfied with my order?
  A: We want you to be happy! Please contact our support team and we'll make it right.

Your tone should be friendly, enthusiastic, and helpful. Use emojis like 🌿, 🥬, 🍎, 🥑, 🚚 when appropriate. Always promote organic, healthy living!`
        },
        ...messages,
        userMessage
      ],
      model: 'llama-3.3-70b-versatile'
    }),
      });

      const data = await response.json();

      if (response.ok && data.message) {
        setMessages(prev => [...prev, data.message]);
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 p-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-gray-600 hover:text-[#1B431C] transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#1B5E20] fill-[#1B5E20]" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-[#1B431C]">Organic Meadow Assistant</h1>
              <p className="text-xs text-gray-500">Always here to help 🌱</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 bg-[#98D83E] rounded-full flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#123517]" />
                </div>
              )}
              <div
                className={`p-4 rounded-2xl max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-[#123517] text-white rounded-tr-sm'
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 bg-[#E8F5E9] rounded-full flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#1B5E20]" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#98D83E] rounded-full flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#123517]" />
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                <span className="text-sm text-gray-500">Thinking...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && !isLoading && (
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <p className="text-sm font-semibold text-gray-600 mb-3">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSend(question)}
                className="px-4 py-2 bg-white border border-gray-200 text-[#123517] text-sm font-medium rounded-full hover:bg-[#E8F5E9] hover:border-[#123517] transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <div className="bg-white border-t border-gray-100 p-4 sticky bottom-0">
        <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); handleSend(inputText); }} className="max-w-4xl mx-auto flex gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about organic products, recipes, or our store..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1B5E20] focus:ring-1 focus:ring-[#1B5E20] transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputText.trim()}
            className="bg-[#123517] hover:bg-[#0D2E10] disabled:opacity-50 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sm"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
