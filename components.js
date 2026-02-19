import { data } from './data.js';

export const renderHero = () => {
    return `
        <section id="home" class="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <!-- Background Video -->
            <div class="absolute inset-0 w-full h-full z-0">
                <video autoplay muted loop playsinline class="w-full h-full object-cover opacity-80 filter brightness-75">
                    <source src="${data.hero.videoUrl}" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-black/20"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl font-serif italic mb-6 leading-tight opacity-0 transform translate-y-10">
                    ${data.hero.title}
                </h1>
                <p class="hero-subtitle text-lg md:text-xl font-light tracking-wide mb-10 opacity-0 transform translate-y-10 max-w-2xl mx-auto">
                    ${data.hero.subtitle}
                </p>
                <div class="hero-cta opacity-0 transform translate-y-10 flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#services" class="px-8 py-4 bg-white text-brand-dark rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 font-medium tracking-widest text-sm uppercase">
                        Explore Services
                    </a>
                    <a href="#academy" class="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 font-medium tracking-widest text-sm uppercase">
                        Join Academy
                    </a>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <i data-lucide="arrow-down" class="text-white w-6 h-6"></i>
            </div>
        </section>
    `;
};

export const renderServices = () => {
    const servicesHTML = data.services.map((service, index) => `
        <div class="service-card group relative h-[500px] w-full overflow-hidden rounded-xl cursor-pointer" data-index="${index}">
            <div class="absolute inset-0 img-hover-zoom">
                <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover transition-transform duration-700">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span class="text-brand-gold text-xs uppercase tracking-widest mb-2 block">${service.category}</span>
                <div class="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                    <h3 class="text-2xl font-serif text-white italic">${service.title}</h3>
                    <span class="text-white font-light">${service.price}</span>
                </div>
                <p class="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
                    ${service.description}
                </p>
            </div>
        </div>
    `).join('');

    return `
        <section id="services" class="py-24 px-6 bg-brand-cream relative">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div class="max-w-xl">
                        <span class="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2 block">Our Expertise</span>
                        <h2 class="text-4xl md:text-5xl font-serif text-brand-dark reveal-text">Curated Beauty Services</h2>
                    </div>
                    <a href="#" class="hidden md:flex items-center gap-2 text-brand-dark hover:text-brand-gold transition-colors mt-6 md:mt-0">
                        <span>View Full Menu</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${servicesHTML}
                </div>
            </div>
        </section>
    `;
};

export const renderAcademy = () => {
    const coursesHTML = data.academy.courses.map(course => `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-brand-soft hover:shadow-lg transition-shadow duration-300 flex gap-6 items-center">
            <div class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img src="${course.image}" class="w-full h-full object-cover" alt="${course.title}">
            </div>
            <div>
                <h4 class="text-xl font-serif mb-1">${course.title}</h4>
                <div class="flex gap-4 text-xs text-brand-muted uppercase tracking-wider mb-2">
                    <span>${course.duration}</span>
                    <span class="w-px h-3 bg-gray-300"></span>
                    <span>${course.level}</span>
                </div>
                <button class="text-brand-dark text-sm font-medium hover:text-brand-gold transition-colors">View Syllabus &rarr;</button>
            </div>
        </div>
    `).join('');

    return `
        <section id="academy" class="py-24 px-6 bg-white relative overflow-hidden">
            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 w-1/3 h-full bg-brand-soft -z-0 opacity-50 skew-x-12 transform translate-x-20"></div>

            <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1">
                    <div class="grid grid-cols-2 gap-4">
                         <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="rounded-2xl mt-12 shadow-xl" alt="Classroom">
                         <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" class="rounded-2xl shadow-xl" alt="Practice">
                    </div>
                </div>
                
                <div class="order-1 lg:order-2">
                    <span class="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2 block">SS Glam Academy</span>
                    <h2 class="text-4xl md:text-5xl font-serif text-brand-dark mb-6 reveal-text">${data.academy.title}</h2>
                    <p class="text-brand-muted mb-8 leading-relaxed font-light reveal-text">
                        ${data.academy.description}
                    </p>
                    
                    <div class="space-y-4 mb-10">
                        ${coursesHTML}
                    </div>

                    <a href="#apply" class="inline-block px-8 py-4 bg-brand-dark text-white rounded-full hover:bg-brand-gold transition-colors duration-300 text-sm uppercase tracking-widest">
                        Apply for Enrollment
                    </a>
                </div>
            </div>
        </section>
    `;
};

export const renderGallery = () => {

    const imagesHTML = data.gallery.map(img => `
        <div class="flex-none w-72 md:w-96 h-[400px] rounded-lg overflow-hidden relative group">
            <img src="${img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
        </div>
    `).join('');

    return `
        <section id="gallery" class="py-24 bg-brand-dark text-white overflow-hidden">
            <div class="px-6 max-w-7xl mx-auto mb-12 flex justify-between items-end">
                <div>
                    <span class="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2 block">Portfolio</span>
                    <h2 class="text-4xl font-serif italic">The Glamour Edit</h2>
                </div>
                <div class="flex gap-2">
                    <button id="scroll-left" class="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><i data-lucide="arrow-left"></i></button>
                    <button id="scroll-right" class="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors"><i data-lucide="arrow-right"></i></button>
                </div>
            </div>

            <div class="flex gap-6 overflow-x-auto px-6 pb-12 scrollbar-hide" id="gallery-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
                ${imagesHTML}
            </div>
        </section>
    `;
};

export const renderContact = () => {
    return `
        <section id="contact" class="py-24 px-6 bg-brand-cream">
            <div class="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-brand-soft">
                <div class="text-center mb-12">
                    <span class="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2 block">Get in Touch</span>
                    <h2 class="text-4xl font-serif text-brand-dark mb-4">Book Your Appointment</h2>
                    <p class="text-brand-muted font-light">Let us enhance your natural beauty. Fills up fast.</p>
                </div>

                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-xs uppercase tracking-wider text-brand-dark">Name</label>
                            <input type="text" class="w-full bg-brand-soft border-0 rounded-lg p-4 focus:ring-1 focus:ring-brand-gold outline-none transition-shadow" placeholder="Jane Doe">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs uppercase tracking-wider text-brand-dark">Phone</label>
                            <input type="tel" class="w-full bg-brand-soft border-0 rounded-lg p-4 focus:ring-1 focus:ring-brand-gold outline-none transition-shadow" placeholder="+1 (555) 000-0000">
                        </div>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-xs uppercase tracking-wider text-brand-dark">Service of Interest</label>
                        <select class="w-full bg-brand-soft border-0 rounded-lg p-4 focus:ring-1 focus:ring-brand-gold outline-none transition-shadow text-gray-500">
                            <option>Bridal Package</option>
                            <option>Hair Styling</option>
                            <option>Academy Enrollment</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="space-y-2">
                        <label class="text-xs uppercase tracking-wider text-brand-dark">Message</label>
                        <textarea rows="4" class="w-full bg-brand-soft border-0 rounded-lg p-4 focus:ring-1 focus:ring-brand-gold outline-none transition-shadow" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button type="button" class="w-full py-5 bg-brand-dark text-white rounded-lg hover:bg-brand-gold transition-colors duration-300 text-sm uppercase tracking-widest font-medium">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </section>
    `;
};
