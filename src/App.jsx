"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import HeroBanner from "./components/HeroBanner"
import FeaturedCollections from "./components/FeaturedCollections"
import Categories from "./components/Categories"
import TrendingProducts from "./components/TrendingProducts"
import SpecialOffer from "./components/SpecialOffer"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    // Verificar preferência do usuário
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    const storedTheme = localStorage.getItem("theme")

    // Aplicar tema baseado na preferência ou no tema armazenado
    if (storedTheme === "dark" || (storedTheme === null && prefersDarkScheme.matches)) {
      setDarkTheme(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
    if (!darkTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-200">
      <Header />
      <Navigation />
      <main>
        <HeroBanner />
        <FeaturedCollections />
        <Categories />
        <TrendingProducts />
        <SpecialOffer />
      </main>
      <Footer />
      <ThemeToggle darkTheme={darkTheme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App
