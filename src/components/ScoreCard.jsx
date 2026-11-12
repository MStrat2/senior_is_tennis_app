//
//
// Creates a React component that displays the scorecard on the landing page. 
// It takes in a match object and a isLive flag, works out the number of sets, the server, and renders
// the "Just Now" header. It also checks to see if the score is a tiebreak and displays that
// in the card if its true. It also has a footer that displays the server and a message if 
// the server is not available.
//
//

function ScoreCard({ match, isLive }) {
  const sets = match.games[0].length
  const server = match.server ? match.names[match.server - 1] : null

  return (
    <section className="card">
      <div className="card-header">
        <span>{isLive ? 'Just now' : 'Live example'}</span>
        <span>{match.isTiebreak ? 'Tiebreak' : `Set ${sets}`}</span>
      </div>

      <table className="score-table">
        <thead>
          <tr>
            <th>Player</th>
            {match.games[0].map((_, i) => <th key={i}>S{i + 1}</th>)}
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {match.names.map((name, p) => (
            <tr key={name}>
              <td className="player">
                {match.server === p + 1 && <span className="server-dot" />}
                {name}
              </td>
              {match.games[p].map((g, i) => <td key={i}>{g}</td>)}
              <td><span className="pts">{match.points[p]}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card-note">
        <p>{server ? `${server} is serving.` : 'Waiting for the next point.'}</p>
      </div>
    </section>
  )
}

export default ScoreCard