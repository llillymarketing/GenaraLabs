import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ShieldCheck, Microscope, Award, Beaker, Users, Globe, ArrowRight } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function About() {
  const values = [
    { icon: ShieldCheck, title: 'Purity First', desc: 'Every product undergoes rigorous HPLC and Mass Spectrometry testing to ensure ≥98% purity before release.' },
    { icon: Award, title: 'Full Transparency', desc: 'Comprehensive Certificates of Analysis are provided with every product, documenting purity, identity, and quality metrics.' },
    { icon: Microscope, title: 'Scientific Rigor', desc: 'Our synthesis protocols follow peer-reviewed methodologies, maintaining consistency across every batch.' },
    { icon: Beaker, title: 'Research Focus', desc: 'We serve the scientific community exclusively, providing laboratory-grade compounds for in-vitro research applications.' },
    { icon: Users, title: 'Expert Team', desc: 'Our team of peptide chemists and QA specialists brings decades of combined experience in peptide synthesis.' },
    { icon: Globe, title: 'Trusted Globally', desc: 'Researchers and institutions worldwide rely on Genara Labs for consistent, high-purity research peptides.' },
  ];

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <section className="bg-[#111e3c] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-xs font-medium text-[#4fc3f7] uppercase tracking-wider mb-2">About the Lab</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">Advancing Research<br />Through Quality</h1>
              <p className="text-white/60 leading-relaxed mb-4">Genara Labs is a supplier of research-grade peptides intended for laboratory and scientific research purposes.</p>
              <p className="text-white/60 leading-relaxed mb-4">Each product is accompanied by batch-specific analytical verification, including Certificates of Analysis.</p>
              <p className="text-white/60 leading-relaxed">All products are intended strictly for laboratory research use only and are not approved for human consumption.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center">
              <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/8a7da44ac_GenaraLabsLogo-modified.png" alt="Genara Labs" className="w-56 h-56 object-contain rounded-full shadow-xl shadow-[#2b7de9]/20" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-[#2b7de9] uppercase tracking-wider mb-2">Our Commitment</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2d5a]">Why Researchers Choose Genara Labs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl border border-[#e2e8f5] p-6 hover:shadow-md hover:border-[#bfdbfe] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2b7de9] to-[#4fc3f7] flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-[#1a2d5a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#4a5e8a] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#e2e8f5]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-[#2b7de9] uppercase tracking-wider mb-2">Quality Control</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2d5a]">Our Quality Assurance Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Synthesis', desc: 'Advanced SPPS techniques for precise peptide assembly' },
              { step: '02', title: 'Purification', desc: 'Preparative HPLC purification to achieve target purity' },
              { step: '03', title: 'Analysis', desc: 'Independent HPLC, MS, and amino acid analysis verification' },
              { step: '04', title: 'Certification', desc: 'Comprehensive COA documentation for every batch' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center">
                <div className="text-4xl font-bold text-[#2b7de9]/15 mb-3">{item.step}</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#2b7de9] to-[#4fc3f7] mx-auto mb-3 rounded" />
                <h3 className="text-sm font-semibold text-[#1a2d5a] mb-2">{item.title}</h3>
                <p className="text-xs text-[#8a9bbf] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12"><DisclaimerBanner /></div>
    </div>
  );
}