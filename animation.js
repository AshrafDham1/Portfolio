
const rdmShape = document.getElementById("randomShape");
const rdmShapeRect = rdmShape.getBoundingClientRect();
const centerX = rdmShapeRect.left + rdmShapeRect.width / 2;
const centerY = rdmShapeRect.top + rdmShapeRect.height / 2;
console,console.log(centerX);
console,console.log(centerY);

particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 600 } },
      color: { value: "#00ffff" },
      shape: {
        type: "circle",
        stroke: { width: 1, color: "#00ffff" },
        polygon: { nb_sides: 12 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 220,
        color: "#969696",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 150, duration: 0.4 },
        repulse1: { distance: 150, center: { x: centerX, y: centerY } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

 


