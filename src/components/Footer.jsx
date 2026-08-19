// src/components/Footer.jsx
import "./Footer.css";

export function Footer({ onChangeSection }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rally del Garda - Organizzato da Northon Racing</p>
        <p>Email: info@rallydelgarda.com - Tel: 0039 335 5904325</p>

        <div className="footer-legal-links">
          <button type="button" onClick={() => onChangeSection("privacy")}>
            Privacy Policy
          </button>
          <button type="button" onClick={() => onChangeSection("cookie")}>
            Cookie Policy
          </button>
          <button type="button" onClick={() => onChangeSection("termini")}>
            Termini e Condizioni
          </button>
        </div>
      </div>
    </footer>
  );
}