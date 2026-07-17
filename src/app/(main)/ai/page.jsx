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
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inputText.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputText.trim() };
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
              content: 'You are a helpful assistant for Organic Meadow, an organic food e-commerce store. Be friendly, informative, and focus on organic products, healthy eating, and our store offerings. Use emojis related to nature and food where appropriate.'
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
      <div className="flex-1 overflow-y-auto p-4">
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
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white border-t border-gray-100 p-4 sticky bottom-0">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto flex gap-3">
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
