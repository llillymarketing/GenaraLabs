import React from 'react';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { useCart } from './components/cart/useCart';

export default function Layout({ children, currentPageName }) {
  const { count } = useCart();

  return (
    <div className="min-h-screen bg-[#f8faff] text-[#1a2d5a] flex flex-col">
      <Navbar cartCount={count} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}