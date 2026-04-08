import ParticlesBg from "@/components/ParticlesBg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatStrip from "@/components/StatStrip";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-grain relative">
    <ParticlesBg />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <StatStrip />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;