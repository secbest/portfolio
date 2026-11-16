import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

// Highlights the link of the section that is currently on screen.
function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}

const ids = links.map((l) => l.id)

export default function Nav({ theme, onToggleTheme }) {
  const active = useActiveSection(ids)
  const dark = theme === 'dark'

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        Jas
      </a>
      <nav aria-label="Primary">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} aria-current={active === link.id ? 'true' : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="pill" aria-pressed={dark} onClick={onToggleTheme}>
        {dark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </header>
  )
}
