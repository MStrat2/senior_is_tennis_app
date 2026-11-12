import { useEffect, useState } from 'react'

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
  }
}

const usable = (x) => x.names[0] && x.names[1] && x.games?.[0]?.length && x.points

const KEY = 'courtside-live-match'
const TTL = 10 * 60 * 1000

function readCache() {
  try {
    const c = JSON.parse(sessionStorage.getItem(KEY))
    if (c && Date.now() - c.t < TTL) return c.data
  } catch {}
  return null
}

export function useLiveMatch() {
  const [match, setMatch] = useState(() => readCache() ?? DEMO)
  const [isLive, setIsLive] = useState(() => readCache() !== null)

  useEffect(() => {
    if (readCache()) return
    let cancelled = false
    fetch('/api/matches')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        const found = (json.data ?? []).map(normalize).find(usable)
        if (!found || cancelled) return
        setMatch(found)
        setIsLive(true)
        try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data: found })) } catch {}
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [])

  return { match, isLive }
}