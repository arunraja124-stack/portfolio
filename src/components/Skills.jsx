import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(s => (
          <div key={s.group}>
            <h3 className="text-base font-semibold text-violet-soft">{s.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.items.map(i => <li key={i} className="tag">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
