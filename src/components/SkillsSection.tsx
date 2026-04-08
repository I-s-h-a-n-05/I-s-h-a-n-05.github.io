import { motion } from "framer-motion";

const groups = [
  {
    title: "// Machine Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Transfer Learning", "CNNs", "EfficientNet", "Focal Loss", "LSTMs / GRUs", "Transformers", "BERT"],
  },
  {
    title: "// NLP & LLMs",
    skills: ["RAG Pipelines", "FAISS", "sentence-transformers", "Groq API", "HuggingFace", "Llama3-70B", "RoBERTa", "VADER", "TF-IDF / PPMI", "CKY Parsing"],
  },
  {
    title: "// Backend & Dev",
    skills: ["Python", "Flask", "Streamlit", "SQLite", "REST APIs", "PyMuPDF", "Git & GitHub", "C / C++"],
  },
  {
    title: "// CS Fundamentals",
    skills: ["Compiler Design", "LR Parsing / SLR", "8051 Assembly", "Data Structures", "Algorithms", "Operating Systems"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="border-t border-white/[0.06] py-28 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[11px] font-medium text-muted-foreground tracking-[2px] uppercase mb-2.5"
      >
        04 / skills
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="font-display leading-[0.9] mb-16"
        style={{ fontSize: "clamp(52px, 7vw, 90px)" }}
      >
        TECH
        <br />
        <span className="text-gradient-accent">STACK</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="glass-surface rounded-2xl px-6 py-6 hover:border-primary/15 transition-all group"
          >
            <div className="font-mono text-[10.5px] font-semibold text-primary tracking-[1.4px] uppercase mb-4">
              {g.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-[13px] font-medium text-muted-foreground bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full cursor-default hover:border-primary/35 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
