export function Navigation() {
  return (
    <nav className="bg-duelist-dark/90 backdrop-blur-md border-b-2 border-duelist-neon-blue/30 sticky top-0 z-50 relative overflow-hidden">
      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-duelist-neon-blue via-duelist-neon-purple to-duelist-accent animate-glow-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Duelist Emporium Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-duelist-neon-blue to-duelist-neon-purple rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg shadow-duelist-neon-blue/50">
                  <i className="fas fa-dragon text-white text-xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line"></div>
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 w-12 h-12 rounded-lg border-2 border-duelist-neon-blue/50 animate-neon-flicker"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-cyber font-bold text-transparent bg-gradient-to-r from-duelist-neon-blue via-duelist-electric to-duelist-neon-purple bg-clip-text">
                  DUELIST EMPORIUM
                </h1>
                <p className="text-xs text-duelist-neon-green font-mono tracking-wider">// PREMIER YU-GI-OH ACCESSORIES //</p>
              </div>
            </a>
          </div>
          
          {/* Cyber Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-duelist-electric hover:text-duelist-neon-blue transition-all duration-300 font-mono relative group">
              <span className="relative z-10">HOME</span>
              <div className="absolute inset-0 bg-duelist-neon-blue/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
            </a>
            <div className="relative group">
              <a href="/shop" className="text-duelist-electric hover:text-duelist-neon-purple transition-all duration-300 font-mono relative group flex items-center space-x-1">
                <span className="relative z-10">ACCESSORIES</span>
                <i className="fas fa-chevron-down text-xs"></i>
                <div className="absolute inset-0 bg-duelist-neon-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </a>
              <div className="absolute top-full left-0 mt-1 w-56 bg-duelist-dark/90 border-2 border-duelist-neon-purple/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-sm">
                <a href="/shop/sleeves" className="block px-4 py-3 text-sm text-duelist-electric hover:text-duelist-neon-blue hover:bg-duelist-neon-blue/10 transition-colors font-mono">
                  › CARD SLEEVES
                </a>
                <a href="/shop/playmats" className="block px-4 py-3 text-sm text-duelist-electric hover:text-duelist-neon-purple hover:bg-duelist-neon-purple/10 transition-colors font-mono">
                  › PLAYMATS
                </a>
                <a href="/shop/deck-boxes" className="block px-4 py-3 text-sm text-duelist-electric hover:text-duelist-neon-green hover:bg-duelist-neon-green/10 transition-colors font-mono">
                  › DECK BOXES
                </a>
                <a href="/shop/accessories" className="block px-4 py-3 text-sm text-duelist-electric hover:text-duelist-accent hover:bg-duelist-accent/10 transition-colors font-mono">
                  › ACCESSORIES
                </a>
                <a href="/shop/storage" className="block px-4 py-3 text-sm text-duelist-electric hover:text-duelist-gold hover:bg-duelist-gold/10 transition-colors font-mono">
                  › STORAGE
                </a>
              </div>
            </div>
            <a href="/about" className="text-duelist-electric hover:text-duelist-neon-green transition-all duration-300 font-mono relative group">
              <span className="relative z-10">ABOUT</span>
              <div className="absolute inset-0 bg-duelist-neon-green/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
            </a>
          </div>
          
          {/* Cyber Controls */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="relative group p-2">
              <i className="fas fa-search text-lg text-duelist-electric group-hover:text-duelist-neon-blue transition-colors"></i>
              <div className="absolute inset-0 bg-duelist-neon-blue/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
            </button>
            
            {/* Profile */}
            <a href="/profile" className="relative group p-2">
              <i className="fas fa-user text-lg text-duelist-electric group-hover:text-duelist-neon-purple transition-colors"></i>
              <div className="absolute inset-0 bg-duelist-neon-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
            </a>
            
            {/* Cart */}
            <a href="/cart" className="relative group p-2">
              <i className="fas fa-shopping-bag text-lg text-duelist-electric group-hover:text-duelist-accent transition-colors"></i>
              <span id="cart-count" className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-duelist-accent to-duelist-gold rounded-full text-xs flex items-center justify-center text-white font-bold border border-duelist-neon-blue/50 shadow-lg shadow-duelist-accent/50">
                0
              </span>
              <div className="absolute inset-0 bg-duelist-accent/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
            </a>
            
            {/* Mobile Menu */}
            <button className="md:hidden relative group p-2" id="mobile-menu-btn">
              <i className="fas fa-bars text-lg text-duelist-electric group-hover:text-duelist-neon-green transition-colors"></i>
              <div className="absolute inset-0 bg-duelist-neon-green/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden border-t border-nexus-gray/30 py-4">
          <div className="space-y-2">
            <a href="/" className="block py-2 text-gray-300 hover:text-nexus-accent transition-colors">Home</a>
            <a href="/shop" className="block py-2 text-gray-300 hover:text-nexus-accent transition-colors">Shop</a>
            <a href="/shop/sleeves" className="block py-2 pl-4 text-gray-400 hover:text-nexus-accent transition-colors">Card Sleeves</a>
            <a href="/shop/playmats" className="block py-2 pl-4 text-gray-400 hover:text-nexus-accent transition-colors">Playmats</a>
            <a href="/shop/deck-boxes" className="block py-2 pl-4 text-gray-400 hover:text-nexus-accent transition-colors">Deck Boxes</a>
            <a href="/shop/accessories" className="block py-2 pl-4 text-gray-400 hover:text-nexus-accent transition-colors">Accessories</a>
            <a href="/about" className="block py-2 text-gray-300 hover:text-nexus-accent transition-colors">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}