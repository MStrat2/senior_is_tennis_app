//
// Shared layout for the Scoring, Rules and Etiquette pages.
// Draws the landing-page style header (badge, headline, lead), a sticky table of contents
// (a dropdown on phones), the page content, the Quick recap card, the quiz island,
// and the "Up next" link at the bottom.
//
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'

export function Section({ id, title, children }) {
  return (
    <section id={id} className="learn-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function LearnLayout({ badge, title, lead, sections, recap, quiz, next, children }) {
  const [active, setActive] = useState(sections[0]?.id)
  const [menuOpen, setMenuOpen] = useState(false)

  // Start at the top of the page whenever a lesson page opens
  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Highlights the table of contents entry for the section currently on screen
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  function jumpTo(e, id) {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <main className="learn">
      <header className="learn-hero">
        <span className="badge">{badge}</span>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </header>

      <div className="toc-mobile">
        <button
          className="toc-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <span>Jump to section</span>
          <span aria-hidden="true">{menuOpen ? '▴' : '▾'}</span>
        </button>
        {menuOpen && (
          <div className="toc-mobile-list">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={(e) => jumpTo(e, s.id)}>
                {s.title}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="learn-body">
        <nav className="toc" aria-label="On this page">
          <p className="toc-title">On this page</p>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              onClick={(e) => jumpTo(e, s.id)}
            >
              {s.title}
            </a>
          ))}
        </nav>

        <article className="learn-content">
          {children}
          {recap?.length > 0 && (
            <aside className="recap">
              <h2>Quick recap</h2>
              <ul>
                {recap.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </aside>
          )}
        </article>
      </div>

      {quiz?.length > 0 && <Quiz questions={quiz} />}

      {next && (
        <Link to={next.to} className="next-card">
          <span>
            <span className="next-label">{next.kicker ?? 'Up next'}</span>
            <span className="next-title">{next.label}</span>
          </span>
          <span className="next-arrow" aria-hidden="true">→</span>
        </Link>
      )}
    </main>
  )
}

export default LearnLayout