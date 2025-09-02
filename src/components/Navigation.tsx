export function Navigation() {
  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <a href="/" className="group flex items-center space-x-4">
              <div className="relative">
                {/* Main Logo Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-110">
                  <i className="fas fa-dragon text-black text-xl group-hover:animate-bounce"></i>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced Logo Text */}
              <div className="flex flex-col">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 tracking-wider group-hover:animate-glow-pulse">
                  DUELIST
                </span>
                <span className="text-sm font-semibold text-slate-300 tracking-widest -mt-1">
                  EMPORIUM
                </span>
              </div>
            </a>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <a 
              href="/" 
              className="group relative px-6 py-3 rounded-2xl font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="/shop" 
              className="group relative px-6 py-3 rounded-2xl font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50"
            >
              <span className="relative z-10">Shop</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Quick Category Links */}
            <div className="relative group">
              <button className="px-6 py-3 rounded-2xl font-semibold text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 flex items-center space-x-2">
                <span>Categories</span>
                <i className="fas fa-chevron-down text-xs group-hover:rotate-180 transition-transform duration-300"></i>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-2">
                  <a href="/shop/single-deck-boxes" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-colors group/item">
                    <i className="fas fa-box text-yellow-400 w-5"></i>
                    <span className="text-slate-300 group-hover/item:text-white font-medium">Single Deck Boxes</span>
                  </a>
                  <a href="/shop/multi-deck-boxes" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-colors group/item">
                    <i className="fas fa-boxes text-purple-400 w-5"></i>
                    <span className="text-slate-300 group-hover/item:text-white font-medium">Multi Deck Boxes</span>
                  </a>
                  <a href="/shop/binders" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-colors group/item">
                    <i className="fas fa-book text-green-400 w-5"></i>
                    <span className="text-slate-300 group-hover/item:text-white font-medium">Binders</span>
                  </a>
                  <a href="/shop/accessories" className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-colors group/item">
                    <i className="fas fa-dice text-blue-400 w-5"></i>
                    <span className="text-slate-300 group-hover/item:text-white font-medium">Accessories</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Side Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button className="group p-3 rounded-2xl text-slate-400 hover:text-yellow-400 hover:bg-slate-800/50 transition-all duration-300">
              <i className="fas fa-search text-lg group-hover:scale-110 transition-transform"></i>
            </button>

            {/* Profile Button */}
            <a href="/profile" className="group p-3 rounded-2xl text-slate-400 hover:text-green-400 hover:bg-slate-800/50 transition-all duration-300">
              <i className="fas fa-user text-lg group-hover:scale-110 transition-transform"></i>
            </a>

            {/* Enhanced Cart Button */}
            <a href="/cart" className="group relative p-3 rounded-2xl text-slate-400 hover:text-yellow-400 hover:bg-slate-800/50 transition-all duration-300">
              <i className="fas fa-shopping-cart text-lg group-hover:scale-110 transition-transform"></i>
              <span 
                id="cart-count" 
                className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-xs flex items-center justify-center font-bold shadow-lg group-hover:animate-bounce"
              >
                0
              </span>
              {/* Cart Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-yellow-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
            </a>

            {/* Mobile Menu Button */}
            <button 
              id="mobile-menu-btn" 
              className="lg:hidden group p-3 rounded-2xl text-slate-400 hover:text-yellow-400 hover:bg-slate-800/50 transition-all duration-300"
            >
              <i className="fas fa-bars text-lg group-hover:scale-110 transition-transform"></i>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div id="mobile-menu" className="lg:hidden hidden border-t border-slate-700/50 py-6">
          <div className="space-y-3">
            {/* Mobile Navigation Links */}
            <a 
              href="/" 
              className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <i className="fas fa-home text-yellow-400 w-5"></i>
              <span className="font-medium">Home</span>
            </a>
            
            <a 
              href="/shop" 
              className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 group"
            >
              <i className="fas fa-shopping-bag text-yellow-400 w-5"></i>
              <span className="font-medium">Shop</span>
            </a>
            
            {/* Mobile Categories */}
            <div className="pt-4 border-t border-slate-700/30">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-4">Categories</h3>
              
              <a href="/shop/single-deck-boxes" className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                <i className="fas fa-box text-yellow-400 w-5"></i>
                <span className="font-medium">Single Deck Boxes</span>
              </a>
              
              <a href="/shop/multi-deck-boxes" className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                <i className="fas fa-boxes text-purple-400 w-5"></i>
                <span className="font-medium">Multi Deck Boxes</span>
              </a>
              
              <a href="/shop/binders" className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                <i className="fas fa-book text-green-400 w-5"></i>
                <span className="font-medium">Binders</span>
              </a>
              
              <a href="/shop/accessories" className="flex items-center space-x-3 py-3 px-4 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300">
                <i className="fas fa-dice text-blue-400 w-5"></i>
                <span className="font-medium">Accessories</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}