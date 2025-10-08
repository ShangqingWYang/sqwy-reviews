import React from 'react'
export default function PricingCard({ title, priceLabel, perks = [], primary=false }){
  return (
    <div className={`p-6 rounded-lg shadow ${primary ? 'border-2 border-indigo-600' : ''}`}>
      <div className="flex items-baseline gap-3">
        <div className="text-lg font-semibold">{title}</div>
        {primary && <div className="ml-auto text-xs px-2 py-1 bg-indigo-50 rounded text-indigo-600">Popular</div>}
      </div>
      <div className="mt-4 text-3xl font-bold">{priceLabel}</div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">{perks.map((p,i) => <li key={i}>• {p}</li>)}</ul>
      <div className="mt-6">
        <button className={`w-full px-4 py-2 rounded-md font-medium ${primary ? 'bg-indigo-600 text-white' : 'border'}`}>Start free trial</button>
      </div>
    </div>
  )
}
