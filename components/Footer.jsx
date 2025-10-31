import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">

        <Logo size={42} />

        <p className="font-medium text-gray-900">
          © {new Date().getFullYear()} Xysync — All rights reserved.
        </p>

        <div className="flex gap-6 text-indigo-600 font-medium">
          <a
            href="/privacy"
            className="hover:underline hover:text-indigo-800 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline hover:text-indigo-800 transition"
          >
            Terms of Service
          </a>
          <a
            href="/cookies"
            className="hover:underline hover:text-indigo-800 transition"
          >
            Cookie Policy
          </a>
          <a
            href="mailto:sqwyofficial@gmail.com"
            className="hover:underline hover:text-indigo-800 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
