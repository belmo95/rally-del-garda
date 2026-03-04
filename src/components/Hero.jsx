// src/components/Hero.jsx
import "./Hero.css";
import heroImage from "../assets/Rally Del Garda targa.png";

export function Hero() {
  return (
    <section className="hero">
      {/* Immagine a sinistra */}
      <div className="hero-image">
        <img src={heroImage} alt="Rally del Garda" />
      </div>

      {/* Testo a destra */}
      <div className="hero-content">
        <span className="hero-badge">
          <span /> Edizione 2025 – Rally del Garda
        </span>
        <h1>Rally del Garda</h1>
        <p>
          Gara di rally nelle splendide strade attorno al Lago di Garda, tra
          paesaggi unici e prove speciali spettacolari.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">
            Iscriviti ora
          </button>
          <button className="btn-secondary">
            Regolamento
          </button>
        </div>
      </div>
    </section>
  );
}
