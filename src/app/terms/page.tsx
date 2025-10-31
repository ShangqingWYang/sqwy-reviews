'use client';
import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Terms of Service Agreement</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().getFullYear()}
      </p>

      <p className="italic mb-6">
        This Terms of Service Agreement (“Agreement”) constitutes a legally binding contract between:
        <br /><br />
        <strong>Xysync</strong> (“the Provider”, “we”, “us”, “our”), a trading name used by an organisation currently in formation, and
        <br />
        <strong>the User</strong> (“you”, “your”), being any individual or entity accessing or using the Service.
        <br /><br />
        Formal company registration details will be added to this Agreement once available.
      </p>

      {/* 1. Definitions */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">1. Definitions</h2>
      <p>For the purposes of this Agreement:</p>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>“Service”</strong> means the digital platform, website, software, mobile applications, and related services provided by Xysync.</li>
        <li><strong>“User”</strong> means any individual or entity accessing or using the Service.</li>
        <li><strong>“Customer”</strong> means a User who purchases or subscribes to any paid feature or plan offered by the Service.</li>
        <li><strong>“Professional User”</strong> means a User accessing the Service in a clinical, medical, commercial, or organisational capacity (e.g., a clinician, healthcare provider, or representative of a medical institution).</li>
        <li><strong>“Account”</strong> means a registered user profile created to access the Service.</li>
        <li><strong>“Agreement”</strong> means these Terms of Service, as amended from time to time.</li>
      </ul>

      {/* 2. Formation of Agreement */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">2. Formation of Agreement</h2>
      <p>
        By accessing, using, or creating an Account on the Service, you acknowledge that you have read, understood, and agree to be legally bound by this Agreement.
        If you do not agree, you must not use the Service.
      </p>

      {/* 3. Eligibility & Accounts */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">3. Eligibility and Account Registration</h2>
      <p>(a) Users must be at least 16 years of age to use the Service. Users under 18 must have parental consent.</p>
      <p>(b) You agree that all information provided during registration is accurate and kept up to date.</p>
      <p>(c) You are responsible for maintaining the confidentiality of your login details and for all activity under your Account.</p>
      <p>(d) We reserve the right to refuse, suspend, or terminate any Account at our sole discretion where we believe a breach of this Agreement has occurred.</p>

      {/* 4. Professional User Obligations */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">4. Professional User Obligations</h2>
      <p>(a) A Professional User represents and warrants that they are appropriately qualified, registered, or licensed to provide healthcare or related services within their jurisdiction.</p>
      <p>(b) Professional Users remain solely responsible for any clinical decisions, professional judgments, diagnoses, advice, or services they provide.</p>
      <p>(c) Xysync is not a healthcare provider and does not assume any duty of care owed by a Professional User to any third party.</p>
      <p>(d) Professional Users agree not to upload, store, or process patient-identifiable data except in accordance with applicable law, including the UK GDPR and the Data Protection Act 2018.</p>
      <p>(e) Xysync is not currently an approved NHS supplier. Any future use within NHS environments will require separate agreements, validation, and compliance with NHS Digital and DSPT standards.</p>

      {/* 5. Patient / Consumer User Rules */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">5. Patient and Consumer User Obligations</h2>
      <p>(a) Users acknowledge that Xysync does not currently provide medical advice, diagnosis, or treatment.</p>
      <p>(b) Information provided via the Service is supplementary only and must not be relied upon as a substitute for professional medical consultation.</p>
      <p>(c) Users must not submit false, misleading, or fraudulent information when interacting with the Service.</p>

      {/* 6. Acceptable Use */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">6. Acceptable Use Policy</h2>
      <p>You agree that you will not, whether directly or indirectly:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Use the Service for unlawful, abusive, or fraudulent purposes;</li>
        <li>Attempt to access data or systems without authorisation;</li>
        <li>Copy, reverse-engineer, resell, or reproduce any part of the Service except where permitted by law;</li>
        <li>Interfere with or disrupt the integrity, security, or performance of the Service;</li>
        <li>Use the Service to transmit harmful code, spam, or automated scraping;</li>
        <li>Impersonate any person, organisation, or healthcare authority.</li>
      </ul>

      {/* 7. Fees, Paid Plans, Billing */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">7. Fees, Paid Plans, and Billing</h2>
      <p>(a) Certain features of the Service may require payment of a subscription fee or other charges. Users will be notified of pricing prior to purchase.</p>
      <p>(b) By becoming a Customer, you authorise us or our payment processor to charge the stated amount at the agreed billing interval.</p>
      <p>(c) All fees are stated in GBP unless otherwise specified and are inclusive or exclusive of VAT as indicated.</p>
      <p>(d) Customers have the right to cancel paid subscriptions in accordance with the Consumer Contracts Regulations 2013 and will be informed of cancellation rights at the time of purchase.</p>
      <p>(e) We reserve the right to modify pricing upon reasonable notice. Continued use after the notice period constitutes acceptance of the new pricing.</p>

      {/* 8. Cancellations & Refunds */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">8. Cancellations and Refunds</h2>
      <p>(a) Customers may cancel a paid subscription at any time via the account settings or by written notice to the contact in Section 17. Cancellation takes effect at the end of the then-current billing period unless otherwise stated at point of purchase.</p>
      <p>(b) Where the Consumer Contracts Regulations 2013 apply, a 14-day cooling-off period may apply. Use of the Service during that period may waive cancellation rights.</p>
      <p>(c) Refunds, where granted, are made to the original payment method and may be pro-rated. Nothing in this Agreement limits statutory consumer rights.</p>

      {/* 9. Service Availability & Changes */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">9. Service Availability and Changes</h2>
      <p>(a) The Service is provided on an “as available” basis. We do not guarantee uninterrupted access.</p>
      <p>(b) We may modify, suspend, or discontinue any part of the Service upon reasonable notice where practicable.</p>

      {/* 10. Suspension & Termination */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">10. Suspension and Termination</h2>
      <p>(a) We may suspend or terminate access immediately where a User breaches this Agreement, engages in unlawful activity, or where required to comply with law.</p>
      <p>(b) On termination, the User must cease use of the Service. Clauses intended to survive termination shall do so.</p>

      {/* 11. No Medical Advice */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">11. No Medical Advice</h2>
      <p>(a) Xysync does not currently provide medical advice, diagnosis, or treatment. All information offered is general in nature.</p>
      <p>(b) Professional Users remain solely responsible for clinical decisions and legal duties of care.</p>

      {/* 12. Intellectual Property */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">12. Intellectual Property</h2>
      <p>(a) All intellectual property in the Service is owned by or licensed to Xysync. A limited, revocable licence is granted for permitted use only.</p>
      <p>(b) Users must not copy, modify, or reverse-engineer the Service except where permitted by law.</p>

      {/* 13. Data Protection & Privacy */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">13. Data Protection and Privacy</h2>
      <p>(a) Personal data is processed in accordance with our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
      <p>(b) We do not currently process special category (health) data. If this changes, we will notify Users and update our policies accordingly.</p>

      {/* 14. Third-Party Services & NHS Disclaimer */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">14. Third-Party Services and NHS Use</h2>
      <p>(a) The Service may integrate with third-party services. Use of such services is subject to their respective terms.</p>
      <p>(b) <strong>NHS Disclaimer:</strong> Xysync is not currently an approved NHS supplier. Any future NHS use will require separate agreements and compliance with NHS Digital and DSPT standards.</p>

      {/* 15. Limitation of Liability */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">15. Limitation of Liability</h2>
      <p>(a) Nothing in this Agreement limits liability for death or personal injury caused by negligence, fraud, or any liability which cannot be excluded by law.</p>
      <p>(b) Subject to Section 15(a), we shall not be liable for indirect, consequential, or economic loss including loss of profits, business, or data.</p>
      <p>(c) Subject to Section 15(a), our total liability to any User shall not exceed: (i) the total fees paid in the prior 12 months for Customers; or (ii) £100 for Users on free plans.</p>

      {/* 16. Governing Law */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">16. Governing Law and Jurisdiction</h2>
      <p>
        This Agreement and any dispute arising from it shall be governed by the laws of England and Wales. The courts of England and Wales have exclusive jurisdiction.
      </p>

      {/* 17. Changes & Contact */}
      <h2 className="text-2xl font-semibold mt-10 mb-3">17. Changes to this Agreement; Notices and Contact</h2>
      <p>(a) We may amend this Agreement from time to time. Material changes will be notified in advance. Continued use constitutes acceptance.</p>
      <p>(b) Notices may be delivered electronically.</p>
      <p>(c) Contact for legal matters: <a href="mailto:sqwyofficial@gmail.com" className="underline">sqwyofficial@gmail.com</a></p>
    </main>
  );
}
