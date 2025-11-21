import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0F1117]">
      <Particles />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-soft-light" />
      <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(circle,#00FFA355,transparent 60%)'}} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-emerald-300/80 text-sm tracking-widest uppercase">CarbonQ • India’s smartest carbon platform</motion.p>
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight text-white">
          BRSR-ready in minutes. Indian offsets from ₹300/ton.
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="mt-6 text-slate-300 text-lg md:text-xl max-w-3xl">
          Fully automated Scope 1, 2 & basic Scope 3 accounting with AI bill OCR, Tally/GST imports, one-click SEBI BRSR Section C PDF and a marketplace of 100+ verified Indian projects.
        </motion.p>

        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className="mt-8 flex flex-col sm:flex-row gap-3">
          <input placeholder="Work email" className="bg-white/5 border border-white/10 rounded-xl px-4 h-12 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" />
          <button onClick={onCTAClick} className="h-12 px-6 rounded-xl bg-emerald-400 text-black font-semibold shadow-[0_0_30px_#00FFA355] hover:shadow-[0_0_50px_#00FFA366] transition">Start Free 14-Day Trial</button>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-70">
          {['Tata','Mahindra','HDFC','Zerodha'].map((n)=> (
            <div key={n} className="h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 text-sm">{n} (placeholder)</div>
          ))}
        </div>
      </div>

      {/* 3D placeholder sphere */}
      <div className="pointer-events-none absolute right-[-10vw] bottom-[-10vw] w-[70vw] aspect-square ">
        <motion.div initial={{scale:0.9,opacity:0}} whileInView={{scale:1,opacity:1}} viewport={{once:true}} animate={{rotate:360}} transition={{repeat:Infinity, duration:120, ease:'linear'}} className="w-full h-full rounded-full" style={{background:'radial-gradient(circle at 30% 30%, #00FFA355, transparent 60%)'}}/>
      </div>
    </section>
  )
}
