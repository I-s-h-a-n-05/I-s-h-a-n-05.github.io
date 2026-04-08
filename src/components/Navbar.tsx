import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[200] h-[58px] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
          scrolled
            ? "glass-nav border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="font-mono text-[13px] font-semibold text-primary tracking-wider">
          ishan.dev
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://github.com/I-s-h-a-n-05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-primary-foreground bg-primary px-4 py-[7px] rounded-lg hover:brightness-110 transition-all hover:-translate-y-0.5 shadow-[0_4px_16px_hsl(var(--primary)/0.2)]"
          >
            GitHub ↗
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-5 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[199] bg-background/95 backdrop-blur-2xl pt-[70px] px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-5xl text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="https://github.com/I-s-h-a-n-05"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center font-bold text-primary-foreground bg-primary px-6 py-3 rounded-lg text-sm"
            >
              GitHub ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
