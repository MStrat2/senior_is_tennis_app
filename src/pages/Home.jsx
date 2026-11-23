//
// Creates the Landing Page for the tennis app.
// Splits the site into two halves using hero.
// The left half has the title, the lead paragraph, and two buttons.
// The right half has the ScoreCard component. 
// Start learning button links to /learn
// Watch a 2-minute intro button links to /watch
//

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
          <Link to="/scoring" className="btn-primary">Start learning</Link>
        </div>
      </section>

      <ScoreCard match={match} isLive={isLive} />
    </main>
  )
}

export default Home