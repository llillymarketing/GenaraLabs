import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { useCart } from '../components/cart/useCart';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';
import { ShoppingCart, ShieldCheck, Download, FlaskConical, ArrowLeft, Minus, Plus, Beaker, FileText, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const products = await base44.entities.Product.filter({ id: productId });
      return products[0];
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8faff] pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#2b7de9] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8faff] pt-24 flex flex-col items-center justify-center">
        <p className="text-[#4a5e8a] mb-4">Product not found</p>
        <Link to={createPageUrl('Products')} className="text-[#2b7de9] text-sm hover:underline">← Back to Products</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`${product.name} added to cart`);
  };

  const specs = [
    { label: 'Purity', value: product.purity, icon: ShieldCheck },
    { label: 'Form', value: product.form, icon: Package },
    { label: 'Amount', value: product.milligrams, icon: Beaker },
    product.cas_number && { label: 'CAS Number', value: product.cas_number, icon: FileText },
    product.molecular_formula && { label: 'Formula', value: product.molecular_formula, icon: FlaskConical },
    product.molecular_weight && { label: 'Mol. Weight', value: product.molecular_weight, icon: FlaskConical },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to={createPageUrl('Products')} className="inline-flex items-center gap-2 text-sm text-[#4a5e8a] hover:text-[#1a2d5a] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square bg-white border border-[#e2e8f5] rounded-2xl overflow-hidden shadow-sm">
              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-[#e2e8f5] px-3 py-1.5 rounded-full shadow-sm">
              <span className="text-xs font-medium text-[#2b7de9]">{product.purity} Pure</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="w-4 h-4 text-[#2b7de9]" />
              <span className="text-xs font-medium text-[#8a9bbf] uppercase tracking-wider">{product.category?.replace(/_/g, ' ') || 'Research Peptide'}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a2d5a]">{product.name}</h1>
            <p className="text-lg text-[#8a9bbf] mt-1">{product.milligrams}</p>
            <div className="mt-6"><span className="text-3xl font-bold text-[#1a2d5a]">${product.price?.toFixed(2)}</span></div>
            {product.description && <p className="mt-6 text-[#4a5e8a] leading-relaxed">{product.description}</p>}
            {product.long_description && <p className="mt-3 text-sm text-[#8a9bbf] leading-relaxed">{product.long_description}</p>}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <div key={i} className="bg-white border border-[#e2e8f5] rounded-xl p-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <spec.icon className="w-3.5 h-3.5 text-[#2b7de9]" />
                    <span className="text-xs text-[#8a9bbf]">{spec.label}</span>
                  </div>
                  <p className="text-sm font-medium text-[#1a2d5a]">{spec.value}</p>
                </div>
              ))}
            </div>
            {product.sequence && (
              <div className="mt-4 bg-white border border-[#e2e8f5] rounded-xl p-3">
                <span className="text-xs text-[#8a9bbf]">Amino Acid Sequence</span>
                <p className="text-xs font-mono text-[#4a5e8a] mt-1 break-all">{product.sequence}</p>
              </div>
            )}
            {product.coa_url && (
              <a href={product.coa_url} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-3 bg-white border border-[#e2e8f5] hover:border-[#bfdbfe] rounded-xl p-4 transition-colors group shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                  <Download className="w-5 h-5 text-[#2b7de9]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1a2d5a] group-hover:text-[#2b7de9] transition-colors">Certificate of Analysis (COA)</p>
                  <p className="text-xs text-[#8a9bbf]">Download PDF</p>
                </div>
              </a>
            )}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center bg-white border border-[#e2e8f5] rounded-xl">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-[#8a9bbf] hover:text-[#1a2d5a] transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center text-sm font-medium text-[#1a2d5a]">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 text-[#8a9bbf] hover:text-[#1a2d5a] transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={handleAdd} disabled={product.in_stock === false} className="flex-1 flex items-center justify-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-md shadow-[#2b7de9]/20">
                <ShoppingCart className="w-4 h-4" />
                {product.in_stock === false ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
            <div className="mt-8"><DisclaimerBanner compact /></div>
          </motion.div>
        </div>
        <div className="mt-16"><DisclaimerBanner /></div>
      </div>
    </div>
  );
}