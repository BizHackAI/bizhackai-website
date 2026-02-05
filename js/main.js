/* ============================================
   BizHack AI - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFAQ();
    initScrollAnimations();
    initCookieBanner();
    initSmoothScroll();
    initRotatingText();
});

/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu on link click
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add animation classes to elements
    const sections = document.querySelectorAll(
        '.problem-card, .solution-step, .deliverable-card, .why-card, .proof-card, .faq-item'
    );
    
    sections.forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        section.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Re-observe new elements
    sections.forEach(section => {
        observer.observe(section);
    });
}

/* ============================================
   COOKIE BANNER
   ============================================ */
function initCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    
    if (!banner) return;
    
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
        // Show banner after a short delay
        setTimeout(() => {
            banner.classList.add('active');
        }, 1500);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    document.getElementById('cookieBanner').classList.remove('active');
}

function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    document.getElementById('cookieBanner').classList.remove('active');
}

// Make cookie functions globally available
window.acceptCookies = acceptCookies;
window.rejectCookies = rejectCookies;

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   ROTATING TEXT ANIMATION
   ============================================ */
function initRotatingText() {
    const rotatingText = document.querySelector('.rotating-text-word');
    if (!rotatingText) return;

    const words = [
        'récurrent et prévisible.',
        'automatique et rentable.',
        'qualifié et mesurable.',
        'scalable et performant.',
        'personnalisé et efficace.'
    ];

    let currentIndex = 0;
    const showDuration = 3000; // Afficher 3 secondes
    const transitionDuration = 500; // Transition de 0.5 seconde

    function rotateWord() {
        // Effacer
        rotatingText.classList.add('fade-out');
        
        setTimeout(() => {
            // Changer le texte
            currentIndex = (currentIndex + 1) % words.length;
            rotatingText.textContent = words[currentIndex];
            
            // Réafficher
            rotatingText.classList.remove('fade-out');
            rotatingText.classList.add('fade-in');
            
            setTimeout(() => {
                rotatingText.classList.remove('fade-in');
            }, transitionDuration);
        }, transitionDuration);
    }

    // Démarrer après 2 secondes
    setTimeout(() => {
        setInterval(rotateWord, showDuration + transitionDuration);
    }, 2000);
}
