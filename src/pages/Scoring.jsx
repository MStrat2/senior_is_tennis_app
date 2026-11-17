//
// Scoring page: points, deuce, games and sets, tiebreaks, match formats, and who serves from where.
// Uses the shared LearnLayout. Edit the text, SECTIONS, RECAP and QUIZ below.
//
import LearnLayout, { Section } from '../components/LearnLayout'
import { DeuceFlowDiagram, ServeSideDiagram } from '../components/Diagrams'

const SECTIONS = [
  { id: 'points', title: 'Points' },
  { id: 'deuce', title: 'Deuce and advantage' },
  { id: 'games-sets', title: 'Games and sets' },
  { id: 'tiebreaks', title: 'Tiebreaks' },
  { id: 'formats', title: 'Match formats' },
  { id: 'serving', title: 'Who serves, and from where' },
]

const RECAP = [
  'Points go love (zero), 15, 30, 40. The server’s score is called first.',
  'At 40–40 it is deuce. You must win two points in a row to take the game.',
  'A set is first to six games, winning by two. At 6–6 a tiebreak usually decides it.',
  'Tiebreak points are counted 1, 2, 3. First to 7, leading by two, wins.',
  'Best of three means first to win two sets. Best of five means first to win three.',
  'The server starts on the right, swaps sides every point, and always serves diagonally.',
]

const QUIZ = [
  {
    q: 'What does “love” mean in tennis scoring?',
    options: ['Zero', 'One point', 'A tied score', 'A won game'],
    answer: 0,
    explain: '“Love” is the word for zero. A score of 15–love means the server has one point and the opponent has none.',
  },
  {
    q: 'At deuce (40–40), the next point wins the game.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'From deuce a player needs two points in a row: the first gives them advantage, the second wins the game.',
  },
  {
    q: 'A set is tied 5–5 in games. Which result ends the set without a tiebreak?',
    options: ['6–5', '7–5', '6–6', '7–6'],
    answer: 1,
    explain: 'A set needs six games and a two-game lead, so 7–5 ends it. At 6–5 play continues, and 6–6 leads to a tiebreak.',
  },
  {
    q: 'In a tiebreak, points are counted 15, 30, 40.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'Tiebreak points are counted 1, 2, 3 and so on. The first player to 7, leading by two, wins.',
  },
  {
    q: 'How many sets must a player win to take a best-of-five match?',
    options: ['2', '3', '4', '5'],
    answer: 1,
    explain: 'In a best-of-five match the first player to win three sets wins the match.',
  },
  {
    q: 'A new game starts. After the first point, which side does the server stand on for the second point?',
    options: ['The right side again', 'The left side', 'Whichever they like', 'The side the receiver picks'],
    answer: 1,
    explain: 'The server starts each game on the right and swaps sides after every point, so the second point is served from the left.',
  },
]

