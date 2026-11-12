import { useEffect, useRef, useState } from 'react'

export const DEMO = {
  id: 'demo',
  names: ['A. Rivera', 'J. Okafor'],
  games: [[6, 4], [3, 5]],
  points: ['30', '40'],
  server: 2,
  isTiebreak: false,
}

function normalize(m) {
  const s = m.score ?? m
  return {
    id: m.id,
    names: [m.players?.p1?.name, m.players?.p2?.name],
    games: s.games,
    points: s.points,
    server: s.server ?? null,
    isTiebreak: s.is_tiebreak ?? false,
    tournament: m.tournament,
    ageSeconds: s.age_seconds ?? null,
    stale: s.stale ?? false,
  }
}

const usable = (x) => x.names[0] && x.names[1] && x.games?.[0]?.length && x.points

const POLL_MS = 30_000        // how often to re-check the API
const STALE_MS = 8 * 60_000   // switch matches after this long with no score change

function readCache() {
  try {
    const c = JSON.parse(sessionStorage.getItem(KEY))
    if (c && Date.now() - c.t < TTL) return c.data
  } catch {}
  return null
}

export function useLiveMatch() {
  const [match, setMatch] = useState(DEMO)
  const [isLive, setIsLive] = useState(false)
  const currentId = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function poll() {
      try {
        const r = await fetch('/api/matches')
        if (!r.ok || cancelled) return

        const list = ((await r.json()).data ?? [])
          .map(normalize)
          .filter(usable)
          .map((m) => ({ ...m, age: (m.ageSeconds ?? Infinity) * 1000 }))

        const current = list.find((m) => m.id === currentId.current)
        let next = current
        if (!current || current.age > STALE_MS) {
          next =
            list.filter((m) => m.age <= STALE_MS).sort((a, b) => a.age - b.age)[0]
            ?? current
        }
        if (!next || cancelled) return

        currentId.current = next.id
        setMatch(next)
        setIsLive(true)
      } catch {}
    }

    poll()
    const t = setInterval(poll, POLL_MS)
    return () => { cancelled = true; clearInterval(t) }
  }, [])

  return { match, isLive }
}