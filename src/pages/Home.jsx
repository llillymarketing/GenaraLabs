import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Microscope, Truck, FlaskConical, CheckCircle } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function Home() {
  return (
    <div className="bg-[#f8faff]">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111e3c]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111e3c] via-[#1a2d5a] to-[#0d1830]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2b7de9]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#4fc3f7]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Precision<br />
                <span className="bg-gradient-to-r from-[#4fc3f7] to-[#2b7de9] bg-clip-text text-transparent">Peptide Science</span><br />
                Starts Here
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-md">
                Laboratory-grade research peptides with verified purity, batch-specific certificates of analysis, and rigorous third-party quality control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link to={createPageUrl('Products')} className="inline-flex items-center justify-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm">
                  Browse Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={createPageUrl('About')} className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-sm">
                  About Our Lab
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:flex items-center justify-center">
              <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/008601940_GenaraLabsLogo-modified1.png" alt="Genara Labs" className="w-80 h-80 object-contain rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <DisclaimerBanner />
      </section>
    </div>
  );
}