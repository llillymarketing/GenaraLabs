import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111e3c] text-white">
      <div className="bg-[#0d1830] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs text-white/50 text-center">DISCLAIMER: All products sold by Genara Labs are for laboratory and research purposes only. Not for human consumption. Not FDA approved.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/c7cc28f45_GenaraLabsbackground.png" alt="Genara Labs" className="h-14 w-auto" style={{ mixBlendMode: 'screen' }} />
            <p className="mt-4 text-sm text-white/50 leading-relaxed">Laboratory-grade research peptides with verified purity and comprehensive certificates of analysis.</p>
            <a href="mailto:support@genaralabs.com" className="flex items-center gap-2 mt-4 text-sm text-white/50 hover:text-[#4fc3f7] transition-colors"><Mail className="w-4 h-4" />support@genaralabs.com</a>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><Link to={createPageUrl('Products')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">All Peptides</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to={createPageUrl('About')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">About the Lab</Link></li>
              <li><Link to={createPageUrl('Contact')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link to={createPageUrl('Terms')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Terms of Service</Link></li>
              <li><Link to={createPageUrl('Privacy')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Privacy Policy</Link></li>
              <li><Link to={createPageUrl('RefundPolicy')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Refund Policy</Link></li>
              <li><Link to={createPageUrl('ShippingPolicy')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Shipping Policy</Link></li>
              <li><Link to={createPageUrl('Disclaimer')} className="text-sm text-white/50 hover:text-[#4fc3f7] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Genara Labs. All rights reserved.</p>
          <p className="text-xs text-white/30">For Research Use Only · Not for Human Consumption · Not FDA Approved</p>
        </div>
      </div>
    </footer>
  );
}