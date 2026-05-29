import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Engineering Intelligence <br/><span className="text-cyan-400">Meets Commercial Strategy</span></h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">CEVENIQ Strategic Solutions is built at the intersection of engineering depth and commercial intelligence. We help organizations make smarter automation investment decisions, source globally with confidence, and deploy industrial projects with precision and efficiency.</p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Led by professionals with extensive experience in industrial automation, strategic procurement, cost engineering, and global supply chain operations.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold mb-4">Our Foundational Pillars</h2><div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Engineering Depth", desc: "Technical expertise that understands the complex machinery of industrial operations." },
              { title: "Commercial Intelligence", desc: "Strategic insight to optimize costs, source effectively, and maximize ROI." },
              { title: "Global Reach", desc: "Extensive networks and benchmarking capabilities across the global supply chain." },
              { title: "Execution Excellence", desc: "From concept to commissioning, we ensure solutions perform in the real world." }
            ].map((pillar, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyan-500/30 transition-all flex flex-col h-full">
                <div className="text-4xl font-serif text-cyan-500/20 mb-4">{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-white/60 flex-1">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/20 p-12 rounded-3xl text-center relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-2xl leading-relaxed text-white/90 font-medium">"CEVENIQ combines engineering intelligence with commercial strategy to deliver scalable, practical, and cost-effective industrial transformation solutions."</p>
          </motion.div>
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Core Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {["Warehouse Automation Advisory","Industrial Cost Engineering","Global Vendor Benchmarking","Strategic China Sourcing","ASRS & AMR Deployments","Supply Chain Capability Development"].map((spec, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="font-medium text-white/80">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}