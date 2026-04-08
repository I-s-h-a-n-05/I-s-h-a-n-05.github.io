import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: 50, density: { enable: true, width: 1200, height: 800 } },
      color: { value: ["#CDFF6B", "#60A5FA", "#D77BFF", "#6EE7B7"] },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.05, max: 0.15 },
        animation: { enable: true, speed: 0.5, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 1, sync: false },
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none" as const,
        outModes: { default: "out" as const },
      },
      links: {
        enable: true,
        distance: 140,
        color: "#CDFF6B",
        opacity: 0.04,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.12 } },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="!fixed inset-0 z-0"
      options={options}
    />
  );
};

export default ParticlesBg;
