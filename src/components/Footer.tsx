export function Footer() {
  return (
    <footer className="bg-nexus-dark border-t border-nexus-gray/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-lg flex items-center justify-center">
                <i className="fas fa-bolt text-white"></i>
              </div>
              <span className="text-xl font-display font-bold text-white">Duelist Emporium</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Duelist Emporium has been the premier destination for serious Yu-Gi-Oh players. 
              Premium accessories for collectors and tournament competitors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors">
                <i className="fab fa-discord text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Shop Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li><a href="/shop/deck-boxes" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Deck Boxes</a></li>
              <li><a href="/shop/sleeves" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Sleeves</a></li>
              <li><a href="/shop/over-sleeves" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Over Sleeves</a></li>
              <li><a href="/shop/playmats" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Playmats</a></li>
              <li><a href="/shop/album-binders" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Album Binders</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest drops, exclusive offers, and tournament news.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-nexus-gray border border-nexus-gray focus:border-nexus-accent rounded-l-lg text-white text-sm focus:outline-none"
                />
                <button className="px-4 py-2 bg-nexus-accent hover:bg-nexus-accent/80 text-white rounded-r-lg transition-colors">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter-consent" className="w-4 h-4 text-nexus-accent bg-nexus-gray border-nexus-gray rounded focus:ring-nexus-accent" />
                <label htmlFor="newsletter-consent" className="text-xs text-gray-400">
                  I agree to receive marketing emails
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-nexus-gray/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Duelist Emporium. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-nexus-accent transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}