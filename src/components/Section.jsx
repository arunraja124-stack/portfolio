export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-mute">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  )
}
