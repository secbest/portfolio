import { useEffect, useRef } from 'react'

// Uses the native <dialog>: the browser traps focus, closes on Escape and labels it for screen readers.
export default function DetailDialog({ entry, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (entry && !dialog.open) dialog.showModal()
    if (!entry && dialog.open) dialog.close()
  }, [entry])

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {entry && (
        <div>
          <h3 id="dialog-title">{entry.school}</h3>
          <p className="muted">
            {entry.programme} · {entry.period}
          </p>
          <p>{entry.summary}</p>
          {entry.sections.map((section) => (
            <div key={section.label}>
              <h4>{section.label}</h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <button type="button" className="button" onClick={onClose}>
            Close
          </button>
        </div>
      )}
    </dialog>
  )
}
