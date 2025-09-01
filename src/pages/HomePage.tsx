export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-duelist-darker via-duelist-dark to-duelist-purple py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-48 bg-gradient-to-br from-card-rare/20 to-card-epic/20 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-28 h-40 bg-gradient-to-br from-card-legendary/20 to-card-mythic/20 rounded-lg -rotate-12 animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-36 bg-gradient-to-br from-nexus-accent/20 to-nexus-gold/20 rounded-lg rotate-45 animate-float delay-2000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-duelist-dark/80 border-2 border-duelist-neon-blue/30 rounded-lg px-6 py-3 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-duelist-neon-blue/10 to-duelist-neon-purple/10 animate-glow-pulse"></div>
                  <div className="w-3 h-3 bg-duelist-neon-green rounded-full animate-pulse relative z-10"></div>
                  <span className="text-duelist-neon-blue font-mono text-sm tracking-wider relative z-10">PREMIER DESTINATION</span>
                  <i className="fas fa-crown text-duelist-gold animate-pulse relative z-10"></i>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-cyber font-bold leading-tight relative">
                  <span className="bg-gradient-to-r from-duelist-neon-blue via-duelist-electric to-duelist-neon-purple bg-clip-text text-transparent animate-glow-pulse">
                    DUELIST
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-duelist-accent via-duelist-gold to-duelist-neon-green bg-clip-text text-transparent animate-glow-pulse delay-500">
                    EMPORIUM
                  </span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-xl text-duelist-electric leading-relaxed font-mono max-w-2xl">
                    <span className="text-duelist-neon-green">&gt;</span> Duelist Emporium has been the premier destination for serious Yu-Gi-Oh players. 
                    We understand that every card matters, every tournament counts, and every duelist deserves the finest accessories.
                  </p>
                  
                  <p className="text-lg text-gray-400 font-mono max-w-2xl">
                    <span className="text-duelist-neon-blue">//</span> From casual collectors to world championship competitors, 
                    our carefully curated selection ensures you'll find exactly what you need to take your game to the next level.
                  </p>
                </div>
              </div>
              
              {/* Cyber CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/shop" className="group relative bg-gradient-to-r from-duelist-accent to-duelist-gold text-white px-8 py-4 rounded-lg font-cyber font-bold overflow-hidden transition-all duration-300 hover:scale-105 text-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-duelist-neon-purple to-duelist-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-shopping-bag"></i>
                    <span>ENTER SHOP</span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
                
                <a href="/about" className="group relative border-2 border-duelist-neon-blue/50 text-duelist-electric px-8 py-4 rounded-lg font-cyber font-bold hover:border-duelist-neon-blue hover:text-duelist-neon-blue transition-all duration-300 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-duelist-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-info-circle"></i>
                    <span>LEARN MORE</span>
                  </span>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-nexus-accent">500+</div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-nexus-gold">15K+</div>
                  <div className="text-sm text-gray-400">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-card-mythic">4.9★</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Featured Card */}
                <div className="w-80 h-96 bg-gradient-to-br from-nexus-dark to-nexus-gray rounded-2xl border-2 border-nexus-accent/30 p-6 mx-auto animate-card-glow">
                  <div className="h-full bg-gradient-to-br from-card-legendary via-card-epic to-card-rare rounded-xl flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5"></div>
                    <i className="fas fa-dragon text-6xl text-white relative z-10"></i>
                    <h3 className="text-xl font-bold text-white text-center relative z-10">Featured Collection</h3>
                    <div className="px-4 py-2 bg-black/30 rounded-full backdrop-blur-sm relative z-10">
                      <span className="text-sm text-nexus-gold font-semibold">Legendary Tier</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-8 w-24 h-32 bg-gradient-to-br from-card-rare to-card-epic rounded-lg transform rotate-12 animate-float opacity-80 border border-white/20"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-28 bg-gradient-to-br from-card-mythic to-card-legendary rounded-lg transform -rotate-12 animate-float delay-1000 opacity-80 border border-white/20"></div>
                <div className="absolute top-1/2 -right-12 w-16 h-24 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-lg transform rotate-45 animate-float delay-2000 opacity-70 border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-nexus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From protective sleeves to premium storage solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card Sleeves */}
            <a href="/shop/sleeves" className="group bg-nexus-gray rounded-xl p-6 hover:bg-nexus-gray/80 transition-all duration-300 border border-transparent hover:border-nexus-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-card-rare to-card-epic rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <i className="fas fa-layer-group text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Card Sleeves</h3>
              <p className="text-gray-400 text-sm mb-3">Premium protection for your collection</p>
              <div className="flex items-center space-x-2">
                <span className="text-nexus-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-nexus-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Playmats */}
            <a href="/shop/playmats" className="group bg-nexus-gray rounded-xl p-6 hover:bg-nexus-gray/80 transition-all duration-300 border border-transparent hover:border-nexus-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-card-legendary to-card-mythic rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <i className="fas fa-map text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Playmats</h3>
              <p className="text-gray-400 text-sm mb-3">Tournament-grade gaming surfaces</p>
              <div className="flex items-center space-x-2">
                <span className="text-nexus-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-nexus-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Deck Boxes */}
            <a href="/shop/deck-boxes" className="group bg-nexus-gray rounded-xl p-6 hover:bg-nexus-gray/80 transition-all duration-300 border border-transparent hover:border-nexus-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <i className="fas fa-box text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deck Boxes</h3>
              <p className="text-gray-400 text-sm mb-3">Secure storage solutions</p>
              <div className="flex items-center space-x-2">
                <span className="text-nexus-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-nexus-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Accessories */}
            <a href="/shop/accessories" className="group bg-nexus-gray rounded-xl p-6 hover:bg-nexus-gray/80 transition-all duration-300 border border-transparent hover:border-nexus-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-card-epic to-card-rare rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <i className="fas fa-dice text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accessories</h3>
              <p className="text-gray-400 text-sm mb-3">Dice, counters, and more</p>
              <div className="flex items-center space-x-2">
                <span className="text-nexus-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-nexus-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
            
            {/* Storage */}
            <a href="/shop/storage" className="group bg-nexus-gray rounded-xl p-6 hover:bg-nexus-gray/80 transition-all duration-300 border border-transparent hover:border-nexus-accent/30">
              <div className="w-16 h-16 bg-gradient-to-br from-card-mythic to-card-legendary rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <i className="fas fa-archive text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Storage</h3>
              <p className="text-gray-400 text-sm mb-3">Binders and organizers</p>
              <div className="flex items-center space-x-2">
                <span className="text-nexus-accent font-medium text-sm">Shop Now</span>
                <i className="fas fa-arrow-right text-nexus-accent text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-nexus-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Handpicked premium items for serious collectors
            </p>
          </div>
          
          <div id="featured-products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products will be loaded dynamically */}
          </div>
          
          <div className="text-center mt-12">
            <a href="/shop" className="inline-flex items-center space-x-2 bg-nexus-accent hover:bg-nexus-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <span>View All Products</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-nexus-dark to-nexus-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, limited editions, and special offers before anyone else.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 bg-nexus-black border border-nexus-gray focus:border-nexus-accent rounded-lg text-white focus:outline-none"
            />
            <button className="px-8 py-3 bg-nexus-accent hover:bg-nexus-accent/80 text-white rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}