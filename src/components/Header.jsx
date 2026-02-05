import { Link } from 'react-router-dom'

const Header = ({ activeLink }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ecf3] dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-primary">
            <svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-graphite dark:text-white text-xl font-extrabold tracking-tight uppercase">ALGORYUM</h2>
        </Link>
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
      </div>
    </header>
  )
}

export default Header
