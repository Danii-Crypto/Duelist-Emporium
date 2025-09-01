import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './components/HomePage'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all routes
app.use(renderer)

// Homepage
app.get('/', (c) => {
  return c.render(<HomePage />)
})

// API Routes
app.get('/api/products', (c) => {
  // Mock product data for now
  const products = [
    {
      id: 1,
      name: 'Dragon Shield Matte Sleeves',
      category: 'Card Sleeves',
      price: 12.99,
      image: '/static/images/dragon-shield-sleeves.jpg',
      description: 'Premium matte card sleeves for ultimate protection'
    },
    {
      id: 2,
      name: 'Ultimate Guard PlayMat',
      category: 'Playmats',
      price: 24.99,
      image: '/static/images/playmat.jpg',
      description: 'Professional tournament-grade playmat'
    },
    {
      id: 3,
      name: 'Deck Box Pro',
      category: 'Deck Boxes',
      price: 19.99,
      image: '/static/images/deck-box.jpg',
      description: 'Secure storage for your valuable deck'
    }
  ]
  
  return c.json({ products })
})

export default app
