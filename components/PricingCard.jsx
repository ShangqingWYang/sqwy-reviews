import React from 'react';

export default function PricingCard({ title, perks = [], primary = false }) {
  return (
    <div className="relative group">
      {/* Subtle animated flames behind the card */}
      <div
        className={`
          absolute inset-0 rounded-2xl filter blur-3xl opacity-30 animate-flames 
          ${primary 
            ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600' 
            : 'bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400'}
          -z-10
        `}
      ></div>

      {/* Card container */}
      <div
        className={`
          relative p-8 rounded-2xl shadow-2xl transition-transform duration-500
          ${primary 
            ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:scale-105 hover:shadow-[0_0_50px_rgba(255,215,0,0.7)]' 
            : 'bg-white text-gray-900 hover:scale-105 hover:shadow-lg'
          }
        `}
      >
        {/* Popular badge */}
        {primary && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold text-xs shadow-lg animate-pulse z-10">
            Popular
          </div>
        )}

        {/* Title */}
        <div className="text-2xl font-extrabold tracking-tight">{title}</div>

        {/* Price */}
        <div className="mt-4 text-4xl font-bold">£0</div>

        {/* Perks list */}
        <ul className="mt-6 space-y-3 text-sm md:text-base">
          {perks.map((perk, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold animate-pulse">🔥</span> {perk}
            </li>
          ))}
        </ul>

        {/* Call to action */}
        <div className="mt-8">
          <button
            className={`
              w-full py-3 rounded-xl font-semibold transition-all duration-300
              ${primary 
                ? 'bg-white text-indigo-700 hover:bg-yellow-400 hover:text-black shadow-lg' 
                : 'border border-gray-300 hover:bg-indigo-50 hover:text-indigo-700'
              }
            `}
          >
            Get Access Free
          </button>
        </div>
      </div>
    </div>
  );
}
