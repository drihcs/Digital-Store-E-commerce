function Navigation() {
    return (
      <nav className="bg-base-100 border-b border-base-300">
        <div className="container mx-auto px-4">
          <ul className="flex gap-6 flex-wrap">
            <li className="nav-item active">
              <a
                href="/"
                className="block py-3 font-medium text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/produtos" className="block py-3 font-medium hover:text-primary transition-colors">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a href="/categorias" className="block py-3 font-medium hover:text-primary transition-colors">
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a href="/visao-rapida" className="block py-3 font-medium hover:text-primary transition-colors">
                Visão Rápida
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  
  export default Navigation
  