export default function Footer() {
  return (
    <footer className="bg-[#0F1117] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="text-white font-bold text-xl">CarbonQ</div>
          <p className="text-slate-400 mt-2">India’s smartest carbon platform</p>
          <p className="text-slate-400 mt-4">Mumbai, Maharashtra</p>
          <div className="mt-6 text-slate-400">Built with Next.js 15 • Supabase • Clerk • Claude 3.5 • Groq Llama-3 • Razorpay • Vercel</div>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Product</div>
          <ul className="space-y-2 text-slate-400">
            <li>Features</li>
            <li>How It Works</li>
            <li>Pricing</li>
            <li>Marketplace</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-slate-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-500 mt-8">© 2025 CarbonQ. All rights reserved.</div>
    </footer>
  )
}
