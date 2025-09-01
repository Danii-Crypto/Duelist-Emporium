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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-duelist-dark via-duelist-darker to-duelist-purple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-duelist-accent mb-4">
            Premium Collection
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover championship-grade accessories designed for legendary duelists
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-duelist-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-duelist-accent"
              />
              <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            
            {/* Sort Dropdown */}
            <select className="bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-duelist-accent">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Rated</option>
            </select>
          </div>

          {/* Product Count */}
          <div className="text-center mb-6">
            <span id="product-count" className="text-gray-400">{products.length} products found</span>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                !category ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category=""
            >
              <i className="fas fa-th-large mr-2"></i>
              All Products
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'single-deck-boxes' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="single-deck-boxes"
            >
              <i className="fas fa-box mr-2"></i>
              Single Deck Boxes
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'multi-deck-boxes' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="multi-deck-boxes"
            >
              <i className="fas fa-boxes mr-2"></i>
              Multi Deck Boxes
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'binders' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="binders"
            >
              <i className="fas fa-book mr-2"></i>
              Binders
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'card-sleeves' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="card-sleeves"
            >
              <i className="fas fa-layer-group mr-2"></i>
              Card Sleeves
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'playmats' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="playmats"
            >
              <i className="fas fa-map mr-2"></i>
              Playmats
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'storage' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="storage"
            >
              <i className="fas fa-archive mr-2"></i>
              Storage
            </button>
          </div>

          {/* Second Row of Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'booster-cases' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="booster-cases"
            >
              <i className="fas fa-cube mr-2"></i>
              Booster Cases
            </button>
            
            <button 
              className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category === 'accessories' ? 'bg-duelist-accent text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              data-category="accessories"
            >
              <i className="fas fa-dice mr-2"></i>
              Accessories
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-duelist-darker py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Grid Container */}
          {products.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <i className="fas fa-box-open text-6xl text-duelist-accent opacity-50"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Products Found</h3>
              <p className="text-gray-400 mb-6">
                {category ? `No products found in ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} category` : 'No products available'}
              </p>
            </div>
          ) : (
            <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-900 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/static/placeholder-card.jpg'
                        console.log(`Failed to load image for ${product.name}: ${product.image}`)
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        product.rarity === 'Epic' ? 'bg-purple-600 text-white' :
                        product.rarity === 'Ultra Rare' ? 'bg-duelist-accent text-black' :
                        'bg-blue-600 text-white'
                      }`}>
                        {product.rarity}
                      </span>
                    </div>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-duelist-accent uppercase tracking-wide">
                        {product.categoryDisplay}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i key={star} className="fas fa-star text-duelist-accent text-xs"></i>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Protection</span>
                        <span className="text-xs text-duelist-accent font-bold">{product.stats.protection}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="bg-duelist-accent h-1.5 rounded-full" 
                          style={{width: `${product.stats.protection}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-duelist-accent">
                          ${product.price}
                        </span>
                        <div className="text-xs text-gray-400">
                          Stock: {product.quantity}
                        </div>
                      </div>
                      
                      <button 
                        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                          product.inStock 
                            ? 'bg-duelist-accent hover:bg-duelist-gold text-black' 
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                        onClick={() => {
                          if (product.inStock) {
                            window.location.href = `/product/${product.id}`
                          }
                        }}
                      >
                        {product.inStock ? 'View Details' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button - Hidden for now since we're showing all products */}
          {products.length > 12 && (
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm">
                Showing all {products.length} products
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}