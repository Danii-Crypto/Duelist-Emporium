import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title = 'Duelist Emporium - Web3 Yu-Gi-Oh Metaverse' }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="Duelist Emporium - Enter the Web3 Yu-Gi-Oh metaverse. Premium digital accessories for the next generation of duelists." />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* Tailwind Custom Config - Web3/Cyberpunk Theme */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'cyber': {
                      'dark': '#0a0a0f',
                      'darker': '#050508',
                      'purple': '#1a0d2e',
                      'blue': '#0d1b2a',
                      'neon-blue': '#00d4ff',
                      'neon-purple': '#b300ff',
                      'neon-pink': '#ff0080',
                      'neon-green': '#00ff41',
                      'gold': '#ffd700',
                      'electric': '#00ffff'
                    }
                  },
                  fontFamily: {
                    'cyber': ['Orbitron', 'monospace'],
                    'matrix': ['Share Tech Mono', 'monospace'],
                    'game': ['Press Start 2P', 'monospace']
                  },
                  animation: {
                    'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
                    'matrix-rain': 'matrix-rain 20s linear infinite',
                    'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite alternate',
                    'card-float': 'card-float 6s ease-in-out infinite',
                    'scan-line': 'scan-line 2s linear infinite'
                  },
                  keyframes: {
                    'glow-pulse': {
                      'from': { boxShadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff' },
                      'to': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' }
                    },
                    'neon-flicker': {
                      '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: '1' },
                      '20%, 24%, 55%': { opacity: '0.4' }
                    },
                    'card-float': {
                      '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
                      '50%': { transform: 'translateY(-20px) rotateY(5deg)' }
                    },
                    'scan-line': {
                      '0%': { transform: 'translateX(-100%)' },
                      '100%': { transform: 'translateX(100%)' }
                    }
                  },
                  backgroundImage: {
                    'cyber-grid': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%2300d4ff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M40 40V20H20V0H0v20h20v20z\"/%3E%3C/g%3E%3C/svg%3E')",
                    'matrix-bg': "linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 30%, rgba(0, 212, 255, 0.1) 70%, transparent 70%)"
                  }
                }
              }
            }
          `
        }} />
        
        {/* Cyberpunk/Gaming Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Share+Tech+Mono&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cyber-darker text-white min-h-screen font-cyber overflow-x-hidden relative">
        {/* Matrix Background Effect */}
        <div className="fixed inset-0 bg-cyber-grid opacity-20 z-0"></div>
        <div className="fixed inset-0 bg-gradient-to-br from-cyber-purple/10 via-transparent to-cyber-blue/10 z-0"></div>
        
        {/* Scan Lines Effect */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-neon-blue/5 to-transparent h-1 animate-scan-line"></div>
        </div>
        
        <div className="relative z-20">
          {children}
        </div>
        
        {/* Scripts */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
        <script src="/static/particles.js"></script>
      </body>
    </html>
  )
})
