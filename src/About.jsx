import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';

function About() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const teamRef = useRef(null);
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

    const elementsToObserve = document.querySelectorAll('.team-card, .feature-card, .story-content');
    elementsToObserve.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Chief Dentist',
      bio: '15+ years experience in cosmetic and restorative dentistry. Graduated from Harvard School of Dental Medicine.',
      image: 'https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Senior Orthodontist',
      bio: 'Board-certified orthodontist specializing in invisible aligners and modern orthodontic treatments.',
      image: 'https://images.pexels.com/photos/6812564/pexels-photo-6812564.jpeg'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Dentist',
      bio: 'Passionate about childrens dental health. Creates a fun, comfortable environment for young patients.',
      image: 'https://images.pexels.com/photos/6627471/pexels-photo-6627471.jpeg'
    },
    {
      name: 'Dr. James Park',
      role: 'Oral Surgeon',
      bio: 'Expert in complex extractions, dental implants, and oral surgery procedures with minimally invasive techniques.',
      image: 'https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg'
    },
    {
      name: 'Dr. Lisa Thompson',
      role: 'Endodontist',
      bio: 'Root canal specialist using advanced microscopy for precise, pain-free procedures and optimal outcomes.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Dr. David Kumar',
      role: 'Periodontist',
      bio: 'Specializes in gum health, dental implants, and treating periodontal disease with cutting-edge techniques.',
      image: 'https://images.pexels.com/photos/6627447/pexels-photo-6627447.jpeg'
    }
  ];

  const features = [
    {
      icon: '🔬',
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art equipment including digital X-rays, 3D scanning, and laser dentistry for precise, comfortable care.'
    },
    {
      icon: '💝',
      title: 'Compassionate Care',
      description: 'We understand dental anxiety. Our gentle approach and sedation options ensure a stress-free experience.'
    },
    {
      icon: '⚡',
      title: 'Fast & Efficient',
      description: 'Same-day appointments, minimal wait times, and streamlined processes that respect your busy schedule.'
    },
    {
      icon: '🏆',
      title: 'Award-Winning Team',
      description: 'Recognized for excellence in patient care and advanced dental techniques by leading healthcare organizations.'
    },
    {
      icon: '💰',
      title: 'Flexible Financing',
      description: 'Multiple payment options, insurance acceptance, and affordable plans to make quality care accessible.'
    },
    {
      icon: '🌟',
      title: 'Lifetime Guarantee',
      description: 'Confidence in our work: we stand behind our treatments with comprehensive warranties and follow-up care.'
    }
  ];

  return (
    <>
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
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-description">
            Transforming dental care through innovation, compassion, and excellence
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="story-section white-screen-section">
        <div className="story-content">
          <div className="story-header">
            <div className="story-divider" />
            <h2 className="story-title">Our Story</h2>
          </div>
          <div className="story-grid">
            <div className="story-text">
              <p className="story-lead">
                Founded in 2010, Sheva Dental Care emerged from a simple yet powerful vision:
                to make world-class dental treatment accessible, comfortable, and personalized
                for every patient who walks through our doors.
              </p>
              <p>
                What began as a single-chair practice has grown into Dhakas premier dental
                destination, serving thousands of satisfied patients with our commitment to
                excellence remains unchanged. We believe that exceptional dental care should
                be a standard, not a luxury.
              </p>
              <p>
                Our journey is defined by continuous learning, technological advancement, and,
                most importantly, the trust weve built with our community. Every smile weve
                transformed, every anxious patient weve reassured, reinforces our purpose.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg"
                alt="Modern dental clinic interior with advanced equipment"
                loading="lazy"
              />
              <div className="story-image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon"></div>
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              To deliver exceptional dental care that transforms lives through advanced
              technology, compassionate service, and a patient-first approach. We are
              committed to making quality dental health achievable for everyone in our
              community.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon"></div>
            <h3 className="mission-title">Our Vision</h3>
            <p className="mission-text">
              To be Dhakas most trusted dental provider, setting new standards for
              excellence, innovation, and patient satisfaction. We envision a future
              where every person can smile with confidence, knowing they have access
              to the best oral healthcare available.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section black-screen-section" ref={teamRef}>
        <div className="team-content">
          <div className="team-header">
            <div className="team-divider" />
            <h2 className="team-title">Meet Our Expert Team</h2>
            <p className="team-subtitle">
              Dedicated professionals committed to your dental health and comfort
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-card-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="team-card-image"
                  />
                  <div className="team-card-overlay">
                    <p className="team-card-bio">{member.bio}</p>
                  </div>
                </div>
                <div className="team-card-info">
                  <h4 className="team-card-name">{member.name}</h4>
                  <p className="team-card-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / FEATURES */}
      <section className="features-section white-screen-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-divider" />
            <h2 className="features-title">Why Choose Sheva Dental?</h2>
            <p className="features-subtitle">
              We combine expertise, technology, and compassion to deliver an unmatched dental experience
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-overlay" />
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Smile?</h2>
          <p className="cta-description">
            Book your appointment today and experience the Sheva Dental difference.
            Our team is ready to help you achieve the healthy, beautiful smile you deserve.
          </p>
          <div className="cta-buttons">
            <a href="#book" className="btn btn-primary btn-large">Book Online Now</a>
            <a href="#contact" className="btn btn-secondary btn-large">Contact Us</a>
          </div>
          <p className="cta-note">Or call us directly: +880 1812 312 312</p>
        </div>
      </section>

      <footer className="about-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3 className="footer-logo">Sheva Dental Care</h3>
            <p className="footer-tagline">The Future of Dental Health</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <a href="#general">General Dentistry</a>
              <a href="#cosmetic">Cosmetic Dentistry</a>
              <a href="#orthodontics">Orthodontics</a>
              <a href="#implants">Dental Implants</a>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p>House 123, Road 45<br />Dhanmondi, Dhaka 1209</p>
              <p>+880 1812 312 312</p>
              <p>info@shevadental.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Sheva Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default About;
