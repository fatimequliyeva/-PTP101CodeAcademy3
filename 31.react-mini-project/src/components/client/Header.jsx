import React from 'react';
import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="header-content">
          <div className="contact-info">
            <span className="info-item">
              <FaPhoneAlt className="icon" /> 
              <a href="tel:+994506633402" className="info-link">+994 50 633 34 02</a>
            </span>
            <span className="info-item">
              <FaPaperPlane className="icon" /> 
              <a href="mailto:fatimashg@code.edu.az" className="info-link">fatimashg@code.edu.az</a>
            </span>
          </div>
          <div className="delivery-info">
            <span>3-5 Business days delivery & Free Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
