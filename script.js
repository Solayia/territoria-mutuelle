/* ============================================
   TERRITORIA Mutuelle — Premium JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header scroll effect ---- */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---- Mobile menu ---- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
      menuToggle.setAttribute('aria-label',
        nav.classList.contains('open') ? 'Fermer le menu' : 'Ouvrir le menu'
      );
    });

    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        menuToggle.classList.remove('open');
        nav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Scroll Reveal ---- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ---- Animated Counter ---- */
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0) {
    const formatNumber = (num) => {
      if (num >= 1000) {
        return '+' + num.toLocaleString('fr-FR');
      }
      return '+' + num;
    };

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 2000;
      const start = performance.now();
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const current = Math.round(easedProgress * target);
        el.textContent = formatNumber(current);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => counterObserver.observe(c));
  }

  /* ---- Accordion (Qui sommes-nous page) ---- */
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      item.closest('.accordion').querySelectorAll('.accordion-item').forEach(sibling => {
        sibling.classList.remove('active');
        const siblingBody = sibling.querySelector('.accordion-body');
        if (siblingBody) siblingBody.style.maxHeight = null;
        const siblingBtn = sibling.querySelector('.accordion-header');
        if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---- Accordion (Nos missions — trigger variant) ---- */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('open');

      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-item').forEach(sibling => {
          sibling.classList.remove('open');
          const sibContent = sibling.querySelector('.accordion-content');
          if (sibContent) sibContent.style.maxHeight = null;
          const sibTrigger = sibling.querySelector('.accordion-trigger');
          if (sibTrigger) sibTrigger.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---- Contact Form ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nom = contactForm.querySelector('#nom');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      let valid = true;

      [nom, email, message].forEach(field => {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#C8102E';
          valid = false;
        } else if (field) {
          field.style.borderColor = '';
        }
      });

      if (email && email.value && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.style.borderColor = '#C8102E';
        valid = false;
      }

      if (!valid) return;

      // Site statique : pas de back-end. On ouvre le logiciel de messagerie
      // pré-rempli (mailto:). Aucun "message envoyé" n'est affiché tant que
      // l'utilisateur n'a pas réellement envoyé son e-mail.
      const val = (id) => {
        const el = contactForm.querySelector(id);
        return el ? el.value.trim() : '';
      };
      const objetSel = contactForm.querySelector('#objet');
      const objet = (objetSel && objetSel.value)
        ? objetSel.options[objetSel.selectedIndex].text
        : 'Demande';
      const lines = [
        'Nom et prénom : ' + val('#nom'),
        'Email : ' + val('#email'),
        val('#telephone') ? 'Téléphone : ' + val('#telephone') : null,
        val('#collectivite') ? 'Collectivité : ' + val('#collectivite') : null,
        val('#fonction') ? 'Fonction : ' + val('#fonction') : null,
        'Objet : ' + objet,
        '',
        val('#message')
      ].filter((x) => x !== null);
      const mailto = 'mailto:prevention@territoria-mutuelle.org'
        + '?subject=' + encodeURIComponent('[Site TERRITORIA] ' + objet)
        + '&body=' + encodeURIComponent(lines.join('\n'));

      const note = document.getElementById('formSuccess');
      if (note) note.classList.add('show');
      window.location.href = mailto;
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
