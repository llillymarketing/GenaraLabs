import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';

export default function Terms() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="March 1, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the Genara Labs website and purchasing products, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.</p>

      <h2>2. Products and Intended Use</h2>
      <p>All products sold by Genara Labs are intended <strong>strictly for laboratory and research purposes only</strong>. Products are not intended for human consumption, veterinary use, or as dietary supplements. Products have not been evaluated or approved by the U.S. Food and Drug Administration (FDA).</p>
      <p>By purchasing from Genara Labs, you confirm that:</p>
      <ul>
        <li>You are at least 18 years of age.</li>
        <li>You are purchasing for legitimate research purposes only.</li>
        <li>You will not use products for human or animal consumption.</li>
        <li>You understand that products are not FDA approved.</li>
        <li>You are authorized to purchase research chemicals in your jurisdiction.</li>
      </ul>

      <h2>3. Account and Orders</h2>
      <p>You may place orders as a guest or create an account. You are responsible for maintaining the accuracy of your information and for all activity under your account. We reserve the right to refuse or cancel any order at our discretion.</p>

      <h2>4. Pricing and Payment</h2>
      <p>All prices are listed in USD and are subject to change without notice. Payment is due at the time of order. We accept major credit cards and other payment methods as displayed at checkout.</p>

      <h2>5. Intellectual Property</h2>
      <p>All content on this website, including text, graphics, logos, and images, is the property of Genara Labs and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without our written consent.</p>

      <h2>6. Limitation of Liability</h2>
      <p>Genara Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or misuse of our products. Our total liability shall not exceed the amount paid for the product in question.</p>

      <h2>7. Indemnification</h2>
      <p>You agree to indemnify and hold Genara Labs harmless from any claims, damages, or expenses arising from your use or misuse of our products, violation of these terms, or violation of any applicable law.</p>

      <h2>8. Governing Law</h2>
      <p>These terms shall be governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Diego County, California.</p>

      <h2>9. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the modified terms.</p>

      <h2>10. Contact</h2>
      <p>Questions about these Terms of Service may be directed to <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}