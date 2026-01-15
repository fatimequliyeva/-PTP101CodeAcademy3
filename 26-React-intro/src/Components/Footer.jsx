import "../Components/css/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">PTP-101</h2>
          <p className="footer-text">Creating amazing digital experiences that help businesses grow and succeed in the modern world.</p>
        

        </div>





        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>


      </div>
      <div className="footer-bottom">
        <p>© 2025 YourLogo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
