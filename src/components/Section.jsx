// Reusable section wrapper: children are whatever the section needs to show.
export default function Section({ id, number, label, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <p className="eyebrow">
        // {label} <span aria-hidden="true">{number}</span>
      </p>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}
