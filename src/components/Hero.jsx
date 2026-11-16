import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const base = import.meta.env.BASE_URL

// Types the role out one letter at a time. Screen readers get the full text from a visually hidden copy.
function useTypewriter(text, speed = 45) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      return undefined
    }
    if (count >= text.length) return undefined
    const timer = setTimeout(() => setCount(count + 1), speed)
    return () => clearTimeout(timer)
  }, [count, text, speed])

  return text.slice(0, count)
}

export default function Hero() {
  const typed = useTypewriter(profile.role)

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <picture>
        <source type="image/webp" srcSet={`${base}images/profile.webp`} />
        <img
          className="portrait"
          src={`${base}images/profile.jpg`}
          width="440"
          height="440"
          fetchPriority="high"
          alt="Portrait of Jasper Teo Kheng Cher, wearing round glasses and a white collared shirt"
        />
      </picture>
      <div>
        <p className="status">
          <span className="dot" aria-hidden="true" /> Online · {profile.location}
        </p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="role">
          <span className="sr-only">{profile.role}</span>
          <span aria-hidden="true">
            {typed}
            <span className="caret">|</span>
          </span>
        </p>
        <p className="lead">{profile.tagline}</p>
        <p className="actions">
          <a className="button" href="#projects">
            View projects
          </a>
          <a className="button ghost" href="#contact">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
