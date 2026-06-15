import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/solutions", label: "Solutions" },
    { href: "/trainings", label: "Trainings" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060d1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/ceveniq-logo.png"
            alt="CEVENIQ Strategic Solutions"
            className="h-12 w-auto object-contain brightness-0 invert"
            data-testid="img-logo"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                location === link.href ? "text-cyan-400 border-b border-cyan-400" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-full text-sm font-bold hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            TALK TO AN EXPERT
          </Link>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060d1a] border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    location === link.href ? "text-cyan-400" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-cyan-500 text-black rounded-full font-bold"
              >
                TALK TO AN EXPERT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}