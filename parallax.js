const parallaxSections = document.querySelectorAll('.parallax');

parallaxSections.forEach(section => {
    const speed = parseFloat(section.getAttribute('data-speed'));
    const position = section.getAttribute('data-position');
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          scrub: true
        }
    });

    tl.to(section, { backgroundPosition: `50% ${position}`, ease: "none" });
});
