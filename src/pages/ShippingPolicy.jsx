import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';
export default function ShippingPolicy() {
  return (
    <LegalPageLayout title="Shipping Policy" lastUpdated="March 1, 2026">
      <h2>Processing Time</h2><p>Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking once shipped.</p>
      <h2>Shipping Methods</h2>
      <ul>
        <li><strong>Standard (US):</strong> 3-5 business days — $12.95 (Free over $200)</li>
        <li><strong>Expedited (US):</strong> 1-2 business days — $24.95</li>
        <li><strong>International:</strong> 7-14 business days — calculated at checkout</li>
      </ul>
      <h2>Free Shipping</h2><p>Free standard shipping on all US orders over $200.</p>
      <h2>International Orders</h2><p>Customers are responsible for customs duties and import taxes.</p>
      <h2>Contact</h2><p><a href="mailto:support@genaralabs.com">support@genaralabs.com</a></p>
    </LegalPageLayout>
  );
}