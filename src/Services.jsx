import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css';

function Services() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const navTimer = setTimeout(() => {
      setNavbarVisible(true);
    }, 2000);
    return () => clearTimeout(navTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToObserve = document.querySelectorAll('.service-card, .process-step, .detailed-service, .choice-card');
    elementsToObserve.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const services = [
    {
      icon: '🦷',
      title: 'General Dentistry',
      description: 'Comprehensive dental exams, cleanings, fillings, and preventive care to maintain your oral health.'
    },
    {
      icon: '✨',
      title: 'Cosmetic Dentistry',
      description: 'Professional teeth whitening, veneers, and smile makeovers to enhance your beautiful smile.'
    },
    {
      icon: '🔧',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.'
    },
    {
      icon: '🏥',
      title: 'Orthodontics',
      description: 'Traditional braces and invisible aligners to straighten teeth and correct bite issues.'
    },
    {
      icon: '👶',
      title: 'Pediatric Dentistry',
      description: 'Gentle, specialized care for children in a friendly and comfortable environment.'
    },
    {
      icon: '💡',
      title: 'Root Canal Treatment',
      description: 'Pain-free root canal therapy using advanced techniques to save damaged teeth.'
    },
    {
      icon: '🌟',
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments that brighten your smile by several shades.'
    },
    {
      icon: '🏆',
      title: 'Emergency Dental Care',
      description: 'Same-day appointments for dental emergencies when you need immediate attention.'
    }
  ];

  const detailedServices = [
    {
      title: 'General Dentistry',
      description: 'Our general dentistry services form the foundation of your oral health. We provide comprehensive examinations, professional cleanings, and preventive treatments to keep your smile healthy. Our team uses the latest technology to detect issues early and provide minimally invasive solutions.',
      image: 'https://pixabay.com/get/g078f46809f3bde83ee14f98bfcc660a509cfa44ae3459c4be8ff591fbc23645b1941d5a4fc83780ba6afd715ff07d4bb_1920.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic dentistry services. From professional teeth whitening to custom porcelain veneers, we can correct discoloration, chips, gaps, and misalignment. Our smile design process considers your facial features and goals to create a natural, beautiful result.',
      image: 'https://pixabay.com/get/g9682369f7384415cbb97c0f3add712dfbeb5ed3be78b2f72f21b42546a2f88286203c3a6d9170e8f8e0ad6609a9c531738a971722503c80d1cb2abf766d320b3_1920.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with dental implants that look and function like natural teeth. Our implant solutions include single tooth replacements, multi-tooth bridges, and full-arch restorations. Using 3D planning and guided surgery, we ensure precise placement and optimal outcomes.',
      image: 'https://pixabay.com/get/g546860a67094503ddf90ea430f3685ec9f7330b2258402a0b627c6575897d04b5bb76e928f08ab4ad184c1ac1671ac21_1920.jpg',
      imagePosition: 'left'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We begin with a thorough examination and discussion of your goals, concerns, and treatment options.'
    },
    {
      step: '02',
      title: 'Treatment Plan',
      description: 'Our team creates a personalized plan using digital imaging to show you exactly what to expect.'
    },
    {
      step: '03',
      title: 'Procedure',
      description: 'Your comfort is our priority. We use gentle techniques and modern anesthesia for pain-free care.'
    },
    {
      step: '04',
      title: 'Aftercare',
      description: 'We provide detailed home care instructions and schedule follow-ups to ensure lasting results.'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🔬',
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment including digital X-rays, 3D scanners, and laser dentistry.'
    },
    {
      icon: '💝',
      title: 'Compassionate Team',
      description: 'Gentle, patient-centered care with sedation options for anxious patients.'
    },
    {
      icon: '⚡',
      title: 'Same-Day Service',
      description: 'Urgent appointments and efficient scheduling to accommodate your busy life.'
    },
    {
      icon: '🏆',
      title: 'Award-Winning',
      description: 'Recognized for excellence in patient care and advanced dental techniques.'
    }
  ];

  return (
    <>
      {/* NAVBAR */}
       <nav className={`navbar ${menuOpen ? 'menu-open' : ''} ${navbarVisible ? 'visible' : ''} ${scrolled ? 'scrolled' : ''}`}>
         <div className="nav-brand">
           <img src="https://res.cloudinary.com/drufv7gh5/image/upload/v1777470455/a3165c8a-5cfa-41e7-a8de-9672d5e9dafa-Picsart-BackgroundRemover_bcyrnd.png" alt="Sheva Dental Care" className="logo-img" />
         </div>
         <div className="mobile-menu">
            <ul className="nav-links">
              <li><NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink></li>
              <li><NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
            </ul>
            <div className="nav-actions">
              <a href="#book" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Book Online</a>
              <NavLink to="/contact" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
              <a href="tel:+8801812312312" className="btn btn-tertiary" onClick={() => setMenuOpen(false)}>+8801812312312</a>
            </div>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            Comprehensive dental care designed to give you a healthy, beautiful smile that lasts a lifetime
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW GRID */}
      <section className="services-overview white-screen-section">
        <div className="services-overview-content">
          <div className="services-section-header">
            <div className="services-divider" />
            <h2 className="services-section-title">What We Offer</h2>
            <p className="services-section-subtitle">
              From routine checkups to complex procedures, we provide a full range of dental services using the latest technology and techniques.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTION */}
      <section className="detailed-services-section">
        {detailedServices.map((service, index) => (
          <div 
            className={`detailed-service white-screen-section ${service.imagePosition === 'right' ? 'image-right' : ''}`} 
            key={index}
          >
            <div className="detailed-service-content">
              <div className="detailed-service-wrapper">
                <div className="detailed-service-header">
                  <div className="detailed-divider" />
                  <h2 className="detailed-service-title">{service.title}</h2>
                </div>
                <p className="detailed-service-text">{service.description}</p>
              </div>
              <div className="detailed-service-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}

        {/* WHY CHOOSE OUR SERVICES */}
        <div className="why-services-section white-screen-section">
          <div className="why-services-content">
            <div className="why-services-header">
              <div className="why-services-divider" />
              <h2 className="why-services-title">Why Choose Our Services?</h2>
              <p className="why-services-subtitle">
                Experience the difference with our patient-first approach and commitment to excellence
              </p>
            </div>
            <div className="why-services-grid">
              {whyChooseUs.map((item, index) => (
                <div className="choice-card" key={index}>
                  <div className="choice-icon">{item.icon}</div>
                  <h4 className="choice-title">{item.title}</h4>
                  <p className="choice-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROCESS / HOW IT WORKS */}
        <div className="process-section">
          <div className="process-container">
            <div className="process-header">
              <div className="process-divider" />
              <h2 className="process-title">Our Process</h2>
              <p className="process-subtitle">
                A simple, transparent approach from consultation to confident smile
              </p>
            </div>
            <div className="process-timeline">
              {processSteps.map((step, index) => (
                <div className="process-step" key={index}>
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <section className="services-cta">
          <div className="services-cta-overlay" />
          <div className="services-cta-content">
            <h2 className="services-cta-title">Ready to Start Your Dental Journey?</h2>
            <p className="services-cta-description">
              Book your consultation today and discover the Sheva Dental difference. Our team is ready to help you achieve the healthy, beautiful smile you deserve.
            </p>
            <div className="services-cta-buttons">
              <a href="#book" className="btn btn-primary btn-large">Book Online Now</a>
              <a href="#contact" className="btn btn-secondary btn-large">Contact Us</a>
            </div>
            <p className="services-cta-note">Or call us directly: +880 1812 312 312</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Services;
