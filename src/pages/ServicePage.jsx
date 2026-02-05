import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="services" />
      
      <main className="flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1120px] flex-1 px-4 md:px-10">
          <section className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 py-6 items-center">
              <div className="flex flex-col gap-6 flex-1">
                <span className="text-primary font-bold text-sm uppercase">Our Expertise</span>
                <h1 className="text-4xl md:text-6xl font-black">
                  Strategic Solutions for Digital Transition
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[600px]">
                  We bridge the gap between traditional commerce and the digital economy.
                </p>
              </div>
              <div className="w-full lg:w-1/2 aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            </div>
          </section>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl font-bold">Comprehensive Service Portfolio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800"></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">web</span>
                  <h3 className="text-xl font-bold">Digital Business Page</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Establish a professional online presence with a high-conversion landing page.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800"></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <h3 className="text-xl font-bold">WhatsApp Business Integration</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Streamline customer communication by integrating professional messaging tools.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800"></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">travel_explore</span>
                  <h3 className="text-xl font-bold">Online Visibility Setup</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Ensure your business appears exactly when and where people are searching.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-white dark:bg-slate-900 overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Featured</div>
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800"></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">smart_toy</span>
                  <h3 className="text-xl font-bold">AI Auto-Reply Assistant</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Focus on your craft while our AI handles routine customer inquiries 24/7.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-[500px]">
              <h3 className="text-3xl font-bold mb-2">Ready for your transition?</h3>
              <p className="text-white/80 text-lg">Schedule a consultation with our experts today.</p>
            </div>
            <Link to="/connect" className="bg-white text-primary px-8 py-4 rounded-xl font-bold">
              Book a Free Audit
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage
