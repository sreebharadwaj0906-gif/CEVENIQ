import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col relative">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}