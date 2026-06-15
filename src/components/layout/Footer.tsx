import { Link } from "wouter";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030812] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img
                src="/ceveniq-logo.png"
                alt="CEVENIQ Strategic Solutions"
                className="h-14 w-auto object-contain brightness-0 invert"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Powered by Engineering Intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Services</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Industries</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Automation Consulting</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">System Integration</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Strategic Sourcing</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Cost Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions & Trainings</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">View Solutions</Link></li>
              <li><Link href="/trainings" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Procurement Training</Link></li>
              <li><Link href="/trainings" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Student Programs</Link></li>
              <li><Link href="/trainings" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm">Industrial Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:askme@ceveniq.com" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <Mail size={16} /> askme@ceveniq.com
                </a>
              </li>
              <li>
                <a href="tel:+919187091728" className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <Phone size={16} /> +91-9187091728
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                  Schedule Consultation &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} CEVENIQ Strategic Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}