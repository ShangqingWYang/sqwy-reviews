import React from 'react'
export default function Footer({ year }){
  return (
    <footer className="mt-12 border-t pt-8 pb-20 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {year} YourBrand — All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
