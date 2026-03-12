import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShoppingCart, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import Logo from './Logo';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { data: authData } = useQuery({
    queryKey: ['auth-user'],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch {
        return { user: null, isAuthenticated: false };
      }
    },
  });

  const isAuthenticated = authData?.isAuthenticated;
  const user = authData?.user;

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#e2e8f5]' : 'bg-white border-b border-[#e2e8f5]'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to={createPageUrl('Home')} className="flex-shrink-0">
            <Logo size="small" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={createPageUrl('Cart')}
              className="relative flex items-center gap-2 text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#2b7de9] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f0f4fd]">
                    <User className="w-4 h-4 text-[#2b7de9]" />
                    <span className="text-xs font-medium text-[#1a2d5a] max-w-[120px] truncate">{user?.full_name || user?.email}</span>
                  </div>
                  <button
                    onClick={() => base44.auth.logout()}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#4a5e8a] hover:text-[#1a2d5a] px-3 py-1.5 rounded-lg hover:bg-[#f0f4fd] transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => base44.auth.redirectToLogin()}
                  className="flex items-center gap-1.5 text-sm font-semibold text-white bg-[#2b7de9] hover:bg-[#3b8ef0] px-4 py-2 rounded-lg transition-colors shadow-sm"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>

            <button
              className="md:hidden text-[#4a5e8a] hover:text-[#1a2d5a]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#e2e8f5]">
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="block text-sm font-medium text-[#4a5e8a] hover:text-[#1a2d5a] py-2.5 border-b border-[#f0f4fd] last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              {isAuthenticated ? (
                <button
                  onClick={() => base44.auth.logout()}
                  className="flex items-center gap-2 text-sm font-medium text-[#4a5e8a] py-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out ({user?.full_name || user?.email})
                </button>
              ) : (
                <button
                  onClick={() => base44.auth.redirectToLogin()}
                  className="flex items-center gap-2 text-sm font-semibold text-[#2b7de9] py-2"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In / Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}