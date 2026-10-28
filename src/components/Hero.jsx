import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data.js'
import Photo from './Photo.jsx'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.25fr_1fr] md:pt-24">
      <div className="order-2 md:order-1">
        <p className="hero-in inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-sm text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          Open to entry-level opportunities
        </p>
        <h1 className="hero-in-2 mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl">{profile.name}</h1>
        <p className="hero-in-2 mt-3 font-display text-xl font-semibold text-violet-soft sm:text-2xl">{profile.role}</p>
        <p className="mt-6 max-w-xl text-lg text-slate-100">{profile.tagline}</p>
        <p className="mt-4 max-w-xl text-mute">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary"><ArrowDown size={16} aria-hidden="true" />View Projects</a>
          <a href="#contact" className="btn-ghost"><Mail size={16} aria-hidden="true" />Contact Me</a>
          <a href={profile.resume} download={profile.resumeName} className="btn-ghost"><Download size={16} aria-hidden="true" />Download Resume</a>
        </div>
        <div className="mt-6 flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Arunraja on GitHub" className="text-mute hover:text-white"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Arunraja on LinkedIn" className="text-mute hover:text-white"><Linkedin /></a>
        </div>
      </div>
      <div className="order-1 md:order-2"><Photo /></div>
    </section>
  )
}
