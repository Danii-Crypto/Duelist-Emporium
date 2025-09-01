// NexusCard TCG Marketplace Frontend

class NexusCard {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('nexus-cart')) || [];
    this.products = [];
    this.currentPage = this.getCurrentPage();
    this.init();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/shop')) return 'shop';
    if (path.startsWith('/product')) return 'product';
    if (path === '/cart') return 'cart';
    if (path === '/profile') return 'profile';
    if (path === '/about') return 'about';
    return 'unknown';
  }

  async init() {
    await this.loadProducts();
    this.updateCartUI();
    this.bindGlobalEvents();
    
    // Initialize page-specific functionality
    switch (this.currentPage) {
      case 'home':
        this.initHomePage();
        break;
      case 'shop':
        this.initShopPage();
        break;
      case 'product':
        this.initProductPage();
        break;
      case 'cart':
        this.initCartPage();
        break;
    }
  }

  async loadProducts() {
    try {
      const response = await axios.get('/api/products');
      this.products = response.data.products;
    } catch (error) {
      console.error('Failed to load products:', error);
      this.showNotification('Failed to load products', 'error');
    }
  }

  // Page Initialization Methods
  initHomePage() {
    this.renderFeaturedProducts();
    this.initStatsCounters();
  }

  initShopPage() {
    this.renderShopProducts();
    this.initShopFilters();
  }

  initProductPage() {
    const productId = this.getProductIdFromURL();
    this.loadProductDetails(productId);
  }

  initCartPage() {
    this.renderCartPage();
  }

  // Product Rendering Methods
  renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = this.products.slice(0, 6);
    container.innerHTML = featuredProducts.map(product => this.createProductCard(product)).join('');
  }

  renderShopProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const category = this.getCategoryFromURL();
    const filteredProducts = category 
      ? this.products.filter(p => p.category === category)
      : this.products;

    container.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
  }

  createProductCard(product) {
    const rarityClass = `rarity-${product.rarity.toLowerCase().replace(' ', '-')}`;
    const discountPercent = product.originalPrice 
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

    return `
      <div class="product-card ${rarityClass} rounded-xl p-6 group cursor-pointer" onclick="app.goToProduct(${product.id})">
        ${discountPercent > 0 ? `
          <div class="absolute top-3 right-3 bg-nexus-accent text-white text-xs font-bold px-2 py-1 rounded-full">
            -${discountPercent}%
          </div>
        ` : ''}
        
        <div class="aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-lg bg-nexus-dark relative">
          <div class="w-full h-48 bg-gradient-to-br from-nexus-dark to-nexus-gray rounded-lg flex items-center justify-center relative">
            <i class="fas fa-image text-4xl text-gray-500"></i>
            <div class="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </div>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="category-badge inline-block mb-2">${product.categoryDisplay}</div>
              <h3 class="text-lg font-semibold text-white group-hover:text-nexus-accent transition-colors">
                ${product.name}
              </h3>
              <p class="text-sm text-gray-400 mt-1">${product.description}</p>
            </div>
          </div>
          
          <div class="flex items-center justify-between pt-3 border-t border-nexus-black/20">
            <div class="flex items-center space-x-2">
              <span class="price-current">$${product.price}</span>
              ${product.originalPrice ? `<span class="price-original">$${product.originalPrice}</span>` : ''}
            </div>
            
            <button 
              onclick="event.stopPropagation(); app.addToCart(${product.id})" 
              class="bg-nexus-accent hover:bg-nexus-accent/80 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center space-x-2"
            >
              <i class="fas fa-plus"></i>
              <span class="hidden sm:inline">Add</span>
            </button>
          </div>
          
          ${product.stats ? `
            <div class="grid grid-cols-3 gap-2 text-xs">
              ${Object.entries(product.stats).map(([key, value]) => `
                <div class="text-center">
                  <div class="text-nexus-accent font-medium">${value}</div>
                  <div class="text-gray-500 capitalize">${key}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  async loadProductDetails(productId) {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      const product = response.data.product;
      this.renderProductDetails(product);
    } catch (error) {
      console.error('Failed to load product details:', error);
      this.showNotification('Product not found', 'error');
    }
  }

  renderProductDetails(product) {
    const container = document.getElementById('product-container');
    const breadcrumb = document.getElementById('product-breadcrumb');
    
    if (breadcrumb) breadcrumb.textContent = product.name;
    
    if (!container) return;

    const rarityClass = `rarity-${product.rarity.toLowerCase().replace(' ', '-')}`;
    
    container.innerHTML = `
      <div class="space-y-6">
        <div class="aspect-w-1 aspect-h-1">
          <div class="w-full h-96 bg-gradient-to-br from-nexus-dark to-nexus-gray rounded-2xl flex items-center justify-center ${rarityClass}">
            <i class="fas fa-image text-8xl text-gray-500"></i>
          </div>
        </div>
      </div>
      
      <div class="space-y-6">
        <div>
          <div class="category-badge inline-block mb-3">${product.categoryDisplay}</div>
          <h1 class="text-3xl lg:text-4xl font-display font-bold text-white mb-3">${product.name}</h1>
          <p class="text-gray-400 text-lg">${product.description}</p>
        </div>
        
        <div class="flex items-center space-x-4">
          <span class="text-3xl font-bold price-current">$${product.price}</span>
          ${product.originalPrice ? `<span class="text-xl price-original">$${product.originalPrice}</span>` : ''}
          <span class="px-3 py-1 bg-${product.rarity.toLowerCase()}/20 text-${product.rarity.toLowerCase()} rounded-full text-sm font-medium">
            ${product.rarity}
          </span>
        </div>
        
        ${product.features ? `
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">Features</h3>
            <ul class="space-y-2">
              ${product.features.map(feature => `
                <li class="flex items-center space-x-2">
                  <i class="fas fa-check text-nexus-accent"></i>
                  <span class="text-gray-300">${feature}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${product.stats ? `
          <div>
            <h3 class="text-lg font-semibold text-white mb-3">Specifications</h3>
            <div class="grid grid-cols-2 gap-4">
              ${Object.entries(product.stats).map(([key, value]) => `
                <div class="bg-nexus-gray rounded-lg p-4">
                  <div class="text-2xl font-bold text-nexus-accent">${value}</div>
                  <div class="text-gray-400 capitalize">${key}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="flex space-x-4">
          <button 
            onclick="app.addToCart(${product.id})" 
            class="flex-1 bg-nexus-accent hover:bg-nexus-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <i class="fas fa-shopping-bag"></i>
            <span>Add to Cart - $${product.price}</span>
          </button>
          
          <button class="border border-nexus-gray text-gray-300 hover:text-white hover:border-nexus-accent px-6 py-3 rounded-lg transition-colors">
            <i class="far fa-heart"></i>
          </button>
        </div>
        
        <div class="bg-nexus-gray rounded-lg p-4">
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-400">Stock Status:</span>
            <span class="${product.inStock ? 'text-green-400' : 'text-red-400'} font-medium">
              ${product.inStock ? `In Stock (${product.quantity || 'Limited'})` : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  renderCartPage() {
    const container = document.getElementById('cart-container');
    const emptyCart = document.getElementById('empty-cart');
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    if (this.cart.length === 0) {
      emptyCart?.classList.remove('hidden');
      cartItems?.classList.add('hidden');
      cartSummary?.classList.add('hidden');
    } else {
      emptyCart?.classList.add('hidden');
      cartItems?.classList.remove('hidden');
      cartSummary?.classList.remove('hidden');
      
      if (cartItems) {
        cartItems.innerHTML = this.cart.map(item => this.createCartItemHTML(item)).join('');
      }
      
      this.updateCartSummary();
    }
  }

  createCartItemHTML(item) {
    const product = this.products.find(p => p.id === item.id);
    if (!product) return '';

    return `
      <div class="bg-nexus-gray rounded-lg p-6">
        <div class="flex items-center space-x-4">
          <div class="w-20 h-20 bg-nexus-dark rounded-lg flex items-center justify-center">
            <i class="fas fa-image text-2xl text-gray-500"></i>
          </div>
          
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-white">${product.name}</h3>
            <p class="text-gray-400">${product.categoryDisplay}</p>
            <p class="text-nexus-accent font-semibold">$${product.price}</p>
          </div>
          
          <div class="flex items-center space-x-3">
            <button onclick="app.updateQuantity(${item.id}, ${item.quantity - 1})" class="w-8 h-8 bg-nexus-black rounded text-white hover:bg-nexus-accent transition-colors">
              <i class="fas fa-minus text-xs"></i>
            </button>
            
            <span class="w-12 text-center text-white font-medium">${item.quantity}</span>
            
            <button onclick="app.updateQuantity(${item.id}, ${item.quantity + 1})" class="w-8 h-8 bg-nexus-black rounded text-white hover:bg-nexus-accent transition-colors">
              <i class="fas fa-plus text-xs"></i>
            </button>
          </div>
          
          <button onclick="app.removeFromCart(${item.id})" class="text-gray-400 hover:text-red-400 transition-colors">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
  }

  // Cart Management
  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ id: productId, quantity: 1 });
    }

    this.saveCart();
    this.updateCartUI();
    this.showNotification(`${product.name} added to cart!`, 'success');
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
    
    if (this.currentPage === 'cart') {
      this.renderCartPage();
    }
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.updateCartUI();
      
      if (this.currentPage === 'cart') {
        this.renderCartPage();
      }
    }
  }

  saveCart() {
    localStorage.setItem('nexus-cart', JSON.stringify(this.cart));
  }

  updateCartUI() {
    const cartCount = this.cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
    }
  }

  updateCartSummary() {
    const subtotal = this.cart.reduce((total, item) => {
      const product = this.products.find(p => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);

    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
  }

  // Utility Methods
  getProductIdFromURL() {
    const path = window.location.pathname;
    const matches = path.match(/\/product\/(\d+)/);
    return matches ? parseInt(matches[1]) : null;
  }

  getCategoryFromURL() {
    const path = window.location.pathname;
    const matches = path.match(/\/shop\/(.+)/);
    return matches ? matches[1] : null;
  }

  goToProduct(productId) {
    window.location.href = `/product/${productId}`;
  }

  // Event Binding
  bindGlobalEvents() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Filter toggle (shop page)
    const filterToggle = document.getElementById('filter-toggle');
    const filterSidebar = document.getElementById('filter-sidebar');
    
    if (filterToggle && filterSidebar) {
      filterToggle.addEventListener('click', () => {
        filterSidebar.classList.toggle('hidden');
        filterSidebar.classList.toggle('lg:block');
      });
    }
  }

  initShopFilters() {
    // Placeholder for filter functionality
    // In a real app, this would handle filter changes
  }

  initStatsCounters() {
    // Animate stats counters on homepage
    const statCounters = document.querySelectorAll('.stat-counter');
    statCounters.forEach(counter => {
      counter.classList.add('animate-slide-in');
    });
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Hide and remove notification
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new NexusCard();
});