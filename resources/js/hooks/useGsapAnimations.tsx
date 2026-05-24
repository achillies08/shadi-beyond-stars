import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef } from 'react';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, useGSAP);
}

export const useGsapAnimations = () => {
    const containerRef = useRef<any>(null);

    useGSAP(
        () => {
            // Initialize ScrollSmoother
            const smoother = ScrollSmoother.create({
                wrapper: '#smooth-wrapper',
                content: '#smooth-content',
                smooth: 1.5,
                effects: true,
                smoothTouch: 0.1,
            });

            // Default reveal animation for elements with .reveal class
            const revealElements = gsap.utils.toArray<HTMLElement>('.reveal');
            revealElements.forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        y: 40,
                        autoAlpha: 0,
                        clipPath: 'inset(100% 0% 0% 0%)',
                    },
                    {
                        y: 0,
                        autoAlpha: 1,
                        clipPath: 'inset(0% 0% 0% 0%)',
                        duration: 1.2,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    },
                );
            });

            // Staggered reveal for elements with .reveal-stagger container
            const staggerContainers = gsap.utils.toArray<HTMLElement>('.reveal-stagger');
            staggerContainers.forEach((container) => {
                const items = container.querySelectorAll('.reveal-item');
                if (items.length > 0) {
                    gsap.fromTo(
                        items,
                        {
                            y: 30,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 1,
                            stagger: 0.1,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: container,
                                start: 'top 82%',
                                toggleActions: 'play none none none',
                            },
                        },
                    );
                }
            });

            // Magnetic effect for buttons
            const magneticElements = gsap.utils.toArray<HTMLElement>('.btn-magnetic');
            magneticElements.forEach((el) => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(el, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                });

                el.addEventListener('mouseleave', () => {
                    gsap.to(el, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: 'elastic.out(1, 0.3)',
                    });
                });
            });

            // Subtle parallax for elements with .parallax class
            const parallaxElements = gsap.utils.toArray<HTMLElement>('.parallax');
            parallaxElements.forEach((el) => {
                const speed = parseFloat(el.dataset.speed || '0.1');
                gsap.to(el, {
                    y: () => -ScrollTrigger.maxScroll(window) * speed,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            });
            // Global text appearance effect for .text-appear class
            const textAppears = gsap.utils.toArray<HTMLElement>('.text-appear');
            textAppears.forEach((el) => {
                const split = new SplitText(el, { type: 'chars, words' });

                // Set parent to visible now that SplitText has handled initial hiding
                gsap.set(el, { visibility: 'visible' });

                gsap.from(split.chars, {
                    rotationY: -90,
                    rotationX: 45,
                    transformOrigin: 'left center',
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });
        },
        { scope: containerRef },
    );

    return containerRef;
};
