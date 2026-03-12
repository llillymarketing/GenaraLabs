import React, { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import DisclaimerBanner from '../components/shared/DisclaimerBanner';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  const inputClass = "w-full bg-white border border-[#e2e8f5] rounded-xl px-4 py-3 text-sm text-[#1a2d5a] placeholder:text-[#8a9bbf] focus:outline-none focus:border-[#2b7de9] focus:ring-2 focus:ring-[#2b7de9]/10 transition-colors";

  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 pt-8">
          <p className="text-xs font-medium text-[#2b7de9] uppercase tracking-wider mb-2">Get in Touch</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2d5a]">Contact Us</h1>
          <p className="mt-2 text-[#4a5e8a] max-w-lg">Have questions about our products or need assistance? Our team is here to help.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'support@genaralabs.com', href: 'mailto:support@genaralabs.com' },
              { icon: Clock, label: 'Hours', value: 'Mon–Fri 9AM–5PM PST', href: null },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e2e8f5] p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b7de9] to-[#4fc3f7] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#8a9bbf] mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-[#1a2d5a] hover:text-[#2b7de9] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-[#1a2d5a]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#e2e8f5] p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className={inputClass} />
                <input name="email" type="email" required placeholder="Email address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className={inputClass} />
              </div>
              <input name="subject" required placeholder="Subject" value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} className={inputClass} />
              <textarea name="message" required rows={6} placeholder="Your message..." value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className={inputClass + ' resize-none'} />
              <button
                type="submit"
                disabled={sending}
                className="flex items-center gap-2 bg-[#2b7de9] hover:bg-[#3b8ef0] disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm shadow-md shadow-[#2b7de9]/20"
              >
                {sending ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <DisclaimerBanner />
        </div>
      </div>
    </div>
  );
}