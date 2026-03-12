import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';
export default function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="March 1, 2026">
      <h2>Eligibility for Refunds</h2>
      <ul>
        <li><strong>Damaged in Transit:</strong> Contact us within 48 hours with photos.</li>
        <li><strong>Incorrect Product:</strong> We will replace or issue a full refund.</li>
        <li><strong>Quality Concerns:</strong> Contact us for resolution.</li>
      </ul>
      <h2>Non-Refundable</h2>
      <ul><li>Change of mind after shipment.</li><li>Opened or tampered products.</li><li>Incorrect shipping info provided by customer.</li></ul>
      <h2>Refund Process</h2>
      <ol>
        <li>Email <a href="mailto:support@genaralabs.com">support@genaralabs.com</a> within 48 hours.</li>
        <li>Include order number, description, and photos.</li>
        <li>Approved refunds processed within 5-10 business days.</li>
      </ol>
      <h2>Contact</h2><p><a href="mailto:support@genaralabs.com">support@genaralabs.com</a></p>
    </LegalPageLayout>
  );
}