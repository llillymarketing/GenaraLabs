import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { useCart } from '../components/cart/useCart';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';
import { ArrowLeft, ShieldCheck, Lock, Truck, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const shipping = total >= 200 ? 0 : 12.95;
  const grandTotal = total + shipping;

  const [form, setForm] = useState({ email: '', name: '', address: '', city: '', state: '', zip: '', country: 'US' });
  const [researchConfirm, setResearchConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!researchConfirm) {
      toast.error('You must confirm this purchase is for research purposes only.');
      return;
    }
    setSubmitting(true);
    const orderNumber = 'GL-' + Date.now().toString(36).toUpperCase().slice(-6);
    try {
      await base44.entities.Order.create({
        order_number: orderNumber,
        customer_email: form.email,
        customer_name: form.name,
        shipping_address: form.address,
        shipping_city: form.city,
        shipping_state: form.state,
        shipping_zip: form.zip,
        shipping_country: form.country,
        items: items.map(i => ({ product_id: i.product_id, product_name: i.product_name, quantity: i.quantity, price: i.price, milligrams: i.milligrams })),
        subtotal: total,
        shipping_cost: shipping,
        total: grandTotal,
        status: 'pending',
        research_confirmation: true,
      });
      await base44.integrations.Core.SendEmail({
        to: form.email,
        subject: `Genara Labs - Order Confirmation ${orderNumber}`,
        body: `<h2>Thank you for your order, ${form.name}!</h2><p>Order <strong>${orderNumber}</strong> has been received.</p><p><strong>Total:</strong> $${grandTotal.toFixed(2)}</p><br/><p style="color:#888;font-size:12px">For Research Use Only. Not for Human Consumption. Not FDA Approved.</p>`,
      });
    } catch {}
    clearCart();
    setSubmitting(false);
    window.location.href = createPageUrl('OrderConfirmation') + `?order=${orderNumber}`;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#f8faff] pt-24 pb-20 flex flex-col items-center justify-center">
        <p className="text-[#4a5e8a] mb-4">Your cart is empty.</p>
        <Link to={createPageUrl('Products')} className="text-[#2b7de9] text-sm hover:underline">Browse Products</Link>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-[#e2e8f5] rounded-xl px-4 py-3 text-sm text-[#1a2d5a] placeholder:text-[#8a9bbf] focus:outline-none focus:border-[#2b7de9] focus:ring-2 focus:ring-[#2b7de9]/10 transition-colors";

  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <Link to={createPageUrl('Cart')} className="inline-flex items-center gap-2 text-sm text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors mb-8 pt-8 block">
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-[#1a2d5a] mb-8">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-[#e2e8f5] rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#1a2d5a] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <input name="email" type="email" required placeholder="Email address" value={form.email} onChange={handleChange} className={inputClass} />
                  <input name="name" required placeholder="Full name" value={form.name} onChange={handleChange} className={inputClass} />
                </div>
              </div>
              <div className="bg-white border border-[#e2e8f5] rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-[#1a2d5a] mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <input name="address" required placeholder="Street address" value={form.address} onChange={handleChange} className={inputClass} />
                  <div className="grid grid-cols-2 gap-4">
                    <input name="city" required placeholder="City" value={form.city} onChange={handleChange} className={inputClass} />
                    <input name="state" required placeholder="State / Province" value={form.state} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input name="zip" required placeholder="ZIP / Postal code" value={form.zip} onChange={handleChange} className={inputClass} />
                    <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-amber-900">Research Use Confirmation</h3>
                    <p className="text-xs text-amber-700 mt-1">Required to complete your order</p>
                  </div>
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={researchConfirm} onChange={(e) => setResearchConfirm(e.target.checked)} className="mt-1 w-4 h-4 rounded border-amber-300" />
                  <span className="text-sm text-amber-800 leading-relaxed">
                    I confirm I am purchasing these products <strong className="text-amber-900">for research purposes only</strong>.
                    I understand these products are <strong className="text-amber-900">not intended for human consumption</strong>, are not FDA approved, and are not dietary supplements.
                  </span>
                </label>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-[#5a6478]">
                <Link to={createPageUrl('ShippingPolicy')} className="hover:underline">Shipping Policy</Link>
                <Link to={createPageUrl('RefundPolicy')} className="hover:underline">Refund Policy</Link>
                <Link to={createPageUrl('Terms')} className="hover:underline">Terms of Service</Link>
                <Link to={createPageUrl('Privacy')} className="hover:underline">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <div className="bg-white border border-[#e2e8f5] rounded-2xl p-6 sticky top-24 shadow-sm">
                <h3 className="text-sm font-semibold text-[#1a2d5a] mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map(item => (
                    <div key={item.product_id} className="flex justify-between text-sm">
                      <span className="text-[#4a5e8a] truncate mr-2">{item.product_name} × {item.quantity}</span>
                      <span className="text-[#1a2d5a] font-medium flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-sm border-t border-[#e2e8f5] pt-4">
                  <div className="flex justify-between text-[#4a5e8a]"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
                  <div className="flex justify-between text-[#4a5e8a]"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
                  <div className="flex justify-between text-[#1a2d5a] font-semibold pt-3 border-t border-[#e2e8f5]"><span>Total</span><span>${grandTotal.toFixed(2)}</span></div>
                </div>
                <button type="submit" disabled={submitting || !researchConfirm} className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all text-sm shadow-md shadow-[#2b7de9]/20">
                  {submitting ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Lock className="w-4 h-4" /> Place Order</>}
                </button>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e2e8f5] pt-4">
                  {[{ icon: Lock, label: 'Secure' }, { icon: ShieldCheck, label: 'Verified' }, { icon: Truck, label: '2-5 Days' }].map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 py-2">
                      <badge.icon className="w-4 h-4 text-[#2b7de9]" />
                      <span className="text-[10px] text-[#8a9bbf]">{badge.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4"><DisclaimerBanner compact /></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}