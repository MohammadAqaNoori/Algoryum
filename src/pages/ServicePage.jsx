import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="services" />
      
      <main className="flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1120px] flex-1 px-4 md:px-10">
          <section className="mb-16">
            <div className="flex flex-col gap-6 py-6 text-center max-w-3xl mx-auto">
              <span className="text-primary font-bold text-sm uppercase">Our Expertise</span>
              <h1 className="text-4xl md:text-6xl font-black">
                Everything Your Business Needs to Go Digital — Properly
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We don't just build tools. We build systems that help businesses grow.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Service 1 */}
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO1hI8yMzu0OuNYQbaq-CANNlCWCYUKo5I0sl-CGGs64hMSu0eUZueeEZC7OKm0cTHJxIRcAVtM4bn0cXpMMLqwYnsNsonHn02gafvRH7hZy5QoxQusp2OEEV0Ll8ZOXLnUw2Q7CWeVW5ntX9tI2X9cNAOt48rHKnpNVLnk1DMJAbSpLlsDEEtAndXdBEa2meKwKrQTbOCNX9tFIcbDp2M9Ssybtq4ZfkMcUOsY2YmgPP5yeSnlu0iAh6XXoAbJKh7J768ufg2BuFj")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">web</span>
                  <h3 className="text-xl font-bold">Digital Presence & Websites</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Professional Business Website</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Custom website tailored for your business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Mobile-first, fast, and secure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Clear contact, location, and product showcase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Built to earn customer trust</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5oMObrpg1gzxQtng3i0i0a6jpzPzq5udPpyR_Q9obcNbvBhssK090T_WhKCtKEnpwNEoOJEG9sl9OUSRLSsU30wj19hBdy1fV2JLsaDkJp4fBnGvXz-KHFCAqWJgkkzkYlWyvVO42YHfb9OndtsB8X4IswF2BJr7iH07QO4CzP706k8GD_bS8n8ftbrFR7HxSeaxKw__vza1dTY0E5Slh6dJOCITnq-2GmS0pdzDYDAtNsr9oF1n6Hs2TwyOOTLI-M1zhAArIFBh5")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">chat_bubble</span>
                  <h3 className="text-xl font-bold">Business Communication & WhatsApp</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Business Integration</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Click-to-chat buttons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Auto replies & business profile setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Easy customer communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Perfect for local businesses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC5p6D53dNofuj7i4MJEivlilhVvDx5SDGx5d3dvkZmNDKDlnsTy4c8L0l-SSfK840aq8ADjLGJTA1fENUrLnetE8N12Wt8mKuMmEdeGAssy7uEbSomRbVIw4FZLYR4SU6ag3qUqnMly0It_b7EJ6wilikW9OJZAlo-2proqe8RzFtpRT4LO-Gjez3vMWDMPoA5wEENrHDtCy8ZEh3IShUP-dS-jpMzFFsodFu0kEXK79esdLeUXE3TU5sBYQ6VnFyyBikM42hzMxI")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">travel_explore</span>
                  <h3 className="text-xl font-bold">Local SEO & Google Visibility</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Get Found on Google</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Google Business Profile setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Local search optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Map visibility for nearby customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Helps people find you when they need you</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3yoEgOGK6H1dS7RBzLw1rwUuZe-KzDb96LF9IHovysA3Fxuwnaj-2rpkgEXssUjidjzz3v3OrykNuaCGLUTJBStLkyPHrO6HMR7h6G9gJYvOUcGQRgjUIYMpTyXMfcCtXhrYInTINqvhWPrZfsq9Z3gs3zVaKX4lqWz_T0q8U783CkaGVOG_YAMFu927Bf4T7lDgOAKy9MEsMYl7tbfs-oy1a68ny6icV0Ix7aGffFZAa8rd3q5i-VIeCBlCbnZTVcZY2nAR1aWdc")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">support_agent</span>
                  <h3 className="text-xl font-bold">Smart Customer Support</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">AI-Powered Support</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Instant replies to common questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Works 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Saves time for busy business owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Human + AI hybrid support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{fontSize: '120px'}}>automation</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                  <h3 className="text-xl font-bold">Business Automation</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Simple Business Automation</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Automated messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Appointment or order requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduced manual work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Faster response = more customers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col rounded-xl border-2 border-primary/30 bg-white dark:bg-slate-900 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600" style={{fontSize: '120px'}}>shield</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-green-600">
                  <span className="material-symbols-outlined text-3xl">cloud_done</span>
                  <h3 className="text-xl font-bold">Hosting, Maintenance & Security</h3>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Hosting & Ongoing Support</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Fast & reliable hosting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Regular updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Security monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>One team to handle everything</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-[500px]">
              <h3 className="text-3xl font-bold mb-2">Let's Talk About Your Business</h3>
              <p className="text-white/80 text-lg">Book a free call to see how we can help you grow.</p>
            </div>
            <Link to="/connect" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Book a Free Audit
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage
