'use client';

import Link from 'next/link';
import { useUIStore } from '@/store/useUIStore';
import { Gamepad, Swords, Users, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { mobileMenuOpen, toggleMenu, closeMenu } = useUIStore();

  const links = [
    { name: 'Home', href: '#', icon: <Gamepad size={18} /> },
    { name: 'Classes', href: '#classes', icon: <Swords size={18} /> },
    { name: 'Community', href: '#community', icon: <Users size={18} /> }
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-400">⚔️ GameVerse</h1>

        <nav className="hidden md:flex gap-6">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 hover:text-purple-400 transition"
              onClick={closeMenu}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black px-6 pb-4">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-white flex items-center gap-2"
              onClick={closeMenu}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
