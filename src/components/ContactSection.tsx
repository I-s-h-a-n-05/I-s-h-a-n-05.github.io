import { motion } from "framer-motion";

const socials = [
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    label: "github.com/I-s-h-a-n-05",
    url: "https://github.com/I-s-h-a-n-05",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    label: "linkedin.com/in/ishan-pandit",
    url: "https://linkedin.com/in/ishan-pandit-6235ab278",
  },
  {
    icon: <span>📄</span>,
    label: "Resume",
    url: "#",
  },
];

const ContactSection = () => (
  <section id="contact" className="border-t border-white/[0.06] py-28 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[11px] font-medium text-muted-foreground tracking-[2px] uppercase mb-2.5">
            05 / contact
          </div>
          <h2
            className="font-display leading-[0.95] text-foreground mb-8"
            style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-gradient-accent">TOGETHER.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-[1.7] max-w-[440px] mb-8">
            Open to internships, research roles, and interesting AI collaborations.
          </p>
          <a
            href="mailto:ishan05pandit@gmail.com"
            className="inline-flex items-center gap-2.5 font-mono text-[15px] font-medium text-foreground border-b border-dashed border-primary/50 pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            ✉ ishan05pandit@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-2.5 min-w-[230px]"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3 px-4 py-3.5 glass-surface rounded-xl text-muted-foreground text-[13px] font-medium hover:border-primary/20 hover:text-foreground hover:translate-x-1.5 transition-all"
            >
              <span className="w-5 text-center flex-shrink-0">{s.icon}</span>
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
