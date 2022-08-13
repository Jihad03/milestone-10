import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo footer-group">
          <h3>
            Fit<span className="text-highlight">Hub</span>
          </h3>
        </div>
        <div className="need-help-group footer-group">
          <h4>Need Help?</h4>
          <a href="/">Help Center</a>
          <a href="/">Email Support</a>
          <a href="/">Live Chat</a>
          <a href="/">Gift Certificates</a>
          <a href="/">Send Us Feedback</a>
        </div>
        <div className="digital-resource-group footer-group">
          <h4>Digital Resources</h4>
          <a href="/">Articles</a>
          <a href="/">E-books</a>
        </div>
        <div className="connect-with-us-group footer-group">
          <h4>Connect With Us</h4>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
          <a href="/">Youtube</a>
          <a href="/">Whatsapp</a>
        </div>
        <div className="newsletter-group footer-group">
          <h4>Join Our Newsletter</h4>
          <p>
            Get exclusive news, features, and updates from The Shredder Weight
            Loss Academy.
          </p>
        </div>
      </div>
      <p className="copyright">&copy;2022 FitHub. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
