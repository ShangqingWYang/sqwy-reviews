'use client';
import React, { useState } from 'react';
import PhoenixHero from '../../components/PhoenixHero';

interface PricingPlan {
  title: string;
  perks: string[];
  primary?: boolean;
}

export default function Page() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      window.location.href = `mailto:sqwyofficial@gmail.com?subject=Free Personal Statement Guide&body=Please send the free guide to: ${email}`;
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const pricingPlans: PricingPlan[] = [
    { title: 'Basic', perks: ['1 Review', 'Basic Feedback', 'Email Support'] },
    { title: 'Pro', perks: ['3 Reviews', 'Detailed Feedback', 'Priority Email Support'], primary: true },
    { title: 'Elite', perks: ['Unlimited Reviews', 'Line-by-Line Feedback', '1-on-1 Consultation'] },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">PS</div>
          <div className="font-semibold text-lg">Personal Statement Reviews</div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#how" className="hover:underline">How It Works</a>
          <a href="#reviews" className="hover:underline">Testimonials</a>
          <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow">Get Feedback</a>
        </nav>
      </header>

      {/* HERO */}
      <PhoenixHero>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
          Transform Your <span className="text-yellow-400">Personal Statement</span> Into Perfection
        </h1>
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto drop-shadow">
          SY is a 5th year Cambridge University Medical Student (Gonville and Caius), who will be working with a team of reviewers at Cambridge University.<br /><br />
          Get a free rating of your review by emailing SQWYofficial@gmail.com. He has helped numerous students craft compelling, successful applications.
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
            placeholder="Enter your email for a free guide"
            className="px-4 py-3 rounded-md border w-72"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-black rounded-md shadow font-medium hover:bg-yellow-400 transition"
          >
            Send Me The Guide
          </button>
        </form>

        {status === 'sent' && (
          <p className="mt-3 text-green-400 font-medium">Thanks! Check your email inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-red-400 font-medium">Something went wrong. Please try again.</p>
        )}
      </PhoenixHero>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">1. Submit Your Statement</h3>
          <p className="text-gray-600 text-sm">Upload your personal statement for a detailed review within 48 hours.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">2. Receive Expert Feedback</h3>
          <p className="text-gray-600 text-sm">Get line-by-line comments and improvement suggestions from an experienced reviewer.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">3. Perfect & Submit</h3>
          <p className="text-gray-600 text-sm">Polish your final draft with confidence before sending it to universities or employers.</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`
                  relative p-8 rounded-2xl shadow-2xl transition-transform duration-500
                  ${plan.primary
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)]'
                    : 'bg-white text-gray-900 hover:scale-105 hover:shadow-lg'
                  }
                `}
              >
                {plan.primary && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold text-xs shadow-lg animate-pulse z-10">
                    Popular
                  </div>
                )}
                <div className="text-2xl font-extrabold tracking-tight">{plan.title}</div>
                <div className="mt-4 text-4xl font-bold">£0</div>
                <ul className="mt-6 space-y-3 text-sm md:text-base">
                  {plan.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-yellow-400 font-bold animate-pulse">🔥</span> {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`
                      w-full py-3 rounded-xl font-semibold transition-all duration-300
                      ${plan.primary
                        ? 'bg-white text-indigo-700 hover:bg-yellow-400 hover:text-black shadow-lg'
                        : 'border border-gray-300 hover:bg-indigo-50 hover:text-indigo-700'
                      }
                    `}
                  >
                    Not currently available!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Students Say</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">“I got into Cambridge after my review! The advice was incredibly detailed and actionable.”</p>
              <p className="mt-3 font-semibold">~ 3rd year Cambridge medic</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">“Honestly worth every penny. My personal statement improved from average to outstanding.”</p>
              <p className="mt-3 font-semibold">~ 2nd year Cambridge medic</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">“Clear feedback and fast turnaround — got me into my first-choice university!”</p>
              <p className="mt-3 font-semibold">~2nd year Cambridge medic</p>
            </div>
          </div>
        </div>
      </section>

{/* CONTACT */}
<section
  id="contact"
  className="relative max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center justify-center bg-white overflow-visible"
>
  {/* Your content here */}
</section>
   {/* Pulsing Brain */}
   <div className="relative w-full flex justify-center z-0">
    <img
      src="/Brain.png"
      alt="Brain Background"
      className="w-full max-w-xl animate-brain-flame object-contain"
    />
  </div>
 
  {/* Reviewer in Chief Title */}
  <h2
    className="text-4xl md:text-5xl font-extrabold mb-4"
    style={{
      background: 'linear-gradient(90deg, #FFD700, #FFAA00, #FFE066)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'shimmer 3s linear infinite',
    }}
  >
    Reviewer in Chief
  </h2>

  {/* Intro Text */}
  <p
    className="text-2xl md:text-3xl font-extrabold mb-6"
    style={{
      background: 'linear-gradient(90deg, #FFD700, #FFAA00, #FFE066)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
      animation: 'shimmer 3s linear infinite',
    }}
  >
    Ready to get personalised, professional feedback on your personal statement?
  </p>

  {/* Email */}
  <p className="text-md md:text-lg text-yellow-400 mb-6">
    Email directly: 
    <a
      href="mailto:sqwyofficial@gmail.com"
      className="ml-2 underline font-bold text-yellow-300"
    >
      sqwyofficial@gmail.com
    </a>
  </p>

  {/* Contact Button */}
  <a
    href="mailto:sqwyofficial@gmail.com?subject=Personal Statement Review"
    className="inline-block px-8 py-3 bg-yellow-400 text-black rounded-md shadow-lg hover:bg-yellow-300 transition font-semibold mb-12"
  >
    Contact Now
  </a>

 

  <div className="absolute inset-0 overflow-visible pointer-events-none z-10">
  {[...Array(50)].map((_, i) => {
    const size = 2 + Math.random() * 4; // 2-6px
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    const duration = 6 + Math.random() * 4; // 6-10s rise
    const opacity = 0.5 + Math.random() * 0.5;
    const drift = (Math.random() - 0.5) * 80; // horizontal drift

    return (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          bottom: `0px`,
          opacity,
          background: 'radial-gradient(circle, #ffeb3b, #ff9800)',
          filter: `blur(${size / 2}px) drop-shadow(0 0 ${size}px #ffcc33)`,
          animation: `emberRise ${duration}s ease-in-out ${delay}s infinite`,
          ['--drift' as any]: `${drift}px`,
        }}
      ></div>
    );
  })}
