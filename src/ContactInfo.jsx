import { NavLink } from 'react-router-dom';

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <h2>Get In Touch</h2>
        <div className="info-cards">
          <a href="mailto:info@shevadental.com" className="info-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>info@shevadental.com</p>
            </div>
          </a>

          <a href="tel:+8801812312312" className="info-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+880 1812 312 312</p>
            </div>
          </a>

          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="info-card">
            <div className="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>House 123, Road 45<br />Dhanmondi, Dhaka 1209</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
