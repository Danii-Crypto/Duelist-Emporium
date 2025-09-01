export function CartPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-white mb-8">Shopping Cart</h1>
        
        <div id="cart-container">
          {/* Cart will be populated by JavaScript */}
          <div id="empty-cart" className="text-center py-20">
            <div className="w-24 h-24 bg-nexus-gray rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-shopping-bag text-4xl text-gray-400"></i>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <a href="/shop" className="inline-flex items-center space-x-2 bg-nexus-accent hover:bg-nexus-accent/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <i className="fas fa-arrow-left"></i>
              <span>Continue Shopping</span>
            </a>
          </div>
          
          <div id="cart-items" className="hidden space-y-6">
            {/* Cart items will be inserted here */}
          </div>
        </div>
        
        {/* Cart Summary */}
        <div id="cart-summary" className="hidden mt-8 bg-nexus-gray rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white" id="cart-subtotal">$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shipping</span>
              <span className="text-white">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tax</span>
              <span className="text-white" id="cart-tax">$0.00</span>
            </div>
            <div className="border-t border-nexus-black pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span className="text-white">Total</span>
                <span className="text-nexus-accent" id="cart-total">$0.00</span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-6 bg-nexus-accent hover:bg-nexus-accent/80 text-white py-3 rounded-lg font-semibold transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}