function Scoring() {
  return (
    <LearnLayout
      badge="Scoring"
      title="Never lose track of the score again"
      lead="Tennis scoring sounds like a secret code. Here is how to read it one piece at a time, with no tennis knowledge needed."
      sections={SECTIONS}
      recap={RECAP}
      quiz={QUIZ}
      next={{ to: '/rules', label: 'The rules of the game' }}
    >
      <Section id="points" title="Points: love, 15, 30, 40">
        <p>
          A tennis match is built from small pieces. The smallest is the <strong>point</strong>.
          Win at least four points, and be ahead by two, and you win a <strong>game</strong>.
          Win enough games and you win a <strong>set</strong>. Win enough sets and you win
          the <strong>match</strong>.
        </p>
        <p>
          Inside a game, points are not counted 1, 2, 3, 4. They go <strong>love</strong> (zero),
          <strong> 15</strong>, <strong>30</strong>, <strong>40</strong>, and then the game is won.
        </p>
        <p>
          The server’s score is always said first. So <strong>30–15</strong> means the server
          has won two points and the opponent has won one. “Love–40” means the server has none
          and the receiver has three.
        </p>
      </Section>

      <Section id="deuce" title="Deuce and advantage">
        <p>
          If both players reach 40 (40 all), the score is <strong>deuce</strong>. From deuce, a player
          must win two points in a row to win the game.
        </p>
        <p>
          The first point won after deuce gives that player the <strong>advantage</strong>,
          often shortened to “ad”. If they win the next point too, the game is over. If they
          lose it, the score goes back to deuce. This can repeat many times, which is why some
          games go on for ages.
        </p>
        <DeuceFlowDiagram />
      </Section>

      <Section id="games-sets" title="Games and sets">
        <p>
          A <strong>set</strong> is a race to six games, but you must win by two. So 6–4 wins a
          set, and so does 7–5. At 6–5 play continues: if the leader wins the next game it is
          7–5 and the set is over, but if the other player brings it to 6–6, a tiebreak decides it.
        </p>
        <p>
          Scores are written one set at a time. “6–4, 3–6, 7–5” is a match that went three sets.
          On the scoreboard, each column (S1, S2, S3) is a set, and the numbers in it are the
          games each player won.
        </p>
      </Section>

      <Section id="tiebreaks" title="Tiebreaks">
        <p>
          When a set reaches six games each, most tournaments settle it with a
          <strong> tiebreak</strong>, a mini-game with its own counting. Points are counted
          normally here: 1, 2, 3 and so on, not 15, 30, 40.
        </p>
        <p>
          The first player to reach <strong>7 points</strong> wins the tiebreak, as long as they
          lead by two. If it reaches 6–6 in the tiebreak, play continues until someone is two
          points clear. The winner takes the set 7–6, usually with the tiebreak score shown in parentheses.
        </p>
        <p>
          Scores often show the loser’s tiebreak points in parentheses, so <strong>7–6(4)</strong>
          means the loser scored 4 points in the tiebreak.
        </p>
        <p>
          Serving works differently too. One player serves the first point, then their opponent
          serves two points, and from then on the server changes every two points. Players swap
          ends after every six points.
        </p>
        <p>
          Not every event does this. At some tournaments the final set uses a longer 10-point
          tiebreak, and a few play on with no tiebreak at all, so a final set can run very long.
        </p>
      </Section>

      <Section id="formats" title="Match formats:">
        <p>
          Matches are described by the most sets they could last. In a <strong>best-of-three </strong>
          match, the first player to win <strong>two sets</strong> wins. In a
          <strong> best-of-five</strong> match, you need <strong>three sets</strong>. In both cases
          the winner needs more than half of the sets.
        </p>
        <div className="table-wrap">
          <table className="learn-table">
            <thead>
              <tr>
                <th>Format</th>
                <th>How you win</th>
                <th>Where you will see it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Best of 3 sets</td>
                <td>First to win 2 sets</td>
                <td>Most professional matches, including the women’s tour and most men’s events outside the Grand Slams</td>
              </tr>
              <tr>
                <td>Best of 5 sets</td>
                <td>First to win 3 sets</td>
                <td>Men’s matches at the four Grand Slam tournaments</td>
              </tr>
              <tr>
                <td>Short sets or pro set</td>
                <td>Sets to 4 games, or one set to 8 games</td>
                <td>Club play, college tennis, exhibitions and some doubles</td>
              </tr>
              <tr>
                <td>Match tiebreak</td>
                <td>Replaces the final set: first to 10 points, leading by two</td>
                <td>Many doubles matches and some mixed events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="serving" title="Who serves, and from where">
        <p>
          One player serves for a whole game, then the roles swap, so the server changes every
          game. The server stands behind the baseline and serves diagonally into the opposite
          service box.
        </p>
        <p>
          They start each game on the <strong>right</strong> side of the court and swap sides
          after every point. A handy rule: serve from the right when the total points played so
          far is even (0–0, 15–15, 40–40), and from the left when it is odd (15–0, 30–15). The
          right side is called the <strong>deuce court</strong> and the left side is the
          <strong> ad court</strong>, because deuce and advantage points are played from there.
        </p>
        <ServeSideDiagram />
        <p>
          Players also swap ends of the court after every odd-numbered game (the first, third,
          fifth and so on), which is when you see them sit down for a short break. The player who
          was receiving in the game just finished will serve the next one.
        </p>
      </Section>
    </LearnLayout>
  )
}

export default Scoring