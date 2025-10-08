'use client';
import React, { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      window.location.href = `mailto:sqwyofficial@gmail.com?subject=Free Personal Statement Guide&body=Please send the free guide to: ${email}`;
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white text-gray-900">
      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
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
      <section className="max-w-5xl mx-auto px-6 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Transform Your <span className="text-indigo-600">Personal Statement</span> Into Perfection
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          SY is a 5th year Cambridge University Medical Student (Gonville and Caius), who will be working with a team of reviewers at Cambridge University.<br></br> <br>
          </br>
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
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow font-medium hover:bg-indigo-700 transition"
          >
            Send Me The Guide
          </button>
        </form>

        {status === 'sent' && (
          <p className="mt-3 text-green-600 font-medium">Thanks! Check your email inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-red-600 font-medium">Something went wrong. Please try again.</p>
        )}
      </section>

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

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With The Reviewer in Chief</h2>
        <p className="text-gray-700 mb-6">
          Ready to get personalised, professional feedback on your personal statement?  
          Email directly: <a href="mailto:sqwyofficial@gmail.com" className="text-indigo-600 font-medium">sqwyofficial@gmail.com</a>
        </p>
        <a
          href="mailto:sqwyofficial@gmail.com?subject=Personal Statement Review"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
        >
          Contact Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SY Personal Statement Reviews — All rights reserved.
      </footer>
    </main>
  );
}
