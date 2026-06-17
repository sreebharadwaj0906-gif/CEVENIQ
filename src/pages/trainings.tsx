import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Trainings() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Training & Capability Development</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Building the next generation of industrial and commercial leaders.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-cyan-500/30 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-black text-cyan-400">A</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">Procurement Professionals</h2>
              <p className="text-white/70 mb-8 flex-1 relative z-10 leading-relaxed">
                Helping procurement and sourcing professionals understand technical-commercial evaluation, automation technologies, benchmarking, CapEx optimization, and cost/value engineering.
              </p>
              <div className="mb-8 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Programs Include</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Corporate workshops</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Executive learning</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Procurement transformation</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Cost engineering workshops</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Supplier negotiation strategies</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-900/20 border border-cyan-500/20 rounded-xl mb-8 relative z-10">
                <p className="text-sm font-medium text-cyan-100 italic">"Helping organizations reduce unnecessary CapEx spends through engineering-driven procurement intelligence."</p>
              </div>
              <Link href="/contact?type=procurement" className="block text-center w-full py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-colors relative z-10">
  Request Workshop Info
</Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-cyan-500/30 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-black text-cyan-400">B</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">Students & Early Careers</h2>
              <p className="text-white/70 mb-8 flex-1 relative z-10 leading-relaxed">
                Preparing students with practical industrial knowledge, commercial awareness, and automation exposure to bridge the gap between academia and modern industry demands.
              </p>
              <div className="mb-8 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">Programs Include</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Career readiness</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Industrial webinars</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Automation awareness</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Supply chain fundamentals</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Real-world commercial understanding</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-900/20 border border-cyan-500/20 rounded-xl mb-8 relative z-10">
                <p className="text-sm font-medium text-cyan-100 italic">"In modern industries, commercial intelligence is becoming equally important as technical knowledge."</p>
              </div>
              <Link href="/contact?type=students" className="block text-center w-full py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-colors relative z-10">
  View Student Programs
</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#060d1a] border border-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.1)] p-10 rounded-3xl hover:border-cyan-500 transition-all flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-black text-cyan-400">C</span>
              </div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">Industrial Advisory</h2>
              <p className="text-white/70 mb-8 flex-1 relative z-10 leading-relaxed">
                Strategic project consulting for warehousing, automation, and industrial infrastructure focused on unlocking significant CapEx savings through intelligent decisions.
              </p>
              <div className="mb-8 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-500/70 mb-3">Capabilities</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Vendor benchmarking</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Technical-commercial evaluations</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Risk mitigation</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Deployment planning</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-500">▹</span> Cost optimization</li>
                </ul>
              </div>
              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-8 relative z-10">
                <p className="text-sm font-bold text-cyan-300 italic">"Helping organizations unlock significant CapEx savings through intelligent engineering and procurement decisions."</p>
              </div>
              <Link href="/contact?type=advisory" className="block text-center w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold transition-colors relative z-10">
  Consult With Us
</Link>
            </motion.div>
          </div>
          
          <div className="pt-20 border-t border-white/5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industry Insights & Knowledge Sessions</h2>
              <p className="text-white/60">Join our upcoming webinars and expert talks</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Upcoming webinars", "Recorded sessions", "Expert talks", "Automation trends & China sourcing"
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-[#060d1a] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                    <span className="text-cyan-400 text-xl">▶</span>
                  </div>
                  <h4 className="font-bold">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}