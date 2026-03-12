import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import './index.css';
import './globals.css';

import Layout from './Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';

const queryClient = new QueryClient();

function AppLayout({ children, pageName }) {
  return <Layout currentPageName={pageName}>{children}</Layout>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout pageName="Home"><Home /></AppLayout>} />
          <Route path="/products" element={<AppLayout pageName="Products"><Products /></AppLayout>} />
          <Route path="/product-detail" element={<AppLayout pageName="ProductDetail"><ProductDetail /></AppLayout>} />
          <Route path="/about" element={<AppLayout pageName="About"><About /></AppLayout>} />
          <Route path="/contact" element={<AppLayout pageName="Contact"><Contact /></AppLayout>} />
          <Route path="/cart" element={<AppLayout pageName="Cart"><Cart /></AppLayout>} />
          <Route path="/checkout" element={<AppLayout pageName="Checkout"><Checkout /></AppLayout>} />
          <Route path="/order-confirmation" element={<AppLayout pageName="OrderConfirmation"><OrderConfirmation /></AppLayout>} />
          <Route path="/terms" element={<AppLayout pageName="Terms"><Terms /></AppLayout>} />
          <Route path="/privacy" element={<AppLayout pageName="Privacy"><Privacy /></AppLayout>} />
          <Route path="/disclaimer" element={<AppLayout pageName="Disclaimer"><Disclaimer /></AppLayout>} />
          <Route path="/shipping-policy" element={<AppLayout pageName="ShippingPolicy"><ShippingPolicy /></AppLayout>} />
          <Route path="/refund-policy" element={<AppLayout pageName="RefundPolicy"><RefundPolicy /></AppLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);