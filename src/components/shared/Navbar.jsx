import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Products', page: 'Products' },
    { label: 'About', page: 'About' },
    { label: 'Contact', page: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#e2e8f5]' : 'bg-white border-b border-[#e2e8f5]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to={createPageUrl('Home')} className="flex-shrink-0">
            <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/8a7da44ac_GenaraLabsLogo-modified.png" alt="Genara Labs" className="h-8 w-auto object-contain rounded-full" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.page} to={createPageUrl(link.page)} className="text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors">{link.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link to={createPageUrl('Cart')} className="relative flex items-center gap-2 text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#2b7de9] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>}
            </Link>
            <button className="md:hidden text-[#4a5e8a]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f5]">
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link key={link.page} to={createPageUrl(link.page)} className="block text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] py-2.5 border-b border-[#f0f4fd] last:border-0" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}