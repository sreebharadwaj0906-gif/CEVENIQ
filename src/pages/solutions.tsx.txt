import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Solutions() {
  const categories = [
    { name: "Automation Solutions", items: [
      { title: "Warehouse Automation", desc: "End-to-end design and implementation of highly automated fulfillment centers." },
      { title: "Conveyor Systems", desc: "Intelligent routing, sortation, and transport mechanics for high-throughput nodes." },
      { title: "ASRS Solutions", desc: "High-density Automated Storage and Retrieval Systems for maximum space efficiency." },
      { title: "Robotics & AMRs", desc: "Autonomous Mobile Robots and articulated arms for flexible, scalable operations." },
    ]},
    { name: "Sourcing & Procurement", items: [
      { title: "Strategic Sourcing", desc: "Identifying and qualifying elite global suppliers for complex industrial needs." },
      { title: "Procurement Transformation", desc: "Elevating purchasing functions from transactional to strategic value drivers." },
      { title: "Cost Optimization", desc: "Systematic reduction of CapEx through should-cost modeling and value engineering." },
      { title: "Industrial Benchmarking", desc: "Comparing vendor capabilities, pricing, and technologies against global standards." },
    ]},
    { name: "Digital & Analytics", items: [
      { title: "Industrial Digitization", desc: "Connecting physical assets to digital control towers for total visibility." },
      { title: "Smart Warehousing", desc: "WMS/WES integration to orchestrate complex automated and manual workflows." },
      { title: "Supply Chain Optimization", desc: "Network design and inventory flow restructuring for maximum efficiency." },
      { title: "Material Handling", desc: "Holistic design of material flow from inbound receiving to outbound shipping." },
    ]}
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Solutions We Deliver</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Targeted capabilities for complex industrial challenges.</p>
        </div>
      </section>
      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          {categories.map((cat, i) => (
            <div key={i} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10"><h2 className="text-2xl md:text-3xl font-bold">{cat.name}</h2><div className="flex-1 h-px bg-white/10"></div></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((sol, j) => (
                  <motion.div key={j} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cyan-400/50 transition-all group flex flex-col h-full">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl mb-6 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <h3 className="font-bold text-lg mb-3">{sol.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed flex-1">{sol.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-[#060d1a] border-t border-white/5 relative overflow-hidden">
        <div classNa **...**

_This response is too long to display in full._