import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';

export default function ShippingPolicy() {
  return (
    <LegalPageLayout title="Shipping Policy" lastUpdated="March 1, 2026">
      <h2>Processing Time</h2>
      <p>Orders are typically processed within 1-2 business days (Monday through Friday, excluding holidays). You will receive a confirmation email once your order has been shipped with tracking information.</p>

      <h2>Shipping Methods and Estimated Delivery</h2>
      <ul>
        <li><strong>Standard Shipping (US):</strong> 3-5 business days — $12.95 (Free on orders over $200)</li>
        <li><strong>Expedited Shipping (US):</strong> 1-2 business days — $24.95</li>
        <li><strong>International Shipping:</strong> 7-14 business days — Rates calculated at checkout</li>
      </ul>

      <h2>Packaging</h2>
      <p>All products are packaged in temperature-appropriate, discreet packaging to ensure product integrity during transit. Lyophilized peptides are shipped at ambient temperature in sealed, labeled vials.</p>

      <h2>Free Shipping</h2>
      <p>Free standard shipping is available on all domestic orders over $200 USD.</p>

      <h2>International Orders</h2>
      <p>We ship to select international destinations. International customers are responsible for any customs duties, import taxes, or additional fees imposed by their country. Genara Labs is not responsible for delays due to customs processing.</p>

      <h2>Order Tracking</h2>
      <p>Tracking information is provided via email once your order has shipped. You can track your package using the tracking number provided.</p>

      <h2>Lost or Delayed Packages</h2>
      <p>If your package appears lost or is significantly delayed, please contact us at <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>. We will work with the carrier to locate your package and resolve the issue.</p>

      <h2>Contact</h2>
      <p>For shipping inquiries, email <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}