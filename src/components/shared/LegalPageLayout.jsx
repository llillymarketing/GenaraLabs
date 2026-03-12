import React from 'react';

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-[#f8faff] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 pb-8 border-b border-[#e2e8f5]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2d5a]">{title}</h1>
          {lastUpdated && (
            <p className="mt-2 text-sm text-[#8a9bbf]">Last Updated: {lastUpdated}</p>
          )}
        </div>
        <div className="prose prose-sm max-w-none
          prose-headings:text-[#1a2d5a] prose-headings:font-semibold
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[#4a5e8a] prose-p:leading-relaxed
          prose-li:text-[#4a5e8a]
          prose-strong:text-[#1a2d5a]
          prose-a:text-[#2b7de9] prose-a:no-underline hover:prose-a:underline
        ">
          {children}
        </div>
      </div>
    </div>
  );
}