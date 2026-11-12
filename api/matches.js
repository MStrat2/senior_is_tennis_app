//
// Fetches live matches from the Live Tennis API and returns them as JSON. 
// This is a serverless function that runs on the server side, so it can 
// securely use the API key without exposing it to the client.
// It also sets cache headers to allow caching the response for 20 seconds,
// and allows stale content to be used while revalidating.
//
export default async function handler(req, res) {
  const r = await fetch(
    'https://api.livetennisapi.com/api/public/v1/matches?status=live&limit=20',
    { headers: { 'X-API-Key': process.env.TENNIS_API_KEY } }
  )
  if (r.ok) res.setHeader('Cache-Control', 's-maxage=20, stale-while-revalidate=20')
    res.status(r.status).json(await r.json())
}