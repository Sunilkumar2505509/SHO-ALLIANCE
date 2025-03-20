// Smooth animations using GSAP
gsap.from(".hero-section h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".section-title", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3 });
gsap.from(".neon-table", { opacity: 0, y: 30, duration: 1.2 });
// GSAP Animations for New Sections
gsap.from("#tp-guide", { opacity: 0, y: 50, duration: 1.2 });
gsap.from("#wc-shades", { opacity: 0, y: 50, duration: 1.2, delay: 0.5 });
