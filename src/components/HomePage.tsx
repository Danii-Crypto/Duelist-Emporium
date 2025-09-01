export function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-yugioh-dark border-b border-yugioh-gold/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yugioh-gold to-yellow-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-dragon text-white text-xl"></i>
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-white">Duelist Emporium</h1>
                <p className="text-xs text-gray-400">Premier Yu-Gi-Oh Accessories</p>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-300 hover:text-yugioh-gold transition-colors">Products</a>
              <a href="#categories" className="text-gray-300 hover:text-yugioh-gold transition-colors">Categories</a>
              <a href="#about" className="text-gray-300 hover:text-yugioh-gold transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-yugioh-gold transition-colors">Contact</a>
            </div>
            
            {/* Cart & Search */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-yugioh-gold transition-colors">
                <i className="fas fa-search text-lg"></i>
              </button>
              <button className="relative text-gray-300 hover:text-yugioh-gold transition-colors">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-yugioh-gold rounded-full text-xs flex items-center justify-center text-white">0</span>
              </button>
              <button className="md:hidden text-gray-300 hover:text-yugioh-gold">
                <i className="fas fa-bars text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yugioh-dark via-yugioh-purple to-yugioh-light min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-yugioh-gold/10 border border-yugioh-gold/20 rounded-full px-4 py-2">
                  <i className="fas fa-crown text-yugioh-gold"></i>
                  <span className="text-sm text-yugioh-gold font-medium">Premier Destination</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-yugioh-gold bg-clip-text text-transparent">
                    Duelist Emporium
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  The premier destination for serious Yu-Gi-Oh players. We understand that every card matters, 
                  every tournament counts, and every duelist deserves the finest accessories.
                </p>
                
                <p className="text-lg text-gray-400">
                  From casual collectors to world championship competitors, our carefully curated selection 
                  ensures you'll find exactly what you need to take your game to the next level.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yugioh-gold to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-yugioh-gold/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <i className="fas fa-shopping-bag"></i>
                  <span>Shop Now</span>
                </button>
                
                <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-yugioh-gold hover:text-yugioh-gold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <i className="fas fa-play"></i>
                  <span>View Catalog</span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yugioh-gold">500+</div>
                  <div className="text-sm text-gray-400">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yugioh-gold">10k+</div>
                  <div className="text-sm text-gray-400">Happy Duelists</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yugioh-gold">5★</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-yugioh-gold/20 to-transparent p-8 rounded-2xl">
                <div className="aspect-square bg-gradient-to-br from-yugioh-light to-yugioh-purple rounded-xl flex items-center justify-center">
                  <i className="fas fa-magic text-8xl text-yugioh-gold opacity-80"></i>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute top-4 -right-4 w-16 h-24 bg-gradient-to-br from-yellow-400 to-yugioh-gold rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                  <i className="fas fa-dragon text-white text-xl"></i>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg transform -rotate-12 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section id="categories" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Premium Accessories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to elevate your dueling experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card Sleeves */}
            <div className="group bg-gray-900 rounded-xl p-6 hover:bg-yugioh-purple/20 transition-all duration-300 border border-gray-700 hover:border-yugioh-gold/30">
              <div className="w-16 h-16 bg-gradient-to-br from-yugioh-gold to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-layer-group text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Card Sleeves</h3>
              <p className="text-gray-400 mb-4">Premium protection for your valuable cards</p>
              <div className="text-yugioh-gold font-medium">50+ Options</div>
            </div>
            
            {/* Playmats */}
            <div className="group bg-gray-900 rounded-xl p-6 hover:bg-yugioh-purple/20 transition-all duration-300 border border-gray-700 hover:border-yugioh-gold/30">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-map text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Playmats</h3>
              <p className="text-gray-400 mb-4">Tournament-grade surfaces for competitive play</p>
              <div className="text-yugioh-gold font-medium">25+ Designs</div>
            </div>
            
            {/* Deck Boxes */}
            <div className="group bg-gray-900 rounded-xl p-6 hover:bg-yugioh-purple/20 transition-all duration-300 border border-gray-700 hover:border-yugioh-gold/30">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-box text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deck Boxes</h3>
              <p className="text-gray-400 mb-4">Secure storage for your deck collection</p>
              <div className="text-yugioh-gold font-medium">30+ Models</div>
            </div>
            
            {/* Accessories */}
            <div className="group bg-gray-900 rounded-xl p-6 hover:bg-yugioh-purple/20 transition-all duration-300 border border-gray-700 hover:border-yugioh-gold/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-gem text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Accessories</h3>
              <p className="text-gray-400 mb-4">Dice, counters, and tournament essentials</p>
              <div className="text-yugioh-gold font-medium">100+ Items</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hand-picked essentials for serious duelists
            </p>
          </div>
          
          <div id="featured-products" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products will be loaded dynamically */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-yugioh-dark to-yugioh-purple">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-white">
                Why Choose Duelist Emporium?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-certificate text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
                    <p className="text-gray-400">Only the finest materials and construction for tournament-level performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shipping-fast text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Fast Shipping</h3>
                    <p className="text-gray-400">Get your gear quickly with our expedited shipping options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                    <p className="text-gray-400">Our team of experienced duelists provides personalized recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-yugioh-gold/20">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yugioh-gold to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Tournament Ready</h3>
                <p className="text-gray-400">
                  From local tournaments to world championships, our accessories meet all official requirements and standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yugioh-dark border-t border-yugioh-gold/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yugioh-gold to-yellow-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-dragon text-white"></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white">Duelist Emporium</h3>
                  <p className="text-xs text-gray-400">Premier Yu-Gi-Oh Accessories</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for premium Yu-Gi-Oh accessories and tournament gear.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="text-gray-400 hover:text-yugioh-gold transition-colors">Products</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-yugioh-gold transition-colors">Categories</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yugioh-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yugioh-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Card Sleeves</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Playmats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Deck Boxes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Duelist Emporium. All rights reserved. Built for duelists, by duelists.</p>
          </div>
        </div>
      </footer>
    </>
  )
}