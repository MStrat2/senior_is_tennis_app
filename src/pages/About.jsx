//
// About page for the tennis app.
// Uses the same LearnLayout as the lesson pages, without a recap or quiz.
//
import LearnLayout, { Section } from '../components/LearnLayout'

const SECTIONS = [
  { id: 'why', title: 'Why this site exists' },
  { id: 'how', title: 'How it works' },
  { id: 'project', title: 'About the project' },
  { id: 'feedback', title: 'Feedback' },
]

function About() {
  return (
    <LearnLayout
      badge="About"
      title="Built for people who are new to the stands"
      lead="Learn Courtside helps first time spectators follow a tennis match without needing to ask what just happened."
      sections={SECTIONS}
      next={{ to: '/scoring', label: 'Start with scoring', kicker: 'Ready to learn?' }}
    >
      <Section id="why" title="Why this site exists">
        <p>
          This site exists because tennis can be a lonely sport. Other sports can invite friends and family,
          because the scoring is easy to follow. Tennis, you are on your own. This site aims to make tennis 
          more welcoming so that spectators can enjoy the match while supporting the people they came to see. 
        </p>
      </Section>

      <Section id="how" title="How it works">
        <p>
          The site has short lessons on <strong>scoring</strong>, <strong>rules</strong>, and
          <strong> etiquette</strong>. Each page ends with a quick quiz so you can check what
          stuck. The scoreboard on the home page shows a real match when one is live.
        </p>
      </Section>

      <Section id="project" title="About the project">
        <p>
          Learn Courtside is a senior independent study project at the College of Wooster, created by myself,
          Maxwell Stratford.
        </p>
        <p>
          Live scores come from the <a 
            href="https://livetennisapi.com/tennis-live-data-api" 
            style={{ textDecoration: 'underline' }}>
            Live Tennis API.
          </a>
        </p>
      </Section>

      <Section id="feedback" title="Feedback">
        <p>
          Found something confusing or wrong? 
          Contact me at maxwellstratford.2@gmail.com
        </p>
      </Section>
    </LearnLayout>
  )
}

export default About