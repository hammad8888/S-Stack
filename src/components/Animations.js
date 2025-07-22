import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInFromBottom = (target, delay = 0) => {
  gsap.from(target, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
    },
  });
};
