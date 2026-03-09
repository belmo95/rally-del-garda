// src/components/Hero.jsx
import "./Hero.css";
import heroImage from "../assets/Rally Del Garda targa.png";

export function Hero({ onChangeSection }) {
  return (
    <section className="hero hero-vertical">
      {/* Titolo grande in alto */}
      <div className="hero-title-wrapper">
        <h1 className="hero-title">
          RALLY DEL GARDA 2026
        </h1>
        <p className="hero-subtitle">
          Adrenalina, velocità e passione sulle strade del Lago di Garda.
        </p>
      </div>

      {/* Blocco immagine + contenuto sotto */}
      <div className="hero-body">
        <div className="hero-image">
          <img src={heroImage} alt="Rally del Garda" />
        </div>

        <div className="hero-content">
          <span className="hero-badge">
            <span /> Edizione 2026 – Rally del Garda
          </span>
          <p>
            Un weekend di adrenalina pura sulle strade che abbracciano il Lago di Garda, tra tornanti mozzafiato, sterrati veloci e panorami che non dimenticherai.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => onChangeSection("albo")}
            >
              Iscriviti ora
            </button>
            <button
              className="btn-secondary"
              onClick={() => onChangeSection("documenti")}
            >
              Regolamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
