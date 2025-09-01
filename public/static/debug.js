console.log('🟢 Debug script loaded successfully!');
document.addEventListener('DOMContentLoaded', () => {
  console.log('🟢 DOM loaded in debug script');
  const grid = document.getElementById('products-grid');
  console.log('🔍 Found products grid:', grid);
  
  if (grid) {
    grid.innerHTML = `
      <div style="color: white; background: red; padding: 20px; border-radius: 10px;">
        <h2>🚧 DEBUG MODE</h2>
        <p>This confirms JavaScript is working!</p>
        <p>Grid element found: ${grid ? 'YES' : 'NO'}</p>
        <p>Axios available: ${typeof axios !== 'undefined' ? 'YES' : 'NO'}</p>
      </div>
    `;
    grid.classList.remove('hidden');
    document.getElementById('no-products').classList.add('hidden');
  }
});