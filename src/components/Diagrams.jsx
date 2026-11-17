//
// Inline SVG diagrams for the Scoring, Rules and Etiquette pages.
// All colors come from the d-* classes at the bottom of App.css, so they follow the site theme.
//
// The court diagrams share one frame: the court is 780 x 360 units (10 units = 1 foot),
// drawn inside a 960 x 470 canvas with room around it for labels.
//
const COURT_VIEW = '0 0 960 470'
const COURT_POS = 'translate(140 50)'

function Label({ x, y, cy, lines, size = 18, anchor = 'middle', className = 'd-text' }) {
  const rows = Array.isArray(lines) ? lines : [lines]
  const lh = size * 1.25
  const y0 = cy !== undefined ? cy - ((rows.length - 1) * lh) / 2 + size * 0.35 : y
  return (
    <text x={x} y={y0} className={className} fontSize={size} textAnchor={anchor}>
      {rows.map((row, i) => (
        <tspan key={i} x={x} dy={i === 0 ? 0 : lh}>{row}</tspan>
      ))}
    </text>
  )
}

function Figure({ viewBox, label, caption, children }) {
  return (
    <figure className="diagram">
      <svg viewBox={viewBox} role="img" aria-label={label}>{children}</svg>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function ArrowHead({ id, className }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" className={className} />
    </marker>
  )
}

function CourtLines() {
  return (
    <g>
      <rect className="d-court" x="0" y="0" width="780" height="360" />
      <g className="d-line">
        <rect x="0" y="0" width="780" height="360" />
        <line x1="0" y1="45" x2="780" y2="45" />
        <line x1="0" y1="315" x2="780" y2="315" />
        <line x1="180" y1="45" x2="180" y2="315" />
        <line x1="600" y1="45" x2="600" y2="315" />
        <line x1="180" y1="180" x2="600" y2="180" />
        <line x1="0" y1="180" x2="12" y2="180" />
        <line x1="768" y1="180" x2="780" y2="180" />
      </g>
      <line className="d-net" x1="390" y1="-12" x2="390" y2="372" />
    </g>
  )
}

// ---------- Scoring page ----------

export function ServeSideDiagram() {
  return (
    <Figure
      viewBox={COURT_VIEW}
      label="Top-down view of a tennis court. The server alternates sides and always serves diagonally."
      caption="The solid arrow is the first point of a game: the server stands on the right and serves diagonally. The dotted arrow is the next point, from the left side."
    >
      <defs>
        <ArrowHead id="ss-arrow" className="d-fill-accent" />
      </defs>
      <g transform={COURT_POS}>
        <CourtLines />
        <rect className="d-highlight" x="390" y="45" width="210" height="135" />

        <Label x={390} y={-18} lines="Net" size={16} className="d-muted" />
        <Label x={285} y={80} lines="Ad" size={20} className="d-muted" />
        <Label x={285} y={305} lines="Deuce" size={20} className="d-muted" />
        <Label x={495} y={80} lines="Deuce" size={20} className="d-muted" />
        <Label x={495} y={305} lines="Ad" size={20} className="d-muted" />

        <circle className="d-dot" cx="-30" cy="285" r="12" />
        <Label x={-48} y={290} anchor="end" size={15} lines="Even points" className="d-muted" />
        <line className="d-arrow-in" x1="-18" y1="281" x2="478" y2="120" markerEnd="url(#ss-arrow)" />

        <circle className="d-dot-ghost" cx="-30" cy="75" r="12" />
        <Label x={-48} y={80} anchor="end" size={15} lines="Odd points" className="d-muted" />
        <line className="d-arrow-ghost" x1="-18" y1="79" x2="478" y2="244" markerEnd="url(#ss-arrow)" />
      </g>
    </Figure>
  )
}

export function DeuceFlowDiagram() {
  return (
    <Figure
      viewBox="0 0 760 300"
      label="Flowchart. From deuce, a player who wins a point has advantage. Winning the next point wins the game. Losing it goes back to deuce."
      caption="From deuce, someone has to win two points in a row to take the game."
    >
      <defs>
        <ArrowHead id="df-arrow" className="d-fill-muted" />
      </defs>

      <rect className="d-box" x="10" y="110" width="170" height="70" rx="14" />
      <Label x={95} cy={145} lines={['Deuce', '(40–40)']} />

      <path className="d-arrow" d="M180 145 H236" markerEnd="url(#df-arrow)" />

      <rect className="d-box" x="240" y="110" width="190" height="70" rx="14" />
      <Label x={335} cy={145} size={17} lines={['A player wins', 'a point:', 'advantage']} />

      <path className="d-arrow" d="M430 130 L516 70" markerEnd="url(#df-arrow)" />
      <path className="d-arrow" d="M430 160 L516 220" markerEnd="url(#df-arrow)" />

      <rect className="d-box d-box-win" x="520" y="20" width="230" height="80" rx="14" />
      <Label x={635} cy={60} lines={['Wins the next point', 'too: wins the game']} />

      <rect className="d-box" x="520" y="190" width="230" height="80" rx="14" />
      <Label x={635} cy={230} lines={['Loses the next point:', 'back to deuce']} />

      <path className="d-arrow" d="M635 270 V288 H95 V184" markerEnd="url(#df-arrow)" />
      <Label x={365} y={278} size={15} className="d-muted" lines="Repeat until someone wins two points in a row" />
    </Figure>
  )
}

// ---------- Rules page ----------

export function CourtDiagram() {
  return (
    <Figure
      viewBox={COURT_VIEW}
      label="Top-down view of a tennis court with the lines labeled and the doubles alleys shaded."
      caption="The shaded strips are the doubles alleys. They are in play for doubles, and out for singles."
    >
      <g transform={COURT_POS}>
        <CourtLines />
        <rect className="d-highlight" x="0" y="0" width="780" height="45" />
        <rect className="d-highlight" x="0" y="315" width="780" height="45" />

        <Label x={390} y={-18} lines="Net" size={16} className="d-muted" />
        <Label x={90} y={-12} lines="Doubles sideline" size={15} className="d-muted" />
        <Label x={90} y={68} lines="Singles sideline" size={15} className="d-muted" />
        <Label x={290} y={29} lines="Doubles alley" size={16} />
        <Label x={290} y={343} lines="Doubles alley" size={16} />
        <Label x={285} y={117} lines="Service box" size={16} />
        <Label x={495} y={203} lines="Center service line" size={15} className="d-muted" />

        <Label x={0} y={392} anchor="start" lines="Baseline" size={16} className="d-muted" />
        <Label x={180} y={392} lines="Service line" size={16} className="d-muted" />
        <Label x={600} y={392} lines="Service line" size={16} className="d-muted" />
      </g>
    </Figure>
  )
}

export function ServePathDiagram() {
  return (
    <Figure
      viewBox={COURT_VIEW}
      label="Top-down view of a serve. One serve lands in the correct box. Two others are faults: one lands long, one lands in the wrong box."
      caption="Green: a good serve into the diagonal box. Red: faults. A serve that flies past the service line is long, and one that lands in the other box is in the wrong box."
    >
      <defs>
        <ArrowHead id="sp-in" className="d-fill-accent" />
        <ArrowHead id="sp-out" className="d-fill-red" />
      </defs>
      <g transform={COURT_POS}>
        <CourtLines />
        <rect className="d-highlight" x="390" y="45" width="210" height="135" />

        <Label x={390} y={-18} lines="Net" size={16} className="d-muted" />

        <circle className="d-dot" cx="-30" cy="285" r="12" />
        <Label x={-48} y={290} anchor="end" size={15} lines="Server" className="d-muted" />

        <line className="d-arrow-out" x1="-18" y1="281" x2="702" y2="95" markerEnd="url(#sp-out)" />
        <line className="d-arrow-out" x1="-18" y1="281" x2="492" y2="250" markerEnd="url(#sp-out)" />
        <line className="d-arrow-in" x1="-18" y1="281" x2="492" y2="113" markerEnd="url(#sp-in)" />

        <Label x={492} y={92} lines="In" size={18} className="d-accent-text" />
        <Label x={702} y={72} lines="Long" size={18} className="d-red-text" />
        <Label x={492} y={278} lines="Wrong box" size={18} className="d-red-text" />
      </g>
    </Figure>
  )
}

export function InOutDiagram() {
  return (
    <Figure
      viewBox="0 0 760 270"
      label="Close-up of a court line with three balls. A ball inside the court is in. A ball touching the line is in. A ball completely past the line is out."
      caption="Zoomed in on a line. If any part of the ball touches the line, it is in."
    >
      <rect className="d-court" x="0" y="0" width="760" height="130" />
      <rect className="d-outside" x="0" y="150" width="760" height="120" />
      <rect className="d-line-fill" x="0" y="130" width="760" height="20" />

      <Label x={744} y={24} anchor="end" size={15} className="d-muted" lines="Inside the court" />
      <Label x={744} y={262} anchor="end" size={15} className="d-muted" lines="Outside" />
      <Label x={744} y={145} anchor="end" size={14} className="d-dark-text" lines="The line" />

      <circle className="d-dot" cx="130" cy="75" r="26" />
      <Label x={130} y={34} size={20} className="d-accent-text" lines="In" />

      <circle className="d-dot" cx="380" cy="112" r="26" />
      <Label x={380} y={30} size={20} className="d-accent-text" lines={['In']} />
      <Label x={380} y={54} size={15} className="d-muted" lines="(touches the line)" />

      <circle className="d-dot-red" cx="560" cy="212" r="26" />
      <Label x={560} y={262} size={20} className="d-red-text" lines="Out" />
    </Figure>
  )
}

// ---------- Etiquette page ----------

export function PointTimelineDiagram() {
  const steps = [
    { x: 0, title: ['Players', 'get ready'], status: 'Settle down', bar: 'd-fill-muted', text: 'd-muted' },
    { x: 205, title: ['Serve', 'and rally'], status: 'Stay silent', bar: 'd-fill-red', text: 'd-red-text' },
    { x: 410, title: ['Point', 'ends'], status: 'Applaud', bar: 'd-fill-accent', text: 'd-accent-text' },
    { x: 615, title: ['Changeover or', 'set break'], status: 'Move around', bar: 'd-fill-accent', text: 'd-accent-text' },
  ]

  return (
    <Figure
      viewBox="0 0 780 210"
      label="Timeline of a point showing what the crowd should do: settle down, stay silent during the rally, applaud when the point ends, and move around only during breaks."
      caption="Quiet while the ball is in play, noise when it is not."
    >
      <defs>
        <ArrowHead id="pt-arrow" className="d-fill-muted" />
      </defs>
      {steps.map((s, i) => (
        <g key={s.status}>
          <rect className="d-box" x={s.x} y="40" width="165" height="130" rx="14" />
          <rect className={s.bar} x={s.x} y="40" width="165" height="8" rx="4" />
          <Label x={s.x + 82} cy={92} size={18} lines={s.title} />
          <Label x={s.x + 82} y={150} size={20} className={s.text} lines={s.status} />
          {i < steps.length - 1 && (
            <path className="d-arrow" d={`M${s.x + 167} 105 H${s.x + 203}`} markerEnd="url(#pt-arrow)" />
          )}
        </g>
      ))}
    </Figure>
  )
}