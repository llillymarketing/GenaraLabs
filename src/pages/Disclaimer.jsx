import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';
export default function Disclaimer() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated="March 1, 2026">
      <h2>Research Use Only</h2><p><strong>For Research Use Only. Not for Human Consumption. Not FDA Approved. Not a Dietary Supplement.</strong></p>
      <p>All products are intended strictly for laboratory and research purposes only.</p>
      <h2>No Medical Claims</h2><p>Genara Labs makes no claims regarding therapeutic, diagnostic, or medical efficacy of any product.</p>
      <h2>FDA Disclaimer</h2><p>These products have not been evaluated or approved by the U.S. Food and Drug Administration.</p>
      <h2>Purchaser Responsibility</h2>
      <ul><li>You are a qualified researcher purchasing for in-vitro research only.</li><li>You will not administer products to humans or animals.</li><li>You are responsible for compliance with all applicable laws.</li></ul>
      <h2>Age Restriction</h2><p>You must be at least 18 years of age to purchase.</p>
      <h2>Contact</h2><p><a href="mailto:support@genaralabs.com">support@genaralabs.com</a></p>
    </LegalPageLayout>
  );
}