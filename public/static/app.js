// Duelist Emporium Frontend JavaScript

class DuelistEmporium {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    this.products = [];
    this.init();
  }

  async init() {
    await this.loadProducts();
    this.renderFeaturedProducts();
    this.updateCartUI();
    this.bindEvents();
  }

  async loadProducts() {
    try {
      const response = await axios.get('/api/products');
      this.products = response.data.products;
    } catch (error) {
      console.error('Failed to load products:', error);
      // Fallback to mock data if API fails
      this.products = [
        {
          id: 1,
          name: 'Dragon Shield Matte Sleeves',
          category: 'Card Sleeves',
          price: 12.99,
          image: '/static/images/dragon-shield-sleeves.jpg',
          description: 'Premium matte card sleeves for ultimate protection'
        },
        {
          id: 2,
          name: 'Ultimate Guard PlayMat',
          category: 'Playmats',
          price: 24.99,
          image: '/static/images/playmat.jpg',
          description: 'Professional tournament-grade playmat'
        },
        {
          id: 3,
          name: 'Deck Box Pro',
          category: 'Deck Boxes',
          price: 19.99,
          image: '/static/images/deck-box.jpg',
          description: 'Secure storage for your valuable deck'
        }
      ];
    }
  }

  renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    container.innerHTML = this.products.map(product => `
      <div class="product-card rounded-xl p-6 relative overflow-hidden group">
        {/* Holographic Product Image */}
        <div class="aspect-w-1 aspect-h-1 mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-cyber-dark to-cyber-purple border-2 border-cyber-neon-blue/20 relative">
          <div class="w-full h-48 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center relative overflow-hidden">
            <i class="fas fa-cube text-6xl text-cyber-neon-blue animate-card-float"></i>
            
            {/* Scanning line effect */}
            <div class="absolute top-0 left-0 w-full h-px bg-cyber-neon-blue animate-scan-line opacity-60"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-cyber-neon-purple animate-scan-line delay-1000 opacity-40"></div>
            
            {/* Corner brackets */}
            <div class="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-blue animate-neon-flicker"></div>
            <div class="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-neon-purple animate-neon-flicker delay-300"></div>
            <div class="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-neon-green animate-neon-flicker delay-600"></div>
            <div class="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-pink animate-neon-flicker delay-900"></div>
          </div>
        </div>
        
        <div class="space-y-4">
          {/* Category and Title */}
          <div class="space-y-2">
            <span class="cyber-badge inline-block">${product.category}</span>
            <h3 class="text-xl font-cyber font-bold text-transparent bg-gradient-to-r from-cyber-neon-blue to-cyber-electric bg-clip-text">${product.name}</h3>
            <p class="text-sm text-gray-400 font-matrix">${product.description}</p>
          </div>
          
          {/* Price and Action */}
          <div class="flex items-center justify-between pt-4 border-t border-cyber-neon-blue/20">
            <div class="cyber-price relative">
              $${product.price}
            </div>
            
            <button 
              onclick="app.addToCart(${product.id})" 
              class="group relative bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple text-white px-6 py-3 rounded-lg font-cyber font-bold overflow-hidden transition-all duration-300 hover:scale-105 border border-cyber-neon-blue/30"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10 flex items-center space-x-2">
                <i class="fas fa-plus"></i>
                <span>ADD TO CART</span>
              </div>
              <div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
        
        {/* Holographic overlay effect */}
        <div class="absolute inset-0 bg-gradient-to-tr from-cyber-neon-blue/5 via-transparent to-cyber-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
      </div>
    `).join('');
  }

  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        ...product,
        quantity: 1
      });
    }

    this.saveCart();
    this.updateCartUI();
    this.showNotification(`${product.name} added to cart!`);
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCart();
        this.updateCartUI();
      }
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  updateCartUI() {
    const cartCount = this.cart.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.querySelector('.fa-shopping-cart').nextElementSibling;
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      cartBadge.classList.toggle('opacity-0', cartCount === 0);
    }
  }

  showNotification(message) {
    // Create cyberpunk notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 transform translate-x-full transition-all duration-300';
    notification.innerHTML = `
      <div class="bg-gradient-to-r from-cyber-dark to-cyber-purple border-2 border-cyber-neon-blue/50 text-white px-6 py-4 rounded-lg shadow-2xl shadow-cyber-neon-blue/20 backdrop-blur-sm relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue/10 to-cyber-neon-purple/10 animate-glow-pulse"></div>
        <div class="relative z-10 flex items-center space-x-3">
          <div class="w-6 h-6 bg-cyber-neon-green rounded-full flex items-center justify-center animate-pulse">
            <i class="fas fa-check text-cyber-dark text-sm"></i>
          </div>
          <span class="font-matrix text-cyber-electric">${message}</span>
        </div>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-neon-blue to-transparent animate-scan-line"></div>
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in with cyberpunk effect
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
      notification.classList.add('animate-glow-pulse');
    }, 100);

    // Remove after 3 seconds with fade effect
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  bindEvents() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.fa-bars').parentElement;
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        // Mobile menu functionality can be added here
        console.log('Mobile menu clicked');
      });
    }

    // Search functionality
    const searchBtn = document.querySelector('.fa-search').parentElement;
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        // Search functionality can be added here
        console.log('Search clicked');
      });
    }

    // Cart click handler
    const cartBtn = document.querySelector('.fa-shopping-cart').parentElement;
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        this.showCart();
      });
    }
  }

  showCart() {
    // Simple cart display for now
    if (this.cart.length === 0) {
      this.showNotification('Your cart is empty');
      return;
    }

    const cartItems = this.cart.map(item => 
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    alert(`Cart Contents:\n\n${cartItems}\n\nTotal: $${total.toFixed(2)}`);
  }

  // Utility method for future API calls
  async apiCall(endpoint, method = 'GET', data = null) {
    try {
      const config = {
        method,
        url: endpoint,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (data) {
        config.data = data;
      }

      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new DuelistEmporium();
});

// Add some visual enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.card-hover, .group').forEach(el => {
    observer.observe(el);
  });
});