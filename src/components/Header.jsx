import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ activeLink }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ecf3] dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://lh3.googleusercontent.com/gg/AMW1TPqTF7VY7JcwDSONw1SrSnFeoWcmM1chxhsw4UYO6pFc8LLUfNb3YlgznjjmcPyaq45S9oYiw0b2rLNQFJmTpK4W8HXkcYQQvJKLMHDZEmmCD9asi6Iqk0n95r1h6zPIsuWWG7hl4h0vtXZ13qw7IWPPQ04kLmheti870BhOV0MnKgxTDRI=s1024-rj-mp2" 
            alt="Algoryum Logo" 
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />
          <h2 className="text-graphite dark:text-white text-base md:text-lg font-extrabold tracking-tight uppercase">ALGORYUM</h2>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'services' 
                  ? 'text-primary' 
                  : 'text-graphite/70 hover:text-primary dark:text-slate-300'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/process" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'process' 
                  ? 'text-primary' 
                  : 'text-graphite/70 hover:text-primary dark:text-slate-300'
              }`}
            >
              Process
            </Link>
            <Link 
              to="/mission" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'mission' 
                  ? 'text-primary' 
                  : 'text-graphite/70 hover:text-primary dark:text-slate-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/connect" 
              className={`text-sm font-medium transition-colors ${
                activeLink === 'connect' 
                  ? 'text-primary' 
                  : 'text-graphite/70 hover:text-primary dark:text-slate-300'
              }`}
            >
              Contact
            </Link>
          </nav>
          <Link 
            to="/connect"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold tracking-tight transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-graphite dark:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                activeLink === 'services' 
                  ? 'text-primary' 
                  : 'text-graphite/70 dark:text-slate-300'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/process" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                activeLink === 'process' 
                  ? 'text-primary' 
                  : 'text-graphite/70 dark:text-slate-300'
              }`}
            >
              Process
            </Link>
            <Link 
              to="/mission" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                activeLink === 'mission' 
                  ? 'text-primary' 
                  : 'text-graphite/70 dark:text-slate-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/connect" 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium transition-colors py-2 ${
                activeLink === 'connect' 
                  ? 'text-primary' 
                  : 'text-graphite/70 dark:text-slate-300'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/connect"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-base font-bold text-center mt-2"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
