export function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            About NexusCard
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing collectors and players the highest quality TCG accessories 
            and building a community around the games we love.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="bg-nexus-gray rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-300 space-y-4">
            <p>
              Founded in 2020 by a group of competitive TCG players, NexusCard was born from a simple frustration: 
              finding premium accessories that could keep up with the demands of serious gameplay was nearly impossible.
            </p>
            <p>
              What started as sourcing products for our local gaming community has evolved into a curated marketplace 
              serving collectors and players worldwide. We work directly with manufacturers to ensure every product 
              meets our exacting standards for quality and performance.
            </p>
            <p>
              Today, NexusCard is proud to be the go-to destination for tournament-grade accessories, 
              limited edition collectibles, and everything in between. Our team combines decades of competitive 
              experience with a passion for the collecting hobby.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-award text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Quality First</h3>
            <p className="text-gray-400">
              Every product is rigorously tested by our team of competitive players before earning a place in our catalog.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-card-rare to-card-epic rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Community Driven</h3>
            <p className="text-gray-400">
              We listen to our community and constantly evolve our offerings based on player feedback and emerging needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-card-legendary to-card-mythic rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation Focus</h3>
            <p className="text-gray-400">
              We're always looking for the next breakthrough in TCG technology and premium collecting solutions.
            </p>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="bg-nexus-gray rounded-2xl p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Meet the Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-nexus-accent to-nexus-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-crown text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Alex Chen</h3>
              <p className="text-nexus-accent text-sm mb-2">Founder & CEO</p>
              <p className="text-gray-400 text-sm">
                Former tournament champion with 15+ years in competitive TCGs. Leads product curation and community engagement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-card-rare to-card-epic rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cog text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Maya Rodriguez</h3>
              <p className="text-nexus-accent text-sm mb-2">Head of Operations</p>
              <p className="text-gray-400 text-sm">
                Supply chain expert ensuring every product meets our quality standards and ships on time, every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-card-legendary to-card-mythic rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Jordan Kim</h3>
              <p className="text-nexus-accent text-sm mb-2">Creative Director</p>
              <p className="text-gray-400 text-sm">
                Collector and artist responsible for exclusive designs and limited edition collaborations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="bg-gradient-to-r from-nexus-dark to-nexus-gray rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to suggest something new? 
            We'd love to hear from you!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:hello@nexuscard.com" className="flex items-center space-x-2 text-nexus-accent hover:text-nexus-gold transition-colors">
              <i className="fas fa-envelope"></i>
              <span>hello@nexuscard.com</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 text-nexus-accent hover:text-nexus-gold transition-colors">
              <i className="fab fa-discord"></i>
              <span>Join our Discord</span>
            </a>
            
            <a href="#" className="flex items-center space-x-2 text-nexus-accent hover:text-nexus-gold transition-colors">
              <i className="fab fa-twitter"></i>
              <span>@NexusCardTCG</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}