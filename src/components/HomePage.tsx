export function HomePage() {
  return (
    <>
      {/* Cyberpunk Navigation */}
      <nav className="bg-cyber-dark/80 border-b-2 border-cyber-neon-blue/30 sticky top-0 z-50 backdrop-blur-md relative overflow-hidden">
        {/* Animated border effect */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-neon-blue via-cyber-neon-purple to-cyber-neon-pink animate-glow-pulse"></div>
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Cyberpunk Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-neon-blue to-cyber-neon-purple rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg shadow-cyber-neon-blue/50">
                  <i className="fas fa-dragon text-white text-xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line"></div>
                </div>
                {/* Glowing ring effect */}
                <div className="absolute inset-0 w-12 h-12 rounded-lg border-2 border-cyber-neon-blue/50 animate-neon-flicker"></div>
              </div>
              <div>
                <h1 className="text-2xl font-cyber font-bold text-transparent bg-gradient-to-r from-cyber-neon-blue via-cyber-electric to-cyber-neon-purple bg-clip-text">
                  DUELIST EMPORIUM
                </h1>
                <p className="text-xs text-cyber-neon-green font-matrix tracking-wider">// WEB3 METAVERSE //</p>
              </div>
            </div>
            
            {/* Navigation Links - Cyberpunk Style */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-cyber-electric hover:text-cyber-neon-blue transition-all duration-300 font-matrix relative group">
                <span className="relative z-10">PRODUCTS</span>
                <div className="absolute inset-0 bg-cyber-neon-blue/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </a>
              <a href="#categories" className="text-cyber-electric hover:text-cyber-neon-purple transition-all duration-300 font-matrix relative group">
                <span className="relative z-10">CATEGORIES</span>
                <div className="absolute inset-0 bg-cyber-neon-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </a>
              <a href="#about" className="text-cyber-electric hover:text-cyber-neon-pink transition-all duration-300 font-matrix relative group">
                <span className="relative z-10">ABOUT</span>
                <div className="absolute inset-0 bg-cyber-neon-pink/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </a>
              <a href="#contact" className="text-cyber-electric hover:text-cyber-neon-green transition-all duration-300 font-matrix relative group">
                <span className="relative z-10">CONTACT</span>
                <div className="absolute inset-0 bg-cyber-neon-green/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </a>
            </div>
            
            {/* Cyberpunk Controls */}
            <div className="flex items-center space-x-4">
              <button className="relative group p-2">
                <i className="fas fa-search text-lg text-cyber-electric group-hover:text-cyber-neon-blue transition-colors"></i>
                <div className="absolute inset-0 bg-cyber-neon-blue/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
              </button>
              <button className="relative group p-2">
                <i className="fas fa-shopping-cart text-lg text-cyber-electric group-hover:text-cyber-neon-purple transition-colors"></i>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-cyber-neon-pink to-cyber-neon-purple rounded-full text-xs flex items-center justify-center text-white font-bold border border-cyber-neon-blue/50 shadow-lg shadow-cyber-neon-purple/50">0</span>
                <div className="absolute inset-0 bg-cyber-neon-purple/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
              </button>
              <button className="md:hidden relative group p-2">
                <i className="fas fa-bars text-lg text-cyber-electric group-hover:text-cyber-neon-green transition-colors"></i>
                <div className="absolute inset-0 bg-cyber-neon-green/20 rounded opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Cyberpunk Hero Section */}
      <section className="relative bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-purple min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue/5 via-transparent to-cyber-neon-purple/5"></div>
        </div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0" id="particles-container">
          {/* Particles will be generated by JavaScript */}
        </div>
        
        {/* Glitch Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-neon-blue to-transparent opacity-50 animate-neon-flicker"></div>
        <div className="absolute bottom-1/3 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-cyber-neon-purple to-transparent opacity-30 animate-neon-flicker delay-1000"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cyberpunk Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Web3 Badge */}
                <div className="inline-flex items-center space-x-3 bg-cyber-dark/80 border-2 border-cyber-neon-blue/30 rounded-lg px-6 py-3 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue/10 to-cyber-neon-purple/10 animate-glow-pulse"></div>
                  <div className="w-3 h-3 bg-cyber-neon-green rounded-full animate-pulse relative z-10"></div>
                  <span className="text-cyber-neon-blue font-matrix text-sm tracking-wider relative z-10">NEXT-GEN METAVERSE</span>
                  <i className="fas fa-cube text-cyber-electric animate-spin-slow relative z-10"></i>
                </div>
                
                {/* Cyberpunk Title */}
                <h1 className="text-5xl lg:text-7xl font-cyber font-bold leading-tight relative">
                  <span className="bg-gradient-to-r from-cyber-neon-blue via-cyber-electric to-cyber-neon-purple bg-clip-text text-transparent animate-glow-pulse">
                    DUELIST
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-pink to-cyber-neon-blue bg-clip-text text-transparent animate-glow-pulse delay-500">
                    EMPORIUM
                  </span>
                  
                  {/* Glitch Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-blue/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </h1>
                
                {/* Cyberpunk Description */}
                <div className="space-y-4">
                  <p className="text-xl text-cyber-electric leading-relaxed font-matrix">
                    <span className="text-cyber-neon-green">&gt;</span> Enter the Web3 Yu-Gi-Oh metaverse where every card is an NFT, 
                    every duel is on-chain, and every victory is immortalized in the blockchain.
                  </p>
                  
                  <p className="text-lg text-gray-400 font-matrix">
                    <span className="text-cyber-neon-blue">//</span> From digital collectors to quantum champions, 
                    our next-gen accessories bridge the physical and virtual realms.
                  </p>
                </div>
                
                {/* Terminal-Style Features */}
                <div className="bg-cyber-dark/60 border border-cyber-neon-blue/30 rounded-lg p-4 font-matrix text-sm backdrop-blur-sm">
                  <div className="text-cyber-neon-green mb-2">$ ./initialize_duel.exe</div>
                  <div className="text-cyber-electric">
                    <span className="text-cyber-neon-blue">[✓]</span> Blockchain-verified accessories loaded
                  </div>
                  <div className="text-cyber-electric">
                    <span className="text-cyber-neon-purple">[✓]</span> NFT card sleeves synchronized  
                  </div>
                  <div className="text-cyber-electric">
                    <span className="text-cyber-neon-pink">[✓]</span> Metaverse playmats activated
                  </div>
                  <div className="text-cyber-neon-green animate-pulse">Ready for quantum dueling...</div>
                </div>
              </div>
              
              {/* Cyberpunk CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple text-white px-8 py-4 rounded-lg font-cyber font-bold overflow-hidden transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-purple to-cyber-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <i className="fas fa-rocket"></i>
                    <span>ENTER METAVERSE</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <button className="group relative border-2 border-cyber-neon-blue/50 text-cyber-electric px-8 py-4 rounded-lg font-cyber font-bold hover:border-cyber-neon-blue hover:text-cyber-neon-blue transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-3">
                    <i className="fas fa-cube"></i>
                    <span>VIEW CATALOG</span>
                  </div>
                </button>
              </div>
              
              {/* Cyberpunk Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center group">
                  <div className="text-4xl font-cyber font-bold text-transparent bg-gradient-to-b from-cyber-neon-blue to-cyber-electric bg-clip-text group-hover:animate-glow-pulse">500+</div>
                  <div className="text-sm text-gray-400 font-matrix">DIGITAL ASSETS</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-cyber font-bold text-transparent bg-gradient-to-b from-cyber-neon-purple to-cyber-neon-pink bg-clip-text group-hover:animate-glow-pulse">10K+</div>
                  <div className="text-sm text-gray-400 font-matrix">ACTIVE DUELISTS</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-cyber font-bold text-transparent bg-gradient-to-b from-cyber-neon-green to-cyber-electric bg-clip-text group-hover:animate-glow-pulse">∞</div>
                  <div className="text-sm text-gray-400 font-matrix">POSSIBILITIES</div>
                </div>
              </div>
            </div>
            
            {/* Cyberpunk Hero Visual */}
            <div className="relative">
              {/* Main Card Display */}
              <div className="relative p-8">
                {/* Holographic Card Container */}
                <div className="aspect-square bg-gradient-to-br from-cyber-dark to-cyber-purple rounded-2xl border-2 border-cyber-neon-blue/30 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-cyber-neon-blue/20 animate-card-float">
                  {/* Hologram Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyber-neon-blue/20 via-transparent to-cyber-neon-purple/20 animate-glow-pulse"></div>
                  
                  {/* Central Icon */}
                  <div className="relative z-10">
                    <i className="fas fa-dragon text-8xl text-transparent bg-gradient-to-b from-cyber-neon-blue via-cyber-electric to-cyber-neon-purple bg-clip-text animate-glow-pulse"></i>
                  </div>
                  
                  {/* Scanning Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-cyber-neon-blue animate-scan-line opacity-60"></div>
                    <div className="absolute bottom-1/4 left-0 w-full h-px bg-cyber-neon-purple animate-scan-line delay-1000 opacity-40"></div>
                  </div>
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyber-neon-blue animate-neon-flicker"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyber-neon-purple animate-neon-flicker delay-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyber-neon-green animate-neon-flicker delay-600"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyber-neon-pink animate-neon-flicker delay-900"></div>
                </div>
                
                {/* Floating Digital Cards */}
                <div className="absolute top-4 -right-4 w-20 h-28 bg-gradient-to-br from-cyber-neon-blue to-cyber-electric rounded-lg shadow-lg shadow-cyber-neon-blue/50 transform rotate-12 animate-card-float flex items-center justify-center border border-cyber-neon-blue/50">
                  <i className="fas fa-bolt text-white text-2xl animate-neon-flicker"></i>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-28 bg-gradient-to-br from-cyber-neon-purple to-cyber-neon-pink rounded-lg shadow-lg shadow-cyber-neon-purple/50 transform -rotate-12 animate-card-float delay-1000 flex items-center justify-center border border-cyber-neon-purple/50">
                  <i className="fas fa-shield-alt text-white text-2xl animate-neon-flicker delay-500"></i>
                </div>
                
                {/* Additional Floating Elements */}
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-cyber-neon-green rounded-full animate-pulse shadow-lg shadow-cyber-neon-green/50"></div>
                <div className="absolute bottom-1/3 -left-8 w-6 h-6 bg-cyber-neon-pink rounded-full animate-pulse delay-700 shadow-lg shadow-cyber-neon-pink/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Categories */}
      <section id="categories" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyber-dark/60 border border-cyber-neon-blue/30 rounded-lg px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyber-neon-blue rounded-full animate-pulse"></div>
              <span className="text-cyber-neon-blue font-matrix text-sm tracking-wider">DIGITAL ARSENAL</span>
            </div>
            
            <h2 className="text-5xl font-cyber font-bold text-transparent bg-gradient-to-r from-cyber-neon-blue via-cyber-electric to-cyber-neon-purple bg-clip-text mb-6 animate-glow-pulse">
              NEXT-GEN ACCESSORIES
            </h2>
            <p className="text-xl text-cyber-electric max-w-3xl mx-auto font-matrix">
              <span className="text-cyber-neon-green">&gt;</span> Everything you need to dominate the metaverse dueling arena
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cyberpunk Card Sleeves */}
            <div className="cyber-card group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-blue/5 to-cyber-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-neon-blue to-cyber-electric rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse relative overflow-hidden">
                  <i className="fas fa-layer-group text-white text-3xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line"></div>
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-cyber-electric mb-3">CARD SLEEVES</h3>
                <p className="text-gray-400 mb-4 font-matrix text-sm">Quantum-encrypted protection for your digital assets</p>
                
                <div className="flex items-center justify-between">
                  <div className="cyber-badge">50+ NFT OPTIONS</div>
                  <div className="w-8 h-8 border border-cyber-neon-blue/50 rounded flex items-center justify-center">
                    <i className="fas fa-arrow-right text-cyber-neon-blue text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-blue/30 group-hover:border-cyber-neon-blue transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-blue/30 group-hover:border-cyber-neon-blue transition-colors"></div>
            </div>
            
            {/* Cyberpunk Playmats */}
            <div className="cyber-card group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-purple/5 to-cyber-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-neon-purple to-cyber-neon-pink rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse relative overflow-hidden">
                  <i className="fas fa-map text-white text-3xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line delay-300"></div>
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-cyber-electric mb-3">HOLOGRAPHIC MATS</h3>
                <p className="text-gray-400 mb-4 font-matrix text-sm">AR-enhanced surfaces for immersive gameplay</p>
                
                <div className="flex items-center justify-between">
                  <div className="cyber-badge">25+ HOLO DESIGNS</div>
                  <div className="w-8 h-8 border border-cyber-neon-purple/50 rounded flex items-center justify-center">
                    <i className="fas fa-arrow-right text-cyber-neon-purple text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-purple/30 group-hover:border-cyber-neon-purple transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-purple/30 group-hover:border-cyber-neon-purple transition-colors"></div>
            </div>
            
            {/* Cyberpunk Deck Boxes */}
            <div className="cyber-card group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-green/5 to-cyber-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-neon-green to-cyber-electric rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse relative overflow-hidden">
                  <i className="fas fa-cube text-white text-3xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line delay-600"></div>
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-cyber-electric mb-3">STORAGE PODS</h3>
                <p className="text-gray-400 mb-4 font-matrix text-sm">Biometric-secured vaults for deck protection</p>
                
                <div className="flex items-center justify-between">
                  <div className="cyber-badge">30+ VAULT TYPES</div>
                  <div className="w-8 h-8 border border-cyber-neon-green/50 rounded flex items-center justify-center">
                    <i className="fas fa-arrow-right text-cyber-neon-green text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-green/30 group-hover:border-cyber-neon-green transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-green/30 group-hover:border-cyber-neon-green transition-colors"></div>
            </div>
            
            {/* Cyberpunk Accessories */}
            <div className="cyber-card group relative overflow-hidden rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-neon-pink/5 to-cyber-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-neon-pink to-cyber-gold rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow-pulse relative overflow-hidden">
                  <i className="fas fa-microchip text-white text-3xl relative z-10"></i>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan-line delay-900"></div>
                </div>
                
                <h3 className="text-xl font-cyber font-bold text-cyber-electric mb-3">NEURAL GEAR</h3>
                <p className="text-gray-400 mb-4 font-matrix text-sm">AI-powered dice, counters, and tournament tech</p>
                
                <div className="flex items-center justify-between">
                  <div className="cyber-badge">100+ TECH ITEMS</div>
                  <div className="w-8 h-8 border border-cyber-neon-pink/50 rounded flex items-center justify-center">
                    <i className="fas fa-arrow-right text-cyber-neon-pink text-xs group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyber-neon-pink/30 group-hover:border-cyber-neon-pink transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyber-neon-pink/30 group-hover:border-cyber-neon-pink transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Featured Products */}
      <section id="products" className="py-20 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-purple relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-neon-blue to-transparent opacity-30 animate-scan-line"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-cyber-neon-purple to-transparent opacity-20 animate-scan-line delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-cyber-dark/80 border border-cyber-neon-purple/30 rounded-lg px-6 py-3 mb-6 backdrop-blur-sm">
              <div className="w-3 h-3 bg-cyber-neon-purple rounded-full animate-pulse"></div>
              <span className="text-cyber-neon-purple font-matrix text-sm tracking-wider">FEATURED COLLECTION</span>
              <i className="fas fa-star text-cyber-gold animate-spin-slow"></i>
            </div>
            
            <h2 className="text-5xl font-cyber font-bold text-transparent bg-gradient-to-r from-cyber-neon-purple via-cyber-neon-pink to-cyber-electric bg-clip-text mb-6 animate-glow-pulse">
              LEGENDARY ARSENAL
            </h2>
            <p className="text-xl text-cyber-electric max-w-3xl mx-auto font-matrix">
              <span className="text-cyber-neon-pink">//</span> Hand-crafted digital artifacts for elite duelists
            </p>
          </div>
          
          <div id="featured-products" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products will be loaded dynamically with cyberpunk styling */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-yugioh-dark to-yugioh-purple">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-white">
                Why Choose Duelist Emporium?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-certificate text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
                    <p className="text-gray-400">Only the finest materials and construction for tournament-level performance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shipping-fast text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Fast Shipping</h3>
                    <p className="text-gray-400">Get your gear quickly with our expedited shipping options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yugioh-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                    <p className="text-gray-400">Our team of experienced duelists provides personalized recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 border border-yugioh-gold/20">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-yugioh-gold to-red-500 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-trophy text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">Tournament Ready</h3>
                <p className="text-gray-400">
                  From local tournaments to world championships, our accessories meet all official requirements and standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yugioh-dark border-t border-yugioh-gold/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yugioh-gold to-yellow-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-dragon text-white"></i>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white">Duelist Emporium</h3>
                  <p className="text-xs text-gray-400">Premier Yu-Gi-Oh Accessories</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for premium Yu-Gi-Oh accessories and tournament gear.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="text-gray-400 hover:text-yugioh-gold transition-colors">Products</a></li>
                <li><a href="#categories" className="text-gray-400 hover:text-yugioh-gold transition-colors">Categories</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yugioh-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yugioh-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Card Sleeves</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Playmats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Deck Boxes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yugioh-gold transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yugioh-gold hover:bg-yugioh-gold/10 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Duelist Emporium. All rights reserved. Built for duelists, by duelists.</p>
          </div>
        </div>
      </footer>
    </>
  )
}