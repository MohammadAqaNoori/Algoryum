import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/gg/AMW1TPqTF7VY7JcwDSONw1SrSnFeoWcmM1chxhsw4UYO6pFc8LLUfNb3YlgznjjmcPyaq45S9oYiw0b2rLNQFJmTpK4W8HXkcYQQvJKLMHDZEmmCD9asi6Iqk0n95r1h6zPIsuWWG7hl4h0vtXZ13qw7IWPPQ04kLmheti870BhOV0MnKgxTDRI=s1024-rj-mp2" 
                alt="Algoryum Logo" 
                className="h-14 w-14 object-contain mix-blend-multiply dark:mix-blend-screen"
                style={{filter: 'contrast(1.2)'}}
              />
              <h2 className="text-graphite dark:text-white text-2xl font-black uppercase">ALGORYUM</h2>
            </Link>
            <p className="text-graphite/60 dark:text-slate-400 text-sm leading-relaxed max-w-[320px]">
              Helping local businesses get online and grow. Simple, effective, and built for you.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-graphite/70 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary text-lg">phone</span>
                <a href="https://wa.me/93708824113" className="hover:text-primary transition-colors">+93 70 882 4113</a>
              </div>
              <div className="flex items-center gap-2 text-graphite/70 dark:text-slate-400">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:algoryum.ai@gmail.com" className="hover:text-primary transition-colors">algoryum.ai@gmail.com</a>
              </div>
            </div>
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
              <a href="https://wa.me/93708824113" target="_blank" rel="noopener noreferrer" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">WhatsApp</a>
              <Link to="/connect" className="text-graphite/60 dark:text-slate-400 text-sm hover:text-primary transition-colors">Contact Us</Link>
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
