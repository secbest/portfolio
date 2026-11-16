import Section from './Section.jsx'
import { certifications, experience, profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" number="01" label="about" title="About me">
      <div className="about-grid">
        <div>
          {profile.intro.map((text) => (
            <p key={text} className="lead">
              {text}
            </p>
          ))}
          {profile.summary.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <aside aria-label="Experience and certifications">
          <h3>Experience</h3>
          <ul className="plain">
            {experience.map((job) => (
              <li key={job.company}>
                <strong>{job.role}</strong>, {job.company}
                <span className="muted"> · {job.period}</span>
                <br />
                <span className="muted">{job.summary}</span>
              </li>
            ))}
          </ul>
          <h3>Certifications</h3>
          <ul className="plain">
            {certifications.map((cert) => (
              <li key={cert.title}>
                {cert.title} <span className="muted">· {cert.issuer}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
