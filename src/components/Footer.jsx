// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rally del Garda - Organizzato da Northon Racing e AUTOCONSULT ASD</p>
        <p>
          Email:{" "}
          <a href="mailto:info@rallydelgarda.com">info@rallydelgarda.com</a>{" "}
          - Tel:{" "}
          <a href="tel:+393202766400">0039 335 5904325</a>
        </p>

        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/termini-e-condizioni">Termini e Condizioni</Link>
        </div>
      </div>

      <div className="footer-credit">
        <div className="footer-credit-line">
          <span>Sito realizzato da </span>
          <a
            href="https://www.instagram.com/bksoluti0n/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
            title="BKSolution su Instagram"
          >
            BKSolution
          </a>
        </div>
        <div className="footer-credit-phone">
          <a href="tel:+393202766400" className="footer-credit-phone-link">
            320 2766400
          </a>
        </div>
      </div>
    </footer>
  );
}