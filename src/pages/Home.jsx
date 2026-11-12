import { Link } from 'react-router-dom'
import { useLiveMatch } from '../hooks/useLiveMatch'
import ScoreCard from '../components/ScoreCard'

function Home() {
  const { match, isLive } = useLiveMatch()

  return (
    <main className="hero">
      <section className="hero-text">
        <span className="badge">For first-time spectators</span>
        <h1>Follow every point without asking what just happened</h1>
        <p className="lead">
          Short, guided lessons that turn love, deuce, and tiebreaks into
          something you can keep track of from the stands.
        </p>
        <div className="hero-buttons">
          <Link to="/learn" className="btn-primary">Start learning</Link>
          <Link to="/watch" className="btn-secondary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M6 4l14 8-14 8z" />
            </svg>
            Watch a 2-minute intro
          </Link>
        </div>
      </section>

      <ScoreCard match={match} isLive={isLive} />
    </main>
  )
}

export default Home