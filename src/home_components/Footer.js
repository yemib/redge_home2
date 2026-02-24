import "./Footer.css";

import { useContext } from "react";

import { AuthContext } from "../util/api";

export default function Footer() {
    const{theme}  =  useContext(AuthContext);
  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="logo">Redge</h2>
          <p className="tagline">
            Where communities grow wealth together.
          </p>

          <div className="socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#">Savings</a></li>
            <li><a href="#">Investments</a></li>
            <li><a href="#">Loans</a></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>🌐 www.redge.ng</li>
            <li>✉️ admin@redge.ng</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Redge. All rights reserved.</p>
      </div>
    </footer>
  );
}
