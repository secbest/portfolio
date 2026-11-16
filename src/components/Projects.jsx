import { useMemo, useState } from 'react'
import Section from './Section.jsx'
import { projects } from '../data.js'

function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="filters" role="group" aria-label="Filter projects">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="pill"
          aria-pressed={category === selected}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <li className="card">
      <p className="muted small">
        {project.category} · {project.year}
      </p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="chips small-chips" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      {project.href && (
        <p className="links">
          <a href={project.href}>
            {project.linkLabel}
            <span className="sr-only"> for {project.title}</span>
          </a>
        </p>
      )}
    </li>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const visible = selected === 'All' ? projects : projects.filter((p) => p.category === selected)

  return (
    <Section id="projects" number="04" label="work" title="Projects">
      <FilterBar categories={categories} selected={selected} onSelect={setSelected} />
      <p className="muted small" role="status">
        Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>
      <ul className="cards">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  )
}
