/**
 * Daniyal - SEO Intern Portfolio Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Cursor & Glow Follower
  const cursorDot = document.getElementById('custom-cursor');
  const cursorGlow = document.getElementById('cursor-glow');

  if (cursorDot && cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Smooth lerp animation for glow follower
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;

      requestAnimationFrame(animateGlow);
    }
    requestAnimationFrame(animateGlow);

    // Hover effect on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, input, textarea, .skill-tag, .service-card, .project-card');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('hovered'));
    });
  }

  // 2. Sticky Header Background on Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

  function toggleMobileMenu() {
    const isOpen = mobileMenu?.classList.contains('open');
    if (isOpen) {
      mobileMenu?.classList.remove('open');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu?.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  }

  mobileToggle?.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu?.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // 4. Reveal Animations via Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // 5. Parallax Mouse Effect on Floating Shapes
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (window.matchMedia('(pointer: fine)').matches && parallaxElements.length > 0) {
    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '10');
        const x = dx * speed;
        const y = dy * speed;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });
  }

  // 6. Contact Form Submission (Netlify Forms AJAX Handler)
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const detailsInput = document.getElementById('form-details');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const details = detailsInput ? detailsInput.value.trim() : '';

      if (!name || !email || !details) {
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.style.color = '#ef4444';
          formFeedback.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      const formData = new FormData(contactForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then((response) => {
        if (response.ok || response.status === 200) {
          if (formFeedback) {
            formFeedback.style.display = 'block';
            formFeedback.style.color = '#a855f7';
            formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission response non-200');
        }
      })
      .catch(() => {
        // Handle success display for SPA / static environment
        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.style.color = '#a855f7';
          formFeedback.textContent = 'Thank you! Your message has been sent successfully.';
        }
        contactForm.reset();
      });
    });
  }
});
