import { Github } from 'lucide-react'

export default function ProjectCard({ p }) {
  const base = 'flex flex-col rounded-2xl border bg-panel p-6'
  const cls = p.featured
    ? `${base} border-violet/50 bg-gradient-to-br from-panel2 to-panel p-8 shadow-[0_0_60px_-20px_#8b7cf6] md:col-span-2`
    : `${base} border-line`
  return (
    <article className={cls}>
      {p.featured && <p className="mb-3 w-fit rounded-md bg-violet/15 px-2.5 py-1 text-sm font-medium text-violet-soft">Featured project</p>}
      <h3 className={p.featured ? 'text-3xl font-bold' : 'text-xl font-bold'}>{p.title}</h3>
      <p className="mt-1 text-mute">{p.subtitle}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-violet">
        {p.points.map(pt => <li key={pt}>{pt}</li>)}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {p.stack.map(t => <li key={t} className="tag">{t}</li>)}
      </ul>
      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6 w-fit">
        <Github size={16} aria-hidden="true" />View on GitHub<span className="sr-only"> ({p.title}, opens in new tab)</span>
      </a>
    </article>
  )
}
