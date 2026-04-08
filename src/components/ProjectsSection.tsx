import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";

interface Project {
  num: string;
  icon: string;
  name: string;
  category: string;
  desc: string;
  stack: string[];
  colorVar: string;
  liveUrl?: string;
  liveLabel?: string;
  ghUrl: string;
  ghLabel: string;
  soon?: boolean;
}

const projects: Project[] = [
  {
    num: "01 — LIVE ON HUGGINGFACE",
    icon: "🧠",
    name: "NeuroScan",
    category: "Medical AI · Computer Vision",
    desc: "Brain tumor classification from MRI scans using EfficientNetB0 transfer learning — four tumor types. Fine-tuned with focal loss and class weights for robust recall. Generates clinical-grade PDF reports and maintains a SQLite-backed scan history with full CRUD.",
    stack: ["PyTorch", "EfficientNetB0", "Flask", "Transfer Learning", "Focal Loss", "ReportLab", "SQLite"],
    colorVar: "--neon-blue",
    liveUrl: "https://huggingface.co/spaces/I-s-h-a-n-05/NeuroScan",
    liveLabel: "↗ Live Demo",
    ghUrl: "https://github.com/I-s-h-a-n-05/NeuroScan",
    ghLabel: "Code",
  },
  {
    num: "02 — LIVE ON STREAMLIT",
    icon: "📊",
    name: "SentimentScope",
    category: "NLP · Real-time Analytics",
    desc: "Multi-source real-time sentiment analyser pulling from NewsAPI, The Guardian, and RSS feeds. Dual-engine pipeline: VADER for speed, RoBERTa for accuracy. Compare mode, India trending tab, sentiment-reactive UI, SQLite history, and one-click CSV export.",
    stack: ["RoBERTa", "VADER", "Streamlit", "HuggingFace API", "NewsAPI", "Guardian API", "SQLite"],
    colorVar: "--neon-purple",
    liveUrl: "https://sentimentscope.streamlit.app",
    liveLabel: "↗ Live Demo",
    ghUrl: "https://github.com/I-s-h-a-n-05/SentimentScope",
    ghLabel: "Code",
  },
  {
    num: "03 — DEPLOYING NOW",
    icon: "◎",
    name: "DocTalk",
    category: "RAG · Document AI",
    desc: "AI document Q&A with a full RAG pipeline — PDF → chunks → FAISS vector index → Llama3-70B grounded generation with exact page citations. Multi-document support, auto-summary, voice input via Web Speech API, SQLite-persisted chat history, and export.",
    stack: ["RAG", "FAISS", "Llama3-70B", "Groq API", "sentence-transformers", "PyMuPDF", "Streamlit"],
    colorVar: "--neon-green",
    ghUrl: "https://github.com/I-s-h-a-n-05/DocTalk",
    ghLabel: "↗ GitHub",
    soon: true,
  },
];

const ProjectCard3D = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set((y - 0.5) * -14);
    rotateY.set((x - 0.5) * 14);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const glowOpacity = useTransform(springX, [-7, 0, 7], [0.15, 0.06, 0.15]);
  const colorHsl = `hsl(var(${project.colorVar}))`;

  return (
    <div className="perspective-1200">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 60, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
        className="glass-surface rounded-2xl overflow-hidden flex flex-col group cursor-default"
      >
        {/* Top colored accent */}
        <div className="h-[3px] relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: colorHsl }} />
          <motion.div
            className="absolute inset-0"
            style={{ background: `linear-gradient(90deg, transparent, ${colorHsl}, transparent)` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Glow overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${colorHsl}, transparent 55%)`,
          }}
        />

        {/* Head */}
        <div className="px-6 pt-6">
          <div className="font-mono text-[10px] tracking-[1.5px] mb-3.5" style={{ color: colorHsl }}>
            {project.num}
          </div>
          <div
            className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-xl mb-3.5 border backdrop-blur-sm"
            style={{ background: `${colorHsl}12`, borderColor: `${colorHsl}30` }}
          >
            {project.icon}
          </div>
          <h3 className="font-display text-[34px] text-foreground tracking-wide mb-1 group-hover:text-gradient-accent transition-all duration-500">
            {project.name}
          </h3>
          <div className="text-[11px] font-bold tracking-[1.2px] uppercase mb-4" style={{ color: colorHsl }}>
            {project.category}
          </div>
          <div className="h-px bg-white/[0.06] -mx-6" />
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
          <p className="text-[13.5px] text-muted-foreground leading-[1.75] mb-4 flex-1">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[9.5px] px-2 py-0.5 rounded border backdrop-blur-sm"
                style={{ background: `${colorHsl}0A`, borderColor: `${colorHsl}22`, color: colorHsl }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold px-3.5 py-2.5 rounded-lg border transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: `${colorHsl}15`, borderColor: `${colorHsl}30`, color: colorHsl }}
              >
                {project.liveLabel}
              </a>
            )}
            <a
              href={project.ghUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 glass-card text-muted-foreground text-xs font-semibold px-3.5 py-2.5 rounded-lg transition-all hover:text-foreground hover:-translate-y-1 ${
                project.soon ? "" : "flex-1 justify-center"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {project.ghLabel}
            </a>
            {project.soon && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground/40 px-3.5 py-2.5">
                🔒 Demo Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="border-t border-white/[0.06] py-28 px-6 md:px-12">
    <div className="max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-mono text-[11px] font-medium text-muted-foreground tracking-[2px] uppercase mb-2.5"
      >
        02 / projects
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display leading-[0.9] mb-16"
        style={{ fontSize: "clamp(52px, 7vw, 90px)" }}
      >
        <span className="text-foreground">SELECTED</span>
        <br />
        <span className="text-gradient-accent">WORK</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard3D key={p.name} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
