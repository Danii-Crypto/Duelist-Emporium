interface Product {
  id: number
  name: string
  category: string
  categoryDisplay: string
  price: number
  rarity: string
  image: string
  description: string
  features: string[]
  stats: { protection: number; shuffle: number; durability: number }
  inStock: boolean
  quantity: number
  theme: string
  character_name: string
}

interface ShopPageProps {
  category?: string
  products?: Product[]
}

export function ShopPage({ category, products = [] }: ShopPageProps) {
  const getCategoryTitle = (cat?: string) => {
    if (!cat) return "Complete Collection"
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  const getCategoryIcon = (cat?: string) => {
    switch(cat) {
      case 'single-deck-boxes': return 'fas fa-box'
      case 'multi-deck-boxes': return 'fas fa-boxes'
      case 'binders': return 'fas fa-book'
      case 'card-sleeves': return 'fas fa-layer-group'
      case 'playmats': return 'fas fa-map'
      case 'storage': return 'fas fa-archive'
      case 'booster-cases': return 'fas fa-cube'
      case 'accessories': return 'fas fa-dice'
      default: return 'fas fa-shopping-bag'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M40 40V20H20V0H0v20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            {category && (
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full px-6 py-2 mb-4">
                <i className={`${getCategoryIcon(category)} text-yellow-400 mr-2`}></i>
                <span className="text-yellow-400 text-sm font-semibold">{getCategoryTitle(category)}</span>
              </div>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 mb-6 leading-tight">
            {getCategoryTitle(category)}
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            {category 
              ? `Discover our premium ${getCategoryTitle(category).toLowerCase()} collection designed for competitive play` 
              : "Explore our complete collection of championship-grade Yu-Gi-Oh accessories"
            }
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-green-400"></i>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-shipping-fast text-blue-400"></i>
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-400"></i>
              <span>4.9★ Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section className="bg-slate-800/50 backdrop-blur py-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                />
                <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
              </div>
              
              {/* Sort Dropdown */}
              <select className="bg-slate-700/50 border border-slate-600 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all">
                <option>Sort by Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rated</option>
                <option>Most Popular</option>
              </select>
            </div>

            {/* Product Count */}
            <div className="text-slate-400">
              <span className="font-semibold text-white">{products.length}</span> products found
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="/shop"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                !category 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-th-large mr-2"></i>
              All Products
            </a>
            
            <a 
              href="/shop/single-deck-boxes"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === 'single-deck-boxes' 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-box mr-2"></i>
              Single Deck Boxes
            </a>
            
            <a 
              href="/shop/multi-deck-boxes"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === 'multi-deck-boxes' 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-boxes mr-2"></i>
              Multi Deck Boxes
            </a>
            
            <a 
              href="/shop/binders"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === 'binders' 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-black shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-book mr-2"></i>
              Binders
            </a>
            
            <a 
              href="/shop/card-sleeves"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === 'card-sleeves' 
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-layer-group mr-2"></i>
              Card Sleeves
            </a>
            
            <a 
              href="/shop/accessories"
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === 'accessories' 
                  ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-lg' 
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white border border-slate-600'
              }`}
            >
              <i className="fas fa-dice mr-2"></i>
              Accessories
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-box-open text-5xl text-slate-400"></i>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Products Found</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                {category 
                  ? `We're currently out of stock for ${getCategoryTitle(category).toLowerCase()}. Check back soon for new arrivals!`
                  : 'No products available at the moment. Please check back later.'}
              </p>
              <a 
                href="/shop" 
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Browse All Products
              </a>
            </div>
          ) : (
            /* Products Grid */
            <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  {/* Product Card */}
                  <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                    
                    {/* Product Image Container */}
                    <div className="relative aspect-square bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                      {/* Enhanced Image Display with Multiple Fallbacks */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => {
                          // If main image fails, try to set background image as backup
                          const target = e.target as HTMLImageElement;
                          const container = target.parentElement;
                          if (container) {
                            const fallback = container.querySelector('.image-fallback') as HTMLElement;
                            if (fallback) {
                              fallback.style.opacity = '1';
                            }
                          }
                        }}
                      />
                      
                      {/* CSS Background Image Fallback */}
                      <div 
                        className="image-fallback absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 opacity-0"
                        style={{backgroundImage: `url(${product.image})`}}
                        title={product.name}
                      ></div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        {/* Rarity Badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                          product.rarity === 'Epic' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' :
                          product.rarity === 'Ultra Rare' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                          'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        }`}>
                          {product.rarity}
                        </span>

                        {/* Stock Status */}
                        {!product.inStock && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Out of Stock
                          </span>
                        )}
                      </div>

                      {/* Quick View Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button 
                          className="bg-white/20 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all transform translate-y-4 group-hover:translate-y-0"
                          onClick={() => window.location.href = `/product/${product.id}`}
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      {/* Category and Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                          {product.categoryDisplay}
                        </span>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i key={star} className="fas fa-star text-yellow-400 text-xs"></i>
                          ))}
                        </div>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Enhanced Stats */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Protection Rating</span>
                          <span className="text-sm font-bold text-yellow-400">{product.stats.protection}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500" 
                            style={{width: `${product.stats.protection}%`}}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Price and Action */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-black text-white">
                            ${product.price}
                          </span>
                          <div className="text-xs text-slate-400 mt-1">
                            {product.inStock ? `${product.quantity} in stock` : 'Out of stock'}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button 
                            className={`add-to-cart-btn flex-1 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                              product.inStock 
                                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105' 
                                : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                            }`}
                            disabled={!product.inStock}
                            data-product-id={product.id}
                            data-product-name={product.name}
                            data-product-price={product.price}
                            data-product-image={product.image}
                          >
                            {product.inStock ? (
                              <>
                                <i className="fas fa-cart-plus mr-2"></i>
                                Add to Cart
                              </>
                            ) : (
                              <>
                                <i className="fas fa-ban mr-2"></i>
                                Out of Stock
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Summary */}
          {products.length > 0 && (
            <div className="text-center mt-16 py-8 border-t border-slate-700">
              <p className="text-slate-400">
                Showing <span className="font-semibold text-white">{products.length}</span> products
                {category && (
                  <span> in <span className="font-semibold text-yellow-400">{getCategoryTitle(category)}</span></span>
                )}
              </p>
              {products.length >= 12 && (
                <p className="text-sm text-slate-500 mt-2">
                  More products coming soon • Follow us for updates
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}