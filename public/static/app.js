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
      <div class="product-card rounded-xl p-6 card-hover">
        <div class="aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-lg bg-gray-800">
          <div class="w-full h-48 bg-gradient-to-br from-yugioh-light to-yugioh-purple rounded-lg flex items-center justify-center">
            <i class="fas fa-image text-4xl text-gray-500"></i>
          </div>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div>
              <span class="category-badge">${product.category}</span>
              <h3 class="text-lg font-semibold text-white mt-2">${product.name}</h3>
              <p class="text-sm text-gray-400">${product.description}</p>
            </div>
          </div>
          
          <div class="flex items-center justify-between pt-4 border-t border-gray-700">
            <div class="price-tag text-lg font-bold">
              $${product.price}
            </div>
            
            <button 
              onclick="app.addToCart(${product.id})" 
              class="bg-yugioh-gold hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 btn-glow flex items-center space-x-2"
            >
              <i class="fas fa-cart-plus"></i>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
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
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-yugioh-gold text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
      </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(notification);
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