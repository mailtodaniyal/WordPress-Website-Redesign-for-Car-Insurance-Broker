        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');

        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ?
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                if (this.getAttribute('href') === '#') return;

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Testimonials Carousel Animation
        document.addEventListener('DOMContentLoaded', function () {
            const testimonials = document.querySelectorAll('.testimonial-card');

            testimonials.forEach((testimonial, index) => {
                // Add animation delay based on index
                testimonial.style.animationDelay = `${index * 0.1}s`;

                // Add hover effect
                testimonial.addEventListener('mouseenter', () => {
                    testimonial.style.transform = 'translateY(-10px)';
                    testimonial.style.boxShadow = '0 15px 40px rgba(0, 86, 179, 0.15)';
                });

                testimonial.addEventListener('mouseleave', () => {
                    testimonial.style.transform = 'translateY(0)';
                    testimonial.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.05)';
                });
            });

            // Animate on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            testimonials.forEach(testimonial => {
                testimonial.style.opacity = '0';
                testimonial.style.transform = 'translateY(20px)';
                testimonial.style.transition = 'all 0.5s ease';
                observer.observe(testimonial);
            });
        });

        // Sticky Header on Scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 50);
        });

        // Form Submission
        const quoteForm = document.getElementById('insuranceQuoteForm');
        if (quoteForm) {
            quoteForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Here you would normally handle form submission via AJAX
                alert('Thank you for your request! We will contact you shortly with your quote.');
                quoteForm.reset();
            });
        }

        // Animation on Scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.feature-card, .service-card, .blog-card, .stat-item');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;

                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animated elements
        document.querySelectorAll('.feature-card, .service-card, .blog-card, .stat-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
