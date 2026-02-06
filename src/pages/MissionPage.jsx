import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MissionPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="mission" />
      
      <main className="flex flex-1 flex-col items-center">
        <div className="flex flex-col max-w-[1100px] w-full py-10 px-4">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-8 py-10 items-center mb-12">
            <div className="w-full bg-slate-200 dark:bg-slate-800 aspect-video rounded-2xl lg:w-1/2 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAL9QaEVOQb12xb9QrjZvh52WVsyRBz4xr8x0CJZN7fiMqATBhwqsCNr1eSffkkdTVwzwW93U4xRLXDt6pibzZa_PsOZEULtQ-rcT99Nim61dckfiVnASrsiGhxXaX5XpiCz7upknPJgIwQKqmccTJc7PFGfEzN6j_L3jxnkglgwt4CeYgTS9qh6QQ0nQ4TsUwQ9dhwoWSd7FIVcPYmYSE7zB2LqdreVY4L1qnhhq2wWUP9f8UiC5wdndCKVYqhN-Zy0sqIQk2JxZm")'}}></div>
            <div className="flex flex-col gap-6 lg:w-1/2">
              <span className="text-primary font-bold text-sm uppercase">About Algoryum</span>
              <h1 className="text-[#0e131b] dark:text-white text-4xl md:text-5xl font-black leading-tight">
                We Help Local Businesses Win Online
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Algoryum was built to solve a simple problem: local businesses are amazing at what they do, but getting online shouldn't be complicated or expensive.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                We've helped over 500 businesses get online with websites, WhatsApp integration, and smart automation tools that actually work.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl my-10 border-2 border-primary/20 p-10">
            <h2 className="text-[#0e131b] dark:text-white text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-[#0e131b] dark:text-slate-300 text-xl text-center leading-relaxed max-w-3xl mx-auto">
              "To give every local business the digital tools they need to compete and grow, without the complexity or high costs."
            </p>
          </div>

          {/* Why We Exist */}
          <div className="my-16">
            <div className="text-center mb-12">
              <h2 className="text-[#0e131b] dark:text-white text-3xl md:text-4xl font-bold mb-4">Why We Exist</h2>
              <div className="h-1 w-16 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">store</span>
                  <h3 className="text-xl font-bold">The Problem</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Most local businesses struggle to get online. Web agencies charge too much, DIY website builders are confusing, and social media alone isn't enough. Meanwhile, customers are searching online for services right now.
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                  <h3 className="text-xl font-bold">Our Solution</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We make it simple and affordable. Professional websites in 48 hours, WhatsApp integration, smart automation, and ongoing support. One team, one price, no surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-[#0e131b] dark:text-white text-3xl md:text-4xl font-bold mb-4">What We Believe In</h2>
              <div className="h-1 w-16 bg-primary rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">speed</span>
                </div>
                <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-3">Keep It Simple</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  No jargon, no confusion. We explain everything in plain language and deliver fast results.
                </p>
              </div>
              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
                </div>
                <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-3">Always Available</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Your website works 24/7, and we're here when you need help. Real people, real support.
                </p>
              </div>
              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">handshake</span>
                </div>
                <h3 className="text-[#0e131b] dark:text-white text-xl font-bold mb-3">Your Partner</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We're in this together. Your success is our success. We grow when you grow.
                </p>
              </div>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-white dark:bg-[#1a212c] rounded-2xl border border-slate-100 dark:border-slate-800 p-10 mb-16">
            <h2 className="text-[#0e131b] dark:text-white text-3xl font-bold text-center mb-8">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Fixed Pricing</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">No hidden fees. You know exactly what you're paying upfront.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">48-Hour Delivery</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Most websites are live within 2 days, not 2 months.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Local Focus</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">We understand local businesses in Afghanistan and their unique needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Complete Package</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Website, hosting, support, and updates - all included.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Real Support</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Talk to real people on WhatsApp, not automated bots.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Modern Tech</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Fast, secure, mobile-friendly websites built with latest technology.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Work Together?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join over 500 local businesses who trust Algoryum to handle their online presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/connect" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
                Get Started Today
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MissionPage
