import { motion } from "framer-motion";

const facts = [
  { icon: "🎓", label: "Education", value: "B.Tech Electronics and Computer Science · VIT Chennai · 2023–2027" },
  { icon: "📍", label: "Location", value: "India · Open to Remote Internships" },
  { icon: "🧪", label: "Coursework", value: "Deep Learning · NLP · Compiler Design · OS" },
  { icon: "🎯", label: "Seeking", value: "ML / AI internships · Research collaborations · Open source" },
];

const AboutSection = () => (
  <section id="about" className="border-t border-white/[0.06] py-28 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[11px] font-medium text-muted-foreground tracking-[2px] uppercase mb-2.5"
      >
        03 / about
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="font-display leading-[0.9] mb-16"
        style={{ fontSize: "clamp(52px, 7vw, 90px)" }}
      >
        WHO I <span className="text-gradient-accent">AM</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[17px] text-muted-foreground leading-[1.85] space-y-5"
        >
          <p>
            I'm a 3rd year Computer Science student obsessed with making ML systems that{" "}
            <strong className="text-foreground font-semibold">actually work in production</strong> — not just in
            Jupyter notebooks. My work spans <em className="text-primary not-italic font-semibold">deep learning</em>,{" "}
            <em className="text-primary not-italic font-semibold">NLP</em>,{" "}
            <em className="text-primary not-italic font-semibold">RAG pipelines</em>, compiler design, and embedded systems.
          </p>
          <p>
            I build full-stack AI applications with real backends, proper databases, and polished UIs — because{" "}
            <strong className="text-foreground font-semibold">a model that nobody can use doesn't matter</strong>.
            Everything I build goes from concept to deployed product.
          </p>
          <p>
            Currently deep-diving into LLM applications, vector search, and anything that involves making language
            models reliably grounded in real data.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3.5">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 30, rotateY: -5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass-surface rounded-xl px-5 py-4 flex items-start gap-3.5 hover:border-primary/20 transition-all hover:-translate-y-0.5"
            >
              <span className="text-xl mt-0.5 flex-shrink-0">{f.icon}</span>
              <div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[1.2px] uppercase mb-1">
                  {f.label}
                </div>
                <div className="text-sm text-foreground font-medium">{f.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
