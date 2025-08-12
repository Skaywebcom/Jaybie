import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: "connect",
        },
        resize: true,
      },
      modes: {
        connect: {
          distance: 150,
          links: {
            opacity: 0.3,
          },
          radius: 60,
        },
      },
    },
    particles: {
      color: {
        value: ["#64ffda", "#bb86fc", "#03dac6", "#ffffff"],
      },
      links: {
        color: "#64ffda",
        distance: 120,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 45,
      },
      opacity: {
        value: 0.3,
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 2.5 },
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.5,
        },
      },
    },
    detectRetina: true,
    smooth: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticlesBackground;
