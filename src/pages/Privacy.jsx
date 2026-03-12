import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';
export default function Privacy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 1, 2026">
      <h2>1. Information We Collect</h2><p>We collect name, email, shipping address, and order information you provide directly.</p>
      <h2>2. How We Use Your Information</h2><p>To process orders, send confirmations, respond to inquiries, and comply with legal obligations.</p>
      <h2>3. Information Sharing</h2><p>We do not sell your data. We share only with shipping carriers, payment processors, and when required by law.</p>
      <h2>4. Data Security</h2><p>We implement industry-standard security measures including encryption and access controls.</p>
      <h2>5. Your Rights</h2><p>You may request access, correction, or deletion of your personal information.</p>
      <h2>6. Contact</h2><p>For privacy inquiries: <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}