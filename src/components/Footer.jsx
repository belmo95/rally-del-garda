// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rally del Garda - Organizzato da Northon Racing</p>
        <p>
          Email: <a href="mailto:info@rallydelgarda.com">info@rallydelgarda.com</a> - Tel:{" "}
          <a href="tel:+393355904325">0039 335 5904325</a>
        </p>

        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/termini-e-condizioni">Termini e Condizioni</Link>
        </div>
      </div>
    </footer>
  );
}
