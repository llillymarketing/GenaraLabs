import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { FlaskConical, ShieldCheck, Award, Microscope, ArrowRight, Clock } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

const PEPTIDE_CATEGORIES = [
  'Growth Factors', 'Metabolic', 'Recovery & Repair', 'Cognitive', 
  'Antimicrobial', 'Anti-Aging', 'Hormonal', 'Immune Support',
];

const SAMPLE_PEPTIDES = [
  'BPC-157', 'TB-500', 'GHK-Cu', 'Selank', 'Semax', 'Epithalon',
  'CJC-1295', 'Ipamorelin', 'GHRP-2', 'GHRP-6', 'Hexarelin', 'MGF',
  'LL-37', 'Thymosin Alpha-1', 'Follistatin 344', 'GDF-11',
  'AOD-9604', 'Fragment 176-191', 'MOTS-c', 'Humanin',
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#eff6ff] border border-[#bfdbfe] rounded-full px-5 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#2b7de9] animate-pulse" />
            <span className="text-sm font-semibold text-[#2b7de9] uppercase tracking-wider">Launching Soon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a2d5a] mb-4"
          >
            60+ Research-Grade Peptides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4a5e8a] max-w-2xl mx-auto leading-relaxed mb-3"
          >
            Third-party tested. Batch-specific CoA included. We're putting the finishing touches on something worth waiting for.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-medium text-[#8a9bbf]"
          >
            For Research Use Only · Not for Human Consumption
          </motion.p>
        </div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: ShieldCheck, title: 'Third-Party Tested', desc: 'Every compound independently verified for purity and identity before release.' },
            { icon: Award, title: 'Batch-Specific CoA', desc: 'Complete certificates of analysis for each production batch — full transparency.' },
            { icon: Microscope, title: '≥98% Purity', desc: 'HPLC and mass spectrometry confirmed. Research-grade quality you can trust.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#e2e8f5] p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b7de9] to-[#4fc3f7] flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a2d5a] mb-1">{item.title}</h3>
                <p className="text-sm text-[#4a5e8a] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Categories Preview */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-[#1a2d5a] mb-6">Research Categories</h2>
          <div className="flex flex-wrap gap-3">
            {PEPTIDE_CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-white border border-[#e2e8f5] rounded-full px-4 py-2"
              >
                <FlaskConical className="w-3.5 h-3.5 text-[#2b7de9]" />
                <span className="text-sm font-medium text-[#1a2d5a]">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Peptide Grid — Blurred Coming Soon */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#1a2d5a]">Upcoming Peptides</h2>
            <div className="flex items-center gap-2 text-sm text-[#8a9bbf]">
              <Clock className="w-4 h-4" />
              <span>Coming Soon</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl border border-[#e2e8f5]">
              <img
                src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/8a7da44ac_GenaraLabsLogo-modified.png"
                alt="Genara Labs"
                className="w-20 h-20 object-contain rounded-full mb-4 shadow-lg shadow-[#2b7de9]/20"
              />
              <div className="inline-flex items-center gap-2 bg-[#1a2d5a] rounded-full px-5 py-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#4fc3f7] animate-pulse" />
                <span className="text-sm font-semibold text-white">Launching Soon</span>
              </div>
              <p className="text-sm text-[#4a5e8a] text-center max-w-xs">
                We're finalizing our full catalog. <br />Check back soon.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 blur-sm pointer-events-none select-none" aria-hidden>
              {SAMPLE_PEPTIDES.map((name, i) => (
                <div key={i} className="bg-white border border-[#e2e8f5] rounded-xl p-4">
                  <div className="aspect-square bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-lg mb-3 flex items-center justify-center">
                    <FlaskConical className="w-8 h-8 text-[#2b7de9]/40" />
                  </div>
                  <div className="h-3.5 bg-[#e2e8f5] rounded mb-1.5" />
                  <div className="h-3 bg-[#f0f4fd] rounded w-3/4 mb-3" />
                  <div className="h-5 bg-[#e2e8f5] rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#111e3c] rounded-2xl p-10 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Want to be notified at launch?</h3>
          <p className="text-white/60 mb-6 text-sm">
            Contact us and we'll let you know when our full catalog goes live.
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] text-white font-semibold px-7 py-3 rounded-xl transition-all text-sm shadow-lg shadow-[#2b7de9]/30"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}