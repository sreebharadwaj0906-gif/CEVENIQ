import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  BarChart3, Brain, Globe, Target, Wrench, Boxes, Cpu, 
  TrendingDown, Factory, CheckCircle, ArrowRight, ArrowUpRight, ShieldCheck, Zap
} from "lucide-react";

const metrics = [
  { value: "150+", label: "Projects Supported" },
  { value: "30%+", label: "CapEx Optimization Identified" },
  { value: "500+", label: "Vendor Ecosystems Evaluated" },
  { value: "80+", label: "Training Sessions Conducted" },
  { value: "12+", label: "Industry Domains Supported" }
];

const whyReasons = [
  { icon: Brain, title: "Engineering + Commercial Intelligence", desc: "The perfect intersection of technical depth and strategic sourcing." },
  { icon: Globe, title: "Vendor-Neutral Consulting", desc: "Unbiased recommendations focused entirely on your business goals." },
  { icon: TrendingDown, title: "Cost Engineering Expertise", desc: "Rigorous should-cost analysis to optimize every investment." },
  { icon: BarChart3, title: "Global Vendor Benchmarking", desc: "Evaluating supplier ecosystems globally for the best outcomes." },
  { icon: Factory, title: "China Sourcing Experience", desc: "Deep strategic relationships across key manufacturing hubs." },
  { icon: CheckCircle, title: "End-to-End Deployment Support", desc: "From blueprint to successful go-live, we stand by your side." },
  { icon: Target, title: "Strategic Procurement Understanding", desc: "Transforming transactional purchasing into strategic advantage." },
  { icon: Cpu, title: "Industrial Automation Expertise", desc: "Deep knowledge of ASRS, robotics, AMRs, and conveyor systems." },
  { icon: ShieldCheck, title: "CapEx Optimization Focus", desc: "Maximizing ROI without compromising on technical quality." },
  { icon: Wrench, title: "Execution + Advisory Capabilities", desc: "We don't just advise; we help execute complex transformations." }
];

const processSteps = [
  { num: "01", title: "Discover", desc: "Understand your automation and commercial landscape" },
  { num: "02", title: "Analyze", desc: "Deep-dive technical and commercial assessment" },
  { num: "03", title: "Benchmark", desc: "Market intelligence and vendor ecosystem mapping" },
  { num: "04", title: "Optimize", desc: "CapEx reduction and value engineering strategies" },
  { num: "05", title: "Deploy", desc: "Execution, commissioning, and go-live support" },
  { num: "06", title: "Support", desc: "Ongoing advisory and performance improvement" }
];

const services = [
  { title: "Automation Consulting", desc: "Strategic consulting for warehouse automation, industrial automation, intralogistics..." },
  { title: "Automation System Integration", desc: "End-to-end integration of conveyors, ASRS, AMRs, robotics, PLCs..." },
  { title: "Automation Deployment & Commissioning", desc: "Installation, commissioning, testing, go-live support..." },
  { title: "China & Global Strategic Sourcing", desc: "Global supplier identification, vendor benchmarking, factory coordination..." },
  { title: "Cost Engineering & Value Engineering", desc: "Should-cost analysis, CapEx optimization, benchmarking..." },
  { title: "Industrial Project Consulting", desc: "Feasibility studies, procurement strategy, operational optimization..." }
];

const solutions = [
  "Warehouse Automation", "Conveyor Systems", "ASRS Solutions", "Robotics & AMRs", 
  "Material Handling", "Industrial Digitization", "Smart Warehousing", "Procurement Transformation", 
  "Strategic Sourcing", "Cost Optimization", "Supply Chain Optimization", "Industrial Benchmarking"
];

const industries = [
  { name: "Ecommerce", icon: Boxes },
  { name: "Warehousing & Logistics", icon: Globe },
  { name: "Retail", icon: Target },
  { name: "FMCG", icon: Factory },
  { name: "Manufacturing", icon: Wrench },
  { name: "Automotive", icon: ShieldCheck },
  { name: "Pharmaceuticals", icon: Zap },
  { name: "Airports", icon: Target },
  { name: "Infrastructure", icon: ShieldCheck },
  { name: "Distribution Centers", icon: Boxes },
  { name: "Supply Chain Operations", icon: Globe },
  { name: "Industrial Manufacturing", icon: Factory }
];

const impactData = [
  { value: "Up to 30% CapEx Reduction", desc: "Identified through cost engineering & vendor benchmarking" },
  { value: "40% Faster Deployment", desc: "Through structured commissioning and go-live support" },
  { value: "25% Procurement Efficiency", desc: "Via strategic sourcing and vendor ecosystem optimization" },
  { value: "50+ Vendor Networks", desc: "Global supplier ecosystems evaluated and benchmarked" },
  { value: "Real-Time Intelligence", desc: "Market and technical benchmarking for better industrial decisions" }
];

