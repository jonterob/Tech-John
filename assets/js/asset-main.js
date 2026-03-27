
        (function() {
            // EmailJS Configuration
            const EMAILJS_CONFIG = {
                PUBLIC_KEY: "Q1Db3xO7terlVPf3w",
                SERVICE_ID: "service_v9bijqc",
                TEMPLATE_ID: "template_wszcdnw"
            };

            // Toast notification system 
            const Toast = {
                container: document.getElementById('toast-container'),
                show(message, type = 'info') {
                    const toast = document.createElement('div');
                    toast.className = `toast-custom ${type}`;
                    toast.setAttribute('role', 'alert');
                    toast.setAttribute('aria-live', 'assertive');
                    toast.setAttribute('aria-atomic', 'true');
                    
                    toast.innerHTML = `
                        <span>${message}</span>
                        <button class="toast-close" onclick="this.closest('.toast-custom').remove()" aria-label="Close notification">
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                    `;
                    
                    this.container.appendChild(toast);
                    
                    setTimeout(() => {
                        if (toast.parentNode) {
                            toast.remove();
                        }
                    }, 4000);
                },
                success(m) { this.show(m,'success'); },
                error(m) { this.show(m,'error'); },
                warning(m) { this.show(m,'warning'); },
                info(m) { this.show(m,'info'); }
            };

            // Initialize EmailJS
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            console.log('EmailJS initialized');

            // DOM Ready
            document.addEventListener('DOMContentLoaded', function() {
                // Update current year
                document.getElementById('current-year').textContent = new Date().getFullYear();

                // Navbar scroll effect
                let ticking = false;
                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(() => {
                            document.querySelector('.navbar').classList.toggle('navbar-scrolled', window.scrollY > 50);
                            ticking = false;
                        });
                        ticking = true;
                    }
                });

                // Smooth scrolling for navigation links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        const href = this.getAttribute('href');
                        if (href === '#') return;
                        
                        e.preventDefault();
                        const targetElement = document.querySelector(href);
                        
                        if (targetElement) {
                            const navbarHeight = document.querySelector('.navbar').offsetHeight;
                            const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                            
                            // Close mobile menu
                            const navbarCollapse = document.querySelector('.navbar-collapse');
                            if (navbarCollapse.classList.contains('show')) {
                                bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                            }
                        }
                    });
                });

                // Contact Form
                const contactForm = document.getElementById('contact-form');
                
                contactForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const submitBtn = document.getElementById('submit-btn');
                    const btnText = document.getElementById('btn-text');
                    const btnSpinner = document.getElementById('btn-spinner');
                    
                    // Get form values
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const subject = document.getElementById('subject').value.trim();
                    const message = document.getElementById('message').value.trim();
                    
                    // Validation
                    if (!name || !email || !subject || !message) {
                        Toast.error('Please fill in all required fields');
                        return;
                    }
                    
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        Toast.error('Please enter a valid email address');
                        return;
                    }
                    
                    // Loading state
                    submitBtn.disabled = true;
                    btnSpinner.classList.remove('d-none');
                    btnText.textContent = 'Sending...';
                    
                    // PARAMETERS - name, subject, message, email
                    const templateParams = {
                        name: name,
                        subject: subject,
                        message: message,
                        email: email
                    };
                    
                    console.log('Sending with params:', templateParams);
                    
                    try {
                        // Send email using EmailJS 
                        const response = await emailjs.send(
                            EMAILJS_CONFIG.SERVICE_ID,
                            EMAILJS_CONFIG.TEMPLATE_ID,
                            templateParams
                        );
                        
                        console.log('EmailJS success:', response);
                        
                        if (response.status === 200) {
                            Toast.success('Message sent successfully! I\'ll respond within 24 hours.');
                            contactForm.reset();
                        } else {
                            throw new Error('Failed to send email');
                        }
                        
                    } catch (error) {
                        console.error('EmailJS error:', error);
                        
                        // Show user-friendly error
                        Toast.error('Failed to send message. Please email me directly at jonterob756@gmail.com');
                        
                    } finally {
                        // Reset button state
                        submitBtn.disabled = false;
                        btnSpinner.classList.add('d-none');
                        btnText.textContent = 'Send Message';
                    }
                });
            });
        })();
