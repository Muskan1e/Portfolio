/* ==========================================================================
   MUSKAN SHARMA - PORTFOLIO JAVASCRIPT
   Features:
   - Mobile Navigation (Hamburger Menu & Auto Close)
   - Sticky Header & Active Nav Link on Scroll (ScrollSpy)
   - Dark / Light Mode Switcher with LocalStorage
   - Dynamic Typing Effect on Role Text
   - Custom Animated Desktop Cursor
   - Work / Education Tabs Switcher
   - Swiper.js Testimonials Carousel
   - ScrollReveal Animations
   - Scroll-To-Top Button
   - Contact Form Real-time Validation & Feedback
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  // Open menu
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  }

  // Close menu
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    });
  }

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show-menu') && 
        !navMenu.contains(e.target) && 
        !navToggle.contains(e.target)) {
      navMenu.classList.remove('show-menu');
      document.body.style.overflow = '';
    }
  });


  /* ==========================================================================
     2. STICKY HEADER & SCROLL SPY (ACTIVE LINK ON SCROLL)
     ========================================================================== */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const scrollTopBtn = document.getElementById('scroll-top');

  function handleScroll() {
    const scrollY = window.pageYOffset;

    // Sticky header blur effect
    if (scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }

    // Scroll-to-top button visibility
    if (scrollTopBtn) {
      if (scrollY >= 350) {
        scrollTopBtn.classList.add('show-scroll');
      } else {
        scrollTopBtn.classList.remove('show-scroll');
      }
    }

    // ScrollSpy: Highlight current active section link
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active-link');
        } else {
          navItem.classList.remove('active-link');
        }
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger on page load


  /* ==========================================================================
     3. DARK / LIGHT THEME TOGGLE (WITH LOCALSTORAGE)
     ========================================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const selectedTheme = localStorage.getItem('muskan-portfolio-theme');

  // Check saved theme
  if (selectedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) {
      themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');

      if (themeIcon) {
        if (isLight) {
          themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
          localStorage.setItem('muskan-portfolio-theme', 'light');
        } else {
          themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
          localStorage.setItem('muskan-portfolio-theme', 'dark');
        }
      }
    });
  }


  /* ==========================================================================
     4. TYPING EFFECT FOR HERO ROLE TEXT
     ========================================================================== */
  const typingTextElement = document.getElementById('typing-text');
  
  if (typingTextElement) {
    const roles = [
      'Frontend Developer',
      '2nd Year B.Tech CSE Student',
      'Web Enthusiast & Creator',
      'UI/UX Design Explorer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1600;

    function typeWriter() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeoutDuration = isDeleting ? deletingSpeed : typingSpeed;

      // When word is fully typed
      if (!isDeleting && charIndex === currentRole.length) {
        timeoutDuration = pauseTime;
        isDeleting = true;
      } 
      // When word is fully deleted
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutDuration = 400;
      }

      setTimeout(typeWriter, timeoutDuration);
    }

    typeWriter();
  }


  /* ==========================================================================
     5. WORK / EDUCATION TABS SWITCHER
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.timeline');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target');
      const targetContent = document.querySelector(targetSelector);

      // Remove active from all tabs & contents
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Add active to current
      btn.classList.add('active');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });


  /* ==========================================================================
     6. CUSTOM ANIMATED CURSOR (Desktop Only)
     ========================================================================== */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');

  // Only enable on fine pointer devices (desktop/mouse)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (isFinePointer && cursorDot && cursorOutline) {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Position dot directly under mouse
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth animation loop for outline
    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale up cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .stat__card, .project__card, .service__card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
      });
    });
  }


  /* ==========================================================================
     7. SWIPER.JS - TESTIMONIALS CAROUSEL
     ========================================================================== */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials__container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        }
      }
    });
  }


  /* ==========================================================================
     8. SCROLLREVEAL ANIMATIONS
     ========================================================================== */
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: false // Do not repeat animations on scroll up
    });

    // Home Section
    sr.reveal('.home__badge', { delay: 150 });
    sr.reveal('.home__title', { delay: 250 });
    sr.reveal('.home__subtitle', { delay: 350 });
    sr.reveal('.home__description', { delay: 450 });
    sr.reveal('.home__buttons', { delay: 550 });
    sr.reveal('.home__social', { delay: 650 });
    sr.reveal('.home__visual', { origin: 'right', delay: 400 });

    // About Section
    sr.reveal('.about__img-wrapper', { origin: 'left', delay: 200 });
    sr.reveal('.about__data', { origin: 'right', delay: 300 });

    // Projects Section
    sr.reveal('.project__card', { interval: 180 });

    // Work / Timeline Section
    sr.reveal('.work__tabs', { delay: 200 });
    sr.reveal('.timeline__item', { interval: 180, origin: 'left' });

    // Services Section
    sr.reveal('.service__card', { interval: 180 });

    // Testimonials
    sr.reveal('.testimonials__container', { delay: 250 });

    // Contact Section
    sr.reveal('.contact__info', { origin: 'left', delay: 250 });
    sr.reveal('.contact__form-wrapper', { origin: 'right', delay: 300 });

    // Footer
    sr.reveal('.footer__content', { interval: 150 });
  }


  /* ==========================================================================
     9. CONTACT FORM INTERACTIVE VALIDATION & SIMULATION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submit-btn');
  const formAlert = document.getElementById('form-alert');

  // Helper function to validate email regex
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Helper to show field error
  function setError(input, messageId) {
    const group = input.closest('.form__group');
    if (group) {
      group.classList.add('has-error');
    }
  }

  // Helper to clear field error
  function clearError(input) {
    const group = input.closest('.form__group');
    if (group) {
      group.classList.remove('has-error');
    }
  }

  // Clear errors on input
  [nameInput, emailInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        clearError(input);
        if (formAlert) {
          formAlert.style.display = 'none';
        }
      });
    }
  });

  // Handle Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      if (!nameInput.value.trim()) {
        setError(nameInput);
        hasError = true;
      } else {
        clearError(nameInput);
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        setError(emailInput);
        hasError = true;
      } else {
        clearError(emailInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setError(messageInput);
        hasError = true;
      } else {
        clearError(messageInput);
      }

      // If invalid, stop
      if (hasError) {
        return;
      }

      // Simulate sending state
      submitBtn.classList.add('is-submitting');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('is-submitting');
        submitBtn.disabled = false;

        // Show success alert
        if (formAlert) {
          formAlert.className = 'form__alert success';
          formAlert.innerHTML = `
            <i class="ri-checkbox-circle-fill"></i> 
            Thank you, <strong>${nameInput.value.trim()}</strong>! Your message has been sent successfully. I will get back to you soon!
          `;
          formAlert.style.display = 'block';
        }

        // Reset form
        contactForm.reset();

        // Hide alert after 6 seconds
        setTimeout(() => {
          if (formAlert) {
            formAlert.style.display = 'none';
          }
        }, 6000);

      }, 1400);
    });
  }


  /* ==========================================================================
     10. DOWNLOAD CV BUTTON INTERACTION
     ========================================================================== */
  const downloadCvBtn = document.getElementById('download-cv-btn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      const href = downloadCvBtn.getAttribute('href');
      // If still set to default hash link, notify the user nicely
      if (href === '#' || href === '#contact') {
        // Allow smooth scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

});
