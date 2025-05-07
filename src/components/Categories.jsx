function Categories() {
    const categories = [
      {
        name: "Camisetas",
        icon: "ph-t-shirt",
        link: "/categoria/camisetas",
      },
      {
        name: "Calças",
        icon: "ph-pants",
        link: "/categoria/calcas",
      },
      {
        name: "Bonés",
        icon: "ph-baseball-cap",
        link: "/categoria/bones",
      },
      {
        name: "Headphones",
        icon: "ph-headphones",
        link: "/categoria/headphones",
      },
      {
        name: "Tênis",
        icon: "ph-sneaker",
        link: "/categoria/tenis",
      },
    ]
  
    return (
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-2xl font-semibold mb-8">Coleções em destaque</h2>
  
          <div className="categories-grid flex justify-between gap-6 flex-wrap">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="category-item flex flex-col items-center gap-2 hover:-translate-y-1 hover:text-primary transition-all"
              >
                <div className="category-icon w-[60px] h-[60px] rounded-full bg-base-200 flex items-center justify-center text-2xl text-primary transition-colors">
                  <i className={`ph ${category.icon}`}></i>
                </div>
                <span className="category-name text-sm font-medium">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Categories
  