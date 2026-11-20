/**
 * ANIMA / PNEUMA — Haute Joaillerie (PEJ)
 * Website UI/UX & Visual Design Specification (Draft 2)
 * Implementation of Bottega Veneta Curtain Overlays, The Ordinary Underline Hover,
 * 2-Column Luxury Collection Gallery, Fullscreen Interactive Loupe, and Size Guide.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. PRODUCT ARCHIVE DATABASE (Conceived for the Healer's Hand)
  // =========================================================================
  const PRODUCTS = {
    'soft-knot-ring': {
      id: 'soft-knot-ring',
      ref: 'REF. AN-01',
      name: 'Soft Knot Ring',
      category: 'Rings',
      colorName: 'Yellow Gold 18K',
      macroImg: 'assets/images/ring-soft-knot-macro.jpg',
      modelImg: 'assets/images/ring-soft-knot-model.jpg',
      macroLabel: 'Continuous Knot Sculpture & 18K Gold Bevel',
      modelLabel: 'Model Styled as Physician // Surgical Attire',
      angles: [
        'assets/images/ring-soft-knot-macro.jpg',
        'assets/images/ring-soft-knot-model.jpg',
        'assets/images/hero-physician-ring.jpg',
        'assets/images/ring-sardine-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum', color: '#DEE2E6' },
        { name: 'French Gray Patina', color: '#CED4DA' },
        { name: 'Surgical Grade 5 Titanium', color: '#A7AFB6' },
        { name: 'Anti-Flash White Finish', color: '#E9ECEF' }
      ],
      sizes: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
      defaultSize: '12',
      anatomy: "Contoured to mirror the proximal phalanx, preserving surgical tactile acuity and effortless latex/nitrile glove donning during extended 12-hour surgical procedures.",
      craft: "Cold-forged in Geneva from 100% recycled 18K gold. Non-reactive metallurgical composition resistant to surgical scrub solutions, chlorhexidine, and ultrasonic autoclave sterilization.",
      quote: '"The weight on the hand does not restrict; it anchors the mind through fifteen hours in theatre."'
    },
    'sea-coral-ring': {
      id: 'sea-coral-ring',
      ref: 'REF. AN-02',
      name: 'Sea Coral Ring',
      category: 'Rings',
      colorName: 'Cold-Forged 950 Platinum & Satin Patina',
      macroImg: 'assets/images/ring-sardine-macro.jpg',
      modelImg: 'assets/images/ring-sardine-model.jpg',
      macroLabel: 'Organic Micro-Ridge Architecture',
      modelLabel: 'Anatomical Profile on Healer’s Hand',
      angles: [
        'assets/images/ring-sardine-macro.jpg',
        'assets/images/ring-sardine-model.jpg',
        'assets/images/ring-soft-knot-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum', color: '#DEE2E6' },
        { name: 'Surgical Titanium Patina', color: '#A7AFB6' }
      ],
      sizes: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      defaultSize: '11',
      anatomy: "Sculptural organic ridges inspired by osteological trabeculae, calibrated to provide subtle sensory grounding during tense diagnostic intervals.",
      craft: "Individually textured by Master Goldsmiths using hand-chisels, sealed with a micro-satin finish that patinas gracefully over decades.",
      quote: '"A tactile talisman bridging organic nature with human physiology."'
    },
    'face-ring': {
      id: 'face-ring',
      ref: 'REF. AN-03',
      name: 'Face Ring',
      category: 'Rings',
      colorName: 'Cold-Forged 950 Platinum & Mineral Crystal',
      macroImg: 'assets/images/ring-face-macro.jpg',
      modelImg: 'assets/images/ring-face-model.jpg',
      macroLabel: 'Architectural Saddle Frame & Bezel Setting',
      modelLabel: 'Intrecciato Texture Pairing & Clinical Pose',
      angles: [
        'assets/images/ring-face-macro.jpg',
        'assets/images/ring-face-model.jpg',
        'assets/images/ring-soft-knot-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum', color: '#DEE2E6' },
        { name: 'French Gray Mineral Tone', color: '#CED4DA' }
      ],
      sizes: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
      defaultSize: '13',
      anatomy: "Architectural saddle profile enclosing a natural untreated gemstone, evoking the warmth of arterial blood circulation and clinical resolve.",
      craft: "Custom-cut cabochon set within cold-forged 18K yellow gold, precision-polished to eliminate any sharp edges that could tear clinical barriers.",
      quote: '"A bold anatomical statement of life force and permanence."'
    },
    'candy-drop-earrings': {
      id: 'candy-drop-earrings',
      ref: 'REF. PN-01',
      name: 'Candy Drop Earrings',
      category: 'Earrings',
      colorName: 'Sterling Silver 925 & Enamel Purity',
      macroImg: 'assets/images/earrings-candy-drop-macro.jpg',
      modelImg: 'assets/images/earrings-candy-drop-model.jpg',
      macroLabel: 'Polished Droplet Contour with Micro-Speckles',
      modelLabel: 'Side Profile Showing Pure Flush Lobe Placement',
      angles: [
        'assets/images/earrings-candy-drop-macro.jpg',
        'assets/images/earrings-candy-drop-model.jpg',
        'assets/images/editorial-physician-earring.jpg'
      ],
      colors: [
        { name: 'Sterling Silver 925', color: '#DEE2E6' },
        { name: 'Anti-Flash White Enamel', color: '#E9ECEF' }
      ],
      sizes: ['Standard Ergonomic'],
      defaultSize: 'Standard Ergonomic',
      anatomy: "Weightless ergonomic droplet silhouette engineered to sit flush against the earlobe, preventing snagging during stethoscope and loupe use.",
      craft: "Hand-poured enamel over cold-formed 925 sterling silver with hypo-allergenic surgical titanium posts and safety friction backs.",
      quote: '"Weightless grace that remains invisible to the wearer while commanding reverence."'
    },
    'atrial-sapphire-stud': {
      id: 'atrial-sapphire-stud',
      ref: 'REF. PN-02',
      name: 'The Atrial Sapphire Stud',
      category: 'Earrings',
      colorName: 'Cold-Forged 950 Platinum & Ceylon Sapphire',
      macroImg: 'assets/images/editorial-physician-earring.jpg',
      modelImg: 'assets/images/editorial-physician-earring.jpg',
      macroLabel: 'Bespoke Sapphire Earring on Physician Model',
      modelLabel: 'Clinical Stethoscope & Editorial Light Chiaroscuro',
      angles: [
        'assets/images/editorial-physician-earring.jpg',
        'assets/images/earrings-candy-drop-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum', color: '#DEE2E6' },
        { name: 'Surgical Titanium Post', color: '#A7AFB6' }
      ],
      sizes: ['Standard Diagnostic'],
      defaultSize: 'Standard Diagnostic',
      anatomy: "Weight-balanced medical stud featuring surgical titanium stem to eliminate pressure necrosis during 14-hour hospital on-call shifts.",
      craft: "Hand-selected unheated royal blue Ceylon sapphire, secured in a low-profile protective bezel tailored for operating theatre acoustics.",
      quote: '"Discreet diagnostic elegance that speaks without uttering a single syllable."'
    },
    'carpal-cadence': {
      id: 'carpal-cadence',
      ref: 'REF. AN-04',
      name: 'The Carpal Cadence',
      category: 'Bracelets',
      colorName: 'Cold-Forged 950 Platinum & Baguette Diamonds',
      macroImg: 'assets/images/bracelet-carpal-macro.jpg',
      modelImg: 'assets/images/diamond-bracelet-macro.jpg',
      macroLabel: 'High-Contrast Kinetic Articulation',
      modelLabel: 'Dorsal Wrist Alignment & Micro-Pavé Diamonds',
      angles: [
        'assets/images/bracelet-carpal-macro.jpg',
        'assets/images/diamond-bracelet-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum & Diamonds', color: '#DEE2E6' },
        { name: 'Grade 5 Surgical Titanium', color: '#A7AFB6' }
      ],
      sizes: ['15cm', '16cm', '17cm', '18cm', '19cm'],
      defaultSize: '17cm',
      anatomy: "Sculpted along the flexor retinaculum, cushioning wrist hyperextension during microsurgical suture placement and prolonged precision tasks.",
      craft: "Features 3.08ct flawless emerald and baguette diamonds set into an articulated platinum chassis with invisible safety clasp.",
      quote: '"For the hands that stitch time back into living human flesh."'
    },
    'arterial-torque': {
      id: 'arterial-torque',
      ref: 'REF. PN-03',
      name: 'The Arterial Torque',
      category: 'Necklaces',
      colorName: 'Cold-Forged 950 Platinum & Hyper-Elastic Titanium',
      macroImg: 'assets/images/necklace-arterial-macro.jpg',
      modelImg: 'assets/images/necklace-arterial-macro.jpg',
      macroLabel: '0.02mm Sub-Millimeter Curve Vector',
      modelLabel: 'Thoracic Cadence & Dynamic Reflection',
      angles: [
        'assets/images/necklace-arterial-macro.jpg',
        'assets/images/bracelet-carpal-macro.jpg'
      ],
      colors: [
        { name: 'Cold-Forged 950 Platinum', color: '#DEE2E6' },
        { name: 'French Gray Titanium Core', color: '#CED4DA' }
      ],
      sizes: ['38cm Collar', '40cm Collar', '42cm Collar'],
      defaultSize: '40cm Collar',
      anatomy: "Continuous ribbon torque engineered to flex naturally with thoracic respiratory expansion and vascular rhythm.",
      craft: "Combines 950 platinum with an internal super-elastic nitinol matrix, retaining flawless anatomical curvature forever.",
      quote: '"The weight of existence transmuted into pure, luminous permanence."'
    },
    'surgical-brooch': {
      id: 'surgical-brooch',
      ref: 'REF. AN-05',
      name: 'The Diagnostic Brooch',
      category: 'Brooches',
      colorName: 'Grade 5 Titanium & 18K White Gold',
      macroImg: 'assets/images/diamond-bracelet-macro.jpg',
      modelImg: 'assets/images/hero-physician-ring.jpg',
      macroLabel: 'Minimalist Lapel Armature',
      modelLabel: 'Physician White Coat Lapel Placement',
      angles: [
        'assets/images/diamond-bracelet-macro.jpg',
        'assets/images/hero-physician-ring.jpg'
      ],
      colors: [
        { name: 'Grade 5 Titanium & White Gold', color: '#DEE2E6' }
      ],
      sizes: ['One Size // Lapel Pin'],
      defaultSize: 'One Size // Lapel Pin',
      anatomy: "Minimalist tension clip tailored specifically for white coat lapels and surgical attire, with dual magnetic closure.",
      craft: "Machined from aeronautical grade 5 titanium with hand-burnished edges and inset natural diamond marker.",
      quote: '"Subtle peer recognition in every clinical consultation."'
    }
  };

  // =========================================================================
  // 2. DOM ELEMENTS
  // =========================================================================
  const body = document.body;
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloaderBar');

  // Header Elements
  const siteHeader = document.getElementById('siteHeader');
  const exploreBtn = document.getElementById('exploreBtn');
  const siteLogo = document.getElementById('siteLogo');
  const headerViewPill = document.getElementById('headerViewPill');
  const headerPillLabel = document.getElementById('headerPillLabel');

  // Curtain Deck Elements
  const curtainFrames = document.querySelectorAll('.curtain-frame');
  const curtainDots = document.querySelectorAll('.curtain-dot');
  const curtainScrollHint = document.getElementById('curtainScrollHint');
  const totalFrames = curtainFrames.length;
  let currentFrameIndex = 0;
  let isDeckAnimating = false;
  let wheelAccumulator = 0;
  let wheelTimer = null;

  // Menu Elements
  const menuOverlay = document.getElementById('menuOverlay');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuTabBtns = document.querySelectorAll('.menu-tab-btn');
  const subnavPills = document.querySelectorAll('.subnav-pill');
  const previewCardLeft = document.getElementById('previewCardLeft');
  const previewCardRight = document.getElementById('previewCardRight');
  const previewImgLeft = document.getElementById('previewImgLeft');
  const previewImgRight = document.getElementById('previewImgRight');
  const previewTitleLeft = document.getElementById('previewTitleLeft');
  const previewTitleRight = document.getElementById('previewTitleRight');
  const previewDescLeft = document.getElementById('previewDescLeft');
  const previewDescRight = document.getElementById('previewDescRight');
  const menuViewAllBtn = document.getElementById('menuViewAllBtn');

  // Menu Bottom Utilities
  const menuSearchBtn = document.getElementById('menuSearchBtn');
  const menuLoginBtn = document.getElementById('menuLoginBtn');
  const menuCareBtn = document.getElementById('menuCareBtn');
  const menuCountryBtn = document.getElementById('menuCountryBtn');

  // Collection View Elements
  const collectionView = document.getElementById('collectionView');
  const closeCollectionBtn = document.getElementById('closeCollectionBtn');
  const twoColumnGrid = document.getElementById('twoColumnGrid');
  const colFilterPills = document.querySelectorAll('.col-filter-pill');
  const collectionTitleBadge = document.getElementById('collectionTitleBadge');
  const productCounter = document.getElementById('productCounter');
  const filterSortBtn = document.getElementById('filterSortBtn');
  const filterSortDrawer = document.getElementById('filterSortDrawer');
  const sortOptBtns = document.querySelectorAll('.sort-opt-btn');
  const colOpenCommissionBtn = document.getElementById('colOpenCommissionBtn');

  // Product Detail View Elements
  const productDetailView = document.getElementById('productDetailView');
  const pdpBackBtn = document.getElementById('pdpBackBtn');
  const pdpBackLabel = document.getElementById('pdpBackLabel');
  const pdpCloseBtn = document.getElementById('pdpCloseBtn');
  const pdpImgLeft = document.getElementById('pdpImgLeft');
  const pdpImgRight = document.getElementById('pdpImgRight');
  const pdpImgLeftLabel = document.getElementById('pdpImgLeftLabel');
  const pdpImgRightLabel = document.getElementById('pdpImgRightLabel');
  const pdpImageLeftCol = document.getElementById('pdpImageLeftCol');
  const pdpImageRightCol = document.getElementById('pdpImageRightCol');
  const pdpAnglesBar = document.getElementById('pdpAnglesBar');
  const pdpRefCode = document.getElementById('pdpRefCode');
  const pdpTitle = document.getElementById('pdpTitle');
  const pdpColorName = document.getElementById('pdpColorName');
  const pdpColorSwatches = document.getElementById('pdpColorSwatches');
  const pdpSizePills = document.getElementById('pdpSizePills');
  const sizeSelectedHint = document.getElementById('sizeSelectedHint');
  const pdpDescAnatomy = document.getElementById('pdpDescAnatomy');
  const pdpDescCraft = document.getElementById('pdpDescCraft');
  const pdpCommissionBtn = document.getElementById('pdpCommissionBtn');
  const pdpVerifyStoreBtn = document.getElementById('pdpVerifyStoreBtn');
  const openSizeGuideBtn = document.getElementById('openSizeGuideBtn');

  // Loupe / Fullscreen Magnifier Elements
  const loupeModal = document.getElementById('loupeModal');
  const loupeCloseBtn = document.getElementById('loupeCloseBtn');
  const loupeStage = document.getElementById('loupeStage');
  const loupeZoomImg = document.getElementById('loupeZoomImg');
  const loupeZoomIn = document.getElementById('loupeZoomIn');
  const loupeZoomOut = document.getElementById('loupeZoomOut');
  const loupeReset = document.getElementById('loupeReset');
  const loupeTitle = document.getElementById('loupeTitle');
  let loupeScale = 1;
  let loupePanX = 0;
  let loupePanY = 0;
  let isDraggingLoupe = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // Size Guide Modal Elements
  const sizeGuideModal = document.getElementById('sizeGuideModal');
  const sizeGuideCloseBtn = document.getElementById('sizeGuideCloseBtn');
  const sizeGuideBackdrop = document.getElementById('sizeGuideBackdrop');
  const sgTabBtns = document.querySelectorAll('.sg-tab-btn');
  const sgTabChart = document.getElementById('sgTabChart');
  const sgTabMeasure = document.getElementById('sgTabMeasure');

  // Search Modal Elements
  const searchModal = document.getElementById('searchModal');
  const searchCloseBtn = document.getElementById('searchCloseBtn');
  const searchBackdrop = document.getElementById('searchBackdrop');
  const searchInput = document.getElementById('searchInput');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchTags = document.querySelectorAll('.search-tag');

  // Login Modal Elements
  const loginModal = document.getElementById('loginModal');
  const loginCloseBtn = document.getElementById('loginCloseBtn');
  const loginBackdrop = document.getElementById('loginBackdrop');
  const loginForm = document.getElementById('loginForm');
  const loginMsg = document.getElementById('loginMsg');

  // Care Modal Elements
  const careModal = document.getElementById('careModal');
  const careCloseBtn = document.getElementById('careCloseBtn');
  const careBackdrop = document.getElementById('careBackdrop');

  // Commission Modal Elements
  const commissionModal = document.getElementById('commissionModal');
  const commissionCloseBtn = document.getElementById('commissionCloseBtn');
  const commissionBackdrop = document.getElementById('commissionBackdrop');
  const commissionForm = document.getElementById('commissionForm');
  const commArtifactSelect = document.getElementById('commArtifactSelect');
  const commSuccessBox = document.getElementById('commSuccessBox');

  // Country Modal Elements
  const countryModal = document.getElementById('countryModal');
  const countryCloseBtn = document.getElementById('countryCloseBtn');
  const countryBackdrop = document.getElementById('countryBackdrop');
  const countryOpts = document.querySelectorAll('.country-opt');
  const footerCountryBtn = document.getElementById('footerCountryBtn');

  // Footer Frame Elements
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterConfirm = document.getElementById('newsletterConfirm');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const findSalonBtn = document.getElementById('findSalonBtn');

  // Navigation State
  let currentActiveProduct = PRODUCTS['soft-knot-ring'];
  let currentNavOrigin = 'curtain'; // 'curtain' or 'collection'

  // =========================================================================
  // 3. PRELOADER & INITIALIZATION
  // =========================================================================
  let loadProgress = 0;
  const loadInterval = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 25) + 20;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      if (preloaderBar) preloaderBar.style.width = '100%';
      setTimeout(() => {
        body.classList.remove('is-loading');
        applyCurtainFrame(0, true);
      }, 400);
    } else {
      if (preloaderBar) preloaderBar.style.width = `${loadProgress}%`;
    }
  }, 70);

  // =========================================================================
  // 4. BOTTEGA VENETA CURTAIN OVERLAY STACK CONTROLLER
  // =========================================================================
  /**
   * Applies curtain layover stack transitions.
   * As user scrolls down, past frames stay locked in place (subtle scale)
   * while the next frame slides smoothly UP over it covering it completely edge-to-edge.
   */
  function applyCurtainFrame(targetIdx, immediate = false) {
    if (targetIdx < 0 || targetIdx >= totalFrames) return;

    curtainFrames.forEach((frame, idx) => {
      frame.style.transition = immediate 
        ? 'none' 
        : 'transform 1.05s cubic-bezier(0.65, 0, 0.35, 1)';

      if (idx < targetIdx) {
        // Underneath / Past frame: remains locked in place
        frame.classList.remove('is-active');
        frame.classList.add('is-past');
        frame.style.transform = 'translateY(0%) scale(0.985)';
      } else if (idx === targetIdx) {
        // Active frame: fully in viewport
        frame.classList.remove('is-past');
        frame.classList.add('is-active');
        frame.style.transform = 'translateY(0%) scale(1)';
      } else {
        // Future frame: parked below at 100% waiting to slide up
        frame.classList.remove('is-past', 'is-active');
        frame.style.transform = 'translateY(100%)';
      }
    });

    // Update pagination dots
    curtainDots.forEach((dot, idx) => {
      if (idx === targetIdx) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    // Update Header Dynamic Contrast
    const activeFrameEl = curtainFrames[targetIdx];
    const theme = activeFrameEl ? activeFrameEl.getAttribute('data-theme') : 'light';
    siteHeader.setAttribute('data-theme', theme || 'light');

    currentFrameIndex = targetIdx;
  }

  function goToFrame(targetIdx) {
    if (targetIdx === currentFrameIndex || isDeckAnimating) return;
    if (targetIdx < 0 || targetIdx >= totalFrames) return;

    isDeckAnimating = true;
    applyCurtainFrame(targetIdx);

    setTimeout(() => {
      isDeckAnimating = false;
    }, 1050);
  }

  function nextFrame() {
    if (currentFrameIndex < totalFrames - 1) {
      goToFrame(currentFrameIndex + 1);
    }
  }

  function prevFrame() {
    if (currentFrameIndex > 0) {
      goToFrame(currentFrameIndex - 1);
    }
  }

  // Wheel Listener for Curtain Stack
  window.addEventListener('wheel', (e) => {
    // If any overlay/modal/drawer is open, allow standard scroll inside them
    if (menuOverlay.classList.contains('is-open') ||
        collectionView.classList.contains('is-open') ||
        productDetailView.classList.contains('is-open') ||
        loupeModal.classList.contains('is-open') ||
        sizeGuideModal.classList.contains('is-open') ||
        searchModal.classList.contains('is-open') ||
        loginModal.classList.contains('is-open') ||
        careModal.classList.contains('is-open') ||
        commissionModal.classList.contains('is-open') ||
        countryModal.classList.contains('is-open')) {
      return;
    }

    e.preventDefault();
    if (isDeckAnimating) return;

    wheelAccumulator += e.deltaY;
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { wheelAccumulator = 0; }, 180);

    // Threshold for triggering slide transition
    if (Math.abs(wheelAccumulator) >= 25) {
      if (wheelAccumulator > 0) {
        nextFrame();
      } else {
        prevFrame();
      }
      wheelAccumulator = 0;
    }
  }, { passive: false });

  // Touch Swipe for Mobile Curtain Stack
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (menuOverlay.classList.contains('is-open') ||
        collectionView.classList.contains('is-open') ||
        productDetailView.classList.contains('is-open') ||
        loupeModal.classList.contains('is-open')) {
      return;
    }

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (Math.abs(deltaY) > 40) {
      if (deltaY > 0) nextFrame(); // Swipe up -> next frame
      else prevFrame(); // Swipe down -> prev frame
    }
  }, { passive: true });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'Escape') {
      closeAllModals();
      return;
    }

    if (menuOverlay.classList.contains('is-open') ||
        collectionView.classList.contains('is-open') ||
        productDetailView.classList.contains('is-open')) {
      return;
    }

    if (['ArrowDown', 'PageDown', 'j', ' '].includes(e.key)) {
      e.preventDefault();
      nextFrame();
    } else if (['ArrowUp', 'PageUp', 'k'].includes(e.key)) {
      e.preventDefault();
      prevFrame();
    }
  });

  // Side Dot Clicks
  curtainDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = parseInt(dot.getAttribute('data-frame'), 10);
      goToFrame(target);
    });
  });

  // Hero Scroll Hint
  if (curtainScrollHint) {
    curtainScrollHint.addEventListener('click', () => nextFrame());
  }

  // Header Brand Logo click returns to frame 0
  if (siteLogo) {
    siteLogo.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllModals();
      goToFrame(0);
    });
  }

  // Click directly on the Big Picture itself -> Open page containing all information
  document.querySelectorAll('.curtain-frame[data-product-id]').forEach(frame => {
    frame.addEventListener('click', (e) => {
      // Avoid triggering when clicking header or scroll controls
      if (e.target.closest('.curtain-pagination') || e.target.closest('.site-header') || e.target.closest('.curtain-scroll-hint')) {
        return;
      }
      const prodId = frame.getAttribute('data-product-id');
      if (prodId && PRODUCTS[prodId]) {
        currentNavOrigin = 'curtain';
        openProductDetail(PRODUCTS[prodId]);
      }
    });
  });

  // =========================================================================
  // 5. INSIDE THE MENU (Page 7, 8, 22, 23, 24)
  // Dynamic 2-image previews on hover & The Ordinary animated underline
  // =========================================================================
  function openMenu() {
    menuOverlay.classList.add('is-open');
    menuOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    menuOverlay.classList.remove('is-open');
    menuOverlay.setAttribute('aria-hidden', 'true');
  }

  if (exploreBtn) exploreBtn.addEventListener('click', openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  // Menu Category Tab Hover / Click (The Ordinary Underline + Dynamic Preview)
  const MENU_PREVIEWS = {
    'collection': {
      left: {
        prodId: 'soft-knot-ring',
        img: 'assets/images/ring-soft-knot-macro.jpg',
        title: 'Soft Knot Ring',
        desc: 'Isolated Macro Architecture'
      },
      right: {
        prodId: 'soft-knot-ring',
        img: 'assets/images/ring-soft-knot-model.jpg',
        title: 'Model Wearing Soft Knot Ring',
        desc: 'Clinical Attire & Anatomical Ergonomics'
      }
    },
    'bespoke': {
      left: {
        prodId: 'carpal-cadence',
        img: 'assets/images/bracelet-carpal-macro.jpg',
        title: 'The Carpal Cadence',
        desc: 'Bespoke Wrist Alignment & Suture Cushion'
      },
      right: {
        prodId: 'carpal-cadence',
        img: 'assets/images/diamond-bracelet-macro.jpg',
        title: 'Private Atelier Allocation',
        desc: 'Custom Diamond & Platinum Craft'
      }
    },
    'meaning': {
      left: {
        prodId: 'soft-knot-ring',
        img: 'assets/images/hero-physician-ring.jpg',
        title: 'Mirroring & Belonging',
        desc: 'Opening directly onto a dignified portrait of a physician creates instant, silent recognition. Deep trust without marketing.'
      },
      right: {
        prodId: 'soft-knot-ring',
        img: 'assets/images/ring-soft-knot-macro.jpg',
        title: 'Respect for High Intelligence',
        desc: 'Elite practitioners dislike being sold to. Ultra-minimalism lets the purity of craftsmanship speak quietly.'
      }
    },
    'anima': {
      left: {
        prodId: 'face-ring',
        img: 'assets/images/ring-face-macro.jpg',
        title: 'The Face Ring // Carnelian',
        desc: 'Physical Life Force & Permanence'
      },
      right: {
        prodId: 'face-ring',
        img: 'assets/images/hero-physician-ring.jpg',
        title: 'Physician Subtle Identification',
        desc: 'Peer Recognition in First Half-Second'
      }
    },
    'pneuma': {
      left: {
        prodId: 'candy-drop-earrings',
        img: 'assets/images/earrings-candy-drop-macro.jpg',
        title: 'Candy Drop Earrings',
        desc: 'Vital Air & Kinetic Lightness'
      },
      right: {
        prodId: 'candy-drop-earrings',
        img: 'assets/images/earrings-candy-drop-model.jpg',
        title: 'Weightless Ergonomic Profile',
        desc: 'Flush Lobe Fit & Zero Loupe Snagging'
      }
    }
  };

  function updateMenuPreview(tabKey) {
    const data = MENU_PREVIEWS[tabKey] || MENU_PREVIEWS['collection'];
    if (!data) return;

    previewImgLeft.src = data.left.img;
    previewTitleLeft.textContent = data.left.title;
    previewDescLeft.textContent = data.left.desc;
    previewCardLeft.setAttribute('data-target-product', data.left.prodId);

    previewImgRight.src = data.right.img;
    previewTitleRight.textContent = data.right.title;
    previewDescRight.textContent = data.right.desc;
    previewCardRight.setAttribute('data-target-product', data.right.prodId);
  }

  menuTabBtns.forEach(btn => {
    const tab = btn.getAttribute('data-tab');

    // Hover or Click triggers preview update (Page 7: "by hovering the cursor on these options these options show the items appearing on the screen")
    btn.addEventListener('mouseenter', () => {
      menuTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateMenuPreview(tab);
    });

    btn.addEventListener('click', () => {
      menuTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateMenuPreview(tab);
    });
  });

  // Subnav pill click in menu
  subnavPills.forEach(pill => {
    pill.addEventListener('click', () => {
      subnavPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      closeMenu();
      openCollectionView(filter);
    });
  });

  // Menu Preview Cards click
  [previewCardLeft, previewCardRight].forEach(card => {
    card.addEventListener('click', () => {
      const prodId = card.getAttribute('data-target-product');
      if (prodId && PRODUCTS[prodId]) {
        closeMenu();
        currentNavOrigin = 'curtain';
        openProductDetail(PRODUCTS[prodId]);
      }
    });
  });

  if (menuViewAllBtn) {
    menuViewAllBtn.addEventListener('click', () => {
      closeMenu();
      openCollectionView('all');
    });
  }

  // =========================================================================
  // 6. COLLECTION VIEW ("WHAT WE WANT" — Page 8, 10, 11, 12)
  // Two large images in one row, alternating product macro & model wearing it!
  // =========================================================================
  function renderCollectionGrid(categoryFilter = 'all', sortBy = 'curated') {
    if (!twoColumnGrid) return;
    twoColumnGrid.innerHTML = '';

    let items = Object.values(PRODUCTS);

    if (categoryFilter !== 'all') {
      items = items.filter(it => it.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    if (sortBy === 'alpha') {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'material') {
      items.sort((a, b) => a.colorName.localeCompare(b.colorName));
    }

    // Update counter & badge
    if (productCounter) {
      productCounter.textContent = `${items.length} ${items.length === 1 ? 'piece' : 'pieces'}`;
    }
    if (collectionTitleBadge) {
      collectionTitleBadge.textContent = categoryFilter === 'all' ? 'Collection' : categoryFilter;
    }

    // Render pairs: Item Macro + Model wearing the item! (Page 10, 11, 12)
    items.forEach((item, idx) => {
      // 1. Isolated Macro Product Card
      const macroCard = document.createElement('div');
      macroCard.className = 'collection-product-card';
      macroCard.innerHTML = `
        <div class="card-media-wrap">
          <span class="card-type-indicator">MACRO ARTIFACT</span>
          <img src="${item.macroImg}" alt="${item.name} Isolated Macro" loading="lazy">
        </div>
        <div class="card-caption-row">
          <span class="card-product-name">${item.name}</span>
          <span class="card-arrow">&rarr;</span>
        </div>
      `;
      macroCard.addEventListener('click', () => {
        currentNavOrigin = 'collection';
        openProductDetail(item);
      });
      twoColumnGrid.appendChild(macroCard);

      // 2. Model Wearing Piece Card (Page 10 & 12)
      const modelCard = document.createElement('div');
      modelCard.className = 'collection-product-card';
      modelCard.innerHTML = `
        <div class="card-media-wrap">
          <span class="card-type-indicator">ANATOMICAL CONTEXT</span>
          <img src="${item.modelImg}" alt="${item.name} Worn by Model" loading="lazy">
        </div>
        <div class="card-caption-row">
          <span class="card-product-name">${item.name} &bull; Editorial</span>
          <span class="card-arrow">&rarr;</span>
        </div>
      `;
      modelCard.addEventListener('click', () => {
        currentNavOrigin = 'collection';
        openProductDetail(item);
      });
      twoColumnGrid.appendChild(modelCard);
    });
  }

  function openCollectionView(filter = 'all') {
    collectionView.classList.add('is-open');
    collectionView.setAttribute('aria-hidden', 'false');

    // Update active filter pill
    colFilterPills.forEach(pill => {
      const cat = pill.getAttribute('data-cat');
      if (cat.toLowerCase() === filter.toLowerCase()) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    renderCollectionGrid(filter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeCollectionView() {
    collectionView.classList.remove('is-open');
    collectionView.setAttribute('aria-hidden', 'true');
  }

  if (closeCollectionBtn) closeCollectionBtn.addEventListener('click', closeCollectionView);

  // Header View Pill Toggle
  if (headerViewPill) {
    headerViewPill.addEventListener('click', () => {
      if (collectionView.classList.contains('is-open')) {
        closeCollectionView();
        headerPillLabel.textContent = 'COLLECTION';
      } else {
        openCollectionView('all');
        headerPillLabel.textContent = 'CURTAIN DECK';
      }
    });
  }

  // Filter Pills click with The Ordinary underline
  colFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      colFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const cat = pill.getAttribute('data-cat');
      renderCollectionGrid(cat);
    });
  });

  // Filter & Sort Toggle
  if (filterSortBtn && filterSortDrawer) {
    filterSortBtn.addEventListener('click', () => {
      filterSortDrawer.classList.toggle('is-open');
    });
  }

  sortOptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortOptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sortVal = btn.getAttribute('data-sort');
      
      const activePill = document.querySelector('.col-filter-pill.active');
      const currentCat = activePill ? activePill.getAttribute('data-cat') : 'all';
      renderCollectionGrid(currentCat, sortVal);
    });
  });

  // =========================================================================
  // 7. PRODUCT DETAIL VIEW (Page 13, 14, 15, 16, 17, 18, 19, 20, 21, 22)
  // Two large side-by-side images, Fullscreen Zoom, Size Guide, Vertical Specs
  // =========================================================================
  function openProductDetail(product) {
    if (!product) return;
    currentActiveProduct = product;

    // Set Ref, Title, Metallurgy
    pdpRefCode.textContent = product.ref;
    pdpTitle.textContent = product.name;
    pdpColorName.textContent = product.colorName;

    // Set Images & Labels (Page 14 & 15: Side by side images)
    pdpImgLeft.src = product.macroImg;
    pdpImgRight.src = product.modelImg;
    pdpImgLeftLabel.textContent = product.macroLabel;
    pdpImgRightLabel.textContent = product.modelLabel;

    // Set Angles Thumbnails
    if (pdpAnglesBar) {
      pdpAnglesBar.innerHTML = '';
      product.angles.forEach((angleUrl, idx) => {
        const thumb = document.createElement('img');
        thumb.src = angleUrl;
        thumb.className = `angle-thumb ${idx === 0 ? 'active' : ''}`;
        thumb.alt = `Angle view ${idx + 1}`;
        thumb.addEventListener('click', () => {
          document.querySelectorAll('.angle-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          pdpImgLeft.src = angleUrl;
        });
        pdpAnglesBar.appendChild(thumb);
      });
    }

    // Set Color Swatches
    if (pdpColorSwatches) {
      pdpColorSwatches.innerHTML = '';
      product.colors.forEach((col, idx) => {
        const swatch = document.createElement('button');
        swatch.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
        swatch.style.backgroundColor = col.color;
        swatch.setAttribute('title', col.name);
        swatch.addEventListener('click', () => {
          document.querySelectorAll('.swatch-btn').forEach(s => s.classList.remove('active'));
          swatch.classList.add('active');
          pdpColorName.textContent = col.name;
        });
        pdpColorSwatches.appendChild(swatch);
      });
    }

    // Set Sizes (Page 20)
    if (pdpSizePills) {
      pdpSizePills.innerHTML = '';
      product.sizes.forEach((sz, idx) => {
        const pill = document.createElement('button');
        pill.className = `size-pill ${sz === product.defaultSize ? 'active' : ''}`;
        pill.textContent = sz;
        pill.addEventListener('click', () => {
          document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          updateSelectedSizeHint(sz);
        });
        pdpSizePills.appendChild(pill);
      });
      updateSelectedSizeHint(product.defaultSize);
    }

    // Set Vertical Specs (Page 22)
    pdpDescAnatomy.textContent = product.anatomy;
    pdpDescCraft.textContent = product.craft;

    // Back Label adjustment
    pdpBackLabel.textContent = currentNavOrigin === 'collection' ? 'COLLECTION' : 'CURTAIN';

    // Show View
    productDetailView.classList.add('is-open');
    productDetailView.setAttribute('aria-hidden', 'false');
    productDetailView.scrollTo({ top: 0, behavior: 'instant' });
  }

  function updateSelectedSizeHint(size) {
    if (!sizeSelectedHint) return;
    const tableRow = {
      '9': 'German 15.5mm // US 4.75',
      '10': 'German 16.0mm // US 5.25',
      '11': 'German 16.25mm // US 5.5',
      '12': 'German 16.5mm // US 6.0',
      '13': 'German 17.0mm // US 6.5',
      '14': 'German 17.25mm // US 7.0',
      '15': 'German 17.5mm // US 7.25',
      '16': 'German 17.75mm // US 7.5',
      '17': 'German 18.0mm // US 7.75',
      '18': 'German 18.5mm // US 8.25',
      '19': 'German 19.0mm // US 9.0',
      '20': 'German 19.25mm // US 9.25',
      '21': 'German 19.5mm // US 9.5'
    };
    const detail = tableRow[size] ? ` (${tableRow[size]})` : '';
    sizeSelectedHint.textContent = `Selected: ANIMA Size ${size}${detail}`;
  }

  function closeProductDetail() {
    productDetailView.classList.remove('is-open');
    productDetailView.setAttribute('aria-hidden', 'true');
  }

  if (pdpCloseBtn) pdpCloseBtn.addEventListener('click', closeProductDetail);
  if (pdpBackBtn) pdpBackBtn.addEventListener('click', closeProductDetail);

  // Accordion Logic for Vertical Specs (Page 22)
  document.querySelectorAll('.spec-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      const isOpen = parent.classList.contains('is-open');
      const toggle = header.querySelector('.acc-toggle');

      if (isOpen) {
        parent.classList.remove('is-open');
        if (toggle) toggle.textContent = '+';
      } else {
        parent.classList.add('is-open');
        if (toggle) toggle.textContent = '−';
      }
    });
  });

  // Commission button from PDP
  if (pdpCommissionBtn) {
    pdpCommissionBtn.addEventListener('click', () => {
      openCommissionModal(currentActiveProduct.id);
    });
  }

  if (pdpVerifyStoreBtn) {
    pdpVerifyStoreBtn.addEventListener('click', () => {
      openCareModal();
    });
  }

  // =========================================================================
  // 8. FULLSCREEN INTERACTIVE LOUPE / ZOOM (Page 14, 16, 17, 18, 19)
  // "when you click on a single picture it takes over the whole screen and you can zoom in and zoom out of it."
  // =========================================================================
  function openLoupe(imgSrc, titleText) {
    if (!imgSrc) return;
    loupeZoomImg.src = imgSrc;
    loupeTitle.textContent = titleText || 'MACRO INSPECTION';
    loupeScale = 1;
    loupePanX = 0;
    loupePanY = 0;
    updateLoupeTransform();

    loupeModal.classList.add('is-open');
    loupeModal.setAttribute('aria-hidden', 'false');
  }

  function closeLoupe() {
    loupeModal.classList.remove('is-open');
    loupeModal.setAttribute('aria-hidden', 'true');
  }

  function updateLoupeTransform() {
    loupeZoomImg.style.transform = `translate(${loupePanX}px, ${loupePanY}px) scale(${loupeScale})`;
  }

  // Click on either PDP image triggers Loupe
  if (pdpImageLeftCol) {
    pdpImageLeftCol.addEventListener('click', () => {
      openLoupe(pdpImgLeft.src, `${currentActiveProduct.name} // MACRO CRAFT`);
    });
  }

  if (pdpImageRightCol) {
    pdpImageRightCol.addEventListener('click', () => {
      openLoupe(pdpImgRight.src, `${currentActiveProduct.name} // EDITORIAL ANATOMY`);
    });
  }

  if (loupeCloseBtn) loupeCloseBtn.addEventListener('click', closeLoupe);

  // Loupe Zoom Controls (+ / - / Reset)
  if (loupeZoomIn) {
    loupeZoomIn.addEventListener('click', () => {
      loupeScale = Math.min(loupeScale + 0.35, 3.5);
      updateLoupeTransform();
    });
  }

  if (loupeZoomOut) {
    loupeZoomOut.addEventListener('click', () => {
      loupeScale = Math.max(loupeScale - 0.35, 0.7);
      updateLoupeTransform();
    });
  }

  if (loupeReset) {
    loupeReset.addEventListener('click', () => {
      loupeScale = 1;
      loupePanX = 0;
      loupePanY = 0;
      updateLoupeTransform();
    });
  }

  // Wheel zoom inside Loupe
  if (loupeStage) {
    loupeStage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY * -0.0015;
      loupeScale = Math.min(Math.max(0.6, loupeScale + delta), 4.0);
      updateLoupeTransform();
    }, { passive: false });

    // Drag to Pan inside Loupe
    loupeStage.addEventListener('mousedown', (e) => {
      isDraggingLoupe = true;
      dragStartX = e.clientX - loupePanX;
      dragStartY = e.clientY - loupePanY;
      loupeStage.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDraggingLoupe) return;
      loupePanX = e.clientX - dragStartX;
      loupePanY = e.clientY - dragStartY;
      updateLoupeTransform();
    });

    window.addEventListener('mouseup', () => {
      isDraggingLoupe = false;
      loupeStage.classList.remove('is-dragging');
    });
  }

  // =========================================================================
  // 9. SIZE GUIDE MODAL (Page 20 & 21)
  // Exact table comparing ANIMA / Bottega Veneta Size vs German Size
  // =========================================================================
  function openSizeGuide() {
    sizeGuideModal.classList.add('is-open');
    sizeGuideModal.setAttribute('aria-hidden', 'false');
  }

  function closeSizeGuide() {
    sizeGuideModal.classList.remove('is-open');
    sizeGuideModal.setAttribute('aria-hidden', 'true');
  }

  if (openSizeGuideBtn) openSizeGuideBtn.addEventListener('click', openSizeGuide);
  document.querySelectorAll('.open-size-guide-link').forEach(link => {
    link.addEventListener('click', openSizeGuide);
  });
  if (sizeGuideCloseBtn) sizeGuideCloseBtn.addEventListener('click', closeSizeGuide);
  if (sizeGuideBackdrop) sizeGuideBackdrop.addEventListener('click', closeSizeGuide);

  // Size Guide Tabs (Size Chart vs How to Measure)
  sgTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sgTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.getAttribute('data-sg-tab');
      if (tab === 'chart') {
        sgTabChart.classList.add('active');
        sgTabMeasure.classList.remove('active');
      } else {
        sgTabChart.classList.remove('active');
        sgTabMeasure.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 10. SEARCH MODAL (Page 24)
  // =========================================================================
  function openSearch() {
    searchModal.classList.add('is-open');
    searchModal.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      searchInput.value = '';
      renderSearchResults('');
      setTimeout(() => searchInput.focus(), 150);
    }
  }

  function closeSearch() {
    searchModal.classList.remove('is-open');
    searchModal.setAttribute('aria-hidden', 'true');
  }

  if (menuSearchBtn) menuSearchBtn.addEventListener('click', () => { closeMenu(); openSearch(); });
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  function renderSearchResults(query = '') {
    if (!searchResultsList) return;
    searchResultsList.innerHTML = '';
    const q = (query || '').toLowerCase().trim();

    const all = Object.values(PRODUCTS);
    const filtered = q ? all.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.colorName.toLowerCase().includes(q) ||
      p.ref.toLowerCase().includes(q) ||
      p.anatomy.toLowerCase().includes(q)
    ) : all.slice(0, 5);

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `<div style="padding:16px; color:#A7AFB6; font-size:0.8rem;">No creations found for "${query}". Try searching "Ring", "Knot", or "Sapphire".</div>`;
      return;
    }

    filtered.forEach(p => {
      const itemEl = document.createElement('div');
      itemEl.className = 'search-result-item';
      itemEl.innerHTML = `
        <div>
          <span class="s-item-title">${p.ref} // ${p.name}</span>
          <span class="s-item-sub">${p.category} &bull; ${p.colorName}</span>
        </div>
        <span style="font-size:1.1rem; color:#A7AFB6;">&rarr;</span>
      `;
      itemEl.addEventListener('click', () => {
        closeSearch();
        currentNavOrigin = 'curtain';
        openProductDetail(p);
      });
      searchResultsList.appendChild(itemEl);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = q;
        renderSearchResults(q);
      }
    });
  });

  // =========================================================================
  // 11. PHYSICIAN LOGIN & CUSTOMER CARE MODALS (Page 24)
  // =========================================================================
  function openLoginModal() {
    loginModal.classList.add('is-open');
    loginModal.setAttribute('aria-hidden', 'false');
    if (loginMsg) loginMsg.classList.remove('is-visible');
  }

  function closeLoginModal() {
    loginModal.classList.remove('is-open');
    loginModal.setAttribute('aria-hidden', 'true');
  }

  if (menuLoginBtn) menuLoginBtn.addEventListener('click', () => { closeMenu(); openLoginModal(); });
  if (loginCloseBtn) loginCloseBtn.addEventListener('click', closeLoginModal);
  if (loginBackdrop) loginBackdrop.addEventListener('click', closeLoginModal);

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('loginSubmitBtn');
      btn.textContent = 'AUTHENTICATING MEDICAL CREDENTIALS...';
      btn.style.opacity = '0.7';

      setTimeout(() => {
        btn.textContent = 'ENTER ENCRYPTED PORTAL';
        btn.style.opacity = '1';
        if (loginMsg) loginMsg.classList.add('is-visible');
      }, 900);
    });
  }

  function openCareModal() {
    careModal.classList.add('is-open');
    careModal.setAttribute('aria-hidden', 'false');
  }

  function closeCareModal() {
    careModal.classList.remove('is-open');
    careModal.setAttribute('aria-hidden', 'true');
  }

  if (menuCareBtn) menuCareBtn.addEventListener('click', () => { closeMenu(); openCareModal(); });
  document.querySelectorAll('.open-care-link, .open-faq-link').forEach(l => {
    l.addEventListener('click', openCareModal);
  });
  if (careCloseBtn) careCloseBtn.addEventListener('click', closeCareModal);
  if (careBackdrop) careBackdrop.addEventListener('click', closeCareModal);

  // =========================================================================
  // 12. BESPOKE COMMISSION MODAL (Page 5, 22, 25)
  // =========================================================================
  function openCommissionModal(presetProdId = null) {
    commissionModal.classList.add('is-open');
    commissionModal.setAttribute('aria-hidden', 'false');
    if (commSuccessBox) commSuccessBox.classList.remove('is-visible');

    if (presetProdId && commArtifactSelect) {
      commArtifactSelect.value = presetProdId;
    }
  }

  function closeCommissionModal() {
    commissionModal.classList.remove('is-open');
    commissionModal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('.open-commission-link').forEach(l => {
    l.addEventListener('click', () => openCommissionModal());
  });
  if (colOpenCommissionBtn) colOpenCommissionBtn.addEventListener('click', () => openCommissionModal());
  if (commissionCloseBtn) commissionCloseBtn.addEventListener('click', closeCommissionModal);
  if (commissionBackdrop) commissionBackdrop.addEventListener('click', closeCommissionModal);

  if (commissionForm) {
    commissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('commSubmitBtn');
      submitBtn.textContent = 'ENCRYPTING & TRANSMITTING METRICS...';
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        submitBtn.textContent = 'TRANSMIT CONFIDENTIAL INQUIRY';
        submitBtn.style.opacity = '1';
        if (commSuccessBox) commSuccessBox.classList.add('is-visible');
      }, 1000);
    });
  }

  // =========================================================================
  // 13. REGION / COUNTRY MODAL (Page 24)
  // =========================================================================
  function openCountryModal() {
    countryModal.classList.add('is-open');
    countryModal.setAttribute('aria-hidden', 'false');
  }

  function closeCountryModal() {
    countryModal.classList.remove('is-open');
    countryModal.setAttribute('aria-hidden', 'true');
  }

  if (menuCountryBtn) menuCountryBtn.addEventListener('click', () => { closeMenu(); openCountryModal(); });
  if (footerCountryBtn) footerCountryBtn.addEventListener('click', openCountryModal);
  if (countryCloseBtn) countryCloseBtn.addEventListener('click', closeCountryModal);
  if (countryBackdrop) countryBackdrop.addEventListener('click', closeCountryModal);

  countryOpts.forEach(btn => {
    btn.addEventListener('click', () => {
      countryOpts.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-country');
      if (menuCountryBtn) {
        menuCountryBtn.querySelector('.u-label').textContent = `Your Country (${val})`;
      }
      setTimeout(closeCountryModal, 250);
    });
  });

  // =========================================================================
  // 14. FOOTER FRAME INTERACTIONS (Page 25)
  // =========================================================================
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail');
      if (email && email.value) {
        if (newsletterConfirm) newsletterConfirm.classList.add('is-visible');
        email.value = '';
      }
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      goToFrame(0);
    });
  }

  if (findSalonBtn) {
    findSalonBtn.addEventListener('click', () => {
      openCareModal();
    });
  }

  // =========================================================================
  // 13.5. THE MEANING & PSYCHOLOGICAL ELEMENTS MODAL
  // =========================================================================
  const meaningModal = document.getElementById('meaningModal');
  const meaningCloseBtn = document.getElementById('meaningCloseBtn');
  const meaningBackdrop = document.getElementById('meaningBackdrop');

  function openMeaningModal() {
    if (meaningModal) {
      meaningModal.classList.add('is-open');
      meaningModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMeaningModal() {
    if (meaningModal) {
      meaningModal.classList.remove('is-open');
      meaningModal.setAttribute('aria-hidden', 'true');
    }
  }

  document.querySelectorAll('.open-meaning-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
      openMeaningModal();
    });
  });

  if (meaningCloseBtn) meaningCloseBtn.addEventListener('click', closeMeaningModal);
  if (meaningBackdrop) meaningBackdrop.addEventListener('click', closeMeaningModal);

  // Miscellaneous Links (Cert, Philosophy, Social, Legal)
  document.querySelectorAll('.open-cert-link').forEach(link => {
    link.addEventListener('click', () => {
      alert("Certificate of Craft: Every ANIMA piece is stamped with Master Atelier assay hallmarks in Geneva and accompanied by an encrypted anatomical certificate.");
    });
  });

  document.querySelectorAll('.open-philosophy-link').forEach(link => {
    link.addEventListener('click', () => {
      alert("ANIMA (Latin: The Body & Physical Permanence) and PNEUMA (Ancient Greek: Breath & Kinetic Lightness). Conceived for the healers who restore human life.");
    });
  });

  document.querySelectorAll('.open-social-link').forEach(link => {
    link.addEventListener('click', () => {
      window.open('https://instagram.com', '_blank');
    });
  });

  document.querySelectorAll('.open-legal-link').forEach(link => {
    link.addEventListener('click', () => {
      alert("ANIMA / PNEUMA observes strict Swiss banking confidentiality protocols for all client records and anatomical metrics.");
    });
  });

  // Global Close All Modals
  function closeAllModals() {
    closeMenu();
    closeLoupe();
    closeSizeGuide();
    closeSearch();
    closeLoginModal();
    closeCareModal();
    closeCommissionModal();
    closeCountryModal();
    closeMeaningModal();
    if (productDetailView.classList.contains('is-open')) closeProductDetail();
    if (collectionView.classList.contains('is-open')) closeCollectionView();
  }

});
