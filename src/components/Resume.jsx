import { Download, FileText } from 'lucide-react'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-panel p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <FileText className="text-violet-soft" size={32} aria-hidden="true" />
          <div>
            <p className="font-semibold text-white">{profile.resumeName}</p>
            <p className="text-sm text-mute">PDF · education, skills, internships and projects</p>
          </div>
        </div>
        <a href={profile.resume} download={profile.resumeName} className="btn-primary"><Download size={16} aria-hidden="true" />Download Resume</a>
      </div>
    </Section>
  )
}
