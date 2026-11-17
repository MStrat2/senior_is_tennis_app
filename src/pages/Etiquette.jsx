//
// Etiquette page: how to behave as a spectator.
// Uses the shared LearnLayout. Edit the text, SECTIONS, RECAP and QUIZ below.
//
import LearnLayout, { Section } from '../components/LearnLayout'
import { PointTimelineDiagram } from '../components/Diagrams'

const SECTIONS = [
  { id: 'quiet', title: 'Quiet and cheering' },
  { id: 'moving', title: 'Moving around' },
  { id: 'phones', title: 'Phones and photos' },
  { id: 'dress', title: 'Dress, food and seating' },
  { id: 'respect', title: 'Respect for everyone' },
]

const RECAP = [
  'Stay silent while the ball is in play. Cheer once the point is over.',
  'Find your seat, or leave it, during changeovers and set breaks, not mid-game.',
  'Silence your phone and never use flash.',
  'Wear what is comfortable, keep hats and umbrellas from blocking views, and save noisy snacks for breaks.',
  'Applaud good play from both players, and leave the line calls to the officials.',
]

const QUIZ = [
  {
    q: 'When is the best time to walk to your seat?',
    options: ['During a rally', 'During a changeover or set break', 'While the server is tossing the ball', 'Any time you like'],
    answer: 1,
    explain: 'Moving around is fine during changeovers and set breaks, when the players are sitting down.',
  },
  {
    q: 'It is fine to applaud while the ball is still in play if the rally is exciting.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'Wait until the point is over. Noise during a rally can throw players off and even affect the point.',
  },
  {
    q: 'Flash photography is generally not allowed at tennis matches.',
    options: ['True', 'False'],
    answer: 0,
    explain: 'A sudden flash can distract a player in the middle of a point. Check the event rules for what else is allowed.',
  },
  {
    q: 'When should the crowd be quiet?',
    options: ['From the start of the serve until the point ends', 'Only during the final set', 'Only on second serves', 'Never'],
    answer: 0,
    explain: 'Quiet starts as the server begins their routine and lasts until the point is over.',
  },
  {
    q: 'It is polite to applaud a great shot from the player you are not supporting.',
    options: ['True', 'False'],
    answer: 0,
    explain: 'Appreciating good play from both players is part of tennis culture.',
  },
  {
    q: 'If you think a ball was out, you should shout “out!” to help the umpire.',
    options: ['True', 'False'],
    answer: 1,
    explain: 'Line calls belong to the officials. A shout from the stands can confuse the players.',
  },
]

function Etiquette() {
  return (
    <LearnLayout
      badge="Etiquette"
      title="How to be a great guest in the stands"
      lead="Tennis crowds are quiet by tradition. Here is when to clap, when to hush, and how to enjoy the match without interrupting the match."
      sections={SECTIONS}
      recap={RECAP}
      quiz={QUIZ}
      next={{ to: '/', label: 'Back to the live scoreboard', kicker: 'All done' }}
    >
      <Section id="quiet" title="When to be quiet, and when to cheer">
        <p>
            <strong>A Quick Pointer:</strong> If you are new to tennis, the best way to enjoy a 
            match is to watch and listen. If you are unsure when to cheer, <strong>follow the lead of the
            crowd around you. </strong> If they are quiet, be quiet. If they cheer, join in!  
        </p>
        <p>
          The basic rule: <strong>stay silent while the ball is in play</strong>. Players listen
          to the ball coming off the strings, and a shout can throw off a serve. Quiet starts
          when the server begins their service routine and lasts until the point is over.
        </p>
        <p>
          Once the point ends, cheer all you like. When the players walk back to get ready,
          settle down again.
        </p>
        <p>
          A few things to avoid: calling out during a rally, shouting during the serve toss, and
          calling “out” or “in” on close balls. Those calls belong to the officials.
        </p>
        <PointTimelineDiagram />
      </Section>

      <Section id="moving" title="Moving around the stands">
        <p>
          Walk to or from your seat only during a <strong>changeover</strong> (the break when the
          players sit down after odd-numbered games) or between sets. At many venues, stewards
          will hold you at the entrance during play and let you in when there is a break.
        </p>
        <p>
          The same goes for leaving. If you need to go during a game, wait for the next break.
          When you do move, step quietly, stay low, and try not to block the view of people
          behind you.
        </p>
      </Section>

      <Section id="phones" title="Phones, photos and flash">
        <p>
          Put your phone on <strong>silent</strong> before you sit down. A ringing phone in the
          middle of a point is the quickest way to annoy everyone around you. Take calls away
          from the seating area.
        </p>
        <p>
          <strong>Flash photography is not allowed</strong>, because a sudden flash can distract
          a player. Photos without flash from your seat are usually fine, but rules for video
          and larger cameras vary, so check your ticket or the tournament website.
        </p>
      </Section>

      <Section id="dress" title="Dress, food and seating">
        <p>
          Spectators rarely have a dress code, so wear what is comfortable for the weather.
          Hats and umbrellas are fine, but lower or take them down if they block the view of
          the person behind you. Some premium seating areas have dress guidelines, so check your
          ticket. (Most tend to dress up a bit, but not formal. Collared shirts and athletic wear are common.)
        </p>
        <p>
          Snacks and drinks are welcome in most seating areas, but save crinkly wrappers and big
          bites for changeovers. Take your trash with you or use the bins. Sit in the seat on
          your ticket, and travel light, since bags are usually checked on the way in and may
          have size limits. (Most venues only allow bags as big as purses, and some have a clear-bag rule.)
        </p>
      </Section>

      <Section id="respect" title="Respect for players and fans">
        <p>
          Cheer for great shots, not only for your favorite. Applauding a winner from the player
          you are not backing is considered good manners. Never heckle a player, and keep your
          cheering positive.
        </p>
        <p>
          Do not boo or whistle at calls. The umpire and the players have to concentrate, and
          a calm crowd makes for a better match for everyone.
        </p>
      </Section>
    </LearnLayout>
  )
}

export default Etiquette