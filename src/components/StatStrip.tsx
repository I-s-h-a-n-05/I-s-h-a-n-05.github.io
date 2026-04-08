import { motion } from "framer-motion";

const stats = [
  { num: "3", label: "AI projects\ndeployed" },
  { num: "3", label: "cloud platforms\n(HuggingFace, Streamlit, GitHub)" },
  { num: "4", label: "ML specialisations\n(CV, NLP, LLMs, RAG)" },
  { num: "∞", label: "more\nin progress" },
];

const StatStrip = () => (
  <div className="border-y border-white/[0.06] py-6 px-6 md:px-12 glass-strip flex flex-wrap items-center justify-center">
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
        className={`flex items-center gap-3.5 px-5 md:px-10 py-2.5 ${
          i < stats.length - 1 ? "border-r border-white/[0.06] max-md:border-r-0 max-md:border-b max-md:border-white/[0.06] max-md:w-full" : ""
        }`}
      >
        <span className="font-display text-[42px] text-primary leading-none">{s.num}</span>
        <span className="text-xs text-muted-foreground font-medium whitespace-pre-line leading-snug">{s.label}</span>
      </motion.div>
    ))}
  </div>
);

export default StatStrip;
