import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard can be blocked; the address is still shown as text
    }
  }

  return (
    <Section id="contact" number="05" label="contact" title="Get in touch">
      <p className="lead">I'm looking for internships where I can keep learning by shipping real products. Say hello!</p>
      <ul className="plain contact-list">
        <li>
          GitHub: <a href={profile.github}>github.com/secbest</a>
        </li>
        <li>
          LinkedIn: <a href={profile.linkedin}>linkedin.com/in/jasper-teo-jt</a>
        </li>
        <li>
          Email: {profile.email}{' '}
          <button type="button" className="pill" onClick={copyEmail}>
            Copy email
          </button>
          <span role="status" className="muted small">
            {copied ? ' Copied!' : ''}
          </span>
        </li>
      </ul>
    </Section>
  )
}
