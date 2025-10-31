'use client';
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: {new Date().getFullYear()}
      </p>

      <p>
        This Privacy Policy explains how Xysync (“we”, “our”, “us”) collects, uses, stores and protects personal data when individuals use our website or services.
        Xysync is currently in the process of formal company registration. Once official company details (including Companies House registration number and ICO registration number)
        are issued, they will be added to this notice.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">1. Who We Are</h2>
      <p>
        Xysync is a developing digital health technology platform designed to provide users with secure access to health-related services including symptom checking,
        clinical communication, and medical data management. At this stage, we collect only minimal personal data (such as email addresses for early-access registration).
        We do <strong>not</strong> currently process medical or special category health data. If this changes, this policy will be updated prior to collection.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">2. Data We Collect</h2>
      <p>We currently collect only the following types of data:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Email address (for waitlist or contact enquiries)</li>
        <li>Any information voluntarily provided by the user when contacting us</li>
      </ul>
      <p className="mt-3">
        In the future, we may collect additional information such as account details, usage data, or medical information. Any expansion of data processing will be governed by an updated version of this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">3. Legal Basis for Processing</h2>
      <p>Under the UK GDPR, our lawful bases for processing personal data are:</p>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Consent</strong> – when a user joins a waitlist or requests contact</li>
        <li><strong>Legitimate Interest</strong> – maintaining site security and operation</li>
        <li><strong>Contract</strong> – if a user signs up for services in the future</li>
      </ul>
      <p className="mt-3">
        If we begin processing health data (“special category data”), we will rely on UK GDPR Article 9(2)(h) (healthcare provision) and will register with the ICO before doing so.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">4. Cookies & Analytics</h2>
      <p>
        Xysync may implement cookies, analytics tools, or similar tracking technologies in the future (for example Google Analytics or privacy-focused analytics providers).
        If and when these are introduced, users will be presented with a cookie banner and will have control over optional cookies.
      </p>
      <p className="mt-3">We will not use tracking cookies without consent.</p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">5. Data Storage & Security</h2>
      <p>
        Personal data may be stored on secure cloud infrastructure located in the UK, EU, or internationally. If data is stored outside the UK, it will be protected using
        UK GDPR-approved safeguards such as Standard Contractual Clauses (Article 46).
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">6. How Long We Keep Data</h2>
      <p>
        Email enquiries and waitlist data are retained only as long as necessary to operate the service or until a deletion request is received.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">7. Your Rights Under UK GDPR</h2>
      <p>You have the right to:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent at any time</li>
        <li>Request restriction or objection to processing</li>
        <li>Request data portability</li>
      </ul>
      <p className="mt-3">Requests may be made by email (see contact below).</p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">8. Third-Party Processors</h2>
      <p>
        We may use third-party service providers for hosting, analytics, email delivery, or security. All processors will be listed here once active.  
        We do not rent or sell personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">9. Contact & Data Protection Enquiries</h2>
      <p>
        For privacy enquiries or GDPR requests, you may contact us at:
      </p>
      <p className="font-medium mt-2">
        📩 <a href="mailto:sqwyofficial@gmail.com" className="underline">sqwyofficial@gmail.com</a>
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-3">10. Future Updates</h2>
      <p>
        This policy will be updated before Xysync begins handling medical or special category data, or upon company registration with Companies House and the ICO.
      </p>
    </main>
  );
}
