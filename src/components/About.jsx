import { GraduationCap, Award } from 'lucide-react'
import Section from './Section.jsx'
import { education, certifications } from '../data.js'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-slate-300">
          <p>I'm a B.Tech Artificial Intelligence and Data Science student who enjoys turning ideas into working software. My interests are Python development, backend engineering, databases and applications that use AI APIs.</p>
          <p>My main project, TaskFlow, is a Flask and MySQL task manager with authentication and Gemini-powered suggestions. Alongside it, internships in Java, machine learning and image-data preparation gave me hands-on practice with databases, model training and labeled datasets.</p>
          <p>I'm early in my career and keep learning by building, testing and improving what I make.</p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><GraduationCap size={18} className="text-violet-soft" aria-hidden="true" />Education</h3>
            <ul className="mt-3 space-y-4">
              {education.map(e => (
                <li key={e.title} className="border-l-2 border-violet/60 pl-4">
                  <p className="font-medium text-white">{e.title}</p>
                  <p className="text-sm text-slate-300">{e.place}</p>
                  <p className="text-sm text-mute">{e.meta}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold"><Award size={18} className="text-violet-soft" aria-hidden="true" />Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {certifications.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
