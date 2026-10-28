import { useState } from 'react'

export default function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto w-56 sm:w-64 md:w-80">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/40 via-sky/20 to-transparent blur-xl" aria-hidden="true" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-violet/40 bg-panel">
        {failed ? (
          <div className="grid h-full place-items-center font-display text-6xl font-bold text-violet-soft" role="img" aria-label="Initials AN">AN</div>
        ) : (
          <img
            src="/arunraja.jpg"
            alt="Portrait of Arunraja N wearing a black shirt, smiling, standing against a stone wall"
            width="720" height="918"
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 12%' }}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  )
}
