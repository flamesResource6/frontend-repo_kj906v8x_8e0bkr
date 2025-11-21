import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  { name: 'Starter', price: '₹1,999/mo', note: '(<100 employees)' },
  { name: 'Growth', price: '₹5,999/mo', note: '(100–500 employees)', popular: true },
  { name: 'Enterprise', price: 'Custom', note: '(500+ or advanced Scope 3)' },
]

export default function Pricing() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lift = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <section ref={ref} className="bg-[#0F1117] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Simple, transparent pricing</h2>
        <p className="text-slate-300 mt-3">Start free, upgrade when you’re ready.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} style={{y: lift}} whileHover={{y:-10, boxShadow: '0 0 60px #00FFA322'}} className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 ${p.popular ? 'ring-1 ring-emerald-400/40' : ''}`}>
              {p.popular && (
                <div className="absolute -top-3 right-4 text-xs bg-emerald-400 text-black px-2 py-1 rounded-md font-semibold">Most Popular</div>
              )}
              <h3 className="text-white text-xl font-semibold">{p.name}</h3>
              <div className="text-4xl font-extrabold text-white mt-3">{p.price}</div>
              <div className="text-slate-300 mt-1">{p.note}</div>
              <button className="mt-6 w-full h-11 rounded-xl bg-emerald-400 text-black font-semibold hover:brightness-95">Start Free Trial</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
