<<<<<<< HEAD
export const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 });
    gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 });
    gsap.to(".hero-cta", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 });


    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('py-2');
            nav.classList.remove('py-6');
        } else {
            nav.classList.add('py-6');
            nav.classList.remove('py-2');
        }
    });


    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });


    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });


    const scrollContainer = document.getElementById('gallery-scroll');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if(scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }


    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.3 });
        });


        const interactiveElements = document.querySelectorAll('a, button, .service-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, { scale: 1.5, borderColor: '#D4AF37', duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, { scale: 1, borderColor: '#1A1A1A', duration: 0.3 });
            });
        });
    }
};
=======
export const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 });
    gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 });
    gsap.to(".hero-cta", { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 });


    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('py-2');
            nav.classList.remove('py-6');
        } else {
            nav.classList.add('py-6');
            nav.classList.remove('py-2');
        }
    });


    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });


    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });


    const scrollContainer = document.getElementById('gallery-scroll');
    const leftBtn = document.getElementById('scroll-left');
    const rightBtn = document.getElementById('scroll-right');

    if(scrollContainer && leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });
        rightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }


    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.3 });
        });


        const interactiveElements = document.querySelectorAll('a, button, .service-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(follower, { scale: 1.5, borderColor: '#D4AF37', duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(follower, { scale: 1, borderColor: '#1A1A1A', duration: 0.3 });
            });
        });
    }
};
>>>>>>> 9def192408a31e5a130aedbc43f89880184eea5c
