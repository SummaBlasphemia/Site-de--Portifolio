window.onload = () => {
  particlesJS("particulas", {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 1.5, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 1,
        width: 2,
      },
      move: { enable: true, speed: 2 },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
      },
    },
    retina_detect: true,
  });
};