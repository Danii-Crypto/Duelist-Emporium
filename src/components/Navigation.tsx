export function Navigation() {
  return (
    <nav className="bg-duelist-dark/90 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-duelist-accent rounded-lg flex items-center justify-center">
                <i className="fas fa-dragon text-black text-lg"></i>
              </div>
              <span className="text-xl font-bold text-duelist-accent tracking-wider">
                DUELIST EMPORIUM
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white hover:text-duelist-accent transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="/shop" 
              className="text-white hover:text-duelist-accent transition-colors font-medium"
            >
              Shop
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:text-duelist-accent transition-colors p-2">
              <i className="fas fa-search text-lg"></i>
            </button>

            {/* Profile Icon */}
            <a href="/profile" className="text-white hover:text-duelist-accent transition-colors p-2">
              <i className="fas fa-user text-lg"></i>
            </a>

            {/* Cart Icon */}
            <a href="/cart" className="relative text-white hover:text-duelist-accent transition-colors p-2">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span 
                id="cart-count" 
                className="absolute -top-1 -right-1 w-5 h-5 bg-duelist-accent text-black rounded-full text-xs flex items-center justify-center font-bold"
              >
                0
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              id="mobile-menu-btn" 
              className="md:hidden text-white hover:text-duelist-accent transition-colors p-2"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden hidden border-t border-gray-700/50 py-4">
          <div className="space-y-2">
            <a 
              href="/" 
              className="block py-2 text-white hover:text-duelist-accent transition-colors"
            >
              Home
            </a>
            <a 
              href="/shop" 
              className="block py-2 text-white hover:text-duelist-accent transition-colors"
            >
              Shop
            </a>
            <a 
              href="/about" 
              className="block py-2 text-white hover:text-duelist-accent transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}