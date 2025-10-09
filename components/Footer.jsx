import React from 'react';

export default function Footer({ year }) {
  return (
    <footer className="mt-12 border-t pt-8 pb-20 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand and Brain Icon */}
        <div className="flex items-center gap-3">
          <img 
            src="/Brain.png" 
            alt="Brain Icon" 
            className="w-10 h-10 animate-pulse drop-shadow-xl" 
          />
          <span className="font-semibold text-gray-900">
            © {year} YourBrand — All rights reserved.
          </span>
        </div>

        {/* Footer links */}
        <div className="flex gap-6 text-indigo-600 font-medium">
          <a href="#" className="hover:underline hover:text-yellow-500 transition">Privacy</a>
          <a href="#" className="hover:underline hover:text-yellow-500 transition">Terms</a>
          <a href="#" className="hover:underline hover:text-yellow-500 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
