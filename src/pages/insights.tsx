import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    { title: "The Hidden Costs of Automation: A CapEx Optimization Guide", cat: "Cost Engineering", date: "Oct 12, 2024", excerpt: "Discover where hidden costs lurk in large-scale automation projects and how to structure your procurement to avoid them." },
    { title: "China Sourcing in 2024: Strategic Intelligence for Industrial Buyers", cat: "Strategic Sourcing", date: "Oct 05, 2024", excerpt: "Navigate the shifting landscape of global supply chains with strategic insights into Chinese manufacturing capabilities." },
    { title: "Warehouse Automation Feasibility: What Consultants Won't Tell You", cat: "Automation", date: "Sep 28, 2024", excerpt: "A brutally honest look at when automation makes sense, and when it destroys ROI." },
    { title: "Procurement Transformation: From Transactional to Strategic", cat: "Procurement", date: "Sep 15, 2024", excerpt: "How leading industrial players are elevating their purchasing departments into true value-creation engines." },
    { title: "ASRS vs AMR: Making the Right Automation Investment Decision", cat: "Technology", date: "Sep 02, 2024", excerpt: "Comparing high-density storage against flexible robotics for modern fulfillment centers." },
    { title: "Supply Chain Digitization: Building an Intelligent Industrial Backbone", cat: "Digital", date: "Aug 21, 2024", excerpt: "Moving beyond spreadsheets to fully integrated, real-time control towers." }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights & Thought Leadership</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Perspectives on engineering intelligence, sourcing, and industrial transformation from our core team.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all group flex flex-col h-full shadow-lg"
              >
                <div className="h-56 bg-[#0a1220] flex items-center justify-center p-8 border-b border-white/5 group-hover:bg-[#0d182a] transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] group-hover:animate-[gradient_3s_ease_infinite]"></div>
                  <span className="text-cyan-500/30 text-8xl font-serif leading-none block transform group-hover:scale-110 transition-transform">"</span>
                </div>
                <div className="p-8 flex flex-col flex-1 bg-[#060d1a]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase bg-cyan-400/10 px-3 py-1 rounded-sm border border-cyan-400/20">{article.cat}</span>
                    <span className="text-xs text-white/40 font-mono">{article.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors leading-snug">{article.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1 mb-6">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-white/50">CE</span>
                      </div>
                      <span className="text-xs font-medium text-white/70">CEVENIQ Experts</span>
                    </div>
                    <button className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-2">
                      Read <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all">
              LOAD MORE INSIGHTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}