// Cyberpunk Particle System for Duelist Emporium

class CyberParticleSystem {
  constructor() {
    this.particles = [];
    this.container = null;
    this.animationId = null;
    this.colors = ['#00d4ff', '#b300ff', '#ff0080', '#00ff41', '#ffd700'];
  }

  init() {
    this.container = document.getElementById('particles-container');
    if (!this.container) return;

    // Create initial particles
    this.createParticles(50);
    this.animate();
    
    // Add resize handler
    window.addEventListener('resize', () => this.onResize());
  }

  createParticles(count) {
    const containerRect = this.container.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * containerRect.width,
        y: Math.random() * containerRect.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.3 + 0.1,
        size: Math.random() * 3 + 1,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50,
        maxLife: 150,
        element: null
      });
    }

    this.updateParticleElements();
  }

  updateParticleElements() {
    // Remove existing particle elements
    this.container.querySelectorAll('.cyber-particle').forEach(el => el.remove());

    // Create new elements for particles
    this.particles.forEach(particle => {
      const element = document.createElement('div');
      element.className = 'cyber-particle';
      element.style.cssText = `
        position: absolute;
        width: ${particle.size}px;
        height: ${particle.size}px;
        background: ${particle.color};
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 ${particle.size * 2}px ${particle.color};
        opacity: ${particle.opacity};
        transform: translate(${particle.x}px, ${particle.y}px);
        transition: transform 0.1s ease-out;
      `;
      
      particle.element = element;
      this.container.appendChild(element);
    });
  }

  animate() {
    if (!this.container) return;

    const containerRect = this.container.getBoundingClientRect();
    
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Update life
      particle.life--;
      
      // Fade out as life decreases
      particle.opacity = (particle.life / particle.maxLife) * 0.8;

      // Reset particle if it goes off screen or dies
      if (particle.y > containerRect.height + 10 || 
          particle.x < -10 || 
          particle.x > containerRect.width + 10 || 
          particle.life <= 0) {
        
        // Reset to top with new random position
        particle.x = Math.random() * containerRect.width;
        particle.y = -10;
        particle.vx = (Math.random() - 0.5) * 0.5;
        particle.vy = Math.random() * 0.3 + 0.1;
        particle.life = particle.maxLife;
        particle.opacity = Math.random() * 0.8 + 0.2;
        particle.color = this.colors[Math.floor(Math.random() * this.colors.length)];
      }

      // Update element
      if (particle.element) {
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        particle.element.style.opacity = particle.opacity;
        particle.element.style.background = particle.color;
        particle.element.style.boxShadow = `0 0 ${particle.size * 2}px ${particle.color}`;
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  onResize() {
    if (!this.container) return;
    
    // Recreate particles on resize
    this.particles = [];
    this.createParticles(50);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.container) {
      this.container.querySelectorAll('.cyber-particle').forEach(el => el.remove());
    }
    
    window.removeEventListener('resize', this.onResize);
  }
}

// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.drops = [];
    this.animationId = null;
  }

  init() {
    // Create canvas for matrix effect
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 1;
      opacity: 0.1;
    `;
    
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    
    this.resize();
    this.initDrops();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  initDrops() {
    const columns = Math.floor(this.canvas.width / 20);
    this.drops = Array(columns).fill(0).map(() => Math.random() * this.canvas.height);
  }

  animate() {
    // Clear canvas with fade effect
    this.ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Set text properties
    this.ctx.fillStyle = '#00d4ff';
    this.ctx.font = '12px monospace';
    
    // Draw characters
    this.drops.forEach((drop, i) => {
      // Random character (0-1 binary or Yu-Gi-Oh symbols)
      const chars = '01■□▲▼◆◇★☆';
      const char = chars[Math.floor(Math.random() * chars.length)];
      
      this.ctx.fillText(char, i * 20, drop);
      
      // Reset drop randomly
      if (drop > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      
      this.drops[i] += 20;
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.canvas) {
      document.body.removeChild(this.canvas);
    }
    
    window.removeEventListener('resize', this.resize);
  }
}

// Glitch Effect
class GlitchEffect {
  static apply(element, duration = 500) {
    element.style.animation = `glitch-h ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }
  
  static randomGlitch() {
    const elements = document.querySelectorAll('h1, h2, .cyber-btn');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    
    if (randomElement && Math.random() > 0.98) {
      this.apply(randomElement, 200);
    }
  }
}

// Initialize effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particle system
  const particleSystem = new CyberParticleSystem();
  particleSystem.init();
  
  // Initialize matrix rain (optional - can be heavy on performance)
  // const matrixRain = new MatrixRain();
  // matrixRain.init();
  
  // Random glitch effects
  setInterval(() => {
    GlitchEffect.randomGlitch();
  }, 5000);
  
  // Store instances globally for cleanup if needed
  window.cyberEffects = {
    particleSystem,
    // matrixRain,
    GlitchEffect
  };
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (window.cyberEffects) {
    window.cyberEffects.particleSystem?.destroy();
    // window.cyberEffects.matrixRain?.destroy();
  }
});