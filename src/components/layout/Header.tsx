'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useMenuStore } from '@/store/useMenuStore';

export default function Header() {
  const { isOpen, toggle, close } = useMenuStore();

  const navItems = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#classes', label: 'Classes' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#community', label: 'Community' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-extrabold text-purple-400 tracking-wide">
          GameVerse
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-purple-400 transition">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggle} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-6 pt-2 space-y-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block text-white hover:text-purple-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
