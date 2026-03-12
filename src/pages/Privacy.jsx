import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';

export default function Privacy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 1, 2026">
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly, including:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, shipping address.</li>
        <li><strong>Payment Information:</strong> Payment details are processed securely through our payment processor and are not stored on our servers.</li>
        <li><strong>Order Information:</strong> Products purchased, order history, and transaction details.</li>
        <li><strong>Communications:</strong> Messages, inquiries, or support requests you send us.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Process and fulfill your orders.</li>
        <li>Send order confirmations and shipping updates.</li>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Improve our website and product offerings.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not sell, trade, or rent your personal information. We may share information with:</p>
      <ul>
        <li>Shipping carriers to deliver your orders.</li>
        <li>Payment processors to complete transactions.</li>
        <li>Law enforcement when required by law.</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.</p>

      <h2>5. Cookies</h2>
      <p>Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You may disable cookies in your browser settings.</p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access, correct, or delete your personal information.</li>
        <li>Opt out of marketing communications.</li>
        <li>Request a copy of your data.</li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

      <h2>8. Children's Privacy</h2>
      <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.</p>

      <h2>10. Contact</h2>
      <p>For privacy-related inquiries, contact us at <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}