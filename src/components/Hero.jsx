// src/components/Hero.jsx
import "./Hero.css";
import logoRally from "../assets/Rally Del Garda targa.png";
import rallyCarImage from "../assets/rally-car.jpg";

export function Hero({ onChangeSection }) {
  return (
    <section className="hero">
      {/* Overlay dinamico (rimane come nel tuo stile) */}
      <div className="hero-overlay" />

      <div className="hero-inner">
        {/* BLOCCO ALTO: stemma + testo sotto */}
        <div className="hero-logo-block">
          <div className="hero-logo-wrapper">
            <img
              src={logoRally}
              alt="Stemma Rally del Garda"
              className="hero-logo-image"
            />
          </div>

          <div className="hero-logo-text">
            <p>
              PARTENZA DA TOSCOLANO MADERNO SUL LUNGOLAGO VICINO HOTEL MILANO
            </p>
          </div>
        </div>

        {/* SPACER circa 2 cm */}
        <div className="hero-spacer" />

        {/* BLOCCO CENTRALE: testo sx - immagine - testo dx */}
        <div className="hero-middle-row">
          <div className="hero-side-text hero-left-text">
  <p>
    7 PROVE SPECIALI: <br />
    1 SABATO SERA E 6 DOMENICA <br />
    PRIMA PROVA E RIORDINO NOTTURNO <br />
    A SALO' IN PIAZZA DEL MERCATO
  </p>
</div>

          <div className="hero-center-image">
            <img
              src={rallyCarImage}
              alt="Auto da rally"
              className="hero-center-image-img"
            />
          </div>

          <div className="hero-side-text hero-right-text">
            <p>
             DOMENICA MATTINA PARCO ASSISTENZA A TOSCOLANO
             E AL TERMINE ARRIVO A MADERNO SUL LUNGOLAGO
             E PREMIAZIONI SUL PALCO
            </p>
          </div>
        </div>

        {/* BOTTONI AZIONE – manteniamo il tuo stile */}
        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => onChangeSection("albo")}
          >
            <span className="btn-glow" />
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
    </section>
  );
}