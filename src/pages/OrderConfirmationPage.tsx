export function OrderConfirmationPage({ orderNumber }: { orderNumber: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Success Header */}
      <section className="relative bg-gradient-to-br from-green-900 via-slate-900 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M40 40V20H20V0H0v20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <i className="fas fa-check text-white text-3xl"></i>
            </div>
            <div className="inline-flex items-center bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-full px-6 py-2 mb-4">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span className="text-green-400 text-sm font-semibold">Order Confirmed</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 mb-6 leading-tight">
            Thank You!
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Your order has been successfully submitted
          </p>
          
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-slate-400 text-sm mb-2">Order Number</p>
            <p className="text-2xl font-bold text-yellow-400" id="order-number">
              #{orderNumber || 'Loading...'}
            </p>
          </div>
        </div>
      </section>

      {/* Order Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* What Happens Next */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-clock mr-3 text-yellow-400"></i>
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-black text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Email Confirmation</h3>
                <p className="text-slate-400 text-sm">
                  You'll receive an order confirmation email within 5 minutes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Contact & Payment</h3>
                <p className="text-slate-400 text-sm">
                  We'll contact you within 24 hours to arrange payment and shipping
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shipping-fast text-black text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Fast Shipping</h3>
                <p className="text-slate-400 text-sm">
                  Your order ships within 1-2 business days after payment
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-receipt mr-3 text-yellow-400"></i>
              Order Summary
            </h2>
            
            <div id="confirmation-order-details">
              {/* Order details will be populated by JavaScript */}
              <div className="space-y-4 mb-6" id="confirmation-items">
                {/* Items populated by JS */}
              </div>
              
              <div className="border-t border-slate-600 pt-4">
                <div className="flex justify-between text-slate-300 mb-2">
                  <span>Subtotal:</span>
                  <span id="confirmation-subtotal">$0.00</span>
                </div>
                <div className="flex justify-between text-slate-300 mb-4">
                  <span>Shipping:</span>
                  <span id="confirmation-shipping">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total:</span>
                  <span id="confirmation-total">$0.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <i className="fas fa-user mr-3 text-yellow-400"></i>
              Customer Information
            </h2>
            
            <div id="confirmation-customer-info" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Contact Details</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-300">
                    <span className="text-slate-400">Name:</span>
                    <span id="confirmation-name" className="ml-2">-</span>
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-400">Email:</span>
                    <span id="confirmation-email" className="ml-2">-</span>
                  </p>
                  <p className="text-slate-300">
                    <span className="text-slate-400">Phone:</span>
                    <span id="confirmation-phone" className="ml-2">-</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Shipping Address</h3>
                <div id="confirmation-address" className="text-sm text-slate-300">
                  {/* Address populated by JS */}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/shop" 
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-semibold px-6 py-3 rounded-xl transition-all"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                Continue Shopping
              </a>
              
              <button 
                onclick="window.print()" 
                className="inline-flex items-center border-2 border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                <i className="fas fa-print mr-2"></i>
                Print Order
              </button>
            </div>
            
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              If you have any questions about your order, please contact us at 
              <a href="mailto:orders@duelistemporium.com" className="text-yellow-400 hover:text-yellow-300 ml-1">
                orders@duelistemporium.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}