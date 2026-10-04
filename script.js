// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation and submission
document.querySelector('.property-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Simple validation
    const requiredFields = ['name', 'email', 'property_type', 'location'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    if (isValid) {
        // Show success message
        alert('Vielen Dank für Ihre Anfrage! Wir werden uns umgehend mit Ihnen in Verbindung setzen.');
        this.reset();
    } else {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Property cards animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe property cards
// document.querySelectorAll('.property-card').forEach(card => {
//     card.style.opacity = '0';
//     card.style.transform = 'translateY(20px)';
//     card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(card);
// });

// Mobile menu toggle (for future implementation)
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '☰';
mobileMenuToggle.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary);
`;

// Add mobile menu styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block !important;
        }
    }
`;
document.head.appendChild(mobileStyles);

// Add current year to footer
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.innerHTML = `&copy; ${new Date().getFullYear()} StadtLandHome Immobilien. Alle Rechte vorbehalten.`;
    }
});

console.log('StadtLandHome Immobilien - Website geladen');
