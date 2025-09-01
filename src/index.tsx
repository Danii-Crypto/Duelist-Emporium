import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { ProfilePage } from './pages/ProfilePage'
import { AboutPage } from './pages/AboutPage'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Use renderer for all routes
app.use(renderer)

// Page Routes
app.get('/', (c) => {
  return c.render(<HomePage />)
})

app.get('/shop', (c) => {
  return c.render(<ShopPage />)
})

app.get('/shop/:category', (c) => {
  const category = c.req.param('category')
  return c.render(<ShopPage category={category} />)
})

app.get('/product/:id', (c) => {
  const productId = c.req.param('id')
  return c.render(<ProductPage productId={productId} />)
})

app.get('/cart', (c) => {
  return c.render(<CartPage />)
})

app.get('/profile', (c) => {
  return c.render(<ProfilePage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

// API Routes
app.get('/api/products', (c) => {
  const products = [
    {
      id: 1,
      name: 'Dragon Shield Nexus Sleeves',
      category: 'sleeves',
      categoryDisplay: 'Card Sleeves',
      price: 15.99,
      originalPrice: 19.99,
      rarity: 'Ultra Rare',
      image: '/static/images/dragon-shield-sleeves.jpg',
      description: 'Premium holographic card sleeves with quantum-lock technology',
      features: ['Holographic finish', 'Quantum protection', 'Tournament legal', '100 count'],
      stats: { protection: 95, durability: 90, style: 98 }
    },
    {
      id: 2,
      name: 'Mystic Realm Playmat',
      category: 'playmats',
      categoryDisplay: 'Playmats',
      price: 34.99,
      originalPrice: 44.99,
      rarity: 'Secret Rare',
      image: '/static/images/playmat.jpg',
      description: 'Limited edition tournament playmat with AR compatibility',
      features: ['AR enhanced', 'Tournament size', 'Non-slip base', 'Limited edition'],
      stats: { quality: 100, design: 95, functionality: 92 }
    },
    {
      id: 3,
      name: 'Legendary Vault Deck Box',
      category: 'deck-boxes',
      categoryDisplay: 'Deck Boxes',
      price: 29.99,
      originalPrice: 39.99,
      rarity: 'Legendary',
      image: '/static/images/deck-box.jpg',
      description: 'Biometric-secured deck storage with holographic display',
      features: ['Biometric lock', 'LED display', 'Double deck capacity', 'Magnetic closure'],
      stats: { security: 100, capacity: 85, style: 93 }
    },
    {
      id: 4,
      name: 'Quantum Dice Set',
      category: 'accessories',
      categoryDisplay: 'Accessories',
      price: 24.99,
      originalPrice: 29.99,
      rarity: 'Rare',
      image: '/static/images/dice-set.jpg',
      description: 'Digital dice with blockchain randomization technology',
      features: ['Blockchain verified', 'LED indicators', 'Wireless charging', 'Tournament approved'],
      stats: { technology: 88, reliability: 95, innovation: 92 }
    },
    {
      id: 5,
      name: 'Celestial Binder',
      category: 'storage',
      categoryDisplay: 'Storage',
      price: 49.99,
      originalPrice: 64.99,
      rarity: 'Ultra Rare',
      image: '/static/images/binder.jpg',
      description: 'Premium holographic card binder with digital inventory tracking',
      features: ['Digital tracking', 'Holographic pages', '500+ card capacity', 'RFID enabled'],
      stats: { capacity: 98, organization: 94, innovation: 96 }
    },
    {
      id: 6,
      name: 'Neon Genesis Tokens',
      category: 'accessories',
      categoryDisplay: 'Accessories',
      price: 18.99,
      originalPrice: 22.99,
      rarity: 'Common',
      image: '/static/images/tokens.jpg',
      description: 'Holographic token set with customizable LED effects',
      features: ['LED customization', 'Acrylic material', '20 token variety', 'Wireless sync'],
      stats: { versatility: 87, visibility: 91, durability: 89 }
    }
  ]
  
  return c.json({ products })
})

app.get('/api/products/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  // This would normally query a database
  const products = [
    {
      id: 1,
      name: 'Dragon Shield Nexus Sleeves',
      category: 'sleeves',
      categoryDisplay: 'Card Sleeves',
      price: 15.99,
      originalPrice: 19.99,
      rarity: 'Ultra Rare',
      image: '/static/images/dragon-shield-sleeves.jpg',
      description: 'Premium holographic card sleeves with quantum-lock technology',
      features: ['Holographic finish', 'Quantum protection', 'Tournament legal', '100 count'],
      stats: { protection: 95, durability: 90, style: 98 },
      inStock: true,
      quantity: 47
    }
  ]
  
  const product = products.find(p => p.id === id)
  if (!product) {
    return c.json({ error: 'Product not found' }, 404)
  }
  
  return c.json({ product })
})

export default app
