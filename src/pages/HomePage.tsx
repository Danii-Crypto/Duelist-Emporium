export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            DUELIST
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              EMPORIUM
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Premium Yu-Gi-Oh accessories for competitive duelists
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/shop" 
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Browse Collection
            </a>
            <a 
              href="/shop/single-deck-boxes" 
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Deck Boxes
            </a>
          </div>
        </div>
      </section>

      {/* Categories Grid - Simplified */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Single Deck Boxes */}
            <a href="/shop/single-deck-boxes" className="group bg-slate-700 border border-slate-600 rounded-xl p-6 hover:border-yellow-400 transition-all hover:bg-slate-600">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-box text-black text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400">Single Deck Boxes</h3>
              <p className="text-slate-300 text-sm mb-3">Secure magnetic closure boxes for tournament decks</p>
              <div className="text-yellow-400 text-sm font-medium">
                10 Colors • From $25
              </div>
            </a>
            
            {/* Multi Deck Boxes */}
            <a href="/shop/multi-deck-boxes" className="group bg-slate-700 border border-slate-600 rounded-xl p-6 hover:border-purple-400 transition-all hover:bg-slate-600">
              <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-boxes text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">Multi Deck Boxes</h3>
              <p className="text-slate-300 text-sm mb-3">Store multiple decks with compartments</p>
              <div className="text-purple-400 text-sm font-medium">
                6 Designs • From $40
              </div>
            </a>
            
            {/* Binders */}
            <a href="/shop/binders" className="group bg-slate-700 border border-slate-600 rounded-xl p-6 hover:border-blue-400 transition-all hover:bg-slate-600">
              <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-book text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Card Binders</h3>
              <p className="text-slate-300 text-sm mb-3">Organize and display your collection</p>
              <div className="text-blue-400 text-sm font-medium">
                10 Colors • From $35
              </div>
            </a>
            
            {/* Card Sleeves */}
            <a href="/shop/card-sleeves" className="group bg-slate-700 border border-slate-600 rounded-xl p-6 hover:border-green-400 transition-all hover:bg-slate-600">
              <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-layer-group text-black text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400">Card Sleeves</h3>
              <p className="text-slate-300 text-sm mb-3">Protect your valuable cards</p>
              <div className="text-green-400 text-sm font-medium">
                10 Designs • From $18
              </div>
            </a>
            
            {/* Accessories */}
            <a href="/shop/accessories" className="group bg-slate-700 border border-slate-600 rounded-xl p-6 hover:border-orange-400 transition-all hover:bg-slate-600">
              <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-dice text-black text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400">Accessories</h3>
              <p className="text-slate-300 text-sm mb-3">Professional gaming accessories and tools</p>
              <div className="text-orange-400 text-sm font-medium">
                11 Items • From $40
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section - Simplified */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shipping-fast text-black text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Shipping</h3>
              <p className="text-slate-400 text-sm">Free shipping on orders over $50</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-black text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Authentic Products</h3>
              <p className="text-slate-400 text-sm">Official licensed merchandise</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">4.9★ Rating</h3>
              <p className="text-slate-400 text-sm">Trusted by 15,000+ duelists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}