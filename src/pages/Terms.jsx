import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';
export default function Terms() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="March 1, 2026">
      <h2>1. Acceptance of Terms</h2><p>By accessing or using the Genara Labs website and purchasing products, you agree to be bound by these Terms of Service.</p>
      <h2>2. Products and Intended Use</h2><p>All products are intended <strong>strictly for laboratory and research purposes only</strong>. Not for human consumption. Not FDA approved.</p>
      <ul><li>You are at least 18 years of age.</li><li>You are purchasing for legitimate research purposes only.</li><li>You will not use products for human or animal consumption.</li><li>You are authorized to purchase research chemicals in your jurisdiction.</li></ul>
      <h2>3. Pricing and Payment</h2><p>All prices are in USD and subject to change. Payment is due at time of order.</p>
      <h2>4. Limitation of Liability</h2><p>Genara Labs shall not be liable for any indirect or consequential damages arising from use or misuse of our products.</p>
      <h2>5. Governing Law</h2><p>These terms are governed by the laws of the State of California.</p>
      <h2>6. Contact</h2><p>Questions may be directed to <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}