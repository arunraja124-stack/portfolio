import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" intro="I'm looking for entry-level Python and Backend Developer roles. Email is the quickest way to reach me.">
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn-primary"><Mail size={16} aria-hidden="true" />{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Linkedin size={16} aria-hidden="true" />LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={16} aria-hidden="true" />GitHub</a>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-mute">
        <Phone size={14} aria-hidden="true" />
        <a href={`tel:${profile.phone.replace(/-/g, '')}`} className="hover:text-white">{profile.phone}</a>
      </p>
    </Section>
  )
}
