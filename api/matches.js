export default async function handler(req, res) {
  const r = await fetch(
    'https://api.livetennisapi.com/api/public/v1/matches?status=live&limit=20',
    { headers: { 'X-API-Key': process.env.TENNIS_API_KEY } }
  )
  if (r.ok) res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=900')
  res.status(r.status).json(await r.json())
}