</div>

<style jsx>{`
  @keyframes emberRise {
    0% {
      bottom: 0px;
      transform: translateX(0px) scale(1);
      opacity: 0.5;
    }
    25% {
      bottom: 25%;
      transform: translateX(calc(var(--drift) / 4)) scale(1.1);
      opacity: 0.7;
    }
    50% {
      bottom: 50%;
      transform: translateX(calc(var(--drift) / 2)) scale(1.2);
      opacity: 0.9;
    }
    75% {
      bottom: 75%;
      transform: translateX(calc(var(--drift) / 3)) scale(1.1);
      opacity: 0.7;
    }
    100% {
      bottom: 100%;
      transform: translateX(0px) scale(1);
      opacity: 0;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -500px 0;
    }
    100% {
      background-position: 500px 0;
    }
  }
`}</style>



      {/* FOOTER */}
      <footer className="border-t py-12 text-center text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Brain.png" 
              alt="Brain Icon" 
              className="w-12 h-12 animate-pulse drop-shadow-xl" 
            />
            <span className="font-semibold text-gray-900">
              © {new Date().getFullYear()} SY Personal Statement Reviews — All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-indigo-600 font-medium">
            <a href="#" className="hover:underline hover:text-yellow-500 transition">Privacy</a>
            <a href="#" className="hover:underline hover:text-yellow-500 transition">Terms</a>
            <a href="#" className="hover:underline hover:text-yellow-500 transition">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
