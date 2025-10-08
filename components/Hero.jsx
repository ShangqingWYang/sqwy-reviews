import React from 'react'
import EmailCapture from './EmailCapture'
export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Turn your skills into revenue — predictably.</h1>
        <p className="mt-6 text-gray-700 max-w-xl">We help creators, consultants, and small businesses package their expertise into digital products, paid subscriptions, and high-converting lead funnels.</p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#pricing" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow">See Pricing</a>
          <a href="#contact" className="px-6 py-3 border rounded-md">Book a Call</a>
        </div>
        <EmailCapture />
        <p className="mt-4 text-xs text-gray-500">No spam — just one short guide on turning your first $1k online.</p>
      </div>
    </section>
  )
}
JS