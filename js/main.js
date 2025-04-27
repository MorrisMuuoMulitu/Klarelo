/**
 * Klarelo Communications - Main JavaScript File
 * Organized into logical sections for better maintainability
 */

$(document).ready(function() {
    // ======================
    // Mobile Navigation
    // ======================
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // ======================
    // Scroll Effects
    // ======================
    $(window).on('load scroll', function() {
        // Close mobile menu on scroll
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Sticky header effect
        $('.header').toggleClass('scrolled', $(window).scrollTop() > 35);

        // Back to top button
        $('.back-to-top').toggleClass('show', $(this).scrollTop() > 100);
    });

    // Smooth scroll for back to top
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutCubic');
    });

    // ======================
    // Counter Animation
    // ======================
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        const duration = 2000; // 2 seconds total animation time
        const startTime = performance.now();
        
        const updateCounters = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const currentValue = Math.floor(progress * target);
                counter.textContent = currentValue.toLocaleString();
            });
            
            if (progress < 1) {
                requestAnimationFrame(updateCounters);
            }
        };
        
        requestAnimationFrame(updateCounters);
    };

    // Initialize counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    document.querySelectorAll('.counters').forEach(section => {
        counterObserver.observe(section);
    });

    // ======================
    // Carousels
    // ======================
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 
            0: {items: 2}, 
            768: {items: 4}, 
            900: {items: 6} 
        }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 
            0: {items: 1}, 
            576: {items: 2}, 
            768: {items: 3}, 
            992: {items: 4} 
        }
    });

    // ======================
    // Accordion
    // ======================
    $('.accordion-header').click(function() {
        const $this = $(this);
        $('.accordion .accordion-body').not($this.next()).slideUp(500);
        $this.next('.accordion-body').slideToggle(500);
        $('.accordion-header span').not($this.children()).text('+');
        $this.children('span').text(function(_, text) {
            return text === '+' ? '-' : '+';
        });
    });

    // Initialize any other components here
});
