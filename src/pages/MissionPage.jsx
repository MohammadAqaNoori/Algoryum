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
            <div className="w-full bg-slate-200 dark:bg-slate-800 aspect-video rounded-xl lg:w-1/2 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAL9QaEVOQb12xb9QrjZvh52WVsyRBz4xr8x0CJZN7fiMqATBhwqsCNr1eSffkkdTVwzwW93U4xRLXDt6pibzZa_PsOZEULtQ-rcT99Nim61dckfiVnASrsiGhxXaX5XpiCz7upknPJgIwQKqmccTJc7PFGfEzN6j_L3jxnkglgwt4CeYgTS9qh6QQ0nQ4TsUwQ9dhwoWSd7FIVcPYmYSE7zB2LqdreVY4L1qnhhq2wWUP9f8UiC5wdndCKVYqhN-Zy0sqIQk2JxZm")'}}></div>
            <div className="flex flex-col gap-6 lg:w-1/2">
              <span className="text-primary font-bold text-sm uppercase">About Algoryum</span>
              <h1 className="text-[#0e131b] dark:text-white text-4xl md:text-5xl font-black">
                Building Digital Solutions for Local Businesses
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                We help traditional businesses thrive in the digital age without losing what makes them special.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a212c] rounded-xl my-10 border border-slate-100 dark:border-slate-800 p-8">
            <h2 className="text-[#0e131b] dark:text-white text-3xl font-bold text-center mb-4">Our Mission</h2>
            <p className="text-[#0e131b] dark:text-slate-300 text-lg text-center italic">
              "To give every local business the digital tools they need to compete and grow, without the complexity or high costs."
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
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Keep It Simple</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                No jargon, no confusion. Just clear steps to get you online.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="material-symbols-outlined text-primary">verified_user</span>
              </div>
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Always There</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Your website works 24/7, and we're here when you need help.
              </p>
            </div>
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="material-symbols-outlined text-primary">handshake</span>
              </div>
              <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-2">Your Partner</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We're in this together. Your success is our success.
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
