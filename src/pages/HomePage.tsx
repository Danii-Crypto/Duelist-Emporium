export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-duelist-dark via-duelist-darker to-duelist-purple py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-duelist-accent mb-6 animate-glow-pulse">
            DUELIST EMPORIUM
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Duelist Emporium has been the premier destination for serious Yu-Gi-Oh players. 
            We understand that every card matters, every tournament counts, and every duelist deserves the finest accessories.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            From casual collectors to world championship competitors, our carefully curated selection ensures 
            you'll find exactly what you need to take your game to the next level.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/shop" 
              className="bg-duelist-accent hover:bg-duelist-gold text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-duelist-accent/30 transform hover:scale-105"
            >
              <i className="fas fa-shopping-bag mr-2"></i>
              Browse Collection
            </a>
            <a 
              href="/about" 
              className="border-2 border-duelist-accent text-duelist-accent hover:bg-duelist-accent hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              <i className="fas fa-info-circle mr-2"></i>
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-duelist-accent mb-2">500+</div>
              <div className="text-gray-400">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-duelist-accent mb-2">15K+</div>
              <div className="text-gray-400">Happy Duelists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-duelist-accent mb-2">4.9★</div>
              <div className="text-gray-400">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-duelist-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover championship-grade accessories for every aspect of your dueling journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Single Deck Boxes */}
            <a href="/shop/single-deck-boxes" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-box text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Single Deck Boxes</h3>
              <p className="text-gray-400 text-sm mb-3">Secure storage for tournament decks</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Multi Deck Boxes */}
            <a href="/shop/multi-deck-boxes" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-boxes text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Multi Deck Boxes</h3>
              <p className="text-gray-400 text-sm mb-3">Premium storage for multiple decks</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Binders */}
            <a href="/shop/binders" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-light-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-book text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Binders</h3>
              <p className="text-gray-400 text-sm mb-3">Organize and display your collection</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Card Sleeves */}
            <a href="/shop/card-sleeves" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-layer-group text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Card Sleeves</h3>
              <p className="text-gray-400 text-sm mb-3">Premium protection for your cards</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          </div>
          
          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Storage */}
            <a href="/shop/storage" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-archive text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Storage</h3>
              <p className="text-gray-400 text-sm mb-3">Large capacity storage solutions</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Booster Cases */}
            <a href="/shop/booster-cases" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-light-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-cube text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Booster Cases</h3>
              <p className="text-gray-400 text-sm mb-3">Premium display and protection</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Accessories */}
            <a href="/shop/accessories" className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-transparent hover:border-duelist-accent/30 hover:shadow-lg hover:shadow-duelist-accent/20">
              <div className="w-16 h-16 bg-duelist-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-dice text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-duelist-accent transition-colors">Accessories</h3>
              <p className="text-gray-400 text-sm mb-3">Essential gaming accessories</p>
              <div className="flex items-center space-x-2">
                <span className="text-duelist-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-duelist-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-duelist-dark to-duelist-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, tournament updates, and special offers for serious duelists.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 focus:border-duelist-accent rounded-lg text-white focus:outline-none"
            />
            <button className="px-8 py-3 bg-duelist-accent hover:bg-duelist-gold text-black rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}