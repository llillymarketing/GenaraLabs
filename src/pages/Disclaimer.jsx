import React from 'react';
import LegalPageLayout from '../components/shared/LegalPageLayout';

export default function Disclaimer() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated="March 1, 2026">
      <h2>Research Use Only</h2>
      <p><strong>For Research Use Only. Not for Human Consumption. Not FDA Approved. Not a Dietary Supplement.</strong></p>
      <p>All products sold by Genara Labs are intended strictly for laboratory and research purposes only. These products are not intended for human consumption, veterinary use, household use, or any diagnostic or therapeutic purpose.</p>

      <h2>No Medical Claims</h2>
      <p>Genara Labs makes no claims regarding the therapeutic, diagnostic, or medical efficacy of any product. We do not suggest, imply, or claim that any product is intended to treat, cure, prevent, or diagnose any disease or medical condition.</p>
      <p>Product descriptions and information provided on this website are for educational and informational purposes only, based on published scientific literature. This information does not constitute medical advice and should not be interpreted as such.</p>

      <h2>FDA Disclaimer</h2>
      <p>These products have not been evaluated or approved by the U.S. Food and Drug Administration (FDA). They are not manufactured under cGMP conditions required for products intended for human consumption. Our products are manufactured under quality control standards appropriate for research-grade compounds.</p>

      <h2>Purchaser Responsibility</h2>
      <p>By purchasing from Genara Labs, you acknowledge and agree that:</p>
      <ul>
        <li>You are a qualified researcher or are purchasing on behalf of a research institution.</li>
        <li>Products will be used solely for in-vitro research and laboratory experimentation.</li>
        <li>You will not administer, ingest, inject, or otherwise apply products to humans or animals.</li>
        <li>You will handle all products in accordance with appropriate safety protocols and applicable regulations.</li>
        <li>You are solely responsible for compliance with all local, state, federal, and international laws regarding the purchase, possession, and use of research compounds.</li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>Genara Labs, its officers, directors, employees, and affiliates shall not be held liable for any injuries, damages, claims, or losses resulting from the misuse of any product purchased from our website.</p>

      <h2>Age Restriction</h2>
      <p>You must be at least 18 years of age to purchase from Genara Labs. By placing an order, you confirm that you meet this age requirement.</p>

      <h2>Contact</h2>
      <p>If you have questions about this disclaimer, contact us at <a href="mailto:support@genaralabs.com">support@genaralabs.com</a>.</p>
    </LegalPageLayout>
  );
}