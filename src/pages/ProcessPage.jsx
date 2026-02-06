import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProcessPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="process" />
      
      <main className="flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1100px] flex-1 px-4">
          <div className="mb-16 flex min-h-[480px] flex-col gap-6 bg-gradient-to-br from-primary to-blue-700 rounded-2xl items-center justify-center p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white text-sm font-bold uppercase">
              Simple & Fast
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black text-center max-w-3xl">
              From First Call to Live Website in 48 Hours
            </h1>
            <p className="text-white/90 text-lg md:text-xl text-center max-w-2xl">
              No complicated processes. No endless meetings. Just four clear steps to get your business online.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/connect" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
                Start Your Journey
              </Link>
              <a href="https://wa.me/93708824113" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Talk to Us on WhatsApp
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-primary text-sm font-bold uppercase mb-4">Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-4">How We Work With You</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              We've helped hundreds of local businesses get online. Here's our proven process.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black">1</span>
                </div>
                <div className="hidden md:block w-[2px] bg-gradient-to-b from-primary/40 to-transparent h-full mt-4 ml-9"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">chat</span>
                  <h3 className="text-2xl font-bold">Discovery Call</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                  We start with a friendly conversation to understand your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">What products or services do you offer?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Who are your customers?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">What do you want your website to do?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Any photos, logos, or content you already have</span>
                  </li>
                </ul>
                <div className="mt-6 bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Duration:</strong> 30-45 minutes • <strong>Format:</strong> WhatsApp call or in-person meeting
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black">2</span>
                </div>
                <div className="hidden md:block w-[2px] bg-gradient-to-b from-primary/40 to-transparent h-full mt-4 ml-9"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">design_services</span>
                  <h3 className="text-2xl font-bold">We Build Your Solution</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                  Our team gets to work creating your professional online presence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Custom website design matching your brand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Mobile-friendly and fast loading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">WhatsApp integration for easy customer contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Google Maps and contact forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Optional: Auto-reply system, chatbot, or booking system</span>
                  </li>
                </ul>
                <div className="mt-6 bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Duration:</strong> 24-48 hours • <strong>Updates:</strong> We keep you informed via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-black">3</span>
                </div>
                <div className="hidden md:block w-[2px] bg-gradient-to-b from-primary/40 to-transparent h-full mt-4 ml-9"></div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">preview</span>
                  <h3 className="text-2xl font-bold">Review & Refine</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                  You check everything and we make it perfect together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">We send you a preview link to test</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">You tell us what you like and what to change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">We make adjustments until you're 100% happy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Test on your phone, tablet, and computer</span>
                  </li>
                </ul>
                <div className="mt-6 bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Revisions:</strong> Unlimited until you're satisfied • <strong>Response time:</strong> Same day
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border-2 border-green-500/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-green-600 text-4xl">celebration</span>
                  <h3 className="text-2xl font-bold">Launch & Grow</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
                  Your website goes live and we help you grow.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">We make your website live with a custom domain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Set up Google Business Profile for local visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Show you how to share your website on social media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Ongoing support whenever you need help</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-slate-600 dark:text-slate-400">Regular updates and security monitoring</span>
                  </li>
                </ul>
                <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong>Support:</strong> Lifetime • <strong>Updates:</strong> Free for the first 3 months
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl p-10 text-center border-2 border-primary/20 mb-12">
            <h3 className="text-3xl font-black mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of local businesses already growing online with Algoryum. Your website could be live in 48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/connect" className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg">
                Book Free Consultation
              </Link>
              <Link to="/services" className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-4xl font-black text-primary mb-2">48hrs</div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Average Launch Time</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-4xl font-black text-primary mb-2">500+</div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Businesses Online</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
              <div className="text-4xl font-black text-primary mb-2">24/7</div>
              <p className="text-slate-600 dark:text-slate-400 font-semibold">Support Available</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProcessPage
