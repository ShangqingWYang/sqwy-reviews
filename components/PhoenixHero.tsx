'use client';
import React from 'react';

export default function PhoenixHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 overflow-hidden">
      
      {/* Phoenix background with proper sizing */}
      <div
        className="absolute inset-0 -z-10 bg-no-repeat bg-center bg-contain opacity-90 animate-phoenix"
        style={{ backgroundImage: "url('/Phoenix2.png')" }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 -z-5"></div>

      {/* Optional animated flames */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ff6600,_transparent)] opacity-30 animate-flames"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center">
        {children}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes phoenixFloat {
          0%, 100% { transform: scale(0.85) translateY(0); }
          50% { transform: scale(0.87) translateY(-10px); }
        }
        .animate-phoenix {
          animation: phoenixFloat 6s ease-in-out infinite;
        }

        @keyframes flames {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-flames {
          animation: flames 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
