import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg className="size-6" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V44Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-graphite dark:text-white text-xl font-black uppercase">ALGORYUM</h2>
            </div>
            <p className="text-graphite/60 dark:text-slate-400 text-sm leading-relaxed max-w-[320px]">
              Strategic digital transition for local businesses. Built on architectural principles of clarity, structure, and scale.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-graphite dark:text-white font-bold uppercase text-xs tracking-widest">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/process" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">Our Process</Link>
              <Link to="/mission" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">About Us</Link>
              <Link to="/services" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">Services</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-graphite dark:text-white font-bold uppercase text-xs tracking-widest">Connect</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">WhatsApp</a>
              <a href="#" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">Twitter</a>
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-graphite/40 dark:text-slate-600 text-xs">© 2024 ALGORYUM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-graphite/40 dark:text-slate-600 text-xs hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-graphite/40 dark:text-slate-600 text-xs hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
