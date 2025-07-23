import React from 'react';
import './LoginPage.css';

const RightFooterLinks = () => (
  <div className="right-footer-links">
    <a href="https://www.tm.com.my/sites/default/files/Documents/TM_Privacy_Notice_2023.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    <a href="https://tm.com.my/sites/default/files/Documents/TM_Website_Use_2013_0.pdf" target="_blank" rel="noopener noreferrer">Terms of Service</a>
    <a href="https://tmglobal.com.my/contact-us" target="_blank" rel="noopener noreferrer">Help & Support</a>
  </div>
);

const RightFooterIcons = () => (
  <div className="right-footer-icons">
    <a href="https://www.linkedin.com/company/tmglobal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#2A1E9C"/><path d="M7.5 8.5C8.32843 8.5 9 7.82843 9 7C9 6.17157 8.32843 5.5 7.5 5.5C6.67157 5.5 6 6.17157 6 7C6 7.82843 6.67157 8.5 7.5 8.5Z" fill="white"/><rect x="6" y="10" width="3" height="8" rx="1.5" fill="white"/><path d="M12 10.5H14.5C15.3284 10.5 16 11.1716 16 12V18H13V13.5C13 13.2239 12.7761 13 12.5 13C12.2239 13 12 13.2239 12 13.5V18H9V12C9 11.1716 9.67157 10.5 10.5 10.5H12Z" fill="white"/></svg>
    </a>
    <a href="https://tmglobal.com.my" target="_blank" rel="noopener noreferrer" aria-label="Homepage">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#2A1E9C"/><path d="M12 7L5 12H7V17H11V14H13V17H17V12H19L12 7Z" fill="white"/></svg>
    </a>
    <img src={'/chevron-top.png'} alt="Chevron Top" className="right-footer-chevron" />
  </div>
);

const LoginPage = () => {
  return (
    <div className="login-root">
      {/* Left Column: Video Background */}
      <div className="login-left">
        <img
          src={'/chevron-top.png'}
          alt="Chevron Top"
          className="chevron-top-left enlarged-chevron"
        />
        <video
          className="login-video-bg"
          src={'/worldwide-global-business-technology-digital-conne-2024-11-21-19-38-14-utc.mp4'}
          autoPlay
          loop
          muted
        />
        <div className="login-tagline">
          <span className="animated-text">&lt;Tagline in animated text&gt;</span>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="login-right">
        {/* Top right logo */}
        <img
          src={'/tmg-logo.png'}
          alt="TM Global Logo"
          className="tm-logo top-right"
        />
        <div className="login-content">
          <h2>WELCOME TO</h2>
          <h1>TM GLOBAL SELF-SERVICE PORTAL</h1>
          <p>Access connectivity services and manage your account securely.</p>
          <form className="login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="login-btn">LOG IN</button>
            <button type="button" className="signup-btn">CREATE AN ACCOUNT</button>
          </form>
          <div className="login-links">
            <a href="#">Need help? View the User Guide</a>
            <a href="https://tmglobal.com.my/contact-us" target="_blank" rel="noopener noreferrer">New to TM Global? Sign up here</a>
          </div>
        </div>
        <img
          src={'/chevron-top.png'}
          alt="Chevron Top"
          className="chevron-bottom-right enlarged-chevron"
          style={{ display: 'none' }} // Hide the old chevron
        />
        <RightFooterLinks />
        <RightFooterIcons />
      </div>
    </div>
  );
};

export default LoginPage; 