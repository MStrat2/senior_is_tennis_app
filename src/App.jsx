import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="brand">
          <img src="/favicon.svg" alt="" className="brand-icon" />
          <span>Learn Courtside</span>
        </Link>
        <nav className="nav-links">
          <Link to="/scoring">Scoring</Link>
          <Link to="/etiquette">Etiquette</Link>
          <Link to="/watch">Watch live</Link>
          <Link to="/about">About</Link>
        </nav>
        <button className="btn-signin">Sign in</button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App