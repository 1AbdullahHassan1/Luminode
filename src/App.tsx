function App() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        <div className="hero-content">
          <div className="logo-container">
            <img src="/luminode-logo.svg" alt="Luminode Logo" className="logo" />
          </div>

          <h1 className="hero-title">Exploring Space Through AI. Join the Future.</h1>

          <p className="hero-subtitle">
            Luminode Clan empowers young innovators to explore astronomy, planetary science, and AI-powered discovery.
          </p>

          <button className="cta-button" onClick={() => document.querySelector('.connect-section')?.scrollIntoView({ behavior: 'smooth' })}>Join the Community</button>
        </div>
      </section>

      <section className="about-section">
        <div className="section-card">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Luminode Clan is a youth-powered science research group uniting AI and space exploration.
            We create accessible hands-on challenges and research missions for students, universities,
            and aspiring scientists.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="section-card">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            To inspire and equip the next generation through AI and space research.
          </p>

          <div className="mission-icons">
            <div className="mission-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <p>AI Research</p>
            </div>

            <div className="mission-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <p>Space Science</p>
            </div>

            <div className="mission-item">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <p>Hands-on Challenges</p>
            </div>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <h2 className="section-title">Connect With Us</h2>
        <div className="social-icons">
          <a href="https://www.instagram.com/luminodejo" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="#1a1a2e" strokeWidth="2"></path>
              <circle cx="17.5" cy="6.5" r="1.5" fill="#1a1a2e"></circle>
            </svg>
          </a>

          <a href="https://www.tiktok.com/@luminode.jo?_r=1&_t=ZN-91OtUZnl0n0" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>

          <a href="https://shorturl.at/AJ9jo" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>LUMINODE CLAN — POWERED BY CURIOSITY.</p>
      </footer>
    </div>
  );
}

export default App;
