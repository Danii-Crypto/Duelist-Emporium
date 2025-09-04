// Duelist Emporium - Enhanced Application JavaScript

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
    
    console.log('DuelistEmporiumApp init:', {
      productsGridExists: !!productsGrid,
      hasChildren: productsGrid ? productsGrid.children.length : 0,
      hasServerRenderedProducts
    });
    
    if (!hasServerRenderedProducts) {
      // Fallback to client-side loading if no server-rendered products
      console.log('Loading products client-side...');
      this.loadProducts();
    } else {
      // Products already rendered server-side, just set up interactions
      console.log('Using server-rendered products, setting up interactions...');
      this.setupProductInteractions();
      this.addImageErrorHandling();
    }
    
    this.setupEventListeners();
    this.updateCartCount();
    this.setupMobileMenu();
    this.setupNavigationInteractions();
    this.initPageSpecificFeatures();
  }

  initPageSpecificFeatures() {
    const path = window.location.pathname;
    
    if (path === '/cart') {
      this.renderCartItems();
    } else if (path === '/checkout') {
      this.updateCartSummary();
      this.setupCheckoutForm();
    } else if (path.startsWith('/order-confirmation/')) {
      this.setupOrderConfirmation();
    }
  }

  setupCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (form) {
      form.addEventListener('submit', (e) => this.submitOrder(e));
    }
  }

  async submitOrder(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const cartSummary = this.getCartSummary();
    
    // Prepare order data
    const orderData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      zipCode: formData.get('zipCode'),
      country: formData.get('country'),
      orderNotes: formData.get('orderNotes'),
      cartItems: this.cart,
      subtotal: cartSummary.subtotal,
      shipping: cartSummary.shipping,
      total: cartSummary.total
    };

    try {
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';

      const response = await axios.post('/api/orders', orderData);
      
      if (response.data.success) {
        // Store order details for confirmation page
        sessionStorage.setItem('orderDetails', JSON.stringify(orderData));
        
        // Clear cart
        this.cart = [];
        localStorage.removeItem('duelistCart');
        
        // Redirect to confirmation page
        window.location.href = `/order-confirmation/${response.data.orderNumber}`;
      } else {
        throw new Error(response.data.error || 'Order submission failed');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      this.showNotification('Failed to submit order. Please try again.', 'error');
      
      // Restore button state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  setupOrderConfirmation() {
    // Load order details from session storage
    const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails') || '{}');
    
    if (orderDetails.cartItems) {
      // Populate confirmation page with order details
      this.populateOrderConfirmation(orderDetails);
    }
  }

  populateOrderConfirmation(orderDetails) {
    // Populate customer info
    const nameEl = document.getElementById('confirmation-name');
    const emailEl = document.getElementById('confirmation-email');
    const phoneEl = document.getElementById('confirmation-phone');
    const addressEl = document.getElementById('confirmation-address');

    if (nameEl) nameEl.textContent = `${orderDetails.firstName} ${orderDetails.lastName}`;
    if (emailEl) emailEl.textContent = orderDetails.email;
    if (phoneEl) phoneEl.textContent = orderDetails.phone || 'Not provided';
    if (addressEl) {
      addressEl.innerHTML = `
        ${orderDetails.address}<br>
        ${orderDetails.city}, ${orderDetails.state} ${orderDetails.zipCode}<br>
        ${orderDetails.country}
      `;
    }

    // Populate order items
    const itemsEl = document.getElementById('confirmation-items');
    if (itemsEl && orderDetails.cartItems) {
      itemsEl.innerHTML = orderDetails.cartItems.map(item => `
        <div class="flex justify-between text-sm py-2 border-b border-slate-600 last:border-b-0">
          <div>
            <span class="text-white font-medium">${item.name}</span>
            <span class="text-slate-400 ml-2">× ${item.quantity}</span>
          </div>
          <span class="text-white">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `).join('');
    }

    // Populate totals
    const subtotalEl = document.getElementById('confirmation-subtotal');
    const shippingEl = document.getElementById('confirmation-shipping');
    const totalEl = document.getElementById('confirmation-total');

    if (subtotalEl) subtotalEl.textContent = `$${orderDetails.subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = orderDetails.shipping === 0 ? 'FREE' : `$${orderDetails.shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${orderDetails.total.toFixed(2)}`;
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

  addImageErrorHandling() {
    // Add error handling to server-rendered images
    const images = document.querySelectorAll('#products-grid img');
    console.log(`Found ${images.length} product images, adding error handlers...`);
    
    let loadedCount = 0;
    let errorCount = 0;
    
    images.forEach((img, index) => {
      console.log(`Image ${index + 1} src:`, img.src);
      console.log(`Image ${index + 1} dimensions:`, {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        width: img.width,
        height: img.height,
        complete: img.complete
      });
      
      img.addEventListener('error', function() {
        errorCount++;
        console.error(`❌ Image ${index + 1} FAILED to load:`, this.src);
        
        // Show background image fallback
        const container = this.parentElement;
        const bgDiv = container.querySelector('.image-fallback');
        if (bgDiv) {
          console.log(`🔄 Switching to background image fallback for image ${index + 1}`);
          this.style.opacity = '0';
          bgDiv.style.opacity = '1';
        } else {
          // Final fallback to placeholder icon
          this.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.className = 'w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center';
          fallback.innerHTML = '<i class="fas fa-box text-4xl text-slate-400"></i>';
          container.appendChild(fallback);
        }
      });
      
      img.addEventListener('load', function() {
        loadedCount++;
        console.log(`✅ Image ${index + 1} loaded successfully:`, this.alt);
        console.log(`   URL type: ${this.src.startsWith('data:') ? 'DATA URI' : this.src.startsWith('/static/') ? 'LOCAL' : 'EXTERNAL'}`);
        console.log(`   Dimensions: ${this.naturalWidth}x${this.naturalHeight}`);
        console.log(`Progress: ${loadedCount}/${images.length} loaded, ${errorCount} errors`);
      });
      
      // Check if already loaded
      if (img.complete && img.naturalWidth > 0) {
        loadedCount++;
        console.log(`✅ Image ${index + 1} already loaded:`, img.alt);
      }
    });
    
    console.log(`Initial status: ${loadedCount}/${images.length} images already loaded`);
    
    // Backup: After 3 seconds, check for failed images and switch to background fallback
    setTimeout(() => {
      let failedImages = 0;
      images.forEach((img, index) => {
        if (!img.complete || img.naturalWidth === 0) {
          failedImages++;
          console.warn(`🔄 Image ${index + 1} still not loaded, switching to background fallback`);
          
          // Switch to background image
          const container = img.parentElement;
          const bgDiv = container.querySelector('.image-fallback');
          if (bgDiv) {
            img.style.opacity = '0';
            bgDiv.style.opacity = '1';
            console.log(`✅ Background fallback activated for image ${index + 1}`);
          }
        }
      });
      
      console.log(`📊 Final status after 3s: ${images.length - failedImages}/${images.length} loaded, ${failedImages} using background fallback`);
    }, 3000);
  }

  setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchProducts(e.target.value);
      });
    }

    // Sort functionality
    const sortSelect = document.querySelector('select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortProducts(e.target.value);
      });
    }

    // Add to cart functionality with event delegation
    document.addEventListener('click', (e) => {
      // Find the button (might click on icon or text inside)
      const button = e.target.closest('.add-to-cart-btn');
      
      if (button) {
        e.preventDefault();
        
        if (button.disabled) return;
        
        const productId = parseInt(button.getAttribute('data-product-id'));
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));
        const productImage = button.getAttribute('data-product-image');
        
        console.log('Add to cart clicked:', { productId, productName, productPrice, productImage });
        
        if (productId && productName && productPrice) {
          this.addToCart(productId, productName, productPrice, productImage);
        } else {
          console.error('Missing product data for add to cart');
        }
      }
    });
  }

  setupNavigationInteractions() {
    // Category navigation links
    document.querySelectorAll('a[href^="/shop"]').forEach(link => {
      link.addEventListener('click', (e) => {
        // Let the browser handle navigation naturally
        console.log('Navigating to:', link.href);
      });
    });

    // Dropdown navigation
    const dropdowns = document.querySelectorAll('.group');
    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector('[class*="group-hover:opacity-100"]');
      if (menu) {
        dropdown.addEventListener('mouseenter', () => {
          menu.classList.add('opacity-100', 'visible');
          menu.classList.remove('opacity-0', 'invisible');
        });
        
        dropdown.addEventListener('mouseleave', () => {
          menu.classList.remove('opacity-100', 'visible');
          menu.classList.add('opacity-0', 'invisible');
        });
      }
    });
  }

  attachProductCardListeners() {
    // Product view details buttons
    document.querySelectorAll('button[onclick*="window.location.href"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Let the onclick handler work naturally
        console.log('Product details button clicked');
      });
    });

    // Quick view buttons
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.includes('Quick View')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const productCard = btn.closest('[class*="group relative"]');
          if (productCard) {
            const productName = productCard.querySelector('h3').textContent;
            this.showNotification(`Quick view for ${productName} - Feature coming soon!`, 'info');
          }
        });
      }
    });
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Mobile menu button clicked');
        
        // Toggle mobile menu visibility
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('animate-slide-in');
          console.log('Mobile menu opened');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('animate-slide-in');
          console.log('Mobile menu closed');
        }
        
        // Update button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
          if (isHidden) {
            icon.className = 'fas fa-times text-lg group-hover:scale-110 transition-transform';
          } else {
            icon.className = 'fas fa-bars text-lg group-hover:scale-110 transition-transform';
          }
        }
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
          if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('animate-slide-in');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
              icon.className = 'fas fa-bars text-lg group-hover:scale-110 transition-transform';
            }
          }
        }
      });
    }
  }

  searchProducts(query) {
    // This is a placeholder for search functionality
    // Since we're using server-side rendering, we would typically
    // want to implement server-side search or reload the page with search params
    console.log('Search query:', query);
    this.showNotification('Search functionality coming soon!', 'info');
  }

  sortProducts(sortValue) {
    // This is a placeholder for sort functionality
    console.log('Sort by:', sortValue);
    this.showNotification('Sort functionality coming soon!', 'info');
  }

  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
      
      if (totalItems > 0) {
        cartCount.classList.remove('hidden');
        cartCount.classList.add('animate-bounce');
      } else {
        cartCount.classList.add('hidden');
        cartCount.classList.remove('animate-bounce');
      }
    }
  }

  addToCart(productId, productName = 'Product', price = 0, image = '') {
    // Enhanced cart functionality
    const existingItem = this.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        id: productId,
        name: productName,
        price: parseFloat(price),
        image: image,
        quantity: 1
      });
    }

    localStorage.setItem('duelistCart', JSON.stringify(this.cart));
    this.updateCartCount();
    this.showNotification(`${productName} added to cart!`, 'success');
    
    // Update cart display if on cart page
    if (window.location.pathname === '/cart') {
      this.renderCartItems();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    localStorage.setItem('duelistCart', JSON.stringify(this.cart));
    this.updateCartCount();
    
    if (window.location.pathname === '/cart') {
      this.renderCartItems();
    }
  }

  updateCartItemQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        localStorage.setItem('duelistCart', JSON.stringify(this.cart));
        this.updateCartCount();
        
        if (window.location.pathname === '/cart') {
          this.renderCartItems();
        }
      }
    }
  }

  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('empty-cart');
    
    if (!container) return;

    if (this.cart.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const cartHTML = this.cart.map(item => `
      <div class="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-16 h-16 object-cover rounded-lg bg-slate-600"
          onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjNGI1NTYzIi8+CjxwYXRoIGQ9Ik0yMCAyMEg0NFY0NEgyMFYyMFoiIGZpbGw9IiM2Yjc5ODAiLz4KPC9zdmc+'"
        />
        <div class="flex-1">
          <h3 class="font-semibold text-white text-sm">${item.name}</h3>
          <p class="text-slate-400 text-xs">$${item.price.toFixed(2)} each</p>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            onclick="window.duelistApp.updateCartItemQuantity(${item.id}, ${item.quantity - 1})" 
            class="w-8 h-8 bg-slate-600 hover:bg-slate-500 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <i class="fas fa-minus text-xs"></i>
          </button>
          <span class="w-8 text-center text-white font-semibold">${item.quantity}</span>
          <button 
            onclick="window.duelistApp.updateCartItemQuantity(${item.id}, ${item.quantity + 1})" 
            class="w-8 h-8 bg-slate-600 hover:bg-slate-500 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <i class="fas fa-plus text-xs"></i>
          </button>
        </div>
        <div class="text-right">
          <p class="font-bold text-white">$${(item.price * item.quantity).toFixed(2)}</p>
          <button 
            onclick="window.duelistApp.removeFromCart(${item.id})" 
            class="text-red-400 hover:text-red-300 text-xs transition-colors"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');

    container.innerHTML = cartHTML;
    this.updateCartSummary();
  }

  updateCartSummary() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50 ? 0 : 0; // Free shipping always for now
    const total = subtotal + shipping;

    // Update cart page elements
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    if (checkoutBtn) checkoutBtn.disabled = this.cart.length === 0;

    // Update checkout page elements
    const checkoutSubtotalEl = document.getElementById('checkout-subtotal');
    const checkoutShippingEl = document.getElementById('checkout-shipping');
    const checkoutTotalEl = document.getElementById('checkout-total');

    if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (checkoutShippingEl) checkoutShippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (checkoutTotalEl) checkoutTotalEl.textContent = `$${total.toFixed(2)}`;

    // Update checkout items list
    const checkoutItemsEl = document.getElementById('checkout-items');
    if (checkoutItemsEl) {
      checkoutItemsEl.innerHTML = this.cart.map(item => `
        <div class="flex justify-between text-sm">
          <span class="text-slate-300">${item.name} × ${item.quantity}</span>
          <span class="text-white">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  getCartSummary() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50 ? 0 : 0;
    const total = subtotal + shipping;
    
    return { subtotal, shipping, total };
  }

  showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification-toast fixed top-4 right-4 z-50 px-6 py-4 rounded-2xl shadow-2xl transform translate-x-full transition-all duration-300 backdrop-blur-lg border ${
      type === 'success' ? 'bg-green-500/90 border-green-400/50 text-white' : 
      type === 'error' ? 'bg-red-500/90 border-red-400/50 text-white' : 
      'bg-yellow-500/90 border-yellow-400/50 text-black'
    }`;
    
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <i class="fas ${
          type === 'success' ? 'fa-check-circle' : 
          type === 'error' ? 'fa-exclamation-circle' : 
          'fa-info-circle'
        }"></i>
        <span class="font-medium">${message}</span>
        <button class="ml-2 hover:opacity-70 transition-opacity" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
      notification.classList.add('translate-x-0');
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 300);
      }
    }, 4000);
  }

  showError(message) {
    console.error('App Error:', message);
    this.showNotification(message, 'error');
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing Duelist Emporium App...');
  window.duelistApp = new DuelistEmporiumApp();
});

// Global utility functions
window.navigateToCategory = (category) => {
  if (category) {
    window.location.href = `/shop/${category}`;
  } else {
    window.location.href = '/shop';
  }
};

window.addToCart = (productId, productName, price, image) => {
  if (window.duelistApp) {
    window.duelistApp.addToCart(productId, productName, price, image);
  }
};

// Handle page transitions smoothly
window.addEventListener('beforeunload', () => {
  console.log('🔄 Page transition...');
});