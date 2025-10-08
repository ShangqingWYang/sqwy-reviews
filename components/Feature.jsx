import React from 'react'
export default React.memo(function Feature({ title, desc }){
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
})
JS