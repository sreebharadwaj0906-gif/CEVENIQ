import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ShoppingCart, Truck, Store, Coffee, 
  Factory, Car, Pill, Plane, 
  Building, MapPin, Box, HardHat 
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Ecommerce", icon: ShoppingCart, impacts: ["Fulfillment automation", "High-throughput sorting", "Peak season scalability"] },
    { name: "Warehousing & Logistics", icon: Truck, impacts: ["3PL process optimization", "Space utilization", "Labor dependency reduction"] },
    { name: "Retail", icon: Store, impacts: ["Omnichannel fulfillment", "Micro-fulfillment centers", "Inventory accuracy"] },
    { name: "FMCG", icon: Coffee, impacts: ["Palletizing automation", "Cold chain logistics", "Batch traceability"] },
    { name: "Manufacturing", icon: Factory, impacts: ["End-of-line automation", "Raw material feeding", "Lean flow integration"] },
    { name: "Automotive", icon: Car, impacts: ["Just-in-time delivery", "Heavy payload handling", "Assembly line optimization"] },
    { name: "Pharmaceuticals", icon: Pill, impacts: ["Cleanroom automation", "Track and trace", "Temperature controlled storage"] },
    { name: "Airports", icon: Plane, impacts: ["Baggage handling systems", "Cargo throughput", "Security integration"] },
    { name: "Infrastructure", icon: Building, impacts: ["Mega-facility planning", "Capex modeling", "Vendor consortiums"] },
    { name: "Distribution Centers", icon: MapPin, impacts: ["Cross-docking speed", "ASRS density", "Sortation accuracy"] },
    { name: "Supply Chain Operations", icon: Box, impacts: ["Network node design", "Cost engineering", "Strategic sourcing"] },
    { name: "Industrial Manufacturing", icon: HardHat, impacts: ["Heavy machinery integration", "Safety protocols", "OEE improvement"] }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Transform</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Delivering engineering intelligence across critical sectors to drive operational superiority.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                  <ind.icon size={32} />
                </div>
                <h3 className="font-bold text-xl text-white mb-4">{ind.name}</h3>
                <ul className="space-y-2">
                  {ind.impacts.map((impact, j) => (
                    <li key={j} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 text-xs">▹</span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Industry Operations?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}