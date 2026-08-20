/* ==========================================================================
   CNC PURWODADI — Interactive Logic + GSAP Scroll Reveal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── GSAP SCROLL REVEAL SYSTEM ──────────────────────────────────────────
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      // Reveal single elements
      document.querySelectorAll('[data-reveal]').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Stagger children (material cards, portfolio cards)
      document.querySelectorAll('[data-reveal-stagger]').forEach(container => {
        const children = container.children;
        if (children.length === 0) return;

        gsap.fromTo(children,
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.06,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    } else {
      // Reduced motion: just show everything
      document.querySelectorAll('[data-reveal], [data-reveal-stagger] > *').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
  }

  // ── NAVBAR SCROLL BEHAVIOR ─────────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // ── MOBILE MENU ────────────────────────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // ── PRICE ESTIMATOR ────────────────────────────────────────────────────
  const calcMaterial = document.getElementById('calcMaterial');
  const calcMaterialCustom = document.getElementById('calcMaterialCustom');
  const calcLength = document.getElementById('calcLength');
  const calcWidth = document.getElementById('calcWidth');
  const calcComplexity = document.getElementById('calcComplexity');
  const calcComplexityCustom = document.getElementById('calcComplexityCustom');

  const estMaterialName = document.getElementById('estMaterialName');
  const estSize = document.getElementById('estSize');
  const estPrice = document.getElementById('estPrice');
  const btnSendEstimatorWA = document.getElementById('btnSendEstimatorWA');

  const materialRates = {
    'Plat Besi (Iron Plate)': 15,
    'Stainless Steel': 35,
    'ACP (Aluminum Composite)': 20,
    'PVC Board': 18,
    'Akrilik (Acrylic)': 28
  };

  function toggleCustomInput(select, customInput) {
    if (!select || !customInput) return;
    customInput.style.display = select.value === 'custom' ? 'block' : 'none';
  }

  function updateEstimate() {
    if (!calcMaterial || !calcLength || !calcWidth || !calcComplexity) return;

    toggleCustomInput(calcMaterial, calcMaterialCustom);
    toggleCustomInput(calcComplexity, calcComplexityCustom);

    // Material name & rate
    let selectedMatName = calcMaterial.value;
    let baseRate = 20;

    if (calcMaterial.value === 'custom') {
      const customVal = calcMaterialCustom?.value.trim();
      selectedMatName = customVal ? `Custom: ${customVal}` : 'Custom (Ketik Bahan)';
      baseRate = 22;
    } else {
      baseRate = materialRates[selectedMatName] || 20;
    }

    // Complexity
    let complexityMult = 1.0;
    let complexityText = '';

    if (calcComplexity.value === 'custom') {
      complexityMult = 1.3;
      const customVal = calcComplexityCustom?.value.trim();
      complexityText = customVal ? ` (Motif: ${customVal})` : ' (Motif Custom)';
    } else {
      complexityMult = parseFloat(calcComplexity.value) || 1.0;
    }

    const length = parseFloat(calcLength.value) || 0;
    const width = parseFloat(calcWidth.value) || 0;
    const area = length * width;

    let rawPrice = area * baseRate * complexityMult;
    if (area > 0 && rawPrice < 50000) rawPrice = 50000;

    const minEstimate = Math.round(rawPrice * 0.9 / 1000) * 1000;
    const maxEstimate = Math.round(rawPrice * 1.15 / 1000) * 1000;

    const formattedPrice = area > 0
      ? `Rp ${minEstimate.toLocaleString('id-ID')} – Rp ${maxEstimate.toLocaleString('id-ID')}`
      : 'Rp 0';

    if (estMaterialName) estMaterialName.textContent = selectedMatName;
    if (estSize) estSize.textContent = `${length} × ${width} cm (${area.toLocaleString('id-ID')} cm²)`;
    if (estPrice) estPrice.textContent = formattedPrice;

    // WhatsApp link
    if (btnSendEstimatorWA) {
      const nl = encodeURIComponent('\n');
      const message =
        `Halo CNC Purwodadi! Saya tertarik konsultasi/order cutting:${nl}` +
        `• Material: ${selectedMatName}${nl}` +
        `• Ukuran: ${length} cm × ${width} cm (${area} cm²)${nl}` +
        `• Detail Motif: ${complexityText || calcComplexity.options[calcComplexity.selectedIndex]?.text}${nl}` +
        `• Perkiraan Biaya: ${formattedPrice}${nl}${nl}` +
        `Mohon info lebih lanjut dan penawaran resminya. Terima kasih.`;
      btnSendEstimatorWA.href = `https://wa.me/6281234567890?text=${message}`;
    }
  }

  // Bind events
  [calcMaterial, calcMaterialCustom, calcLength, calcWidth, calcComplexity, calcComplexityCustom].forEach(el => {
    if (el) {
      el.addEventListener('input', updateEstimate);
      el.addEventListener('change', updateEstimate);
    }
  });

  updateEstimate();

  // ── PORTFOLIO FILTER & LIGHTBOX ────────────────────────────────────────
  const tabPills = document.querySelectorAll('.tab-pill');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const modalOverlay = document.getElementById('portfolioModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalClose = document.getElementById('modalClose');

  tabPills.forEach(pill => {
    pill.addEventListener('click', () => {
      tabPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      portfolioCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        card.style.display = (filter === 'all' || filter === cat) ? '' : 'none';
      });
    });
  });

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.portfolio-title');
      const category = card.querySelector('.portfolio-cat');

      if (modalImg && img) modalImg.src = img.src;
      if (modalTitle && title) modalTitle.textContent = title.textContent;
      if (modalCategory && category) modalCategory.textContent = category.textContent;
      if (modalOverlay) modalOverlay.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      modalOverlay.classList.remove('active');
    }
  });
});
