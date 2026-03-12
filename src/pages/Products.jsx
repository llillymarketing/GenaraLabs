import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { FlaskConical, ShieldCheck, Award, Microscope, ArrowRight, Clock } from 'lucide-react';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

const PEPTIDE_CATEGORIES = ['Growth Factors','Metabolic','Recovery & Repair','Cognitive','Antimicrobial','Anti-Aging','Hormonal','Immune Support'];
const SAMPLE_PEPTIDES = ['BPC-157','TB-500','GHK-Cu','Selank','Semax','Epithalon','CJC-1295','Ipamorelin','GHRP-2','GHRP-6','Hexarelin','MGF','LL-37','Thymosin Alpha-1','Follistatin 344','GDF-11','AOD-9604','Fragment 176-191','MOTS-c','Humanin'];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2d5a] mb-4">60+ Research-Grade Peptides</h1>
          <p className="text-sm font-medium text-[#8a9bbf]">For Research Use Only · Not for Human Consumption</p>
        </div>
        <div className="mt-12"><DisclaimerBanner /></div>
      </div>
    </div>
  );
}