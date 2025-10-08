import React, { useCallback, useState } from 'react'
export default function EmailCapture(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const handleSubmit = useCallback(async (e)=>{
    e.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setStatus('error')
    setStatus('loading')
    try{
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('subscribe failed')
      setStatus('success')
      setEmail('')
    }catch(err){
      setStatus('error')
    }
  }, [email])
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl" aria-live="polite">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} aria-label="Email" type="email" required placeholder="Your email for a free guide" className="flex-1 px-4 py-3 rounded-md border" />
        <button type="submit" disabled={status==='loading'} className="px-5 py-3 bg-emerald-500 text-white rounded-md font-medium">{status==='loading' ? 'Sending…' : 'Send me the guide'}</button>
      </form>
      <div className="mt-3 text-sm" role="status">
        {status === 'success' && <span className="text-green-600">Thanks! Check your inbox.</span>}
        {status === 'error' && <span className="text-red-600">Something went wrong — try again.</span>}
      </div>
    </div>
  )
}
JS