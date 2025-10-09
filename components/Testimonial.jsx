import React from 'react'
export default function Testimonial({ name, role, quote }){
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-sm text-gray-500">{role}</div>
      <div className="mt-2 font-semibold">{name}</div>
      <blockquote className="mt-2 text-sm text-gray-700">“{quote}”</blockquote>
    </div>
  )
}
JS