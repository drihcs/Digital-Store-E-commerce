"use client"

import { useState } from "react"

function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <div className="logo">
          <a href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <span className="logo-icon">◆</span>
            <span className="logo-text">Digital Store</span>
          </a>
        </div>

        <div className="search-bar flex-1 max-w-lg relative">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="w-full py-2 px-4 border border-base-300 rounded bg-base-200 focus:outline-none focus:border-primary transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-base-content opacity-70 hover:opacity-100">
            <i className="ph ph-magnifying-glass"></i>
          </button>
        </div>

        <div className="header-actions flex items-center gap-4">
          <a
            href="/cadastro"
            className="button bg-primary text-primary-content px-6 py-2 rounded font-medium hover:bg-primary-focus transition-colors"
          >
            Entrar
          </a>
          <a href="/carrinho" className="cart-button relative text-xl text-base-content">
            <i className="ph ph-shopping-cart"></i>
            <span className="cart-count absolute -top-2 -right-2 bg-primary text-primary-content text-xs w-[18px] h-[18px] rounded-full flex items-center justify-center">
              2
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header