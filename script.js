/* ============================================
   Territoria Mutuelle — Shared JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. Mobile Menu Toggle
     ------------------------------------------ */
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    // Toggle mobile menu on burger click
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      document.body.style.overflow = navLinks.classList.contains('nav-active') ? 'hidden' : '';
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
        document.body.style.overflow = '';
      });
    });
  }

  /* ------------------------------------------
     2. Navbar Scroll Detection
     ------------------------------------------ */
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');

  if (navbar) {
    const heroHeight = hero ? hero.offsetHeight : 0;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      // Add .scrolled class after 50px of scroll
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Switch dark navbar to light once past the hero section
      if (heroHeight > 0) {
        if (scrollY > heroHeight) {
          navbar.classList.remove('navbar-dark');
          navbar.classList.add('navbar-light');
        } else {
          navbar.classList.remove('navbar-light');
          navbar.classList.add('navbar-dark');
        }
      }
    }, { passive: true });
  }

  /* ------------------------------------------
     3. Scroll Reveal (IntersectionObserver)
     ------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealElements.length > 0) {
    // Apply the waiting state to each element before it enters the viewport
    revealElements.forEach((el) => {
      if (el.classList.contains('reveal')) {
        el.classList.add('reveal-waiting');
      } else if (el.classList.contains('reveal-left')) {
        el.classList.add('reveal-left-waiting');
      } else if (el.classList.contains('reveal-right')) {
        el.classList.add('reveal-right-waiting');
      }
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Replace -waiting class with -visible class to trigger the animation
          if (el.classList.contains('reveal-waiting')) {
            el.classList.remove('reveal-waiting');
            el.classList.add('reveal-visible');
          } else if (el.classList.contains('reveal-left-waiting')) {
            el.classList.remove('reveal-left-waiting');
            el.classList.add('reveal-left-visible');
          } else if (el.classList.contains('reveal-right-waiting')) {
            el.classList.remove('reveal-right-waiting');
            el.classList.add('reveal-right-visible');
          }

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-60px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ------------------------------------------
     4. Counter Animation
     ------------------------------------------ */
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0) {
    /**
     * Animate a counter from 0 to its target value using cubic easing.
     * Supports optional data-prefix and data-suffix attributes.
     */
    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000;
      let startTime = null;

      // Cubic ease-out: decelerating curve for a natural feel
      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const currentValue = Math.floor(easedProgress * target);

        el.textContent = `${prefix}${currentValue.toLocaleString('fr-FR')}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  /* ------------------------------------------
     5. Cookie Consent Banner
     ------------------------------------------ */
  const cookieBanner = document.querySelector('.cookie-banner');

  if (cookieBanner) {
    const consentValue = localStorage.getItem('cookie-consent');

    if (!consentValue) {
      // Show the banner after a short delay for better UX
      setTimeout(() => {
        cookieBanner.classList.remove('cookie-hidden');
      }, 1500);
    }

    const acceptBtn = cookieBanner.querySelector('.cookie-accept');
    const rejectBtn = cookieBanner.querySelector('.cookie-reject');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        cookieBanner.classList.add('cookie-hidden');
      });
    }

    if (rejectBtn) {
      rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'rejected');
        cookieBanner.classList.add('cookie-hidden');
      });
    }
  }

  /* ------------------------------------------
     6. Smooth Scroll for Anchor Links
     ------------------------------------------ */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // Ignore empty anchors (#) that are not linked to a section
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
