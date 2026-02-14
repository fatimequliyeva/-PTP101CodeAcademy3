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
              <FaPhoneAlt className="icon" /> +994 50 663 34 02
            </span>
            <span className="info-item">
              <FaPaperPlane className="icon" /> fatimaquliyeva@mail.com
            </span>
          </div>
          <div className="delivery-info">
            <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
