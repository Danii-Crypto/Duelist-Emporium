import { jsxRenderer } from 'hono/jsx-renderer'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export const renderer = jsxRenderer(({ children, title = 'NexusCard - Premium TCG Marketplace' }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="NexusCard - The ultimate Web3 TCG marketplace. Discover rare cards, premium accessories, and digital collectibles." />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* Tailwind Custom Config - TCG Web3 Theme */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'nexus': {
                      'black': '#0c0c0c',
                      'dark': '#1a1a1a',
                      'gray': '#2a2a2a',
                      'accent': '#ff6b35',
                      'gold': '#ffd700',
                      'rare': '#9d4edd',
                      'epic': '#e63946',
                      'legendary': '#f77f00',
                      'mythic': '#06ffa5'
                    },
                    'card': {
                      'common': '#94a3b8',
                      'uncommon': '#22c55e',
                      'rare': '#3b82f6',
                      'epic': '#8b5cf6',
                      'legendary': '#f59e0b',
                      'mythic': '#10b981'
                    }
                  },
                  fontFamily: {
                    'gaming': ['Rajdhani', 'sans-serif'],
                    'display': ['Exo 2', 'sans-serif'],
                    'mono': ['Fira Code', 'monospace']
                  },
                  animation: {
                    'card-glow': 'card-glow 2s ease-in-out infinite alternate',
                    'float': 'float 3s ease-in-out infinite',
                    'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
                    'slide-in': 'slide-in 0.5s ease-out'
                  },
                  keyframes: {
                    'card-glow': {
                      'from': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
                      'to': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 107, 53, 0.3)' }
                    },
                    'float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' }
                    },
                    'pulse-soft': {
                      '0%, 100%': { opacity: '1' },
                      '50%': { opacity: '0.7' }
                    },
                    'slide-in': {
                      '0%': { transform: 'translateX(-100%)', opacity: '0' },
                      '100%': { transform: 'translateX(0)', opacity: '1' }
                    }
                  }
                }
              }
            }
          `
        }} />
        
        {/* Gaming Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:wght@100;200;300;400;500;600;700;800;900&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-nexus-black text-white min-h-screen font-gaming antialiased">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Scripts */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
