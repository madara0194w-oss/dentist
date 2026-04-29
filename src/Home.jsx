import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  const videoRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.classList.add('zoomed-out');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="hero">
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
        <video
          ref={videoRef}
          className="hero-video"
          src="https://res.cloudinary.com/drufv7gh5/video/upload/v1777351325/video_514582_1777308515_u9ge08.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '200px', textAlign: 'center' }}>
            <h1 className="hero-heading">
              <span className="hero-line-1">Leading</span>
              <span className="hero-line-break"></span>
              <span className="hero-line-2">Dentist in</span> <span className="hero-line-2">Gulshan, Dhaka</span>
            </h1>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '18px', fontWeight: '400', color: '#00a8cc', margin: 0 }}>
              The Future of Dental Health in Sheva dental.
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px', fontWeight: '400', color: '#fff', margin: 0, maxWidth: '700px', lineHeight: 1.6 }}>
              At Sheva dental care, we utilize the latest dental technology to provide streamlined, expert care that fits into your busy lifestyle without compromising on comfort.
            </p>
            <div className="hero-button-container">
              <div className="hero-button-row">
                <a href="#book" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Book Online</a>
                <a href="#contact" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>Contact Us</a>
              </div>
              <a href="tel:+8801812312312" className="btn btn-tertiary hero-button-full" onClick={() => setMenuOpen(false)}>+8801812312312</a>
            </div>
          </div>
        </div>
      </div>

      <div className="white-screen">
        <div className="white-screen-content">
          <p style={{ color: '#000000', fontSize: '50px', fontWeight: '500', marginTop: '200px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
            Welcome to Sheva dental care.
          </p>
          <div className="section-divider" style={{ width: '800px', height: '2px', backgroundColor: '#00a8cc', margin: '30px auto' }}></div>
          <p style={{ color: '#000000', fontSize: '18px', fontWeight: '400', textAlign: 'center', fontFamily: 'Montserrat, sans-serif', marginTop: '40px', lineHeight: '1.6' }}>
            Led by Dr. Mohammad Rahat, our team brings state-of-the-art technology and a gentle, personalized touch to the community.
          </p>
          <div className="team-section">
            <img src="https://res.cloudinary.com/drufv7gh5/image/upload/v1777447031/Gemini_Generated_Image_h5gi6kh5gi6kh5gi_cdnqej.png" alt="Team" className="team-image" />
            <div className="team-content">
              <p style={{ color: '#000000', fontSize: '18px', fontWeight: '400', lineHeight: '1.6', fontFamily: 'Montserrat, sans-serif', margin: 0 }}>
                Whether you're here for a routine cleaning or a total smile transformation, we're here to make you feel comfortable and cared for—judgment-free.
              </p>
              <p style={{ color: '#000000', fontSize: '18px', fontWeight: '400', lineHeight: '1.6', fontFamily: 'Montserrat, sans-serif', marginTop: '20px', margin: 0 }}>
                We are proud to serve the communities of Chicago, Portage Park, and Norridge, offering care that feels personal from the moment you walk in.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="black-screen-section">
        <div className="black-screen-content">
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', color: '#fff', fontSize: '40px', fontWeight: '700', marginBottom: '24px', marginTop: '50px', textAlign: 'left' }}>
            Meet Dr.
          </h2>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', color: '#fff', fontSize: '40px', fontWeight: '700', marginBottom: '24px', marginTop: '-20px', textAlign: 'left' }}>
            Mohammad Rahat
          </h2>
          <div style={{ width: '400px', height: '3px', backgroundColor: '#00a8cc', margin: '24px 0', marginTop: '-10px' }}></div>
          <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', marginTop: '32px', textAlign: 'left' }}>
            Dr. Mohammad Rahat is a highly skilled and experienced dentist with a passion for providing exceptional dental care to his patients. With years of experience in the field, he has developed a reputation for his gentle approach and commitment to excellence.
          </p>
        </div>
        <div className="doctor-image-container">
          <img src="https://images.unsplash.com/photo-1712215544003-af10130f8eb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dr. Mohammad Rahat" />
        </div>
      </div>

      <div className="why-choose-us-section">
        <div className="why-choose-us-content">
          <div className="why-choose-us-left">
            <p style={{ color: '#000000', fontSize: '42px', fontWeight: '600', textAlign: 'left', fontFamily: 'Montserrat, sans-serif' }}
              className="why-choose-title">
              Why Choose Us?
            </p>
            <div style={{ width: '100px', height: '4px', backgroundColor: '#00a8cc', margin: '30px 0' }}></div>
            <p style={{ color: '#000000', fontSize: '18px', fontWeight: '400', textAlign: 'left', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6', marginTop: '20px' }}
              className="why-choose-desc">
              We combine cutting-edge technology with compassionate care to deliver the best dental experience. Our team is dedicated to making every visit comfortable and stress-free while achieving outstanding results.
            </p>
          </div>
          <div className="why-choose-us-right">
            <img src="https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg" alt="Dental Care" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
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

export default Home;
