import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useCart } from '../components/cart/useCart';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';
import { motion } from 'framer-motion';

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8faff] pt-24 pb-20 flex flex-col items-center justify-center">
        <ShoppingBag className="w-12 h-12 text-[#e2e8f5] mb-4" />
        <h2 className="text-xl font-semibold text-[#1a2d5a] mb-2">Your cart is empty</h2>
        <p className="text-[#8a9bbf] mb-8 text-sm">Browse our catalog to add research peptides.</p>
        <Link
          to={createPageUrl('Products')}
          className="inline-flex items-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm shadow-md shadow-[#2b7de9]/20"
        >
          Browse Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const shipping = total >= 200 ? 0 : 12.95;

  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to={createPageUrl('Products')} className="inline-flex items-center gap-2 text-sm text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors mb-8 pt-8 block">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2d5a] mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.product_id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-[#e2e8f5] rounded-2xl p-4 flex gap-4 shadow-sm"
              >
                <div className="w-20 h-20 rounded-xl bg-[#f0f4fd] overflow-hidden flex-shrink-0">
                  {item.image_url && (
                    <img src={item.image_url} alt={item.product_name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#1a2d5a] truncate">{item.product_name}</h3>
                  <p className="text-xs text-[#8a9bbf] mt-0.5">{item.milligrams}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-[#f8faff] border border-[#e2e8f5] rounded-lg">
                      <button onClick={() => updateQuantity(item.product_id, item.quantity - 1)} className="p-1.5 text-[#8a9bbf] hover:text-[#1a2d5a]">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-medium text-[#1a2d5a]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product_id, item.quantity + 1)} className="p-1.5 text-[#8a9bbf] hover:text-[#1a2d5a]">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-[#1a2d5a]">${(item.price * item.quantity).toFixed(2)}</span>
                      <button onClick={() => removeItem(item.product_id)} className="text-[#8a9bbf] hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="bg-white border border-[#e2e8f5] rounded-2xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-sm font-semibold text-[#1a2d5a] mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#4a5e8a]">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#4a5e8a]">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-[#8a9bbf]">Free shipping on orders over $200</p>
                )}
                <div className="pt-3 border-t border-[#e2e8f5] flex justify-between text-[#1a2d5a] font-semibold">
                  <span>Total</span>
                  <span>${(total + shipping).toFixed(2)}</span>
                </div>
              </div>

              <Link
                to={createPageUrl('Checkout')}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-md shadow-[#2b7de9]/20"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4">
                <DisclaimerBanner compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}