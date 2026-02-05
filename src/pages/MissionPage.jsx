import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MissionPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="mission" />
      
      <main className="flex flex-1 flex-col items-center">
        <div className="flex flex-col max-w-[960px] w-full py-10 px-4">
          <div className="flex flex-col lg:flex-row gap-6 py-10 items-center">
            <div className="w-full bg-slate-200 dark:bg-slate-800 aspect-video rounded-xl lg:w-1/2 border border-slate-200 dark:border-slate-700"></div>
            <div className="flex flex-col gap-6 lg:w-1/2">
              <span className="text-primary font-bold text-sm uppercase">About Algoryum</span>
              <h1 className="text-[#0e131b] dark:text-white text-4xl md:text-5xl font-black">
                Architecting the Digital Future for Local Enterprise
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                We specialize in the bridge between established tradition and digital efficiency.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a212c] rounded-xl my-10 border border-slate-100 dark:border-slate-800 p-8">
            <h2 className="text-[#0e131b] dark:text-white text-3xl font-bold text-center mb-4">Our Mission</h2>
            <p className="text-[#0e131b] dark:text-slate-300 text-lg text-center italic">
              "To provide local businesses with the enterprise-grade digital tools and strategic clarity needed to thrive in an evolving technological landscape."
            </p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <h2 className="text-[#0e131b] dark:text-white text-3xl font-bold mb-2">Our Principles</h2>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="material-symbols-outlined text-primary">visibility</span>
              </div>
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Clarity</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We strip away complexity to provide actionable strategies.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="material-symbols-outlined text-primary">verified_user</span>
              </div>
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Reliability</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Enterprise-grade foundations with long-term stability.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="material-symbols-outlined text-primary">handshake</span>
              </div>
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Trust</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We act as a long-term partner for our clients.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MissionPage
