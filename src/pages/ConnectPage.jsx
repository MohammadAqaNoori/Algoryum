import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ConnectPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="connect" />
      
      <main className="flex flex-1 flex-col items-center">
        <div className="flex flex-col max-w-[960px] w-full py-10 px-4">
          <div className="flex flex-col lg:flex-row gap-6 py-10 items-center">
            <div className="w-full bg-slate-200 dark:bg-slate-800 aspect-video rounded-xl lg:w-1/2 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAL9QaEVOQb12xb9QrjZvh52WVsyRBz4xr8x0CJZN7fiMqATBhwqsCNr1eSffkkdTVwzwW93U4xRLXDt6pibzZa_PsOZEULtQ-rcT99Nim61dckfiVnASrsiGhxXaX5XpiCz7upknPJgIwQKqmccTJc7PFGfEzN6j_L3jxnkglgwt4CeYgTS9qh6QQ0nQ4TsUwQ9dhwoWSd7FIVcPYmYSE7zB2LqdreVY4L1qnhhq2wWUP9f8UiC5wdndCKVYqhN-Zy0sqIQk2JxZm")'}}></div>
            <div className="flex flex-col gap-6 lg:w-1/2">
              <span className="text-primary font-bold text-sm uppercase">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-black">
                Let's Build Your Digital Future Together
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Ready to take your local business online? Our team is here to guide you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">chat</span>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Quick response for urgent inquiries.
              </p>
              <button className="mt-auto bg-primary text-white px-4 py-2 rounded-lg font-bold">
                Start Chat
              </button>
            </div>

            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Detailed inquiries welcome.
              </p>
              <button className="mt-auto border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg font-bold">
                Send Email
              </button>
            </div>

            <div className="flex flex-col p-6 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary">calendar_month</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Call</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Schedule a free 30-minute consultation.
              </p>
              <button className="mt-auto border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg font-bold">
                Schedule Now
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1a212c] rounded-xl my-10 border border-slate-100 dark:border-slate-800 p-8">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none"
                  placeholder="Tell us about your business..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="bg-primary text-white px-10 py-4 rounded-lg font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ConnectPage
