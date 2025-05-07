function FeaturedCollections() {
    const collections = [
      {
        title: "Novo drop Supreme",
        discount: "30% OFF",
        link: "/colecao/supreme",
        image: "/images/supreme.jpg",
      },
      {
        title: "Coleção Adidas",
        discount: "30% OFF",
        link: "/colecao/adidas",
        image: "/images/adidas.jpg",
      },
      {
        title: "Novo Beats Bass",
        discount: "30% OFF",
        link: "/colecao/beats",
        image: "/images/beats.jpg",
      },
    ]
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-2xl font-semibold mb-8">Coleções em destaque</h2>
  
          <div className="collections-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="collection-card relative rounded-lg overflow-hidden bg-base-200 h-[200px] flex items-end p-4 shadow hover:-translate-y-1 transition-transform"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${collection.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span className="discount-tag absolute top-3 left-3 bg-success text-success-content px-2 py-1 rounded text-xs font-semibold">
                  {collection.discount}
                </span>
  
                <div className="card-content w-full z-10">
                  <h3 className="text-lg font-semibold mb-3 text-white">{collection.title}</h3>
                  <a
                    href={collection.link}
                    className="button inline-flex bg-transparent border border-primary text-primary px-4 py-1.5 rounded font-medium hover:bg-primary hover:text-primary-content transition-colors"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedCollections
  