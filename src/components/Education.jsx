import { useState } from 'react'
import Section from './Section.jsx'
import DetailDialog from './DetailDialog.jsx'
import { education } from '../data.js'

export default function Education() {
  const [openId, setOpenId] = useState(null)
  const entry = education.find((e) => e.id === openId) ?? null

  return (
    <Section id="education" number="03" label="education" title="Education">
      <ol className="timeline">
        {education.map((item) => (
          <li key={item.id}>
            <button type="button" className="entry" onClick={() => setOpenId(item.id)}>
              <span className="period">{item.period}</span>
              <span className="school">{item.school}</span>
              <span className="muted">{item.programme}</span>
              <span className="more">View details</span>
            </button>
          </li>
        ))}
      </ol>
      <DetailDialog entry={entry} onClose={() => setOpenId(null)} />
    </Section>
  )
}