const trainingCategories = [
  { title: "Procurement Professionals", icon: Target, desc: "Corporate workshops, CapEx optimization strategies, cost engineering mastery." },
  { title: "Students & Early Careers", icon: Brain, desc: "Industrial awareness, automation exposure, real-world commercial knowledge." },
  { title: "Industrial Advisory", icon: Wrench, desc: "Project consulting, vendor benchmarking, deployment planning." }
];

const insightsPreview = [
  { title: "The Hidden Costs of Automation: A CapEx Optimization Guide", cat: "Cost Engineering", date: "Oct 12, 2024" },
  { title: "China Sourcing in 2024: Strategic Intelligence for Industrial Buyers", cat: "Strategic Sourcing", date: "Oct 05, 2024" },
  { title: "Warehouse Automation Feasibility: What Consultants Won't Tell You", cat: "Automation", date: "Sep 28, 2024" }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.webp" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#060d1a]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] animate-[pulse_4s_ease-in-out_infinite]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8">
            <img src="/ceveniq-logo.png" alt="CEVENIQ Strategic Solutions" className="h-52 md:h-64 w-auto object-contain brightness-0 invert mx-auto drop-shadow-2xl" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto drop-shadow-2xl">
            Engineering Smarter Automation, <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sourcing & Cost Optimization
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            CEVENIQ Strategic Solutions helps organizations transform industrial operations through automation consulting, system integration, strategic sourcing, cost engineering, deployment excellence, and capability development.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] text-center">
              TALK TO AN EXPERT
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-md text-center">
              EXPLORE SOLUTIONS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Animated Metrics */}
      <section className="py-20 bg-[#060d1a] border-t border-white/5 relative z-10 -mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {metrics.map((metric, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center shadow-lg hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-white/50">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CEVENIQ */}
      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Leading Organizations Choose CEVENIQ</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyReasons.map((reason, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors text-cyan-400">
                  <reason.icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-3 leading-tight">{reason.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Services</h2>
              <div className="w-24 h-1 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/services" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 pb-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl group hover:border-cyan-500/50 transition-all flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="text-cyan-400 font-mono text-xl font-bold bg-cyan-400/10 w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="text-cyan-400 font-medium group-hover:text-cyan-300 flex items-center gap-2 text-sm">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-[#030812] border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Engagement Process</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-[#030812] border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-bold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:scale-110 transition-transform group-hover:bg-cyan-500 group-hover:text-black">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Solutions We Deliver</h2>
              <div className="w-24 h-1 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/solutions" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 pb-2">
              View All Solutions <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((solution, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl group hover:border-cyan-400/50 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-sm">{solution}</h4>
                  <p className="text-xs text-white/50 mt-1">Expert execution</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Transform */}
      <section className="py-24 bg-[#030812] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Transform</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all text-center flex flex-col items-center group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <ind.icon size={28} />
                </div>
                <h3 className="font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-xs text-white/50">Optimized operations & reduced CapEx.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-[#060d1a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Delivering Measurable Impact</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {impactData.map((impact, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#030812] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-cyan-500/50 transition-colors shadow-xl"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 tracking-tight">{impact.value}</h3>
                <p className="text-white/70 leading-relaxed">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings Preview */}
      <section className="py-24 bg-[#030812] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Training & Capability</h2>
              <div className="w-24 h-1 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/trainings" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 pb-2">
              Explore Programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {trainingCategories.map((cat, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-cyan-500/30 transition-all flex flex-col group"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <cat.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <p className="text-white/70 mb-8 flex-1">{cat.desc}</p>
                <Link href="/trainings" className="mt-auto px-6 py-3 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 text-center transition-all">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section className="py-24 bg-[#060d1a] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Insights & Thought Leadership</h2>
              <div className="w-24 h-1 bg-cyan-500 rounded-full"></div>
            </div>
            <Link href="/insights" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 pb-2">
              View All Insights <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsPreview.map((article, i) => (
              <motion.div 
                key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all group flex flex-col h-full"
              >
                <div className="h-48 bg-[#0a1220] flex items-center justify-center p-6 border-b border-white/5 group-hover:bg-[#0d182a] transition-colors relative">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] group-hover:animate-[gradient_3s_ease_infinite]"></div>
                  <span className="text-cyan-500/20 text-6xl font-serif leading-none block">"</span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">{article.cat}</span>
                    <span className="text-xs text-white/40">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-6 group-hover:text-cyan-300 transition-colors flex-1">{article.title}</h3>
                  <Link href="/insights" className="text-sm font-medium text-white/60 group-hover:text-cyan-400 mt-auto flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative overflow-hidden bg-[#030812]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto">Let CEVENIQ's engineering intelligence work for your organization.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-10 py-5 bg-cyan-500 text-black text-lg font-bold rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]">
                TALK TO AN EXPERT
              </Link>
              <Link href="/solutions" className="px-10 py-5 border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                EXPLORE SOLUTIONS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}