"use client"

function ThemeToggle({ darkTheme, toggleTheme }) {
  return (
    <button
      className="theme-toggle fixed bottom-5 right-5 w-10 h-10 rounded-full bg-primary text-primary-content border-none flex items-center justify-center cursor-pointer z-50 shadow-md"
      onClick={toggleTheme}
      aria-label="Alternar tema"
    >
      {darkTheme ? <i className="ph ph-sun"></i> : <i className="ph ph-moon"></i>}
    </button>
  )
}

export default ThemeToggle