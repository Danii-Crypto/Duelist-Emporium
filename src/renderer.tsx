import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title = 'Duelist Emporium - Premier Yu-Gi-Oh Accessories' }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="Duelist Emporium - The premier destination for serious Yu-Gi-Oh players. Find premium card sleeves, playmats, deck boxes, and accessories." />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/styles.css" rel="stylesheet" />
        
        {/* Tailwind Custom Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'yugioh': {
                      'dark': '#1a1a2e',
                      'purple': '#16213e',
                      'gold': '#e94560',
                      'light': '#0f3460'
                    }
                  },
                  fontFamily: {
                    'heading': ['Cinzel', 'serif'],
                    'body': ['Inter', 'sans-serif']
                  }
                }
              }
            }
          `
        }} />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-900 text-white min-h-screen font-body">
        {children}
        
        {/* Scripts */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
