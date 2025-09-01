export function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-duelist-accent mb-6">
            About Duelist Emporium
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where every card matters, every tournament counts. We're the premier destination for serious Yu-Gi-Oh players seeking championship-grade accessories.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="bg-duelist-darker rounded-2xl p-8 lg:p-12 mb-12 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white mb-6">Our Dueling Story</h2>
          <div className="prose prose-lg text-gray-300 space-y-4">
            <p>
              Founded by legendary duelists who dominated tournament scenes across the globe, Duelist Emporium was born from the shadow realm of mediocre accessories. We knew duelists deserved better than flimsy deck boxes and low-quality sleeves.
            </p>
            <p>
              What began as crafting premium accessories for our local dueling academy has evolved into the ultimate emporium serving duelists worldwide. Every product undergoes rigorous testing in actual tournament conditions to ensure it meets the standards of championship play.
            </p>
            <p>
              Today, Duelist Emporium stands as the heart of the cards for competitive players, collectors, and everyone in between. Our team combines decades of dueling mastery with an unwavering passion for the game that brings us all together.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-duelist-accent to-duelist-gold rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-trophy text-black text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Tournament Grade</h3>
            <p className="text-gray-400">
              Every accessory is battle-tested by championship duelists to ensure it can handle the intensity of competitive play.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-duelist-purple to-duelist-blue rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-dragon text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Duelist Community</h3>
            <p className="text-gray-400">
              Built by duelists, for duelists. We listen to our community and evolve our catalog based on the needs of real players.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-duelist-dark-purple to-duelist-purple rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-magic text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Legendary Quality</h3>
            <p className="text-gray-400">
              We're constantly seeking the next evolution in dueling accessories and premium collecting solutions.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-duelist-darker rounded-2xl p-8 lg:p-12 mb-12 border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Dueling Masters</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-duelist-accent to-duelist-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-crown text-black text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Yugi Moto</h3>
              <p className="text-duelist-accent text-sm mb-2">King of Games & Founder</p>
              <p className="text-gray-400 text-sm">
                Legendary duelist and Pharaoh of premium accessories. Leads product development with the heart of the cards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-duelist-purple to-duelist-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-gem text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Seto Kaiba</h3>
              <p className="text-duelist-accent text-sm mb-2">CEO of Operations</p>
              <p className="text-gray-400 text-sm">
                Master strategist ensuring every product meets the exacting standards worthy of a Blue-Eyes White Dragon.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-duelist-dark-purple to-duelist-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mai Valentine</h3>
              <p className="text-duelist-accent text-sm mb-2">Design Duelist</p>
              <p className="text-gray-400 text-sm">
                Artist and collector responsible for exclusive artwork and limited edition collaborations with top artists.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="bg-gradient-to-r from-duelist-dark to-duelist-darker rounded-2xl p-8 lg:p-12 text-center border border-gray-700/50">
          <h2 className="text-3xl font-bold text-white mb-6">Summon Us</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions about our premium accessories or want to suggest new products? 
            The heart of the cards guides us to listen!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:duel@duelist-emporium.com" className="flex items-center space-x-2 text-duelist-accent hover:text-duelist-gold transition-colors">
              <i className="fas fa-envelope"></i>
              <span>duel@duelist-emporium.com</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 text-duelist-accent hover:text-duelist-gold transition-colors">
              <i className="fab fa-discord"></i>
              <span>Join our Duel Academy</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 text-duelist-accent hover:text-duelist-gold transition-colors">
              <i className="fab fa-twitter"></i>
              <span>@DuelistEmporium</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}