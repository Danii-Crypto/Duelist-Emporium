export function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Cart Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M40 40V20H20V0H0v20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full px-6 py-2 mb-4">
              <i className="fas fa-shopping-cart text-yellow-400 mr-2"></i>
              <span className="text-yellow-400 text-sm font-semibold">Shopping Cart</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 mb-6 leading-tight">
            Your Cart
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Review your items and proceed to checkout
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-list mr-3 text-yellow-400"></i>
                  Cart Items
                </h2>
                
                <div id="cart-items-container">
                  {/* Cart items will be populated by JavaScript */}
                  <div id="empty-cart" className="text-center py-12">
                    <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-shopping-cart text-3xl text-slate-400"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Your cart is empty</h3>
                    <p className="text-slate-400 mb-6">Add some amazing Yu-Gi-Oh accessories to get started!</p>
                    <a 
                      href="/shop" 
                      className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      <i className="fas fa-shopping-bag mr-2"></i>
                      Start Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-calculator mr-3 text-yellow-400"></i>
                  Order Summary
                </h2>
                
                <div id="order-summary">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal:</span>
                      <span id="subtotal">$0.00</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Shipping:</span>
                      <span id="shipping">FREE</span>
                    </div>
                    <div className="border-t border-slate-600 pt-4">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total:</span>
                        <span id="total">$0.00</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    id="checkout-btn"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled
                    onclick="proceedToCheckout()"
                  >
                    <i className="fas fa-credit-card mr-2"></i>
                    Proceed to Checkout
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    Free shipping on orders over $50
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}