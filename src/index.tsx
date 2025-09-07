import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrderConfirmationPage } from './pages/OrderConfirmationPage'
import { ProfilePage } from './pages/ProfilePage'
import { AboutPage } from './pages/AboutPage'
import { EmailService, formatOrderDate } from './services/emailService'
import { fallbackProducts } from './data/fallbackProducts'

type Bindings = {
  DB?: D1Database
  RESEND_API_KEY?: string
  OWNER_EMAIL?: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Helper function to fetch and transform products
async function fetchProducts(env: { DB?: D1Database }, category?: string) {
  try {
    // Try to use database if available
    if (env.DB) {
      let query = 'SELECT * FROM products'
      let params: any[] = []
      
      if (category) {
        query += ' WHERE category = ?'
        params = [category]
      }
      
      query += ' ORDER BY created_at DESC'
      
      const result = await env.DB.prepare(query).bind(...params).all()
      
      // Transform database results to match frontend format
      const products = result.results.map((product: any) => ({
        id: product.id,
        name: product.name,
        category: product.category,
        categoryDisplay: product.category.split('-').map((word: string) => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        price: product.price,
        rarity: product.price >= 40 ? 'Epic' : product.price >= 25 ? 'Ultra Rare' : 'Rare',
        image: product.image_url,
        description: product.description,
        features: ['Tournament Grade', 'Premium Materials', 'Professional Quality', 'Secure Storage'],
        stats: { protection: 95, shuffle: 92, durability: 88 },
        inStock: product.stock_quantity > 0,
        quantity: product.stock_quantity,
        theme: product.theme,
        character_name: product.character_name
      }))
      
      return products
    }
  } catch (error) {
    console.error('Database error, using fallback products:', error)
  }

  // Fallback to static products if database is unavailable
  let products = [...fallbackProducts]
  
  if (category) {
    products = products.filter(product => product.category === category)
  }
  
  return products
}

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

app.get('/shop', async (c) => {
  const { env } = c
  const products = await fetchProducts(env)
  return c.render(<ShopPage products={products} />)
})

app.get('/shop/:category', async (c) => {
  const category = c.req.param('category')
  const validCategories = [
    'single-deck-boxes',
    'multi-deck-boxes', 
    'binders',
    'card-sleeves',
    'playmats',
    'storage',
    'booster-cases',
    'accessories'
  ]
  
  if (!validCategories.includes(category)) {
    return c.redirect('/shop')
  }
  
  const { env } = c
  const products = await fetchProducts(env, category)
  return c.render(<ShopPage category={category} products={products} />)
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

app.get('/checkout', (c) => {
  return c.render(<CheckoutPage />)
})

app.get('/order-confirmation/:orderNumber', (c) => {
  const orderNumber = c.req.param('orderNumber')
  return c.render(<OrderConfirmationPage orderNumber={orderNumber} />)
})

// API Routes
app.get('/api/products', async (c) => {
  const { env } = c
  const category = c.req.query('category')
  
  try {
    const products = await fetchProducts(env, category)
    return c.json({ products })
  } catch (error) {
    console.error('Database error:', error)
    return c.json({ error: 'Failed to fetch products' }, 500)
  }
})



// Individual product API endpoint - with fallback support
app.get('/api/products/:id', async (c) => {
  const { env } = c;
  const id = parseInt(c.req.param('id'));
  
  try {
    // Try database first if available
    if (env.DB) {
      const result = await env.DB.prepare('SELECT * FROM products WHERE id = ?').bind(id).first();
      
      if (result) {
        // Transform database result to match frontend format
        const product = {
          id: result.id,
          name: result.name,
          category: result.category,
          categoryDisplay: result.category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          price: result.price,
          rarity: result.price >= 40 ? 'Epic' : result.price >= 25 ? 'Ultra Rare' : 'Rare',
          image: result.image_url,
          description: result.description,
          features: ['Tournament Grade', 'Premium Materials', 'Professional Quality', 'Secure Storage'],
          stats: { protection: 95, shuffle: 92, durability: 88 },
          inStock: result.stock_quantity > 0,
          quantity: result.stock_quantity,
          theme: result.theme,
          character_name: result.character_name
        };
        
        return c.json({ product });
      }
    }
  } catch (error) {
    console.error('Database error, using fallback:', error);
  }

  // Fallback to static products
  const product = fallbackProducts.find(p => p.id === id);
  
  if (!product) {
    return c.json({ error: 'Product not found' }, 404);
  }
  
  return c.json({ product });
})

// Order submission API
app.post('/api/orders', async (c) => {
  const { env } = c
  
  try {
    const body = await c.req.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      country,
      orderNotes,
      cartItems,
      subtotal,
      shipping,
      total
    } = body

    // Generate unique order number
    const orderNumber = 'DE' + Date.now().toString().slice(-8) + Math.random().toString(36).substring(2, 5).toUpperCase()
    
    // Prepare customer name and shipping address
    const customerName = `${firstName} ${lastName}`
    const shippingAddress = `${address}\n${city}, ${state} ${zipCode}\n${country}`
    
    // Insert order into database
    const result = await env.DB.prepare(`
      INSERT INTO orders (
        order_number, customer_name, customer_email, customer_phone,
        shipping_address, order_notes, order_items, subtotal, shipping_cost, total
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      orderNumber,
      customerName,
      email,
      phone || null,
      shippingAddress,
      orderNotes || null,
      JSON.stringify(cartItems),
      subtotal,
      shipping,
      total
    ).run()

    if (!result.success) {
      throw new Error('Failed to create order')
    }

    // Send email notifications
    try {
      // Initialize email service with environment variables
      const resendApiKey = env.RESEND_API_KEY
      const ownerEmail = env.OWNER_EMAIL
      
      if (resendApiKey && ownerEmail) {
        const emailService = new EmailService(resendApiKey, ownerEmail)
        
        // Prepare order details for email
        const orderDetails = {
          orderNumber,
          customerName,
          email,
          phone,
          shippingAddress,
          orderNotes,
          cartItems,
          subtotal,
          shipping,
          total,
          orderDate: formatOrderDate(new Date())
        }

        // Send customer confirmation email
        const customerEmailSent = await emailService.sendCustomerConfirmation(orderDetails)
        
        // Send owner notification email
        const ownerEmailSent = await emailService.sendOwnerNotification(orderDetails)
        
        console.log('Email notifications:', {
          orderNumber,
          customerEmailSent,
          ownerEmailSent,
          customerEmail: email,
          ownerEmail
        })
      } else {
        console.log('Email service not configured - missing RESEND_API_KEY or OWNER_EMAIL')
      }
    } catch (emailError) {
      // Don't fail the order if email fails
      console.error('Email notification error:', emailError)
    }

    return c.json({
      success: true,
      orderNumber,
      message: 'Order submitted successfully'
    })

  } catch (error) {
    console.error('Order submission error:', error)
    return c.json({ 
      success: false, 
      error: 'Failed to submit order. Please try again.' 
    }, 500)
  }
})



export default app
