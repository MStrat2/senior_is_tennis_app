//
// The quiz "island" at the bottom of each learning page. Shows one question at a time.
// Each question looks like: { q, options: [...], answer: indexOfCorrectOption, explain }
// True/false questions are just questions whose options are ['True', 'False'].
//
import { useState } from 'react'

function Quiz({ title = 'Test yourself', questions }) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[index]
  const answered = picked !== null
  const isLast = index === questions.length - 1

  function choose(i) {
    if (answered) return
    setPicked(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      setFinished(true)
    } else {
      setIndex(index + 1)
      setPicked(null)
    }
  }

  function restart() {
    setIndex(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  const progress = finished
    ? 100
    : ((index + (answered ? 1 : 0)) / questions.length) * 100

  return (
    <section className="quiz">
      <div className="quiz-header">
        <span className="badge">{title}</span>
        {!finished && <span>Question {index + 1} of {questions.length}</span>}
      </div>

      <div className="quiz-progress"><span style={{ width: `${progress}%` }} /></div>

      {finished ? (
        <div className="quiz-result">
          <p className="quiz-score">{score} / {questions.length}</p>
          <p className="quiz-message">
            {score === questions.length
              ? 'Perfect. You are ready for the stands.'
              : score >= questions.length / 2
                ? 'Nice work. A quick re-read of the sections above will fill the gaps.'
                : 'Good start. Scroll back up, then give it another try.'}
          </p>
          <button className="quiz-btn" onClick={restart}>Try again</button>
        </div>
      ) : (
        <>
          <h2 className="quiz-question">{q.q}</h2>

          <div className="quiz-options">
            {q.options.map((option, i) => {
              let state = ''
              if (answered) {
                if (i === q.answer) state = 'correct'
                else if (i === picked) state = 'wrong'
                else state = 'dim'
              }
              return (
                <button
                  key={option}
                  className={`quiz-option ${state}`}
                  onClick={() => choose(i)}
                  disabled={answered}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {answered && (
            <div className={`quiz-feedback ${picked === q.answer ? 'ok' : 'no'}`} role="status">
              <strong>{picked === q.answer ? 'Correct.' : 'Not quite.'}</strong> {q.explain}
            </div>
          )}

          {answered && (
            <button className="quiz-btn" onClick={next}>
              {isLast ? 'See my score' : 'Next question'}
            </button>
          )}
        </>
      )}
    </section>
  )
}

export default Quiz