import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { FlaskConical, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Link to={createPageUrl('ProductDetail') + `?id=${product.id}`} className="group block">
        <div className="bg-white border border-[#e2e8f5] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#bfdbfe] transition-all duration-300">
          <div className="relative aspect-square bg-[#f8faff] overflow-hidden">
            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-3 right-3">
              <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-medium text-[#2b7de9] border border-[#e2e8f5]">
                {product.purity} Pure
              </div>
            </div>
            {product.in_stock === false && (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span className="text-sm font-medium text-[#8a9bbf]">Out of Stock</span>
              </div>
            )}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <FlaskConical className="w-3.5 h-3.5 text-[#2b7de9]" />
              <span className="text-[11px] font-medium text-[#8a9bbf] uppercase tracking-wider">{product.form || 'Lyophilized Powder'}</span>
            </div>
            <h3 className="text-base font-semibold text-[#1a2d5a] group-hover:text-[#2b7de9] transition-colors">{product.name}</h3>
            <p className="text-sm text-[#8a9bbf] mt-1">{product.milligrams}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#e2e8f5]">
              <span className="text-xl font-bold text-[#1a2d5a]">${product.price?.toFixed(2)}</span>
              <div className="flex items-center gap-1.5 text-[11px] text-[#8a9bbf]">
                <ShieldCheck className="w-3.5 h-3.5" /> COA Available
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}