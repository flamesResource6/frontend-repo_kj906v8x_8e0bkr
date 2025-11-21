import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import GlowingCursor from './components/GlowingCursor'

function App() {
  const [email, setEmail] = useState('')

  const handleCTAClick = () => {
    alert('We will wire this to your Supabase/ConvertKit webhook of choice. For now, it’s a placeholder.')
  }

  return (
    <div className="min-h-screen bg-[#0F1117]">
      <GlowingCursor />
      <Hero onCTAClick={handleCTAClick} email={email} setEmail={setEmail} />
      <HowItWorks />
      <Features />
      <Pricing />
      <section className="bg-[#0F1117] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-white text-2xl font-bold">Real testimonials</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-slate-300">“CarbonQ cut our BRSR prep from weeks to one afternoon.” — Placeholder Co.</div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0F1117] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Start Free 14-Day Trial</h2>
          <p className="text-slate-300 mt-3">No credit card required. Cancel anytime.</p>
          <button onClick={handleCTAClick} className="mt-6 h-12 px-6 rounded-xl bg-emerald-400 text-black font-semibold shadow-[0_0_30px_#00FFA355]">Get Started</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
