function TrendingProducts() {
    const products = [
      {
        id: 1,
        name: "K-Swiss V8 - Masculino",
        brand: "Tênis",
        originalPrice: 200,
        currentPrice: 100,
        discount: "30% OFF",
        image: "/images/k-swiss.jpg",
      },
      {
        id: 2,
        name: "K-Swiss V8 - Masculino",
        brand: "Tênis",
        originalPrice: 200,
        currentPrice: 100,
        discount: "30% OFF",
        image: "/images/k-swiss.jpg",
      },
      {
        id: 3,
        name: "K-Swiss V8 - Masculino",
        brand: "Tênis",
        originalPrice: 200,
        currentPrice: 100,
        discount: "30% OFF",
        image: "/images/k-swiss.jpg",
      },
      {
        id: 4,
        name: "K-Swiss V8 - Masculino",
        brand: "Tênis",
        originalPrice: 200,
        currentPrice: 100,
        discount: "30% OFF",
        image: "/images/k-swiss.jpg",
      },
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="section-header flex items-center justify-between mb-8">
            <h2 className="section-title text-2xl font-semibold">Produtos em alta</h2>
            <a href="/todos" className="view-all flex items-center gap-1 text-primary font-medium hover:underline">
              Ver todos <i className="ph ph-arrow-right"></i>
            </a>
          </div>
  
          <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card bg-base-200 rounded-lg overflow-hidden shadow hover:-translate-y-1 hover:shadow-md transition-all relative"
              >
                <div className="product-badge absolute top-3 left-3 bg-success text-success-content px-2 py-1 rounded text-xs font-semibold z-10">
                  {product.discount}
                </div>
  
                <div className="product-image h-[200px] flex items-center justify-center p-4 bg-base-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>
  
                <div className="product-info p-4">
                  <span className="product-brand text-xs text-neutral block mb-1">{product.brand}</span>
                  <h3 className="product-name text-base font-medium mb-2">{product.name}</h3>
                  <div className="product-price flex items-center gap-2">
                    <span className="original-price text-sm line-through text-neutral">${product.originalPrice}</span>
                    <span className="current-price text-lg font-semibold text-primary">${product.currentPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default TrendingProducts  