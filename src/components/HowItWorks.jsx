import { motion } from 'framer-motion'

const steps = [
  { t: 'Connect data', d: 'Import Tally XML, GST invoices or Excel' },
  { t: 'Auto-OCR', d: 'AI extracts data from bills & receipts' },
  { t: 'Compute', d: 'We calculate Scope 1, 2 & basic 3 with CEA factors' },
  { t: 'Report', d: 'One-click SEBI BRSR Section C PDF' },
  { t: 'Offset', d: 'Buy Indian credits and get your badge' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#0F1117] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white">How it works</h2>
        <p className="text-slate-300 mt-3">Five steps from messy data to public badge.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <div className="text-emerald-300/80 text-sm">Step {i+1}</div>
              <div className="text-white font-semibold mt-1">{s.t}</div>
              <div className="text-slate-300 text-sm mt-1">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
