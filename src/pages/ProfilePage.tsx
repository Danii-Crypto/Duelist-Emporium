export function ProfilePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-white mb-8">My Account</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-nexus-gray rounded-lg p-6 space-y-2">
              <a href="#profile" className="block w-full text-left px-4 py-2 text-nexus-accent bg-nexus-accent/10 rounded-lg font-medium">
                Profile Info
              </a>
              <a href="#orders" className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-nexus-black/20 rounded-lg transition-colors">
                Order History
              </a>
              <a href="#addresses" className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-nexus-black/20 rounded-lg transition-colors">
                Addresses
              </a>
              <a href="#payment" className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-nexus-black/20 rounded-lg transition-colors">
                Payment Methods
              </a>
              <a href="#preferences" className="block w-full text-left px-4 py-2 text-gray-400 hover:text-white hover:bg-nexus-black/20 rounded-lg transition-colors">
                Preferences
              </a>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-nexus-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
              
              {/* Profile Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth</label>
                  <input type="date" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="w-4 h-4 text-nexus-accent bg-nexus-black border-nexus-black rounded focus:ring-nexus-accent" />
                  <label htmlFor="newsletter" className="text-sm text-gray-300">
                    Subscribe to newsletter for updates and exclusive offers
                  </label>
                </div>
                
                <div className="flex space-x-4">
                  <button type="submit" className="bg-nexus-accent hover:bg-nexus-accent/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    Save Changes
                  </button>
                  <button type="button" className="border border-nexus-black text-gray-300 hover:text-white hover:border-nexus-accent px-6 py-2 rounded-lg font-semibold transition-colors">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            
            {/* Change Password */}
            <div className="bg-nexus-gray rounded-lg p-6 mt-6">
              <h2 className="text-xl font-semibold text-white mb-6">Change Password</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                  <input type="password" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter current password" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                  <input type="password" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Enter new password" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                  <input type="password" className="w-full px-3 py-2 bg-nexus-black border border-nexus-black focus:border-nexus-accent rounded-lg text-white focus:outline-none" placeholder="Confirm new password" />
                </div>
                
                <button type="submit" className="bg-nexus-accent hover:bg-nexus-accent/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}