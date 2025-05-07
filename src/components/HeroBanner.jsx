"use client"

import { useState } from "react"

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      subtitle: "Melhores ofertas personalizadas",
      title: "Queima de estoque Nike",
      description:
        "Compre os últimos lançamentos antes que acabem! Só temos disponível até o estoque acabar, aproveite nossas promoções!",
      image: "/images/nike-shoes.png",
    },
    {
      subtitle: "Novidades da semana",
      title: "Coleção Adidas 2023",
      description: "As últimas tendências da Adidas acabaram de chegar. Confira os novos modelos e garanta o seu!",
      image: "/images/nike-shoes.png",
    },
    {
      subtitle: "Edição limitada",
      title: "Supreme x Nike",
      description: "A colaboração mais aguardada do ano chegou. Peças exclusivas com design único e qualidade premium.",
      image: "/images/nike-shoes.png",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="hero-content flex-1 max-w-lg lg:max-w-none lg:text-left text-center">
          <span className="subtitle text-primary font-medium block mb-2">{slides[activeSlide].subtitle}</span>
          <h1 className="title text-5xl md:text-5xl font-bold mb-4 leading-tight">
            {slides[activeSlide].title} <span className="fire-icon">🔥</span>
          </h1>
          <p className="description mb-6 opacity-80">{slides[activeSlide].description}</p>
          <a
            href="/ofertas"
            className="button inline-flex bg-primary text-primary-content px-6 py-2 rounded font-medium hover:bg-primary-focus transition-colors"
          >
            Ver Ofertas
          </a>
        </div>

        <div className="hero-image flex-1 relative">
          <img
            src={slides[activeSlide].image || "/placeholder.svg"}
            alt="Produto em destaque"
            className="product-image max-w-full h-auto object-contain z-10 relative"
          />
          <div className="dots-pattern absolute w-[150px] h-[150px] bg-[radial-gradient(var(--color-primary)_2px,transparent_2px)] bg-[size:15px_15px] -top-5 -right-5 z-0 opacity-30"></div>
        </div>
      </div>

      <div className="slider-dots flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeSlide ? "active bg-primary w-[30px] rounded-[5px]" : "bg-base-300 w-[10px]"} h-[10px] rounded-full cursor-pointer transition-all`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroBanner
