export function Navigation() {
  return (
    <nav className="bg-nexus-dark/90 backdrop-blur-md border-b border-nexus-gray/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-lg flex items-center justify-center group-hover:animate-card-glow transition-all">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-white">NexusCard</h1>
                <p className="text-xs text-gray-400">Premium TCG Marketplace</p>
              </div>
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link text-gray-300 hover:text-nexus-accent transition-colors font-medium">
              Home
            </a>
            <div className="relative group">
              <a href="/shop" className="nav-link text-gray-300 hover:text-nexus-accent transition-colors font-medium flex items-center space-x-1">
                <span>Shop</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </a>
              <div className="absolute top-full left-0 mt-1 w-48 bg-nexus-dark border border-nexus-gray rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/shop/sleeves" className="block px-4 py-3 text-sm text-gray-300 hover:text-nexus-accent hover:bg-nexus-gray/20 transition-colors">
                  Card Sleeves
                </a>
                <a href="/shop/playmats" className="block px-4 py-3 text-sm text-gray-300 hover:text-nexus-accent hover:bg-nexus-gray/20 transition-colors">
                  Playmats
                </a>
                <a href="/shop/deck-boxes" className="block px-4 py-3 text-sm text-gray-300 hover:text-nexus-accent hover:bg-nexus-gray/20 transition-colors">
                  Deck Boxes
                </a>
                <a href="/shop/accessories" className="block px-4 py-3 text-sm text-gray-300 hover:text-nexus-accent hover:bg-nexus-gray/20 transition-colors">
                  Accessories
                </a>
                <a href="/shop/storage" className="block px-4 py-3 text-sm text-gray-300 hover:text-nexus-accent hover:bg-nexus-gray/20 transition-colors">
                  Storage
                </a>
              </div>
            </div>
            <a href="/about" className="nav-link text-gray-300 hover:text-nexus-accent transition-colors font-medium">
              About
            </a>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-gray-400 hover:text-nexus-accent transition-colors">
              <i className="fas fa-search text-lg"></i>
            </button>
            
            {/* Profile */}
            <a href="/profile" className="p-2 text-gray-400 hover:text-nexus-accent transition-colors">
              <i className="fas fa-user text-lg"></i>
            </a>
            
            {/* Cart */}
            <a href="/cart" className="relative p-2 text-gray-400 hover:text-nexus-accent transition-colors">
              <i className="fas fa-shopping-bag text-lg"></i>
              <span id="cart-count" className="absolute -top-1 -right-1 w-5 h-5 bg-nexus-accent rounded-full text-xs flex items-center justify-center text-white font-bold">
                0
              </span>
            </a>
            
            {/* Mobile Menu */}
            <button className="md:hidden p-2 text-gray-400 hover:text-nexus-accent transition-colors" id="mobile-menu-btn">
              <i className="fas fa-bars text-lg"></i>
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