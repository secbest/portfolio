import { useState } from 'react'
import Section from './Section.jsx'
import { skillGroups } from '../data.js'

export default function Skills() {
  const [selected, setSelected] = useState(skillGroups[0].title)
  const group = skillGroups.find((g) => g.title === selected)

  return (
    <Section id="skills" number="02" label="skills" title="Skills">
      <div className="filters" role="group" aria-label="Skill categories">
        {skillGroups.map((g) => (
          <button
            key={g.title}
            type="button"
            className="pill"
            aria-pressed={g.title === selected}
            onClick={() => setSelected(g.title)}
          >
            {g.title}
          </button>
        ))}
      </div>
      <h3 className="sr-only">{group.title}</h3>
      <ul className="chips" aria-label={`${group.title} skills`}>
        {group.items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  )
}
