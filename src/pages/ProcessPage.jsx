import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProcessPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="process" />
      
      <main className="flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[960px] flex-1 px-4">
          <div className="mb-12 flex min-h-[420px] flex-col gap-6 bg-primary rounded-xl items-center justify-center p-8">
            <h1 className="text-white text-4xl md:text-6xl font-black text-center">
              Simplifying Your Digital Transition
            </h1>
            <p className="text-slate-200 text-lg text-center max-w-2xl">
              Our streamlined 4-step process takes your business from local to digital in just 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/connect" className="bg-white text-primary px-8 py-3 rounded-lg font-bold">
                Start Your Transition
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">The Algoryum Workflow</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">A clear path to digital excellence.</p>

          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div className="w-[2px] bg-primary/20 flex-1 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <span className="text-primary text-xs font-bold uppercase">Step 01</span>
                <h3 className="text-xl font-bold mb-2">Understanding Your Business</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We begin with a deep dive into your current operations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">code_blocks</span>
                </div>
                <div className="w-[2px] bg-primary/20 flex-1 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <span className="text-primary text-xs font-bold uppercase">Step 02</span>
                <h3 className="text-xl font-bold mb-2">Building Digital Presence</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Our engineers build your custom infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div className="w-[2px] bg-primary/20 flex-1 mt-2"></div>
              </div>
              <div className="flex-1 pb-8">
                <span className="text-primary text-xs font-bold uppercase">Step 03</span>
                <h3 className="text-xl font-bold mb-2">Customer Connection</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We activate your digital channels and sync customer data.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-primary text-xs font-bold uppercase">Step 04</span>
                <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ongoing optimization and strategic advice.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 text-center border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to modernize your business?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Join hundreds of local businesses that have successfully transitioned.</p>
            <Link to="/connect" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProcessPage
