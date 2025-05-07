function Footer() {
  return (
    <footer className="bg-base-200 pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="footer-top grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="footer-logo flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <span className="logo-icon">◆</span>
              <span className="logo-text">Digital Store</span>
            </div>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold mb-4">Informação</h3>
            <ul className="footer-links flex flex-col gap-2">
              <li>
                <a href="/sobre" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Sobre Digital Store
                </a>
              </li>
              <li>
                <a href="/seguranca" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Segurança
                </a>
              </li>
              <li>
                <a href="/wishlist" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/blog" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Blog
                </a>
              </li>
              <li>
                <a href="/trabalhe" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Trabalhe conosco
                </a>
              </li>
              <li>
                <a href="/vendas" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Meus pedidos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold mb-4">Categorias</h3>
            <ul className="footer-links flex flex-col gap-2">
              <li>
                <a href="/camisetas" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="/calcas" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Calças
                </a>
              </li>
              <li>
                <a href="/bones" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Bonés
                </a>
              </li>
              <li>
                <a href="/headphones" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Headphones
                </a>
              </li>
              <li>
                <a href="/tenis" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Tênis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold mb-4">Contato</h3>
            <address className="footer-contact not-italic">
              <p className="mb-2 opacity-80">Av. Santos Dumont, 1510 - 1</p>
              <p className="mb-2 opacity-80">Aldeota - Fortaleza - CE</p>
              <p className="mb-2 opacity-80">CEP: 60150-161</p>
              <p className="mb-2 opacity-80">+55 85 3051-3411</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between pt-6 border-t border-base-300 gap-4">
          <div className="social-links flex gap-4">
            <a href="#" className="social-link text-xl opacity-80 hover:opacity-100 hover:text-primary transition-all">
              <i className="ph ph-facebook-logo"></i>
            </a>
            <a href="#" className="social-link text-xl opacity-80 hover:opacity-100 hover:text-primary transition-all">
              <i className="ph ph-instagram-logo"></i>
            </a>
            <a href="#" className="social-link text-xl opacity-80 hover:opacity-100 hover:text-primary transition-all">
              <i className="ph ph-twitter-logo"></i>
            </a>
          </div>
          <p className="copyright text-sm opacity-80">© 2023 Digital Store</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
