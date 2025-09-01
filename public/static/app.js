// Duelist Emporium - Main Application JavaScript

class DuelistEmporiumApp {
  constructor() {
    this.products = [];
    this.cart = JSON.parse(localStorage.getItem('duelistCart')) || [];
    this.currentCategory = this.getCurrentCategory();
    this.init();
  }

  init() {
    // Check if products are already rendered server-side
    const productsGrid = document.getElementById('products-grid');
    const hasServerRenderedProducts = productsGrid && productsGrid.children.length > 0;
    
    if (!hasServerRenderedProducts) {
      // Fallback to client-side loading if no server-rendered products
      this.loadProducts();
    } else {
      // Products already rendered server-side, just set up interactions
      this.setupProductInteractions();
    }
    
    this.setupEventListeners();
    this.updateCartCount();
    this.setupMobileMenu();
  }

  getCurrentCategory() {
    const path = window.location.pathname;
    if (path.startsWith('/shop/')) {
      return path.split('/')[2];
    }
    return null;
  }

  async loadProducts() {
    try {
      const response = await axios.get('/api/products');
      this.products = response.data.products;
      this.renderProducts();
      this.updateProductCount();
    } catch (error) {
      console.error('Failed to load products:', error);
      this.showError('Failed to load products. Please try again.');
    }
  }

  setupProductInteractions() {
    // Set up interactions for server-rendered products
    this.attachProductCardListeners();
  }

  renderProducts() {
    const grid = document.getElementById('products-grid');
    const noProducts = document.getElementById('no-products');
    
    if (!grid || !noProducts) return;

    let filteredProducts = this.products;
    
    // Filter by current category if set
    if (this.currentCategory) {
      filteredProducts = this.products.filter(p => p.category === this.currentCategory);
    }

    if (filteredProducts.length === 0) {
      grid.classList.add('hidden');
      noProducts.classList.remove('hidden');
      return;
    }

    noProducts.classList.add('hidden');
    grid.classList.remove('hidden');

    grid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
    
    // Add event listeners to product cards
    this.attachProductCardListeners();
  }

  createProductCard(product) {
    const discountPercentage = product.originalPrice ? 
      Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    return `
      <div class="product-card bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-duelist-accent/20 group">
        <div class="aspect-w-1 aspect-h-1 bg-gray-700 relative overflow-hidden">
          <img 
            src="${product.image}" 
            alt="${product.name}"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="w-full h-48 bg-gradient-to-br from-duelist-purple to-duelist-dark-purple flex items-center justify-center" style="display: none;">
            <i class="fas fa-box text-4xl text-duelist-accent opacity-50"></i>
          </div>
          ${discountPercentage > 0 ? `
            <div class="absolute top-3 left-3 bg-duelist-accent text-black px-2 py-1 rounded-full text-xs font-bold">
              -${discountPercentage}%
            </div>
          ` : ''}
          <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm">
              <i class="fas fa-heart text-sm"></i>
            </button>
          </div>
        </div>
        
        <div class="p-4">
          <div class="mb-2">
            <span class="text-xs text-duelist-accent font-semibold uppercase tracking-wide">
              ${product.categoryDisplay}
            </span>
          </div>
          
          <h3 class="text-white font-semibold mb-2 line-clamp-2 group-hover:text-duelist-accent transition-colors">
            ${product.name}
          </h3>
          
          <p class="text-gray-400 text-sm mb-3 line-clamp-2">
            ${product.description}
          </p>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="text-duelist-accent font-bold text-lg">
                $${product.price}
              </span>
              ${product.originalPrice && product.originalPrice > product.price ? `
                <span class="text-gray-500 line-through text-sm">
                  $${product.originalPrice}
                </span>
              ` : ''}
            </div>
            
            <button 
              class="add-to-cart-btn bg-duelist-accent hover:bg-duelist-gold text-black px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
              data-product-id="${product.id}"
            >
              <i class="fas fa-plus mr-1"></i>
              Add
            </button>
          </div>
          
          ${product.features && product.features.length > 0 ? `
            <div class="mt-3 pt-3 border-t border-gray-700">
              <div class="flex flex-wrap gap-1">
                ${product.features.slice(0, 2).map(feature => `
                  <span class="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    ${feature}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  attachProductCardListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productId = parseInt(btn.dataset.productId);
        this.addToCart(productId);
      });
    });

    // Product card click navigation
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn') || e.target.closest('button')) {
          return; // Don't navigate if clicking buttons
        }
        
        const productId = card.querySelector('.add-to-cart-btn').dataset.productId;
        window.location.href = `/product/${productId}`;
      });
    });
  }

  setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        if (category) {
          window.location.href = `/shop/${category}`;
        } else {
          window.location.href = '/shop';
        }
      });
    });

    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Search products..."]');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchProducts(e.target.value);
      });
    }
  }

  searchProducts(query) {
    if (!query.trim()) {
      this.renderProducts();
      return;
    }

    const filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.categoryDisplay.toLowerCase().includes(query.toLowerCase())
    );

    this.renderFilteredProducts(filteredProducts);
  }

  renderFilteredProducts(products) {
    const grid = document.getElementById('products-grid');
    const noProducts = document.getElementById('no-products');
    
    if (!grid || !noProducts) return;

    if (products.length === 0) {
      grid.classList.add('hidden');
      noProducts.classList.remove('hidden');
      document.querySelector('#no-products h3').textContent = 'No Products Found';
      document.querySelector('#no-products p').textContent = 'Try adjusting your search terms or browse our categories.';
      return;
    }

    noProducts.classList.add('hidden');
    grid.classList.remove('hidden');
    grid.innerHTML = products.map(product => this.createProductCard(product)).join('');
    this.attachProductCardListeners();
    this.updateProductCount(products.length);
  }

  updateProductCount(count = null) {
    const countElement = document.getElementById('product-count');
    if (!countElement) return;

    if (count === null) {
      let filteredProducts = this.products;
      if (this.currentCategory) {
        filteredProducts = this.products.filter(p => p.category === this.currentCategory);
      }
      count = filteredProducts.length;
    }

    countElement.textContent = `${count} product${count !== 1 ? 's' : ''} found`;
  }

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.categoryDisplay,
        quantity: 1
      });
    }

    localStorage.setItem('duelistCart', JSON.stringify(this.cart));
    this.updateCartCount();
    this.showNotification(`${product.name} added to cart!`, 'success');
  }

  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
      
      if (totalItems > 0) {
        cartCount.classList.remove('hidden');
      } else {
        cartCount.classList.add('hidden');
      }
    }
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-600' : 
      type === 'error' ? 'bg-red-600' : 'bg-duelist-accent'
    } text-white`;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  showError(message) {
    const noProducts = document.getElementById('no-products');
    if (noProducts) {
      noProducts.querySelector('h3').textContent = 'Error Loading Products';
      noProducts.querySelector('p').textContent = message;
      noProducts.classList.remove('hidden');
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new DuelistEmporiumApp();
});

// Handle category navigation
window.navigateToCategory = (category) => {
  if (category) {
    window.location.href = `/shop/${category}`;
  } else {
    window.location.href = '/shop';
  }
};