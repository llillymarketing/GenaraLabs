import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function OrderConfirmation() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderNumber = urlParams.get('order') || '';

  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20 flex items-center">
      <div className="max-w-lg mx-auto px-6 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, type: 'spring' }}>
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a2d5a] mb-2">Order Confirmed</h1>
          {orderNumber && <p className="text-sm text-[#8a9bbf] font-mono mb-6">Order #{orderNumber}</p>}
          <p className="text-[#4a5e8a] leading-relaxed mb-4">Thank you for your order. A confirmation email has been sent with your order details.</p>
          <div className="bg-white border border-[#e2e8f5] rounded-xl p-4 mb-8 flex items-center gap-3 shadow-sm">
            <Mail className="w-5 h-5 text-[#2b7de9] flex-shrink-0" />
            <p className="text-sm text-[#4a5e8a] text-left">Check your email for tracking information. Orders typically ship within 1-2 business days.</p>
          </div>
          <Link to={createPageUrl('Products')} className="inline-flex items-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm shadow-md shadow-[#2b7de9]/20">
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="mt-12"><DisclaimerBanner /></div>
        </motion.div>
      </div>
    </div>
  );
}