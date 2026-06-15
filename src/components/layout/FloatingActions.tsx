import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-[#060d1a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors shadow-lg"
      >
        <Calendar size={16} className="text-cyan-400" />
        <span className="hidden sm:inline">Schedule Consultation</span>
      </Link>
      
      <Link
        href="/contact"
        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-1"
      >
        <MessageCircle size={18} />
        <span>Talk to an Expert</span>
      </Link>

      <a
        href="https://wa.me/919187091728"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-400 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}