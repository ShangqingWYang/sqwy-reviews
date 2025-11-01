"use client";

import React, { useState } from "react";
import PhoenixHero from "../../components/PhoenixHero";
import Footer from "../../components/Footer";
import AnatomyViewer from "../../components/AnatomyViewer"; // ✅ NEW IMPORT

interface PricingPlan {
  title: string;
  perks: string[];
  primary?: boolean;
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      window.location.href = `mailto:sqwyofficial@gmail.com?subject=Join Early Access&body=Please add me to the waitlist: ${email}`;
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const pricingPlans: PricingPlan[] = [
    {
      title: "Personal Health",
      perks: [
        "Track all your appointments & prescriptions",
        "Organ health dashboard (eyes, teeth, heart, etc.)",
        "Diagnostic history & reminders",
        "Symptom and medication timeline",
      ],
    },
    {
      title: "Clinical Pro",
      primary: true,
      perks: [
        "All Personal Health features",
        "Patient record integration & AI triage",
        "Unified inbox for messages, labs, referrals",
        "Clinical note templates and workflows",
      ],
    },
    {
      title: "Xysync Ultimate",
      perks: [
        "All features unlocked",
        "Advanced analytics & research mode",
        "API and 3rd-party integrations",
        "Future hardware & wearable sync",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            XY
          </div>
          <div className="font-semibold text-lg">Xysync</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#how" className="hover:underline">
            How It Works
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow"
          >
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* HERO */}
      <PhoenixHero>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
          One Application for All Your{" "}
          <span className="text-yellow-400">Healthcare Needs</span>
        </h1>
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
          Xysync connects AI triage, real clinicians, prescriptions, monitoring,
          and medical records — all in one secure platform. No phone queues. No
          forms. No waiting rooms.
          <br />
          <br />
          Join thousands already receiving faster, smarter digital healthcare.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email to join the waitlist"
            className="px-4 py-3 rounded-md border w-72"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-black rounded-md shadow font-medium hover:bg-yellow-400 transition"
          >
            In Development
          </button>
        </form>

        {status === "sent" && (
          <p className="mt-3 text-green-400 font-medium">
            You're on the list! Check your inbox.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 text-red-400 font-medium">
            Something went wrong. Please try again.
          </p>
        )}
      </PhoenixHero>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            1. One Place for all Symptoms
          </h3>
          <p className="text-gray-600 text-sm">
            Keep track of all your healthcare requirements with one simple
            anatomical interface
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            2. Reducing NHS Wait Times
          </h3>
          <p className="text-gray-600 text-sm">
            Allowing practitioners to better integrate information and speed up
            practice, helping more patients per unit time
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            3. Promoting Personal Health Understanding
          </h3>
          <p className="text-gray-600 text-sm">
            Medication, appointments, results, symptom history — all in one app,
            for personal use. We believe everyone deserves full knowledge of
            their healthcare requirements. As conditions build up with age, it
            can be harder and harder to track them all.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Care Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl shadow-2xl transition-transform duration-500 ${
                  plan.primary
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)]"
                    : "bg-white text-gray-900 hover:scale-105 hover:shadow-lg"
                }`}
              >
                {plan.primary && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold text-xs shadow-lg animate-pulse z-10">
                    Price Being Decided
                  </div>
                )}

                <div className="text-2xl font-extrabold tracking-tight">
                  {plan.title}
                </div>

                <div className="mt-4 text-4xl font-bold">TBD</div>

                <ul className="mt-6 space-y-3 text-sm md:text-base">
                  {plan.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-yellow-400 font-bold animate-pulse">
                        🔥
                      </span>{" "}
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.primary
                        ? "bg-white text-indigo-700 hover:bg-yellow-400 hover:text-black shadow-lg"
                        : "border border-gray-300 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                  >
                    For Inquiries
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FEATURES */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Your Health, Visualised</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Xysync introduces the first patient dashboard built around a
            real-time, interactive 3D human body. Click any body part to access
            prescriptions, appointments, symptoms, AI insights, and care plans.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                ✅ Prescription Linked Anatomy
              </h3>
              <p className="text-gray-600 text-sm">
                Tap the eyes, lungs, joints — anywhere — and instantly see
                active medications, renewal dates, and dosage reminders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                🧠 AI Symptom Intelligence
              </h3>
              <p className="text-gray-600 text-sm">
                The 3D model highlights areas affected by recent symptoms,
                helping you understand patterns and when to seek help.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                📅 Auto-Synced Appointments
              </h3>
              <p className="text-gray-600 text-sm">
                Click any organ or condition to view past consultations, next
                check-ups, and overdue screenings — all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D ANATOMY PANEL */}
      <section className="bg-white py-28 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore the Human Body in 3D
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Rotate, zoom, and analyse the full human anatomy — completely
            interactive and ready for patient-linked data.
          </p>

          {/* ✅ REPLACED SPINNER WITH WORKING 3D VIEWER */}
          <AnatomyViewer />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
