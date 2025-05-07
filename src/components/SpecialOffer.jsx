function SpecialOffer() {
    return (
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="offer-container flex items-center gap-8 flex-wrap">
            <div className="offer-image flex-1 min-w-[300px] rounded-lg overflow-hidden">
              <img src="/images/air-jordan.jpg" alt="Air Jordan edição de colecionador" className="w-full h-auto" />
            </div>
  
            <div className="offer-content flex-1 min-w-[300px]">
              <span className="offer-badge inline-block bg-primary text-primary-content px-3 py-1 rounded text-xs font-semibold mb-3">
                Oferta especial
              </span>
              <h2 className="offer-title text-3xl font-bold mb-4">Air Jordan edição de colecionador</h2>
              <p className="offer-description mb-6 opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea.
              </p>
              <a
                href="/oferta"
                className="button inline-flex bg-primary text-primary-content px-6 py-2 rounded font-medium hover:bg-primary-focus transition-colors"
              >
                Ver oferta
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default SpecialOffer  