interface ShopPageProps {
  category?: string
}

export function ShopPage({ category }: ShopPageProps) {
  const categoryName = category ? getCategoryDisplayName(category) : 'All Products'
  
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
            <a href="/" className="hover:text-nexus-accent transition-colors">Home</a>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">{categoryName}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2">
                {categoryName}
              </h1>
              <p className="text-gray-400 text-lg">
                {category ? getCategoryDescription(category) : 'Discover our complete collection of premium TCG accessories'}
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="bg-nexus-gray border border-nexus-gray text-white px-4 py-2 rounded-lg focus:outline-none focus:border-nexus-accent appearance-none pr-8">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Rated</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
              
              <button id="filter-toggle" className="lg:hidden bg-nexus-gray text-white px-4 py-2 rounded-lg border border-nexus-gray hover:border-nexus-accent transition-colors">
                <i className="fas fa-filter mr-2"></i>
                Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div id="filter-sidebar" className="hidden lg:block w-64 space-y-6">
            {/* Categories */}
            {!category && (
              <div className="bg-nexus-gray rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <a href="/shop/sleeves" className="block text-gray-400 hover:text-nexus-accent transition-colors">
                    Card Sleeves
                  </a>
                  <a href="/shop/playmats" className="block text-gray-400 hover:text-nexus-accent transition-colors">
                    Playmats
                  </a>
                  <a href="/shop/deck-boxes" className="block text-gray-400 hover:text-nexus-accent transition-colors">
                    Deck Boxes
                  </a>
                  <a href="/shop/accessories" className="block text-gray-400 hover:text-nexus-accent transition-colors">
                    Accessories
                  </a>
                  <a href="/shop/storage" className="block text-gray-400 hover:text-nexus-accent transition-colors">
                    Storage
                  </a>
                </div>
              </div>
            )}
            
            {/* Price Range */}
            <div className="bg-nexus-gray rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">Under $20</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">$20 - $50</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">$50 - $100</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">Over $100</span>
                </label>
              </div>
            </div>
            
            {/* Rarity */}
            <div className="bg-nexus-gray rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Rarity</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-card-common">Common</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-card-rare">Rare</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-card-epic">Epic</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-card-legendary">Legendary</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-card-mythic">Mythic</span>
                </label>
              </div>
            </div>
            
            {/* Brand */}
            <div className="bg-nexus-gray rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Brand</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">Dragon Shield</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">Ultimate Guard</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">Ultra Pro</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-gray rounded focus:ring-nexus-accent" />
                  <span className="text-gray-400">BCW</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Products will be loaded dynamically */}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-nexus-accent hover:bg-nexus-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getCategoryDisplayName(category: string): string {
  const names: Record<string, string> = {
    'sleeves': 'Card Sleeves',
    'playmats': 'Playmats',
    'deck-boxes': 'Deck Boxes',
    'accessories': 'Accessories',
    'storage': 'Storage Solutions'
  }
  return names[category] || 'Products'
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'sleeves': 'Premium card protection for tournament play and collecting',
    'playmats': 'Professional gaming surfaces for competitive and casual play',
    'deck-boxes': 'Secure storage solutions for your valuable card collection',
    'accessories': 'Essential gaming accessories including dice, counters, and tokens',
    'storage': 'Organize and protect your collection with premium storage solutions'
  }
  return descriptions[category] || 'Premium TCG accessories and collectibles'
}