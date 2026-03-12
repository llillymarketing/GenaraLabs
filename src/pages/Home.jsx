import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Microscope, Truck, FlaskConical, CheckCircle } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function Home() {
  return (
    <div className="bg-[#f8faff]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#111e3c]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111e3c] via-[#1a2d5a] to-[#0d1830]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(rgba(79,195,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2b7de9]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#4fc3f7]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-[#2b7de9]/20 border border-[#2b7de9]/30 rounded-full px-4 py-1.5 mb-6">
                <FlaskConical className="w-3.5 h-3.5 text-[#4fc3f7]" />
                <span className="text-xs font-medium text-[#4fc3f7]">Research-Grade Peptides</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Precision<br />
                <span className="bg-gradient-to-r from-[#4fc3f7] to-[#2b7de9] bg-clip-text text-transparent">Peptide Science</span><br />
                Starts Here
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-md">
                Laboratory-grade research peptides with verified purity, batch-specific certificates of analysis, and rigorous third-party quality control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link to={createPageUrl('Products')} className="inline-flex items-center justify-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-[#2b7de9]/30">
                  Browse Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={createPageUrl('About')} className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 text-sm">
                  About Our Lab
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6">
                {['≥98% Purity', 'COA Included', 'Third-Party Tested'].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#4fc3f7]" />
                    <span className="text-xs text-white/50 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2b7de9]/20 rounded-full blur-3xl scale-110" />
                <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/008601940_GenaraLabsLogo-modified1.png" alt="Genara Labs" className="relative w-80 h-80 object-contain rounded-full shadow-2xl shadow-[#2b7de9]/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-[#e2e8f5]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: '≥98% Purity', desc: 'HPLC Verified' },
              { icon: Award, label: 'COA Included', desc: 'Every Product' },
              { icon: Microscope, label: 'Third-Party Tested', desc: 'Independent QC' },
              { icon: Truck, label: 'Fast Shipping', desc: '2-5 Business Days' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-[#2b7de9]" />
                </div>
                <p className="text-sm font-semibold text-[#1a2d5a]">{item.label}</p>
                <p className="text-xs text-[#8a9bbf] mt-0.5">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launching Soon */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-[#eff6ff] border border-[#bfdbfe] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7de9] animate-pulse" />
            <span className="text-xs font-semibold text-[#2b7de9] uppercase tracking-wider">Launching Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2d5a] mb-4">60+ Research-Grade Peptides</h2>
          <p className="text-lg text-[#4a5e8a] max-w-2xl mx-auto leading-relaxed">
            Third-party tested. Batch-specific CoA included. We're putting the finishing touches on something worth waiting for.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Verified Purity', desc: 'Every peptide tested by independent third-party labs. HPLC and mass spectrometry confirmed before release.' },
            { icon: Award, title: 'Batch-Specific CoA', desc: "Complete certificates of analysis for each production batch. Full transparency on what you're working with." },
            { icon: Microscope, title: '60+ Compounds', desc: 'An extensive catalog covering growth factors, metabolic research, recovery peptides, cognitive compounds, and more.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="bg-white rounded-2xl border border-[#e2e8f5] p-8 hover:shadow-lg hover:border-[#bfdbfe] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2b7de9] to-[#4fc3f7] flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-[#1a2d5a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a5e8a] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to={createPageUrl('Products')} className="inline-flex items-center gap-2 bg-[#1a2d5a] hover:bg-[#243666] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm shadow-lg">
            View Catalog Preview <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="mt-4 text-xs text-[#8a9bbf]">For Research Use Only · Not for Human Consumption</p>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#111e3c]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-medium text-[#4fc3f7] uppercase tracking-wider mb-2">About Genara Labs</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Committed to Research Excellence</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Genara Labs is a supplier of research-grade peptides intended for laboratory and scientific research purposes.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                All products offered by Genara Labs are intended strictly for laboratory research use only and are not approved for human consumption, medical, or therapeutic use.
              </p>
              <Link to={createPageUrl('About')} className="inline-flex items-center gap-2 text-sm font-semibold text-[#4fc3f7] hover:text-white transition-colors">
                Learn More About Our Lab <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-center">
              <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/008601940_GenaraLabsLogo-modified1.png" alt="Genara Labs" className="w-56 h-56 object-contain rounded-full shadow-xl shadow-[#2b7de9]/20" />
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