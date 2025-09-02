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
        
        {/* Enhanced Tailwind Custom Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'duelist': {
                      'dark': '#0f172a',
                      'darker': '#020617',
                      'purple': '#7c3aed',
                      'blue': '#1e40af',
                      'accent': '#fbbf24',
                      'gold': '#f59e0b',
                      'yellow': '#fde047',
                      'dark-purple': '#581c87',
                      'light-purple': '#8b5cf6'
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
                    'display': ['Inter', 'Exo 2', 'sans-serif'],
                    'mono': ['JetBrains Mono', 'Share Tech Mono', 'monospace']
                  },
                  animation: {
                    'card-glow': 'card-glow 0.4s ease-out forwards',
                    'float': 'float 4s ease-in-out infinite',
                    'bounce-slow': 'bounce 2s infinite',
                    'pulse-soft': 'pulse 3s ease-in-out infinite',
                    'slide-in': 'slide-in 0.5s ease-out forwards',
                    'scale-in': 'scale-in 0.3s ease-out forwards',
                    'gradient-shift': 'gradient-shift 3s ease infinite',
                    'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
                  },
                  keyframes: {
                    'card-glow': {
                      'from': { transform: 'translateY(0) scale(1)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' },
                      'to': { transform: 'translateY(-8px) scale(1.02)', boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)' }
                    },
                    'float': {
                      '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                      '33%': { transform: 'translateY(-8px) rotate(1deg)' },
                      '66%': { transform: 'translateY(-4px) rotate(-1deg)' }
                    },
                    'pulse-soft': {
                      '0%, 100%': { opacity: '1' },
                      '50%': { opacity: '0.7' }
                    },
                    'slide-in': {
                      '0%': { transform: 'translateX(-100%)', opacity: '0' },
                      '100%': { transform: 'translateX(0)', opacity: '1' }
                    },
                    'scale-in': {
                      '0%': { transform: 'scale(0.95)', opacity: '0' },
                      '100%': { transform: 'scale(1)', opacity: '1' }
                    },
                    'gradient-shift': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '50%': { backgroundPosition: '100% 50%' },
                      '100%': { backgroundPosition: '0% 50%' }
                    },
                    'glow-pulse': {
                      '0%, 100%': { 
                        boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                        textShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
                      },
                      '50%': { 
                        boxShadow: '0 0 30px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.2)',
                        textShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
                      }
                    }
                  },
                  backdropBlur: {
                    'xs': '2px',
                  }
                }
              }
            }
          `
        }} />
        
        {/* Enhanced Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen font-display antialiased overflow-x-hidden">
        {/* Enhanced Background Pattern */}
        <div className="fixed inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-5">
          <div className="absolute top-20 left-10 w-16 h-24 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg opacity-10 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-12 h-18 bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg opacity-15 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-14 h-20 bg-gradient-to-b from-red-400 to-pink-500 rounded-lg opacity-12 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-10 h-14 bg-gradient-to-b from-green-400 to-emerald-500 rounded-lg opacity-8 animate-float" style={{ animationDelay: '3s' }}></div>
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