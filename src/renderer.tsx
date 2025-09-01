import { jsxRenderer } from 'hono/jsx-renderer'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export const renderer = jsxRenderer(({ children, title = 'Duelist Emporium - Premier Yu-Gi-Oh Accessories' }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="Duelist Emporium has been the premier destination for serious Yu-Gi-Oh players. Premium accessories for every card, every tournament, every duelist." />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* Tailwind Custom Config - Duelist Emporium Theme */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'duelist': {
                      'dark': '#1a1a2e',
                      'darker': '#16213e',
                      'purple': '#7209b7',
                      'blue': '#0f3460',
                      'accent': '#fddb3a',
                      'gold': '#fddb3a',
                      'yellow': '#fddb3a',
                      'dark-purple': '#16213e',
                      'light-purple': '#533483'
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
                    'cyber': ['Orbitron', 'sans-serif'],
                    'display': ['Exo 2', 'sans-serif'],
                    'mono': ['Share Tech Mono', 'monospace']
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
        
        {/* Cyber Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@100;200;300;400;500;600;700;800;900&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-duelist-dark via-duelist-darker to-duelist-purple text-white min-h-screen font-sans antialiased overflow-x-hidden">
        {/* Matrix Background Pattern */}
        <div className="fixed inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300d4ff' fill-opacity='0.05'%3E%3Cpath d='M40 40V20H20V0H0v20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Animated Scan Lines */}
        <div className="fixed inset-0 z-5 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-duelist-neon-blue/5 to-transparent h-1 animate-scan-line"></div>
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
