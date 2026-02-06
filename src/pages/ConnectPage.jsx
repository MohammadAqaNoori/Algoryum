import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ConnectPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in Algoryum services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/93708824113?text=${whatsappMessage}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleScheduleCall = () => {
    // Open WhatsApp with scheduling message
    const scheduleMessage = `Hello! I'd like to schedule a free 30-minute consultation with Algoryum.`
    window.open(`https://wa.me/93708824113?text=${encodeURIComponent(scheduleMessage)}`, '_blank')
  }
  
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="connect" />
      
      <main className="flex flex-1 flex-col items-center">
        <div className="flex flex-col max-w-[1100px] w-full py-10 px-4">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-10 md:p-16 text-center text-white mb-12 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white text-sm font-bold uppercase inline-block mb-6">
              Let's Talk
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Ready to Grow Your Business?
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Get in touch today and we'll have your business online in 48 hours. No complicated processes, just results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/93708824113" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg inline-flex items-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </a>
              <a href="tel:+93708824113" className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                <span className="material-symbols-outlined">phone</span>
                Call Us Now
              </a>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Choose How to Reach Us</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Pick the method that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-white text-3xl">chat</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <strong>+93 70 882 4113</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Fastest way to reach us. We usually reply within minutes.
                </p>
                <a href="https://wa.me/93708824113" target="_blank" rel="noopener noreferrer" className="mt-auto bg-primary text-white px-6 py-3 rounded-lg font-bold inline-block text-center hover:bg-primary/90 transition-colors">
                  Start Chat
                </a>
              </div>

              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <strong>algoryum.ai@gmail.com</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  For detailed inquiries. We respond within 24 hours.
                </p>
                <a href="mailto:algoryum.ai@gmail.com" className="mt-auto border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold inline-block text-center hover:bg-primary/5 transition-colors">
                  Send Email
                </a>
              </div>

              <div className="flex flex-col p-8 bg-white dark:bg-[#1a212c] rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">calendar_month</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Schedule Call</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  <strong>Free 30-min consultation</strong>
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  Book a time that works for you. No pressure, just advice.
                </p>
                <button onClick={handleScheduleCall} className="mt-auto border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/5 transition-colors">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1a212c] rounded-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-10 shadow-lg mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Or Send Us a Message</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:outline-none transition-colors"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Tell Us About Your Business *</label>
                <textarea 
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none focus:border-primary focus:outline-none transition-colors"
                  placeholder="What type of business do you have? What services are you interested in?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white px-10 py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg text-lg"
              >
                Send Message via WhatsApp
              </button>
              
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                By submitting, your message will open in WhatsApp for you to send
              </p>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-10 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-center mb-8">Quick Questions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">Q:</span>
                  How fast can you get my website live?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Most websites are live within 48 hours of our first call.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">Q:</span>
                  Do I need technical knowledge?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Not at all! We handle everything for you.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">Q:</span>
                  What if I need changes later?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  We provide ongoing support. Just message us anytime.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-primary">Q:</span>
                  How much does it cost?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Contact us for a free quote. We offer transparent, fixed pricing.
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

export default ConnectPage
