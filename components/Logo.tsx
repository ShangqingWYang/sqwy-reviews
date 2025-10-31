import React from "react";

export default function Logo({ size = 48, className = "" }) {
  return (
    <div className={`flex flex-col items-center ${className}`} style={{ gap: "4px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main hybrid X shape */}
        <path
          d="M16 16L48 48M48 16L16 48"
          stroke="url(#grad)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Tech node circles */}
        <circle cx="16" cy="16" r="4" fill="#4F46E5" />
        <circle cx="48" cy="16" r="4" fill="#4F46E5" />
        <circle cx="16" cy="48" r="4" fill="#4F46E5" />
        <circle cx="48" cy="48" r="4" fill="#4F46E5" />

        {/* Gradient */}
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#FACC15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <span className="font-semibold text-gray-900 text-lg tracking-tight">Xysync Ltd</span>
    </div>
  );
}
