// Smooth scrolling with analytics tracking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const targetName = this.getAttribute('href').replace('#', '');
        
        // Track navigation clicks in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'navigation_click', {
                'event_category': 'Navigation',
                'event_label': targetName,
                'value': 1
            });
        }
        
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission with analytics tracking
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Don't prevent default - let form submit to Formspree
    // But track the event first
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };
    
    // Track form submission in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
            'event_category': 'Contact',
            'event_label': formData.interest,
            'value': 1
        });
    }
    
    console.log('Form submitted:', formData);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(0, 0, 0, 0.98)';
        navLinks.style.padding = '2rem';
        navLinks.style.gap = '1.5rem';
        navLinks.style.borderTop = '1px solid var(--border-color)';
    }
});

// Close mobile menu on link click
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu-btn')) {
        navLinks.style.display = 'none';
    }
});

// Track scroll depth for analytics
let scrollDepthTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (typeof gtag !== 'undefined') {
        if (scrollPercent >= 25 && !scrollDepthTracked[25]) {
            gtag('event', 'scroll_depth', {
                'event_category': 'Engagement',
                'event_label': '25%',
                'value': 25
            });
            scrollDepthTracked[25] = true;
        }
        if (scrollPercent >= 50 && !scrollDepthTracked[50]) {
            gtag('event', 'scroll_depth', {
                'event_category': 'Engagement',
                'event_label': '50%',
                'value': 50
            });
            scrollDepthTracked[50] = true;
        }
        if (scrollPercent >= 75 && !scrollDepthTracked[75]) {
            gtag('event', 'scroll_depth', {
                'event_category': 'Engagement',
                'event_label': '75%',
                'value': 75
            });
            scrollDepthTracked[75] = true;
        }
        if (scrollPercent >= 100 && !scrollDepthTracked[100]) {
            gtag('event', 'scroll_depth', {
                'event_category': 'Engagement',
                'event_label': '100%',
                'value': 100
            });
            scrollDepthTracked[100] = true;
        }
    }
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.querySelector('span')?.textContent || this.textContent;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'event_category': 'CTA',
                'event_label': buttonText.trim(),
                'value': 1
            });
        }
    });
});

// Track time on page
let startTime = new Date().getTime();
window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((new Date().getTime() - startTime) / 1000); // in seconds
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': 'Total Time',
            'value': timeSpent
        });
    }
});
