import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs text-[#8a9bbf] py-2">
        <AlertTriangle className="w-3 h-3 text-amber-500 flex-shrink-0" />
        <span>For Research Use Only. Not for Human Consumption. Not FDA Approved.</span>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800 leading-relaxed">
          <p className="font-semibold mb-1">Research Use Only</p>
          <p>
            For Research Use Only. Not for Human Consumption. Not FDA Approved.
            Not a Dietary Supplement. These products have not been evaluated or
            approved by the FDA and are intended strictly for laboratory and
            research purposes.
          </p>
        </div>
      </div>
    </div>
  );
}