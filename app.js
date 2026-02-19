import { renderHero, renderServices, renderAcademy, renderGallery, renderContact } from './components.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');


    const loader = document.createElement('div');
    loader.className = 'loader-overlay';
    loader.innerHTML = '<div>SS Glam<span class="text-white">.</span></div>';
    document.body.appendChild(loader);


    app.innerHTML = `
        ${renderHero()}
        ${renderServices()}
        ${renderAcademy()}
        ${renderGallery()}
        ${renderContact()}
    `;


    lucide.createIcons();


    setTimeout(() => {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loader.remove();
                initAnimations();
            }
        });
    }, 1500);


    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('translate-x-full');
        } else {
            mobileMenu.classList.add('translate-x-full');
        }
    };

    menuBtn.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
});
