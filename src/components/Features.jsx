import { motion } from 'framer-motion'

const items = [
  {
    title: 'Automated Scope 1, 2 & basic 3',
    desc: 'Auto-calculate emissions across energy, fuel, travel with India-specific factors',
  },
  {
    title: 'AI bill OCR',
    desc: 'Parse electricity, diesel, flight, hotel bills with high accuracy',
  },
  {
    title: 'Tally / GST / Excel import',
    desc: 'Drag & drop Tally XML, GST invoices or spreadsheets; we do the rest',
  },
  {
    title: 'One-click SEBI BRSR C PDF',
    desc: 'Generate audit-ready PDF using CEA 2024–25 factors in one click',
  },
  {
    title: '100+ Indian projects',
    desc: 'Verified offsets priced ₹300–900/ton across renewables, cookstoves, mangroves',
  },
  {
    title: 'Instant badge & certificate',
    desc: '“Carbon Neutral 2025” badge and shareable certificate for PR',
  },
  {
    title: 'Razorpay subscriptions',
    desc: 'Seamless recurring billing for software and offsets',
  },
  {
    title: 'Priority WhatsApp + CA support',
    desc: 'Get help from experts who understand Indian compliance',
  },
]

export default function Features() {
  return (
    <section className="relative bg-[#0F1117] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold">Everything you need for 2026 compliance</h2>
        <p className="text-slate-300 mt-3">All the tools, tuned for India.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{y:-6}} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-emerald-400/50 transition relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" style={{background:'radial-gradient(circle,#00FFA355,transparent 60%)'}}/>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
