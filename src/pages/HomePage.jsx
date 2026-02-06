import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Header />
      
      <main className="flex-1">
        <div className="w-full flex justify-center py-12 md:py-20">
          <div className="flex flex-col w-full max-w-[1200px] px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex flex-col gap-8 flex-1">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded">
                  Simple Solutions
                </div>
                <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black">
                  Your Local Business Deserves to Be Found Online
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl">
                  Algoryum makes it easy for local businesses to get online and start reaching more customers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/services" className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
                    Our Services
                  </Link>
                  <Link to="/connect" className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold py-4 px-8 rounded-lg">
                    Consult an Expert
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block flex-1">
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA53jNmAAQ-J9ZSgkVzFa7GgyK1oV3rMDmxizQo2gVdLnFrVJ226y9jqGb7GPY_TZymDVrRCGiKg5zeSbttSZzZ-1ucY4KZJyIn3dOu3iX3jh4dupu9Orfv5eNbbgCjtNT7wvoYiTeHJi7XrdHROa8-NfYFjQphlp51shuVUMph4chgMOB_cSt8zzoW3tXUUo-aMiGG4I5wokrmuPNUOsAQVMSng5hGeCxXaD9Xt8q_oU4NF51tZvFUV0Pc_VWt0btDyakzZuTuEBiM")'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center bg-slate-50 dark:bg-slate-900/50 py-12 border-y border-slate-200 dark:border-slate-800">
          <div className="w-full max-w-[1200px] px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase">Successful Transitions</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black">500+</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase">Local Partners</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black">120+</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase">Digital Growth</p>
                <p className="text-slate-900 dark:text-white text-4xl font-black">45%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-24">
          <div className="flex flex-col w-full max-w-[1200px] px-6 gap-16">
            <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
              <h2 className="text-slate-900 dark:text-white text-4xl font-black">How We Help Your Business Grow</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We give you the tools and support to succeed online, without the tech headaches.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">We Get Your Business</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  We take time to understand how you work and what you need.
                </p>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">settings_input_component</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Simple Setup</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  We handle the tech stuff so you can focus on running your business.
                </p>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg">
                  <span className="material-symbols-outlined">query_stats</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold">Grows With You</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Start simple, add more features as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
