import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_100%)]" />
      </div>

      {/* Glow orbs */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_0%,transparent_70%)] pointer-events-none blur-xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
        className="absolute bottom-[10%] -left-[8%] w-[400px] h-[400px] bg-[radial-gradient(circle,hsl(var(--neon-blue)/0.08)_0%,transparent_70%)] pointer-events-none blur-xl"
      />
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-[radial-gradient(circle,hsl(var(--neon-purple)/0.06)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* Rotating geometric rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-[0.035]">
        <div className="w-full h-full border border-foreground/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-8 border border-foreground/15 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
        <div className="absolute inset-20 border border-foreground/10 rounded-full animate-spin-slow" style={{ animationDuration: "45s" }} />
        <div className="absolute inset-32 border border-primary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
      </div>

      <motion.div
        style={{ y: yText, opacity, scale }}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-6 md:px-12 pt-24 pb-20 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-16 items-center"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium text-primary tracking-[2px] uppercase mb-6"
          >
            <span className="w-8 h-px bg-primary" />
            AI/ML Engineer · 3rd Year CS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display leading-[0.85] tracking-tight mb-8"
            style={{ fontSize: "clamp(80px, 13vw, 180px)" }}
          >
            <span className="text-foreground">ISHAN</span>
            <span className="block text-gradient-accent">PANDIT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[17px] text-muted-foreground leading-[1.8] max-w-[520px] mb-10"
          >
            Building production-grade AI systems from first principles —
            <strong className="text-foreground font-semibold"> medical image classifiers</strong>,{" "}
            <strong className="text-foreground font-semibold">real-time NLP pipelines</strong>, and{" "}
            <strong className="text-foreground font-semibold">RAG-powered document AI</strong>.
            Turning coursework and research into deployed applications with real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-7 py-3.5 rounded-xl hover:brightness-110 hover:-translate-y-1 transition-all shadow-[0_12px_40px_hsl(var(--primary)/0.25)] hover:shadow-[0_16px_48px_hsl(var(--primary)/0.35)]"
            >
              View Projects
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
            <a
              href="https://linkedin.com/in/ishan-pandit-6235ab278"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground px-5 py-3.5 rounded-xl hover:text-foreground hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href="mailto:ishan05pandit@gmail.com"
              className="glass-card inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground px-5 py-3.5 rounded-xl hover:text-foreground hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              ✉ Email
            </a>
          </motion.div>
        </div>

        {/* Right card — glassmorphism */}
        <motion.div
          style={{ y: yCard }}
          initial={{ opacity: 0, y: 40, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="glass-surface rounded-2xl p-6 max-w-[400px] md:max-w-none"
        >
          <div className="font-mono text-[10px] font-medium text-primary tracking-[1.5px] uppercase mb-4 pb-3.5 border-b border-white/[0.06]">
            // snapshot
          </div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-[56px] text-foreground leading-none">3</span>
            <span className="text-xs text-muted-foreground font-medium leading-snug">
              AI projects<br />built &amp; deployed
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {["PyTorch", "RAG", "Streamlit", "FAISS", "Groq", "HuggingFace", "Flask", "SQLite"].map((t, i) => (
              <span
                key={t}
                className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border ${
                  i < 2
                    ? "bg-primary/10 border-primary/25 text-primary"
                    : "bg-white/[0.03] border-white/[0.07] text-muted-foreground"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 flex-shrink-0 status-pulse" />
            Deploying DocTalk → Streamlit Cloud
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-muted-foreground tracking-[3px] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
