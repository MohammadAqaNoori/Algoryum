import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicePage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#0e131b] dark:text-slate-50">
      <Header activeLink="services" />
      
      <main className="flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1120px] flex-1 px-4 md:px-10">
          <section className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 py-6 items-center">
              <div className="flex flex-col gap-6 flex-1">
                <span className="text-primary font-bold text-sm uppercase">Our Expertise</span>
                <h1 className="text-4xl md:text-6xl font-black">
                  Everything You Need to Succeed Online
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[600px]">
                  From websites to customer support, we've got you covered.
                </p>
              </div>
              <div className="w-full lg:w-1/2 aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBR2p1ZzahLxWKvtId-7dA_GmU8QoHON6hLzvb-IwX3yarjCuCNySGW5-aZXqYEWe3hK28ENao0OpbSlc-kDn-ZuRGGpM71VBFnctpCA-sMAII598GkxhEc8VQGC-CA6ev-TAFFmIv3FILS4aTz4yWk2030Uh71AA9ZNnmCNFOt8w6rafv1bNLf2Nb3j-4KB30WVUi2-yx0S4VAYMCq0uy7WwzyU6w7o8TdxRRdGRSNA6dfrOheqmP0IWE5I7nvoWUovsTrwCY_9HEi")'}}></div>
            </div>
          </section>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl font-bold">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO1hI8yMzu0OuNYQbaq-CANNlCWCYUKo5I0sl-CGGs64hMSu0eUZueeEZC7OKm0cTHJxIRcAVtM4bn0cXpMMLqwYnsNsonHn02gafvRH7hZy5QoxQusp2OEEV0Ll8ZOXLnUw2Q7CWeVW5ntX9tI2X9cNAOt48rHKnpNVLnk1DMJAbSpLlsDEEtAndXdBEa2meKwKrQTbOCNX9tFIcbDp2M9Ssybtq4ZfkMcUOsY2YmgPP5yeSnlu0iAh6XXoAbJKh7J768ufg2BuFj")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">web</span>
                  <h3 className="text-xl font-bold">Professional Website</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  A clean, professional website that makes it easy for customers to find and contact you.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5oMObrpg1gzxQtng3i0i0a6jpzPzq5udPpyR_Q9obcNbvBhssK090T_WhKCtKEnpwNEoOJEG9sl9OUSRLSsU30wj19hBdy1fV2JLsaDkJp4fBnGvXz-KHFCAqWJgkkzkYlWyvVO42YHfb9OndtsB8X4IswF2BJr7iH07QO4CzP706k8GD_bS8n8ftbrFR7HxSeaxKw__vza1dTY0E5Slh6dJOCITnq-2GmS0pdzDYDAtNsr9oF1n6Hs2TwyOOTLI-M1zhAArIFBh5")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <h3 className="text-xl font-bold">WhatsApp for Business</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Let customers reach you on WhatsApp - the app they already use every day.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC5p6D53dNofuj7i4MJEivlilhVvDx5SDGx5d3dvkZmNDKDlnsTy4c8L0l-SSfK840aq8ADjLGJTA1fENUrLnetE8N12Wt8mKuMmEdeGAssy7uEbSomRbVIw4FZLYR4SU6ag3qUqnMly0It_b7EJ6wilikW9OJZAlo-2proqe8RzFtpRT4LO-Gjez3vMWDMPoA5wEENrHDtCy8ZEh3IShUP-dS-jpMzFFsodFu0kEXK79esdLeUXE3TU5sBYQ6VnFyyBikM42hzMxI")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">travel_explore</span>
                  <h3 className="text-xl font-bold">Get Found on Google</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  We make sure your business shows up when people search for what you offer.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3yoEgOGK6H1dS7RBzLw1rwUuZe-KzDb96LF9IHovysA3Fxuwnaj-2rpkgEXssUjidjzz3v3OrykNuaCGLUTJBStLkyPHrO6HMR7h6G9gJYvOUcGQRgjUIYMpTyXMfcCtXhrYInTINqvhWPrZfsq9Z3gs3zVaKX4lqWz_T0q8U783CkaGVOG_YAMFu927Bf4T7lDgOAKy9MEsMYl7tbfs-oy1a68ny6icV0Ix7aGffFZAa8rd3q5i-VIeCBlCbnZTVcZY2nAR1aWdc")'}}></div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined">support_agent</span>
                  <h3 className="text-xl font-bold">Smart Customer Support</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Keep your customers happy with instant responses, even when you're busy running your business.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-[500px]">
              <h3 className="text-3xl font-bold mb-2">Let's Talk About Your Business</h3>
              <p className="text-white/80 text-lg">Book a free call to see how we can help you grow.</p>
            </div>
            <Link to="/connect" className="bg-white text-primary px-8 py-4 rounded-xl font-bold">
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
