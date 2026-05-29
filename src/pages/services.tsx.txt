import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cog, Box, Globe, Calculator, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Automation Consulting", icon: Lightbulb, desc: "Strategic consulting for warehouse automation, industrial automation, and intralogistics.", activities: ["Needs assessment", "Feasibility studies", "Technology selection (ASRS, AMR, Conveyors)", "ROI modeling"] },
    { title: "Automation System Integration", icon: Cog, desc: "End-to-end integration of conveyors, ASRS, AMRs, robotics, and PLCs.", activities: ["System architecture design", "Vendor orchestration", "Software/Hardware integration", "Performance optimization"] },
    { title: "Automation Deployment & Commissioning", icon: Box, desc: "Installation, commissioning, testing, and go-live support.", activities: ["Site supervision", "SAT & FAT execution", "Safety compliance", "Ramp-up stabilization"] },
    { title: "China & Global Strategic Sourcing", icon: Globe, desc: "Global supplier identification, vendor benchmarking, and factory coordination.", activities: ["Vendor discovery", "Supplier audits", "Negotiation strategy", "Quality control management"] },
    { title: "Cost Engineering & Value Engineering", icon: Calculator, desc: "Should-cost analysis, CapEx optimization, and technical-commercial benchmarking.", activities: ["Bottom-up cost modeling", "Design-to-cost workshops", "TCO analysis", "Alternative material sourcing"] },
    { title: "Industrial Project Consulting", icon: BarChart, desc: "Feasibility studies, procurement strategy, and operational optimization.", activities: ["Project master planning", "Risk mitigation strategies", "Procurement lifecycle management", "Process re-engineering"] }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Core Services</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Comprehensive strategic and execution capabilities for your industrial transformation.</p>
        </div>
      </section>
      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl hover:border-cyan-500/40 transition-all group flex flex-col">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors"><service.icon size={32} /></div>
                  <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="text-white/70 text-lg mb-8">{service.desc}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">Key Activities</h4>
                  <ul className="space-y-3">{service.activities.map((act, j) => (<li key={j} className="flex items-start gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></div>{act}</li>))}</ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Need a Custom Engagement?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">DISCUSS YOUR PROJECT</Link>
        </div>
      </section>
    </div>
  );
}