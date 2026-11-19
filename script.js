/**
 * ANIMA — Haute Joaillerie
 * PowerPoint & Bottega Veneta Layer Slide Deck Architecture
 * On scroll down, subsequent layers slide smoothly UP over the previous layer.
 * On scroll up, the current layer slides back DOWN to reveal the prior layer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const body = document.body;
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');
  const currentFrameNum = document.getElementById('currentFrameNum');
  const currentFrameTag = document.getElementById('currentFrameTag');

  // Slide Deck
  const slides = document.querySelectorAll('.ppt-slide');
  const pageDots = document.querySelectorAll('.page-dot');
  const totalSlides = slides.length;
  let currentSlideIndex = 0;
  let isAnimating = false;
  let wheelAccumulator = 0;
  let wheelTimeout = null;

  // Navigation & Search Elements
  const menuToggle = document.getElementById('menuToggle');
  const searchToggle = document.getElementById('searchToggle');
  const headerInquireBtn = document.getElementById('headerInquireBtn');
  const brandLogo = document.getElementById('brandLogo');
  const heroExploreLink = document.getElementById('heroExploreLink');
  
  const searchModal = document.getElementById('searchModal');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const quickTags = document.querySelectorAll('.quick-tag');

  const navOverlay = document.getElementById('navOverlay');
  const navBackdrop = document.getElementById('navBackdrop');
  const navCloseBtn = document.getElementById('navCloseBtn');
  const navItems = document.querySelectorAll('.nav-item');
  const openCommissionFromNav = document.getElementById('openCommissionFromNav');

  // Dossier Drawer
  const dossierDrawer = document.getElementById('dossierDrawer');
  const dossierBackdrop = document.getElementById('dossierBackdrop');
  const dossierClose = document.getElementById('dossierClose');
  const dossierRef = document.getElementById('dossierRef');
  const dossierTitle = document.getElementById('dossierTitle');
  const dossierCategory = document.getElementById('dossierCategory');
  const dossierImg = document.getElementById('dossierImg');
  const dossierCoord = document.getElementById('dossierCoord');
  const dossierMetal = document.getElementById('dossierMetal');
  const dossierGem = document.getElementById('dossierGem');
  const dossierAnatomy = document.getElementById('dossierAnatomy');
  const dossierProvenance = document.getElementById('dossierProvenance');
  const dossierQuote = document.getElementById('dossierQuote');
  const dossierInquireBtn = document.getElementById('dossierInquireBtn');
  const dossierLoupeBtn = document.getElementById('dossierLoupeBtn');

  // Loupe Modal
  const loupeModal = document.getElementById('loupeModal');
  const loupeClose = document.getElementById('loupeClose');
  const loupeImg = document.getElementById('loupeImg');
  const loupeViewport = document.getElementById('loupeViewport');

  // Commission Modal
  const commissionModal = document.getElementById('commissionModal');
  const commissionBackdrop = document.getElementById('commissionBackdrop');
  const commissionClose = document.getElementById('commissionClose');
  const commissionForm = document.getElementById('commissionForm');
  const formSuccess = document.getElementById('formSuccess');
  const commArtifactSelect = document.getElementById('commArtifact');
  const triggerCommissionFromFrame6 = document.getElementById('triggerCommissionFromFrame6');
  const backToTopSlide = document.getElementById('backToTopSlide');

  // Slide Meta Info (5 Layers)
  const slideDeckMeta = [
    { num: '01', tag: 'THE THRESHOLD' },
    { num: '02', tag: 'THE ARTIFACT' },
    { num: '03', tag: 'KINETIC CRAFT' },
    { num: '04', tag: 'BESPOKE DISPLAY' },
    { num: '05', tag: 'BESPOKE COMMISSIONS' }
  ];

  // Artifact Database
  const ARTIFACTS = {
    'an-00': {
      ref: 'REF. AN-00',
      title: 'THE ATRIAL STUD',
      category: 'ANIMA // DIAGNOSTIC PRECISION',
      img: 'assets/images/editorial-physician-earring.jpg',
      axis: 'CONTOUR: 9.4mm // HELIX STABILITY AXIS',
      metal: 'Cold-Forged 950 Platinum & Grade 5 Surgical Titanium Stem',
      gem: 'Unheated Cushion Ceylon Sapphire with Baguette Diamond Halo',
      anatomy: 'Weight-balanced to eliminate pressure necrosis during extended stethoscope and headset use.',
      provenance: 'Atelier ANIMA, Geneva & Place Vendôme. Private medical commission.',
      quote: '"Discreet elegance that commands reverence without speaking a single syllable."',
      selectVal: 'ref-an-00'
    },
    'an-01': {
      ref: 'REF. AN-01',
      title: 'THE PHALANX RING',
      category: 'ANIMA // ANATOMICAL PERMANENCE',
      img: 'assets/images/hero-physician-ring.jpg',
      axis: 'AXIS: 14.82mm // PROXIMAL DORSAL ARC',
      metal: 'Cold-Forged 950 Platinum, 18k Yellow Gold & Surgical Titanium Core',
      gem: '2.41ct Unheated D/FL Flawless Cushion Cut Brilliant',
      anatomy: 'Contoured to mirror the proximal phalanx, preserving surgical tactile acuity and effortless latex glove donning.',
      provenance: 'Atelier ANIMA, Place Vendôme & Geneva. Strictly limited edition.',
      quote: '"The weight on the hand does not restrict; it anchors the mind through fifteen hours in theatre."',
      selectVal: 'ref-an-01'
    },
    'pn-04': {
      ref: 'REF. AN-04',
      title: 'THE ARTERIAL TORQUE',
      category: 'ANIMA // KINETIC METALLURGY',
      img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1600&q=90',
      axis: 'TOLERANCE: 0.02mm // MICRO-PAVÉ VECTOR',
      metal: 'Cold-Forged 950 Platinum & Hyper-Elastic Titanium Spring Matrix',
      gem: '4.18ct D-E VVS Flawless Brilliant Baguette & Pavé Setting',
      anatomy: 'Engineered to flex naturally with thoracic respiratory expansion and vascular cadence.',
      provenance: 'Atelier ANIMA, Place Vendôme & Geneva. Bespoke artisan creation.',
      quote: '"The weight of existence transmuted into pure, luminous permanence."',
      selectVal: 'ref-pn-04'
    },
    'an-08': {
      ref: 'REF. AN-08',
      title: 'THE CARPAL CADENCE',
      category: 'ANIMA // KINETIC ERGONOMICS',
      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=90',
      axis: 'FLEXION: 18.2mm // CARPAL RETINACULUM BIAS',
      metal: 'Forged Platinum-Osmium Alloy with Matte Chiaroscuro Texture',
      gem: '3.08ct Flawless Emerald-Cut Diamond with Laser-Assayed Symmetry',
      anatomy: 'Calibrated to the flexor retinaculum, cushioning wrist hyperextension during microsurgical suture placement.',
      provenance: 'Atelier ANIMA, Place Vendôme. Private atelier allocation.',
      quote: '"For the hands that stitch time back into human flesh."',
      selectVal: 'ref-an-08'
    }
  };

  let currentArtifactKey = 'an-01';

  // ==========================================
  // 1. PRELOADER & INITIAL ANIMATION
  // ==========================================
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 25) + 20;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      if (preloaderBar) preloaderBar.style.width = '100%';
      setTimeout(() => {
        body.classList.remove('is-loading');
        applySlideState(0, true);
      }, 400);
    } else {
      if (preloaderBar) preloaderBar.style.width = `${progress}%`;
    }
  }, 90);

  // ==========================================
  // 2. PPT & BOTTEGA VENETA LAYER CONTROLLER
  // ==========================================
  function applySlideState(targetIdx, immediate = false) {
    slides.forEach((slide, idx) => {
      slide.style.transition = immediate ? 'none' : 'transform 0.95s cubic-bezier(0.65, 0, 0.35, 1), filter 0.95s ease, opacity 0.5s ease';

      if (idx < targetIdx) {
        // Layers below the active one: locked in place, scaled down slightly for Bottega couture depth
        slide.classList.remove('is-active', 'is-future');
        slide.classList.add('is-past');
      } else if (idx === targetIdx) {
        // Active layer: slides fully into view at translateY(0%)
        slide.classList.remove('is-past', 'is-future');
        slide.classList.add('is-active');
      } else {
        // Future layers: parked below at translateY(100%) waiting to slide up like a PPT layer
        slide.classList.remove('is-past', 'is-active');
        slide.classList.add('is-future');
      }
    });

    // Update Header Indicator (if present)
    if (currentFrameNum && slideDeckMeta[targetIdx]) {
      currentFrameNum.textContent = slideDeckMeta[targetIdx].num;
    }
    if (currentFrameTag && slideDeckMeta[targetIdx]) {
      currentFrameTag.textContent = slideDeckMeta[targetIdx].tag;
    }

    // Update Side Pagination Dots
    pageDots.forEach((dot, i) => {
      if (i === targetIdx) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    // Update Navigation List
    navItems.forEach((item, i) => {
      if (i === targetIdx) item.classList.add('active');
      else item.classList.remove('active');
    });

    currentSlideIndex = targetIdx;
  }

  function goToSlide(targetIdx) {
    if (targetIdx === currentSlideIndex || isAnimating) return;
    if (targetIdx < 0 || targetIdx >= totalSlides) return;

    isAnimating = true;
    applySlideState(targetIdx);
    playChimeSound(420 + targetIdx * 60);

    setTimeout(() => {
      isAnimating = false;
    }, 950);
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }

  // --- Wheel Event Listener (PPT Layer scroll) ---
  window.addEventListener('wheel', (e) => {
    // If a modal or drawer is open, let user scroll within the drawer
    if (dossierDrawer.classList.contains('is-open') || 
        commissionModal.classList.contains('is-open') || 
        navOverlay.classList.contains('is-open') ||
        loupeModal.classList.contains('is-open')) {
      return;
    }

    e.preventDefault();

    if (isAnimating) return;

    wheelAccumulator += e.deltaY;
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => { wheelAccumulator = 0; }, 200);

    // Threshold for wheel transition
    if (Math.abs(wheelAccumulator) >= 30) {
      if (wheelAccumulator > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      wheelAccumulator = 0;
    }
  }, { passive: false });

  // --- Touch Swipe Listener (Mobile PPT Layer swipe) ---
  let touchStartY = 0;
  let touchStartX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (dossierDrawer.classList.contains('is-open') || 
        commissionModal.classList.contains('is-open') || 
        navOverlay.classList.contains('is-open')) {
      return;
    }

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (Math.abs(deltaY) > 45) {
      if (deltaY > 0) {
        nextSlide(); // Swipe Up -> Next Layer
      } else {
        prevSlide(); // Swipe Down -> Prev Layer
      }
    }
  }, { passive: true });

  // --- Keyboard Navigation ---
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (['ArrowDown', 'PageDown', 'j', ' '].includes(e.key)) {
      e.preventDefault();
      nextSlide();
    } else if (['ArrowUp', 'PageUp', 'k'].includes(e.key)) {
      e.preventDefault();
      prevSlide();
    }
  });

  // --- Side Pagination Dot Clicks ---
  pageDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-slide'), 10);
      goToSlide(target);
    });
  });

  // --- Scroll Cue in Hero ---
  const scrollCue = document.querySelector('.curtain-scroll-cue');
  if (scrollCue) {
    scrollCue.style.cursor = 'pointer';
    scrollCue.addEventListener('click', () => nextSlide());
  }

  // --- Back to Top Link in Footer ---
  if (backToTopSlide) {
    backToTopSlide.addEventListener('click', () => goToSlide(0));
  }

  // ==========================================
  // 3. BOTTEGA VENETA ACTION LINKS & BRAND LOGO
  // ==========================================
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(0);
    });
  }

  if (heroExploreLink) {
    heroExploreLink.addEventListener('click', (e) => {
      e.preventDefault();
      goToSlide(1);
    });
  }

  if (headerInquireBtn) {
    headerInquireBtn.addEventListener('click', () => openCommissionModal());
  }

  // Bottom text overlay action links ("Discover piece", "Discover craft")
  document.querySelectorAll('.bv-action-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const artifactKey = link.getAttribute('data-artifact');
      if (artifactKey) {
        e.preventDefault();
        openDossier(artifactKey);
      }
    });
  });

  // Hotspots / Legacy Card compatibility
  const hotspots = document.querySelectorAll('.quiet-tag-hotspot');
  hotspots.forEach(hotspot => {
    const marker = hotspot.querySelector('.pulse-marker');
    if (marker) {
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = hotspot.classList.contains('is-active');
        hotspots.forEach(h => h.classList.remove('is-active'));
        if (!isActive) hotspot.classList.add('is-active');
      });
    }
  });

  document.querySelectorAll('.card-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const artifactKey = btn.getAttribute('data-artifact');
      openDossier(artifactKey);
    });
  });

  document.querySelectorAll('.card-commission-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetInquire = btn.getAttribute('data-inquire');
      openCommissionModal(targetInquire);
    });
  });

  // ==========================================
  // 4. DOSSIER DRAWER LOGIC
  // ==========================================
  function openDossier(key) {
    const data = ARTIFACTS[key];
    if (!data) return;

    currentArtifactKey = key;
    dossierRef.textContent = data.ref;
    dossierTitle.textContent = data.title;
    dossierCategory.textContent = data.category;
    dossierImg.src = data.img;
    dossierCoord.textContent = data.axis;
    dossierMetal.textContent = data.metal;
    dossierGem.textContent = data.gem;
    dossierAnatomy.textContent = data.anatomy;
    dossierProvenance.textContent = data.provenance;
    dossierQuote.textContent = data.quote;

    dossierDrawer.classList.add('is-open');
    dossierDrawer.setAttribute('aria-hidden', 'false');
    playChimeSound(440);
  }

  function closeDossier() {
    dossierDrawer.classList.remove('is-open');
    dossierDrawer.setAttribute('aria-hidden', 'true');
  }

  if (dossierClose) dossierClose.addEventListener('click', closeDossier);
  if (dossierBackdrop) dossierBackdrop.addEventListener('click', closeDossier);

  if (dossierInquireBtn) {
    dossierInquireBtn.addEventListener('click', () => {
      const data = ARTIFACTS[currentArtifactKey];
      closeDossier();
      setTimeout(() => {
        openCommissionModal(data ? data.title : null);
      }, 300);
    });
  }

  // ==========================================
  // 5. MACRO LOUPE ZOOM INSPECTION
  // ==========================================
  if (dossierLoupeBtn) {
    dossierLoupeBtn.addEventListener('click', () => {
      const data = ARTIFACTS[currentArtifactKey];
      if (data && loupeImg) {
        loupeImg.src = data.img;
        loupeModal.classList.add('is-open');
        loupeModal.setAttribute('aria-hidden', 'false');
      }
    });
  }

  if (loupeClose) {
    loupeClose.addEventListener('click', () => {
      loupeModal.classList.remove('is-open');
      loupeModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (loupeViewport) {
    loupeViewport.addEventListener('mousemove', (e) => {
      const rect = loupeViewport.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const moveX = (x - 0.5) * -150;
      const moveY = (y - 0.5) * -150;
      loupeImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });
  }

  // ==========================================
  // 6. PRIVATE COMMISSION MODAL
  // ==========================================
  function openCommissionModal(presetTitle = null) {
    commissionModal.classList.add('is-open');
    commissionModal.setAttribute('aria-hidden', 'false');
    formSuccess.classList.remove('is-visible');

    if (presetTitle && commArtifactSelect) {
      if (presetTitle.includes('Phalanx')) commArtifactSelect.value = 'ref-an-01';
      else if (presetTitle.includes('Arterial')) commArtifactSelect.value = 'ref-pn-04';
      else if (presetTitle.includes('Carpal')) commArtifactSelect.value = 'ref-an-08';
    }
    playChimeSound(520);
  }

  function closeCommissionModal() {
    commissionModal.classList.remove('is-open');
    commissionModal.setAttribute('aria-hidden', 'true');
  }

  if (commissionClose) commissionClose.addEventListener('click', closeCommissionModal);
  if (commissionBackdrop) commissionBackdrop.addEventListener('click', closeCommissionModal);
  if (triggerCommissionFromFrame6) {
    triggerCommissionFromFrame6.addEventListener('click', () => openCommissionModal());
  }
  if (openCommissionFromNav) {
    openCommissionFromNav.addEventListener('click', () => {
      closeNav();
      setTimeout(() => openCommissionModal(), 300);
    });
  }

  if (commissionForm) {
    commissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitCommission');
      submitBtn.textContent = 'ENCRYPTING & TRANSMITTING...';
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        submitBtn.textContent = 'TRANSMIT CONFIDENTIAL INQUIRY';
        submitBtn.style.opacity = '1';
        formSuccess.classList.add('is-visible');
        playChimeSound(880);
      }, 1200);
    });
  }

  // Video Switcher removed

  // ==========================================
  // 7. SEARCH MODAL (CATALOGUE RAISONNÉ)
  // ==========================================
  function openSearch() {
    if (searchModal) {
      searchModal.classList.add('is-open');
      searchModal.setAttribute('aria-hidden', 'false');
      if (searchInput) {
        searchInput.value = '';
        renderSearchResults('');
        setTimeout(() => searchInput.focus(), 150);
      }
    }
  }

  function closeSearch() {
    if (searchModal) {
      searchModal.classList.remove('is-open');
      searchModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (searchToggle) searchToggle.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = (query || '').toLowerCase().trim();
    searchResults.innerHTML = '';

    const items = [
      { key: 'an-01', slide: 1, title: 'Ref. AN-01 // The Phalanx Ring', sub: 'Platinum 950 & Titanium Core • 2.41ct D/FL Flawless Cushion Brilliant' },
      { key: 'pn-04', slide: 2, title: 'Ref. AN-04 // The Arterial Torque', sub: 'Cold-Forged Platinum & Hyper-Elastic Titanium Matrix • 4.18ct Diamond Matrix' },
      { key: 'an-08', slide: 3, title: 'Ref. AN-08 // The Carpal Cadence', sub: 'Forged Platinum-Osmium Alloy • 3.08ct Emerald-Cut Solitaire' },
      { key: 'comm', slide: 4, title: 'Bespoke Atelier Commission', sub: 'Private allocation tailored to surgeon\'s anatomical metrics & clinical discipline' }
    ];

    const filtered = q ? items.filter(it => it.title.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q)) : items;

    filtered.forEach(it => {
      const itemEl = document.createElement('div');
      itemEl.className = 'search-item';
      itemEl.innerHTML = `
        <div class="search-item-info">
          <span class="search-item-title">${it.title}</span>
          <span class="search-item-sub">${it.sub}</span>
        </div>
        <span class="search-item-arrow">→</span>
      `;
      itemEl.addEventListener('click', () => {
        closeSearch();
        goToSlide(it.slide);
        if (it.key === 'comm') {
          setTimeout(() => openCommissionModal(), 650);
        } else {
          setTimeout(() => openDossier(it.key), 650);
        }
      });
      searchResults.appendChild(itemEl);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = q;
        renderSearchResults(q);
      }
    });
  });

  // ==========================================
  // 8. NAVIGATION / INDEX OVERLAY
  // ==========================================
  function openNav() {
    navOverlay.classList.add('is-open');
    playChimeSound(380);
  }

  function closeNav() {
    navOverlay.classList.remove('is-open');
  }

  if (menuToggle) menuToggle.addEventListener('click', openNav);
  if (navCloseBtn) navCloseBtn.addEventListener('click', closeNav);
  if (navBackdrop) navBackdrop.addEventListener('click', closeNav);

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = parseInt(item.getAttribute('data-slide-target'), 10);
      closeNav();
      setTimeout(() => {
        goToSlide(target);
      }, 350);
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
      closeSearch();
      closeDossier();
      closeCommissionModal();
      if (loupeModal && loupeModal.classList.contains('is-open')) {
        loupeModal.classList.remove('is-open');
      }
    }
  });

  function playChimeSound() {
    // Pulse sound removed
  }
});
