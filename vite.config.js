import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')   // '' = also read non-VITE_ vars

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/matches': {
          target: 'https://api.livetennisapi.com',
          changeOrigin: true,
          rewrite: () => '/api/public/v1/matches?status=live&limit=20',
          headers: { 'X-API-Key': env.TENNIS_API_KEY },
        },
      },
    },
  }
})


