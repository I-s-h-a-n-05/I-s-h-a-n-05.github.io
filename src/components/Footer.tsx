import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-white/[0.06] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-2"
  >
    <span className="font-mono text-[13px] font-semibold text-primary">ishan.dev</span>
    <span className="text-xs text-muted-foreground">
      © 2026 Ishan Pandit · Built with Python, PyTorch, and way too much Groq API credit.
    </span>
  </motion.footer>
);

export default Footer;
