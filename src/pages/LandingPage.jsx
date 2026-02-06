import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-graphite dark:text-slate-100">
      <Header />
      
      <main className="flex-grow">
        <section className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-graphite dark:text-white text-5xl md:text-6xl font-black leading-[1.1]">
                Bringing Local Businesses Online — Simply
              </h1>
              <p className="text-graphite/70 dark:text-slate-400 text-lg md:text-xl">
                Empowering local commerce through strategic digital transition and enterprise-grade visibility solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Talk on WhatsApp
                </button>
                <Link to="/process" className="border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-graphite dark:text-white px-8 py-4 rounded-lg font-bold">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square w-full bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01]">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkGls3tIVkbvQfqmOtuf_KSyKuiro2GWxjPlWtsEGGrcKStlk5CedZvpTDLTQn7hhd2kiGGyXHfRSa_23-PExUoWjjqpuGUOgv_ehWHQyk8_8B25Wa-4vwo1ggRIYViAbjp1liboMVqlxTbh3d8CRL3znsO_hfxpV6c5ClBcaBppO6b_A1JZQjKlJ7hbOtP4ca1lfUXpQiw-fUvJ0GvrnvBtetAApCgxTjXtP9jKDo2K50ZLF8XQjP-v4J-Na7pUvbUHIpW4y9LlrK")'}}></div>
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        <section className="bg-white/50 dark:bg-slate-900/50 py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="max-w-[720px] space-y-4 mb-12">
              <h2 className="text-primary text-sm font-bold uppercase">Analysis</h2>
              <h3 className="text-graphite dark:text-white text-4xl font-black">The Invisibility Crisis</h3>
              <p className="text-graphite/70 dark:text-slate-400 text-lg">
                Local businesses often struggle to bridge the gap between physical excellence and digital presence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">location_on</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Limited Reach</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Physical storefronts are restricted by geography.</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">fingerprint</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Fragmented Identity</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Inconsistent branding across platforms dilutes trust.</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">memory</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Operational Friction</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Transitioning online shouldn't complicate your business.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20">
          <div className="mx-auto max-w-[960px] px-6 text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">Ready for a professional transition?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto">
              Join the network of local businesses evolving with ALGORYUM.
            </p>
            <Link to="/connect" className="inline-block bg-white text-primary hover:bg-slate-100 px-10 py-4 rounded-lg font-bold">
              Request Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
