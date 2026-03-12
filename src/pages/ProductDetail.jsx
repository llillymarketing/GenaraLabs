import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useCart } from '../components/cart/useCart';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';
import { 
  ShoppingCart, ShieldCheck, Download, FlaskConical, ArrowLeft, 
  Minus, Plus, Beaker, FileText, Package
} from 'lucide-react';
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
      <div className="min-h-screen bg-[#060a14] pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#060a14] pt-24 flex flex-col items-center justify-center">
        <p className="text-[#8892a8] mb-4">Product not found</p>
        <Link to={createPageUrl('Products')} className="text-[#00d4aa] text-sm hover:underline">
          ← Back to Products
        </Link>
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
    <div className="min-h-screen bg-[#060a14] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to={createPageUrl('Products')} 
          className="inline-flex items-center gap-2 text-sm text-[#8892a8] hover:text-[#00d4aa] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square bg-[#0c1220] border border-[#1a2440] rounded-xl overflow-hidden">
              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 right-4 bg-[#0c1220]/80 backdrop-blur-sm border border-[#1a2440] px-3 py-1.5 rounded-full">
              <span className="text-xs font-medium text-[#00d4aa]">{product.purity} Pure</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className="w-4 h-4 text-[#00d4aa]" />
              <span className="text-xs font-medium text-[#5a6478] uppercase tracking-wider">
                {product.category?.replace(/_/g, ' ') || 'Research Peptide'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-lg text-[#5a6478] mt-1">{product.milligrams}</p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-white">${product.price?.toFixed(2)}</span>
            </div>

            {product.description && (
              <p className="mt-6 text-[#8892a8] leading-relaxed">{product.description}</p>
            )}

            {product.long_description && (
              <p className="mt-3 text-sm text-[#5a6478] leading-relaxed">{product.long_description}</p>
            )}

            <div className="mt-8 grid grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <div key={i} className="bg-[#0c1220] border border-[#1a2440] rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <spec.icon className="w-3.5 h-3.5 text-[#00d4aa]" />
                    <span className="text-xs text-[#5a6478]">{spec.label}</span>
                  </div>
                  <p className="text-sm font-medium text-white">{spec.value}</p>
                </div>
              ))}
            </div>

            {product.sequence && (
              <div className="mt-4 bg-[#0c1220] border border-[#1a2440] rounded-lg p-3">
                <span className="text-xs text-[#5a6478]">Amino Acid Sequence</span>
                <p className="text-xs font-mono text-[#8892a8] mt-1 break-all">{product.sequence}</p>
              </div>
            )}

            {product.coa_url && (
              <a
                href={product.coa_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 bg-[#0c1220] border border-[#1a2440] hover:border-[#00d4aa]/30 rounded-lg p-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-[#00d4aa]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-[#00d4aa] transition-colors">Certificate of Analysis (COA)</p>
                  <p className="text-xs text-[#5a6478]">Download PDF</p>
                </div>
              </a>
            )}

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center bg-[#0c1220] border border-[#1a2440] rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-[#8892a8] hover:text-white transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-white">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 text-[#8892a8] hover:text-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                disabled={product.in_stock === false}
                className="flex-1 flex items-center justify-center gap-2 bg-[#00d4aa] hover:bg-[#00b894] disabled:opacity-50 disabled:cursor-not-allowed text-[#060a14] font-semibold py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                {product.in_stock === false ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            <div className="mt-8">
              <DisclaimerBanner compact />
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}