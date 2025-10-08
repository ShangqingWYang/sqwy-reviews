import React from 'react'
export default function Header(){
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">Mk</div>
        <div className="text-lg font-semibold">YourBrand</div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow">Get Started</a>
      </nav>
    </header>
  )
}
JS