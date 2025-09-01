interface ProductPageProps {
  productId: string
}

export function ProductPage({ productId }: ProductPageProps) {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <a href="/" className="hover:text-nexus-accent transition-colors">Home</a>
          <i className="fas fa-chevron-right text-xs"></i>
          <a href="/shop" className="hover:text-nexus-accent transition-colors">Shop</a>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-white" id="product-breadcrumb">Product</span>
        </nav>
        
        <div id="product-container" className="grid lg:grid-cols-2 gap-12">
          {/* Product will be loaded here */}
        </div>
        
        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Related Products</h2>
          <div id="related-products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Related products will be loaded here */}
          </div>
        </section>
      </div>
    </div>
  )
}