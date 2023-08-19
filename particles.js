particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // You can adjust the number of particles as needed
      density: {
        enable: true,
        value_area: 800 // You might need to adjust this value for density
      }
    },
    color: {
      value: "#ffffff" // You can change the particle color
    },
    shape: {
      type: "circle", // You can change the particle shape
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3, // You can change the particle size
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6, // You can adjust the particle movement speed
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 100 // You can adjust the repulse distance
      },
      push: {
        particles_nb: 4 // You can adjust the number of particles pushed
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
