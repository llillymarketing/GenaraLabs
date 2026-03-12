import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';

export default function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="March 1, 2026">
      <h2>Return and Refund Overview</h2>
      <p>At Genara Labs, we stand behind the quality of our products. Due to the nature of research compounds, we have specific guidelines regarding returns and refunds to maintain product integrity and safety.</p>

      <h2>Eligibility for Refunds</h2>
      <p>Refunds may be issued under the following circumstances:</p>
      <ul>
        <li><strong>Damaged in Transit:</strong> If your order arrives damaged, contact us within 48 hours of delivery with photographs of the damage.</li>
        <li><strong>Incorrect Product:</strong> If you receive a product that does not match your order, we will replace it or issue a full refund.</li>
        <li><strong>Quality Concerns:</strong> If a product does not meet the specifications listed on the Certificate of Analysis, contact us for resolution.</li>
      </ul>

      <h2>Non-Refundable Situations</h2>
      <ul>
        <li>Change of mind after order has shipped.</li>
        <li>Products that have been opened or tampered with.</li>
        <li>Orders where incorrect shipping information was provided by the customer.</li>
        <li>Products that have been improperly stored after delivery.</li>
      </ul>

      <h2>Refund Process</h2>
      <p>To request a refund:</p>
      <ol>
        <li>Email <a href="mailto:support@genaralabs.com">support@genaralabs.com</a> within 48 hours of receiving your order.</li>
        <li>Include your order number, a description of the issue, and any supporting photographs.</li>
        <li>Our team will review your request and respond within 2 business days.</li>
        <li>Approved refunds will be processed to the original payment method within 5-10 business days.</li>
      </ol>

      <h2>Cancellations</h2>
      <p>Orders may be cancelled before they are shipped. Once an order has been dispatched, it cannot be cancelled and must follow the return process outlined above.</p>

      <h2>Contact</h2>
      <p>For refund inquiries, email <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}