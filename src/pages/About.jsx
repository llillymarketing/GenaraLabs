import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Microscope, Award, Beaker, Users, Globe } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function About() {
  const values = [
    { icon: ShieldCheck, title: 'Purity First', desc: 'Every product undergoes rigorous HPLC and Mass Spectrometry testing to ensure ≥98% purity.' },
    { icon: Award, title: 'Full Transparency', desc: 'Comprehensive COA provided with every product.' },
    { icon: Microscope, title: 'Scientific Rigor', desc: 'Synthesis protocols follow peer-reviewed methodologies.' },
    { icon: Beaker, title: 'Research Focus', desc: 'Laboratory-grade compounds for in-vitro research applications.' },
    { icon: Users, title: 'Expert Team', desc: 'Decades of combined experience in peptide synthesis.' },
    { icon: Globe, title: 'Trusted Globally', desc: 'Researchers worldwide rely on Genara Labs.' },
  ];
  return (
    <div className="min-h-screen bg-[#f8faff]">
      <section className="bg-[#111e3c] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Advancing Research Through Quality</h1>
          <p className="text-white/60 mt-4 leading-relaxed max-w-2xl">Genara Labs is a supplier of research-grade peptides for laboratory and scientific research.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-12"><DisclaimerBanner /></div>
    </div>
  );
}