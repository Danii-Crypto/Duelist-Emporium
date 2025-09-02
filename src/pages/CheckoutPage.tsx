export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Checkout Header */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M40 40V20H20V0H0v20h20v20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-full px-6 py-2 mb-4">
              <i className="fas fa-credit-card text-yellow-400 mr-2"></i>
              <span className="text-yellow-400 text-sm font-semibold">Secure Checkout</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 mb-6 leading-tight">
            Checkout
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Complete your order information below
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-user mr-3 text-yellow-400"></i>
                  Order Information
                </h2>
                
                <form id="checkout-form" onsubmit="submitOrder(event)">
                  {/* Customer Information */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Customer Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Shipping Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                          placeholder="123 Main Street"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-slate-300 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                            placeholder="Your City"
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-slate-300 mb-2">
                            State/Province *
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            required
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-slate-300 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            required
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                            placeholder="12345"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="JP">Japan</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Order Notes */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Order Notes (Optional)</h3>
                    <textarea
                      id="orderNotes"
                      name="orderNotes"
                      rows={4}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all resize-none"
                      placeholder="Any special instructions or notes for your order..."
                    ></textarea>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        required
                        className="mt-1 w-4 h-4 text-yellow-400 bg-slate-700 border border-slate-600 rounded focus:ring-yellow-400 focus:ring-2"
                      />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        I agree to the <a href="/terms" className="text-yellow-400 hover:text-yellow-300 underline">Terms and Conditions</a> and <a href="/privacy" className="text-yellow-400 hover:text-yellow-300 underline">Privacy Policy</a>. I understand that no payment will be processed at this time, and I will be contacted regarding payment and shipping details.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Submit Order
                  </button>
                  
                  <p className="text-xs text-slate-400 text-center mt-4">
                    By submitting this order, you'll receive an email confirmation and we'll contact you to arrange payment and shipping.
                  </p>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-receipt mr-3 text-yellow-400"></i>
                  Order Summary
                </h2>
                
                <div id="checkout-order-summary">
                  <div id="checkout-items" className="space-y-4 mb-6">
                    {/* Items will be populated by JavaScript */}
                  </div>
                  
                  <div className="border-t border-slate-600 pt-4 space-y-3">
                    <div className="flex justify-between text-slate-300">
                      <span>Subtotal:</span>
                      <span id="checkout-subtotal">$0.00</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Shipping:</span>
                      <span id="checkout-shipping">FREE</span>
                    </div>
                    <div className="border-t border-slate-600 pt-3">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total:</span>
                        <span id="checkout-total">$0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="flex items-center text-green-400 text-sm">
                      <i className="fas fa-shield-alt mr-2"></i>
                      <span>Secure & Safe Order Process</span>
                    </div>
                    <p className="text-xs text-green-300/80 mt-1">
                      No payment required now. We'll contact you to arrange payment and shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}