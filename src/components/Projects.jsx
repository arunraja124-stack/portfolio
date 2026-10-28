import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => <ProjectCard key={p.title} p={p} />)}
      </div>
    </Section>
  )
}
