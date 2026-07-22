
  // ──────────────────────────────────────────────
  // DEFAULT MODEL (same as admin panel)
  // ──────────────────────────────────────────────
  const DEFAULT_MODEL = {
    page_title: 'Horizon Travel – Fly Beyond Borders',
    topbar: {
      location: 'New York, USA',
      phone: '+1 (800) 345 678',
      email: 'info@horizontravel.com',
      socials: { facebook: '#', twitter: '#', instagram: '#', youtube: '#' }
    },
    navbar: {
      logoText: 'Horizon',
      logoAccent: 'Travel',
      logoIcon: '✈️',
      links: [
        { label: 'Home', href: '#' },
        { label: 'About', href: '/frontend/about/about.html' },
        { label: 'Blog', href: '/frontend/blog/blog.html' },
        { label: 'Destinations', href: '/frontend/destinations/destinations.html' },
        { label: 'Packages', href: '/frontend/pack/pack.html' },
        { label: 'Contact', href: '/frontend/contact/contact.html' }
      ],
      ctaLabel: 'Book Now',
      ctaHref: '/frontend/pack/pack.html'
    },
    hero: {
      eyebrow: 'Explore the World',
      heading: 'Fly Beyond Borders,',
      headingAccent: 'Discover New Horizons',
      subtext: 'We craft unforgettable journeys to destinations across all 7 continents. Expert guides, curated itineraries, and memories that last a lifetime — this is travel, reimagined.',
      btn1Label: '✈ Explore Packages',
      btn1Href: '/frontend/pack/pack.html',
      btn2Label: '▶ Our Story',
      btn2Href: '/frontend/about/about.html'
    },
    search: {
      searchCardTitle: '🔍 Find Your Perfect Trip',
      searchTabs: ['Flights', 'Hotels', 'Tours']
    },
    stats: [
      { number: '15K+', label: 'Happy Travelers' },
      { number: '120+', label: 'Destinations' },
      { number: '18', label: 'Years Experience' },
      { number: '98%', label: 'Satisfaction Rate' }
    ],
    services: {
      eyebrow: 'What We Offer',
      heading: 'Our Travel',
      headingAccent: 'Services',
      description: 'From dream-planning to touchdown, we handle every detail so you can focus on the experience.',
      items: [
        { icon: '✈️', title: 'Flight Bookings', description: 'We search hundreds of airlines to find the best fares and most convenient routes for your journey, with 24/7 support from our flight specialists.' },
        { icon: '🏨', title: 'Hotel & Stays', description: 'Handpicked accommodations from budget-friendly guesthouses to 5-star resorts, all vetted by our travel experts for quality and location.' },
        { icon: '🗺️', title: 'Guided Tours', description: 'Immersive cultural experiences led by knowledgeable local guides who bring each destination\'s history and hidden gems to life.' }
      ]
    },
    about: {
      eyebrow: 'About Our Company',
      heading: 'A Small but',
      headingAccent: 'Passionate',
      headingSuffix: 'Team of Travel Experts',
      para1: 'We believe travel is the best education you can give yourself. Since 2006, Horizon Travel has been connecting adventurers with transformative journeys — whether it\'s a family beach holiday, a solo backpacking epic, or a bespoke luxury escape.',
      para2: 'Our team of 40+ destination specialists has collectively visited over 160 countries. We don\'t just sell tickets; we craft experiences rooted in genuine local knowledge and a deep love for exploration.',
      quote: '"Travel far enough and you meet yourself."',
      quoteAuthor: 'Marcus Chen, CEO & Founder',
      yearsNumber: '18',
      yearsLabel: 'Years of Travel Excellence',
      missionTitle: 'Our Mission',
      missionText: 'To make the world more connected by making meaningful travel accessible, sustainable, and deeply personal for every traveler we serve.'
    },
    destinations: {
      eyebrow: 'Working Areas',
      heading: 'Covered',
      headingAccent: 'Destinations',
      description: 'We operate across every continent, bringing you closer to the world\'s most remarkable places.',
      items: [
        { icon: '🗽', region: '🏙️ North America', name: 'New York & Beyond', info: '12 curated itineraries · From $899', bg: 'linear-gradient(135deg, #1565C0, #0D47A1)' },
        { icon: '🌿', region: '🌳 Africa', name: 'Safari Kenya', info: '8 tours · From $2,400', bg: 'linear-gradient(135deg, #2E7D32, #1B5E20)' },
        { icon: '🏯', region: '⛩️ Asia', name: 'Japan & Korea', info: '15 tours · From $1,650', bg: 'linear-gradient(135deg, #E65100, #BF360C)' },
        { icon: '🏟️', region: '🏛️ Europe', name: 'Mediterranean', info: '20 tours · From $1,200', bg: 'linear-gradient(135deg, #4A148C, #311B92)' },
        { icon: '🌊', region: '🌴 Pacific', name: 'Maldives', info: '6 tours · From $3,100', bg: 'linear-gradient(135deg, #006064, #004D40)' }
      ]
    },
    packages: {
      eyebrow: 'Recently Completed Works',
      heading: 'Popular Travel',
      headingAccent: 'Packages',
      items: [
        { badge: 'Best Seller', icon: '🌏', bg: 'linear-gradient(135deg, #006064, #00838F)', duration: '10 Days', type: 'Group Tour', rating: '4.9', title: 'Southeast Asia Explorer — Thailand, Vietnam & Cambodia', description: 'Ancient temples, floating markets, and pristine beaches across three iconic Southeast Asian nations.', price: '$1,840', priceNote: '/ person' },
        { badge: 'Adventure', icon: '🏔️', bg: 'linear-gradient(135deg, #1565C0, #1976D2)', duration: '14 Days', type: 'Private Tour', rating: '4.8', title: 'Himalayan Trek — Nepal Base Camp Expedition', description: 'Guided trekking to Everest Base Camp with experienced Sherpa guides, stunning mountain lodges, and life-changing views.', price: '$2,990', priceNote: '/ person' },
        { badge: 'Luxury', icon: '🌅', bg: 'linear-gradient(135deg, #E65100, #F4511E)', duration: '7 Days', type: 'Couples', rating: '5.0', title: 'Maldives Luxury Retreat — Overwater Villa Escape', description: 'Crystal lagoons, private overwater villas with glass floors, sunset cruises, and world-class diving in paradise.', price: '$4,600', priceNote: '/ person' }
      ]
    },
    process: {
      eyebrow: 'To Do Good Design',
      heading: 'Our Working',
      headingAccent: 'Process',
      steps: [
        { num: '01', icon: '💡', title: 'Idea & Design', description: 'Share your travel dreams with our specialists. We listen, explore possibilities, and begin crafting a journey that fits your vision and budget.' },
        { num: '02', icon: '📋', title: 'Specification', description: 'We build your full itinerary with flights, accommodations, guides, and activities — every detail confirmed and tailored to your preferences.' },
        { num: '03', icon: '🌍', title: 'Execution', description: 'You travel. We handle everything behind the scenes — with 24/7 support, real-time assistance, and local contacts at every destination.' }
      ]
    },
    appointment: {
      heading: '✈ Want to Work With Our Professional Team?',
      subtext: 'Make an appointment today — our travel consultants are available 7 days a week.',
      btnLabel: 'Make An Appointment →',
      btnHref: '/frontend/about/about.html'
    },
    testimonials: {
      eyebrow: 'Testimonials',
      heading: 'Our Customer',
      headingAccent: 'Words',
      items: [
        { initial: 'L', name: 'Lauren Porter', location: 'California', rating: 5, text: 'The Southeast Asia trip was everything we hoped for and more. Our guide was brilliant, the hotels were perfect.' },
        { initial: 'N', name: 'Nadia & James Amet', location: 'Los Angeles', rating: 5, text: 'Horizon planned our honeymoon in the Maldives, and it was absolute perfection. Every tiny detail was attended to.' },
        { initial: 'D', name: 'Dalor Ipsum', location: 'Denver & City', rating: 5, text: 'The Nepal trekking expedition was challenging and absolutely worth every step. The Sherpa guides were exceptional.' }
      ]
    },
    contact: {
      eyebrow: 'Contact Lines',
      heading: 'How Can We',
      headingAccent: 'Help You?',
      formTitle: 'Make Appointment',
      formSubtext: 'Fill in the form below and we\'ll get back to you within 24 hours. Don\'t hesitate to ask!',
      interests: ['Flight Booking', 'Hotel & Stays', 'Guided Tour', 'Custom Package']
    },
    blogs: {
      eyebrow: 'News & Updates',
      heading: 'Latest From',
      headingAccent: 'Blog',
      items: [
        { day: '25', month: 'May', icon: '🏖️', bg: 'linear-gradient(135deg, #0277BD, #01579B)', title: 'Low Cost Interior Designing Ideas for Your Next Hotel Stay', description: 'Discover how to pick accommodations that feel luxurious without breaking the bank.' },
        { day: '28', month: 'May', icon: '🌆', bg: 'linear-gradient(135deg, #2E7D32, #388E3C)', title: 'Commercial Design for Project — Sustainable Travel Spaces', description: 'How eco-conscious architecture is reshaping travel hubs and airports around the world.' },
        { day: '27', month: 'May', icon: '🌸', bg: 'linear-gradient(135deg, #6A1B9A, #7B1FA2)', title: 'Our Interior Design Prediction 2018 — Japan Off-Season Guide', description: 'The best time to visit Japan without the crowds: cherry blossom season alternatives.' }
      ]
    },
    newsletter: {
      heading: '✈ Subscribe for Newsletter',
      subtext: 'Manage your business with our travel insights — deals, destination guides, and more.',
      btnLabel: 'Subscribe Now'
    },
    footer: {
      logoText: 'Horizon',
      logoAccent: 'Travel',
      about: 'We are a passionate team of travel designers dedicated to crafting beautiful, meaningful journeys.',
      address: '1420 Park Ave Road, Flatbush, Bronx, New York 10457, USA',
      phone: '+1 (800) 345 678 89',
      email: 'info@horizontravel.com',
      copyright: '© 2025 Horizon Travel. All Rights Reserved.',
      quickLinks: [
        { label: 'Concept Design', href: '#' },
        { label: 'Project Designs', href: '#' },
        { label: 'Make Overs', href: '#' },
        { label: 'About Company', href: '#' },
        { label: 'Space Planning', href: '#' }
      ],
      recentNews: [
        { icon: '✈', bg: 'linear-gradient(135deg, #0277BD, #01579B)', title: 'Creating charm and feeling what I know now', date: 'June 1, 2018' },
        { icon: '🏔', bg: 'linear-gradient(135deg, #2E7D32, #388E3C)', title: 'Enjoy maximum comfort of furniture now', date: 'June 8, 2018' },
        { icon: '🌅', bg: 'linear-gradient(135deg, #6A1B9A, #7B1FA2)', title: 'Wandering exterior design is growing', date: 'June 16, 2018' }
      ],
      newsletterText: 'Get in your inbox the latest News and Offers from Horizon Travel.'
    }
  };

  // ──────────────────────────────────────────────
  // Load data from API
  // ──────────────────────────────────────────────
  async function loadHomePage() {
    try {
      const res = await fetch('/api/index');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      if (data.length === 0) {
        console.warn('No homepage data found, using fallback');
        return null;
      }
      return data[0]; // assume only one record
    } catch (err) {
      console.error('Failed to load homepage:', err);
      return null;
    }
  }

  // ──────────────────────────────────────────────
  // Render the page with the loaded data (or fallback)
  // ──────────────────────────────────────────────
  async function renderHomePage() {
    let row = await loadHomePage();
    if (!row) {
      // Use the default model as fallback
      row = JSON.parse(JSON.stringify(DEFAULT_MODEL));
      console.info('Using default content');
    }

    // Parse all JSON fields (they are already objects from the API, but we keep the fallback)
    const topbar = row.topbar || {};
    const navbar = row.navbar || {};
    const hero = row.hero || {};
    const search = row.search || {};
    const stats = row.stats || [];
    const services = row.services || {};
    const about = row.about || {};
    const destinations = row.destinations || {};
    const packages = row.packages || {};
    const process = row.process || {};
    const appointment = row.appointment || {};
    const testimonials = row.testimonials || {};
    const contact = row.contact || {};
    const blogs = row.blogs || {};
    const newsletter = row.newsletter || {};
    const footer = row.footer || {};

    // ─── 1. Topbar ──────────────────────────────
    const topbarInfo = document.querySelector('.topbar-info');
    if (topbarInfo) {
      topbarInfo.innerHTML = `
        <span>📍 ${topbar.location}</span>
        <span>📞 ${topbar.phone}</span>
        <span>✉️ ${topbar.email}</span>
      `;
    }
    const socialContainer = document.querySelector('.topbar-social');
    if (socialContainer && topbar.socials) {
      socialContainer.innerHTML = `
        <a href="${topbar.socials.facebook}">fb</a>
        <a href="${topbar.socials.twitter}">tw</a>
        <a href="${topbar.socials.instagram}">ig</a>
        <a href="${topbar.socials.youtube}">yt</a>
      `;
    }

    // ─── 2. Navbar ──────────────────────────────
    const logoText = document.querySelector('.logo .logo-text');
    if (logoText) {
      logoText.innerHTML = `${navbar.logoText}<span>${navbar.logoAccent}</span>`;
    }
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navbar.links) {
      navLinks.innerHTML = navbar.links.map(link =>
        `<li><a href="${link.href}">${link.label}</a></li>`
      ).join('') + `<li><a href="${navbar.ctaHref}" class="nav-cta">${navbar.ctaLabel}</a></li>`;
    }

    // ─── 3. Hero ────────────────────────────────
    const heroEyebrow = document.querySelector('.hero-eyebrow');
    if (heroEyebrow) heroEyebrow.textContent = hero.eyebrow;
    const heroH1 = document.querySelector('.hero-h1');
    if (heroH1) {
      heroH1.innerHTML = `${hero.heading} <em>${hero.headingAccent}</em>`;
    }
    const heroSub = document.querySelector('.hero-sub');
    if (heroSub) heroSub.textContent = hero.subtext;
    const heroBtns = document.querySelector('.hero-btns');
    if (heroBtns) {
      heroBtns.innerHTML = `
        <a href="${hero.btn1Href}" class="btn-primary">${hero.btn1Label}</a>
        <a href="${hero.btn2Href}" class="btn-outline">${hero.btn2Label}</a>
      `;
    }

    // ─── 4. Search Card ─────────────────────────
    const searchTitle = document.querySelector('.search-card-title');
    if (searchTitle) searchTitle.textContent = search.searchCardTitle;
    const searchTabs = document.querySelector('.search-tabs');
    if (searchTabs && search.searchTabs) {
      searchTabs.innerHTML = search.searchTabs.map(tab =>
        `<div class="search-tab">${tab}</div>`
      ).join('');
    }

    // ─── 5. Stats ────────────────────────────────
    const statsBar = document.querySelector('.stats-inner');
    if (statsBar && stats.length) {
      statsBar.innerHTML = stats.map(stat =>
        `<div class="stat"><div class="stat-number">${stat.number}</div><div class="stat-label">${stat.label}</div></div>`
      ).join('');
    }

    // ─── 6. Services ─────────────────────────────
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid && services.items) {
      servicesGrid.innerHTML = services.items.map(svc =>
        `<div class="service-card">
          <div class="service-icon">${svc.icon}</div>
          <h3>${svc.title}</h3>
          <p>${svc.description}</p>
          <a href="/frontend/booking/booking.html" class="read-more">Read More →</a>
        </div>`
      ).join('');
    }
    // Section header for services (if you have separate elements)
    const svcEyebrow = document.querySelector('.services-eyebrow');
    if (svcEyebrow) svcEyebrow.textContent = services.eyebrow;
    const svcHeading = document.querySelector('.services-heading');
    if (svcHeading) svcHeading.innerHTML = `${services.heading} <span>${services.headingAccent}</span>`;
    const svcDesc = document.querySelector('.services-description');
    if (svcDesc) svcDesc.textContent = services.description;

    // ─── 7. About ────────────────────────────────
    const abEyebrow = document.querySelector('.about-eyebrow');
    if (abEyebrow) abEyebrow.textContent = about.eyebrow;
    const abHeading = document.querySelector('.about-heading');
    if (abHeading) abHeading.innerHTML = `${about.heading} <span>${about.headingAccent}</span> ${about.headingSuffix}`;
    const abPara1 = document.querySelector('.about-para1');
    if (abPara1) abPara1.textContent = about.para1;
    const abPara2 = document.querySelector('.about-para2');
    if (abPara2) abPara2.textContent = about.para2;
    const abQuote = document.querySelector('.about-quote');
    if (abQuote) abQuote.textContent = about.quote;
    const abQuoteAuthor = document.querySelector('.about-quote-author');
    if (abQuoteAuthor) abQuoteAuthor.textContent = about.quoteAuthor;
    const abYearsNum = document.querySelector('.about-years-number');
    if (abYearsNum) abYearsNum.textContent = about.yearsNumber;
    const abYearsLabel = document.querySelector('.about-years-label');
    if (abYearsLabel) abYearsLabel.textContent = about.yearsLabel;
    const abMissionTitle = document.querySelector('.about-mission-title');
    if (abMissionTitle) abMissionTitle.textContent = about.missionTitle;
    const abMissionText = document.querySelector('.about-mission-text');
    if (abMissionText) abMissionText.textContent = about.missionText;

    // ─── 8. Destinations ─────────────────────────
    const destEyebrow = document.querySelector('.destinations-eyebrow');
    if (destEyebrow) destEyebrow.textContent = destinations.eyebrow;
    const destHeading = document.querySelector('.destinations-heading');
    if (destHeading) destHeading.innerHTML = `${destinations.heading} <span>${destinations.headingAccent}</span>`;
    const destDesc = document.querySelector('.destinations-description');
    if (destDesc) destDesc.textContent = destinations.description;
    const destGrid = document.querySelector('.destinations-grid');
    if (destGrid && destinations.items) {
      destGrid.innerHTML = destinations.items.map(item =>
        `<div class="destination-card" style="background:${item.bg};">
          <div class="destination-icon">${item.icon}</div>
          <div class="destination-region">${item.region}</div>
          <div class="destination-name">${item.name}</div>
          <div class="destination-info">${item.info}</div>
        </div>`
      ).join('');
    }

    // ─── 9. Packages ─────────────────────────────
    const pkgEyebrow = document.querySelector('.packages-eyebrow');
    if (pkgEyebrow) pkgEyebrow.textContent = packages.eyebrow;
    const pkgHeading = document.querySelector('.packages-heading');
    if (pkgHeading) pkgHeading.innerHTML = `${packages.heading} <span>${packages.headingAccent}</span>`;
    const pkgGrid = document.querySelector('.packages-grid');
    if (pkgGrid && packages.items) {
      pkgGrid.innerHTML = packages.items.map(pkg =>
        `<div class="package-card" style="background:${pkg.bg};">
          <span class="package-badge">${pkg.badge}</span>
          <div class="package-icon">${pkg.icon}</div>
          <div class="package-meta">${pkg.duration} · ${pkg.type}</div>
          <div class="package-rating">★ ${pkg.rating}</div>
          <h3 class="package-title">${pkg.title}</h3>
          <p class="package-description">${pkg.description}</p>
          <div class="package-price">${pkg.price} <span>${pkg.priceNote}</span></div>
          <a href="#" class="btn-package">View Details</a>
        </div>`
      ).join('');
    }

    // ─── 10. Process ─────────────────────────────
    const prcEyebrow = document.querySelector('.process-eyebrow');
    if (prcEyebrow) prcEyebrow.textContent = process.eyebrow;
    const prcHeading = document.querySelector('.process-heading');
    if (prcHeading) prcHeading.innerHTML = `${process.heading} <span>${process.headingAccent}</span>`;
    const prcSteps = document.querySelector('.process-steps');
    if (prcSteps && process.steps) {
      prcSteps.innerHTML = process.steps.map(step =>
        `<div class="process-step">
          <div class="step-number">${step.num}</div>
          <div class="step-icon">${step.icon}</div>
          <h4 class="step-title">${step.title}</h4>
          <p class="step-description">${step.description}</p>
        </div>`
      ).join('');
    }

    // ─── 11. Appointment Banner ──────────────────
    const apptHeading = document.querySelector('.appointment-heading');
    if (apptHeading) apptHeading.textContent = appointment.heading;
    const apptSubtext = document.querySelector('.appointment-subtext');
    if (apptSubtext) apptSubtext.textContent = appointment.subtext;
    const apptBtn = document.querySelector('.appointment-btn');
    if (apptBtn) {
      apptBtn.textContent = appointment.btnLabel;
      apptBtn.href = appointment.btnHref;
    }

    // ─── 12. Testimonials ────────────────────────
    const tstEyebrow = document.querySelector('.testimonials-eyebrow');
    if (tstEyebrow) tstEyebrow.textContent = testimonials.eyebrow;
    const tstHeading = document.querySelector('.testimonials-heading');
    if (tstHeading) tstHeading.innerHTML = `${testimonials.heading} <span>${testimonials.headingAccent}</span>`;
    const tstGrid = document.querySelector('.testimonials-grid');
    if (tstGrid && testimonials.items) {
      tstGrid.innerHTML = testimonials.items.map(t =>
        `<div class="testimonial-card">
          <div class="testimonial-initial">${t.initial}</div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-location">${t.location}</div>
          <div class="testimonial-rating">${'★'.repeat(t.rating)}</div>
          <p class="testimonial-text">${t.text}</p>
        </div>`
      ).join('');
    }

    // ─── 13. Contact ─────────────────────────────
    const ctEyebrow = document.querySelector('.contact-eyebrow');
    if (ctEyebrow) ctEyebrow.textContent = contact.eyebrow;
    const ctHeading = document.querySelector('.contact-heading');
    if (ctHeading) ctHeading.innerHTML = `${contact.heading} <span>${contact.headingAccent}</span>`;
    const ctFormTitle = document.querySelector('.contact-form-title');
    if (ctFormTitle) ctFormTitle.textContent = contact.formTitle;
    const ctFormSubtext = document.querySelector('.contact-form-subtext');
    if (ctFormSubtext) ctFormSubtext.textContent = contact.formSubtext;
    const ctInterests = document.querySelector('.contact-interests');
    if (ctInterests && contact.interests) {
      ctInterests.innerHTML = contact.interests.map(interest =>
        `<label><input type="checkbox" value="${interest}"> ${interest}</label>`
      ).join('');
    }

    // ─── 14. Blogs ───────────────────────────────
    const blogEyebrow = document.querySelector('.blog-eyebrow');
    if (blogEyebrow) blogEyebrow.textContent = blogs.eyebrow;
    const blogHeading = document.querySelector('.blog-heading');
    if (blogHeading) blogHeading.innerHTML = `${blogs.heading} <span>${blogs.headingAccent}</span>`;
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid && blogs.items) {
      blogGrid.innerHTML = blogs.items.map(post =>
        `<div class="blog-card" style="background:${post.bg};">
          <div class="blog-date">
            <span class="blog-day">${post.day}</span>
            <span class="blog-month">${post.month}</span>
          </div>
          <div class="blog-icon">${post.icon}</div>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-description">${post.description}</p>
          <a href="#" class="blog-readmore">Read More →</a>
        </div>`
      ).join('');
    }

    // ─── 15. Newsletter ──────────────────────────
    const nlHeading = document.querySelector('.newsletter-heading');
    if (nlHeading) nlHeading.textContent = newsletter.heading;
    const nlSubtext = document.querySelector('.newsletter-subtext');
    if (nlSubtext) nlSubtext.textContent = newsletter.subtext;
    const nlBtn = document.querySelector('.newsletter-btn');
    if (nlBtn) nlBtn.textContent = newsletter.btnLabel;

    // ─── 16. Footer ──────────────────────────────
    const ftLogo = document.querySelector('.footer-logo');
    if (ftLogo) ftLogo.innerHTML = `${footer.logoText}<span>${footer.logoAccent}</span>`;
    const ftAbout = document.querySelector('.footer-about');
    if (ftAbout) ftAbout.textContent = footer.about;
    const ftAddress = document.querySelector('.footer-address');
    if (ftAddress) ftAddress.textContent = footer.address;
    const ftPhone = document.querySelector('.footer-phone');
    if (ftPhone) ftPhone.textContent = footer.phone;
    const ftEmail = document.querySelector('.footer-email');
    if (ftEmail) ftEmail.textContent = footer.email;
    const ftCopyright = document.querySelector('.footer-copyright');
    if (ftCopyright) ftCopyright.textContent = footer.copyright;
    const ftQuickLinks = document.querySelector('.footer-quick-links');
    if (ftQuickLinks && footer.quickLinks) {
      ftQuickLinks.innerHTML = footer.quickLinks.map(link =>
        `<li><a href="${link.href}">${link.label}</a></li>`
      ).join('');
    }
    const ftRecentNews = document.querySelector('.footer-recent-news');
    if (ftRecentNews && footer.recentNews) {
      ftRecentNews.innerHTML = footer.recentNews.map(news =>
        `<div class="footer-news-item" style="background:${news.bg};">
          <span class="news-icon">${news.icon}</span>
          <div class="news-content">
            <h4>${news.title}</h4>
            <span class="news-date">${news.date}</span>
          </div>
        </div>`
      ).join('');
    }
    const ftNewsletterText = document.querySelector('.footer-newsletter-text');
    if (ftNewsletterText) ftNewsletterText.textContent = footer.newsletterText;

    // ─── Page Title ──────────────────────────────
    document.title = row.page_title || 'Horizon Travel';
  }

  // ──────────────────────────────────────────────
  // Call render when DOM is ready
  // ──────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', renderHomePage);


// Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Search tabs
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Generate stars
  const starsEl = document.getElementById('stars');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 4}s;
      animation-duration: ${2 + Math.random() * 3}s;
      width: ${Math.random() > 0.8 ? '3px' : '2px'};
      height: ${Math.random() > 0.8 ? '3px' : '2px'};
    `;
    starsEl.appendChild(s);
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .pkg-card, .testi-card, .blog-card, .dest-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Counter animation
  function animateCounter(el, target, suffix = '') {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      const display = target >= 1000 ? (start/1000).toFixed(0) + 'K' : Math.floor(start);
      el.textContent = display + suffix;
    }, 16);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(el => {
          const text = el.textContent;
          if (text.includes('K')) { animateCounter(el, 15, 'K+'); }
          else if (text.includes('120')) { animateCounter(el, 120, '+'); }
          else if (text === '18') { animateCounter(el, 18, ''); }
          else if (text.includes('%')) { animateCounter(el, 98, '%'); }
        });
        statsObserver.disconnect();
      }
    });
  });
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObserver.observe(statsBar);
