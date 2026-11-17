//
// Rules page: the court, in or out, serving rules, rally rules, and officials.
// Uses the shared LearnLayout. Edit the text, SECTIONS, RECAP and QUIZ below.
//
import LearnLayout, { Section } from '../components/LearnLayout'
import { CourtDiagram, InOutDiagram, ServePathDiagram } from '../components/Diagrams'

const SECTIONS = [
  { id: 'court', title: 'The court' },
  { id: 'in-out', title: 'In or out?' },
  { id: 'serving', title: 'Serving rules' },
  { id: 'rally', title: 'During a rally' },
  { id: 'officials', title: 'Officials and calls' },
]

const RECAP = [
  'A court is 78 feet long, 27 feet wide for singles and 36 feet wide for doubles.',
  'A ball touching any part of a line is in.',
  'The server gets two tries, behind the baseline, diagonally into the service box.',
  'A serve that clips the net and lands in the right box is a let, and is replayed.',
  'The ball can bounce once on your side before you hit it, and it must land inside the court.',
  'The chair umpire has the final say. Many events use electronic line calling.',
]

const QUIZ = [
  {
    q: 'A ball that lands touching the edge of a line is out.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'Any part of the ball touching the line makes it in. Only a ball completely outside the line is out.',
  },
  {
    q: 'The server gets ____ serves for each point.',
    options: ['One', 'Two', 'Three', 'As many as they need'],
    answer: 1,
    explain: 'The server gets two serves. Missing both is a double fault, and the receiver wins the point.',
  },
  {
    q: 'A serve clips the top of the net and lands in the correct service box. What happens?',
    options: ['It is a let: the serve is replayed', 'It is a fault', 'The server wins the point', 'It is a double fault'],
    answer: 0,
    explain: 'That is called a let. The serve is simply replayed, with no penalty.',
  },
  {
    q: 'During a rally in a doubles match, a ball that lands in the alley is in.',
    options: ['True', 'False'],
    answer: 0,
    explain: 'In doubles the alleys are part of the court during a rally. Serves still have to land in the service box.',
  },
  {
    q: 'Who has the final say on rules disputes at a professional match?',
    options: ['The chair umpire', 'A ball kid', 'The opposing player', 'The nearest line judge'],
    answer: 0,
    explain: 'The chair umpire sits in the high chair by the net and can overrule line calls.',
  },
  {
    q: 'A ball may bounce twice on your side if you are running for it.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'If the ball bounces twice on your side before you hit it, you lose the point.',
  },
]

function Rules() {
  return (
    <LearnLayout
      badge="Rules"
      title="The few rules that explain everything you see"
      lead="Tennis has a short list of rules behind almost every call. Learn these and the umpire’s announcements start to make sense."
      sections={SECTIONS}
      recap={RECAP}
      quiz={QUIZ}
      next={{ to: '/etiquette', label: 'Etiquette for spectators' }}
    >
      <Section id="court" title="The court and its boundaries">
        <p>
          A tennis court is a rectangle, <strong>78 feet long</strong> (about 24 metres). For
          singles, with one player per side, the court is <strong>27 feet wide</strong>. For
          doubles, with two players per side, it is <strong>36 feet wide</strong>, because the
          strips along the sides, called <strong>alleys</strong>, come into play.
        </p>
        <p>
          A net splits the court in half. The back lines are the <strong>baselines</strong> and
          the lines along the sides are the <strong>sidelines</strong>. Closer to the net are the
          <strong> service lines</strong>, which together with the <strong>center service line </strong>
          mark out the four <strong>service boxes</strong> where serves must land.
        </p>
        <CourtDiagram />
      </Section>

      <Section id="in-out" title="In or out? The line counts as in">
        <p>
          A ball is <strong>in</strong> if any part of it touches the line, even a sliver. Only a
          ball that lands completely outside the line is out. That is why close calls get so much
          attention.
        </p>
        <p>
          What matters is where the ball first lands. In singles, the singles sidelines are the
          edge, and in doubles the outer sidelines are.
        </p>
        <InOutDiagram />
      </Section>

      <Section id="serving" title="Serving rules">
        <p>
          The server stands behind the baseline, between the center mark and the sideline, and
          must hit the ball into the diagonal service box. They may not step on or over the
          baseline before hitting. The server gets <strong>two attempts</strong> at each point.
        </p>
        <ul>
          <li><strong>Fault:</strong> a serve that lands outside the correct box, hits the net and stays out, or is hit while the server’s foot touches the baseline (a “foot fault”). After a first fault the server takes a second serve.</li>
          <li><strong>Double fault:</strong> two faults in a row. The receiver wins the point.</li>
          <li><strong>Let:</strong> a serve that hits the net and still lands in the right box. It is replayed with no penalty. 
          (Note: Most college matches play a "no let" rule, where the server gets the point if the receiver fails to return it)</li>
          <li><strong>Ace:</strong> a good serve the receiver cannot touch. The server wins the point.</li>
        </ul>
        <ServePathDiagram />
      </Section>

      <Section id="rally" title="Rules during a rally">
        <p>
          After the serve is returned, the ball has to go over the net and land inside the court.
          Each player can let the ball <strong>bounce once</strong> on their side before hitting
          it, or hit it out of the air.
        </p>
        <p>You lose the point if:</p>
        <ul>
          <li>the ball bounces twice on your side before you hit it,</li>
          <li>you hit the ball into the net or out of bounds,</li>
          <li>the ball touches you or your clothing while it is in play,</li>
          <li>you touch the net with your body or racket while the ball is in play,</li>
          <li>you hit the ball twice, or carry it on the strings,</li>
          <li>you reach over the net to hit the ball before it crosses to your side.</li>
        </ul>
        <p>
          After the point has started, a ball that hits the top of the net and drops over is still in play. If something
          unexpected interrupts play, such as a stray ball rolling onto the court, the point is replayed.
        </p>
      </Section>

      <Section id="officials" title="Officials and calls">
        <p>
          At professional matches, the <strong>chair umpire</strong> sits in the high chair beside
          the net. They announce the score, keep the time, and have the final say on rules.
        </p>
        <p>
          <strong>Line judges</strong> stand around the court and call balls “out” or “fault” for
          their line. At many events an electronic line-calling system now does this job instead,
          and announces the calls out loud.
        </p>
        <p>
          Where it is available, players can <strong>challenge</strong> a call and have the replay
          system check it. Each player has a limited number of challenges, so they use them carefully.
        </p>
        <p>
          Umpires can also give <strong>code violations</strong> for things like abusing a racket,
          swearing, or taking too long between points. The usual steps are a warning, then a point
          penalty, then a game penalty.
        </p>
      </Section>
    </LearnLayout>
  )
}

export default Rules