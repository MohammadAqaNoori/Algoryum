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
                We help local businesses get online without the hassle. Simple websites, real results.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/93708824113" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Talk on WhatsApp
                </a>
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
              <h3 className="text-graphite dark:text-white text-4xl font-black">Why Local Businesses Struggle Online</h3>
              <p className="text-graphite/70 dark:text-slate-400 text-lg">
                You're great at what you do, but getting found online is a different challenge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">location_on</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Limited Reach</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Your shop is great, but people can't find you if they don't walk by.</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">fingerprint</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Confusing Online Presence</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Different info on Google, Facebook, and Instagram makes customers unsure.</p>
              </div>
              <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl mb-4">memory</span>
                <h4 className="text-graphite dark:text-white text-xl font-bold mb-2">Too Complicated</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">Going online shouldn't feel like learning a new language.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-bold uppercase mb-4">Our Services</h2>
              <h3 className="text-graphite dark:text-white text-4xl md:text-5xl font-black mb-4">Everything Your Business Needs Online</h3>
              <p className="text-graphite/70 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                From websites to customer support, we provide complete digital solutions for local businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">web</span>
                </div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Professional Websites</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Beautiful, fast websites that showcase your business and attract customers 24/7.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">chat</span>
                </div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">WhatsApp Integration</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Connect with customers on WhatsApp - the app they already use every day.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
                </div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Auto-Reply Systems</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Never miss a customer inquiry. Automated responses keep customers engaged 24/7.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">apps</span>
                </div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Web Applications</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Custom tools to manage inventory, bookings, orders, and more for your business.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/services" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900/30 py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-bold uppercase mb-4">How It Works</h2>
              <h3 className="text-graphite dark:text-white text-4xl md:text-5xl font-black mb-4">Get Online in 4 Simple Steps</h3>
              <p className="text-graphite/70 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                We make it easy to take your business online. No tech skills needed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Tell Us About Your Business</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Quick chat about what you do and what you need.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">We Build Your Solution</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Our team creates your website, chatbot, or app in 48 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Review & Launch</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  You check everything, we make tweaks, then go live.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h4 className="text-graphite dark:text-white text-lg font-bold mb-2">Grow Your Business</h4>
                <p className="text-graphite/60 dark:text-slate-400 text-sm">
                  Start reaching more customers online. We're here if you need us.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/process" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-bold transition-colors">
                Learn More About Our Process
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-bold uppercase mb-4">Who We Help</h2>
              <h3 className="text-graphite dark:text-white text-4xl md:text-5xl font-black mb-4">Perfect for Local Businesses</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">store</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">Retail Shops</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">restaurant</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">Restaurants</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">content_cut</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">Salons</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">build</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">Services</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">local_hospital</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">Clinics</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">more_horiz</span>
                <p className="text-graphite dark:text-white text-sm font-semibold">And More</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20">
          <div className="mx-auto max-w-[960px] px-6 text-center text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">Ready to Get Your Business Online?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-[600px] mx-auto">
              Join hundreds of local businesses who've made the move with Algoryum.
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
