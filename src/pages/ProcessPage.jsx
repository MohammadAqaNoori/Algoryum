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
              Getting You Online is Easy
            </h1>
            <p className="text-slate-200 text-lg text-center max-w-2xl">
              Four simple steps to get your business online in just 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/connect" className="bg-white text-primary px-8 py-3 rounded-lg font-bold">
                Start Your Transition
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Here's exactly what happens when you work with us.</p>

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
                <h3 className="text-xl font-bold mb-2">We Learn About You</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We chat about your business, what you do, and who your customers are.
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
                <h3 className="text-xl font-bold mb-2">We Build Your Website</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We create a professional website that shows off what makes your business great.
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
                <h3 className="text-xl font-bold mb-2">Connect With Customers</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We set up ways for customers to reach you easily - WhatsApp, email, whatever works.
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
                <h3 className="text-xl font-bold mb-2">We Stick Around</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Need changes? Have questions? We're here to help whenever you need us.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 text-center border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Join hundreds of local businesses already growing online with Algoryum.</p>
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
