import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" title="Internship experience">
      <ol className="space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map(e => (
          <li key={e.role + e.dates} className="relative">
            <span className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full border-2 border-violet bg-ink sm:-left-[2.4rem]" aria-hidden="true" />
            <h3 className="text-xl font-bold">{e.role} <span className="font-medium text-slate-300">· {e.company}</span></h3>
            <p className="mt-1 text-sm text-mute">{e.place} · {e.dates}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300 marker:text-violet">
              {e.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
