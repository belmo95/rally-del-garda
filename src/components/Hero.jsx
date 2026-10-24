import "./Hero.css";
import logoRally from "../assets/Rally Del Garda targa.png";
import rallyCarImage from "../assets/rally-car.jpg";
import elencoIscrittiPdf from "../assets/ELENCO_ISCRITTI_RALLY_COMPLETO.pdf";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-grid">
        {/* Primo nella struttura per comparire in cima su telefono */}
        <div className="hero-alerts">
          <div className="hero-top-buttons">
            <a
              href="https://webapp.sportity.com/event/Rallydelgarda2026_/62e25a1a-4d63-405d-a64d-360b60319da7"
              className="hero-top-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              ALBO DI GARA UFFICIALE
            </a>

            <a
              href="https://www.cronocarservice.com/event/26-rally-del-garda/"
              className="hero-top-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLASSIFICHE
            </a>
          </div>

          <a
            href={elencoIscrittiPdf}
            className="hero-news-alert"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hero-news-dot" aria-hidden="true" />
            <span className="hero-news-copy">
              <strong>IMPORTANTE</strong>
              <span>ELENCO ISCRITTI UFFICIALE</span>
            </span>
            <span className="hero-news-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="hero-left-panel">
          <div className="hero-badge">26°</div>

          <div className="hero-logo-card">
            <div className="hero-logo-top">memorial Renato Pasquali</div>
            <img
              src={logoRally}
              alt="Logo Rally del Garda"
              className="hero-logo-image"
            />
          </div>

          <div className="hero-date-card">
            <div className="hero-icon-circle" aria-hidden="true">
              📅
            </div>
            <div>
              <p className="hero-date-main">31 OTTOBRE - 1 NOVEMBRE 2026</p>
              <p className="hero-date-sub">TOSCOLANO MADERNO (BS)</p>
            </div>
          </div>

          <div className="hero-register-card">
            <span className="hero-register-label">ISCRIZIONI APERTE DAL:</span>
            <span className="hero-register-date">1/10/2026</span>
          </div>

          <div className="hero-program-card">
            <div className="hero-program-title">PROGRAMMA</div>

            <div className="hero-program-grid">
              <div className="hero-program-col">
                <p>
                  <strong>PARTENZA E ARRIVO</strong>
                  <br />
                  Toscolano Maderno
                </p>
                <p>
                  <strong>PARCO ASSISTENZA</strong>
                  <br />
                  Toscolano Maderno
                </p>
                <p>
                  <strong>RIORDINO NOTTURNO</strong>
                  <br />
                  Salò
                </p>
              </div>

              <div className="hero-program-col">
                <p>
                  <strong>7 PROVE SPECIALI</strong>
                  <br />
                  per un totale di km 60
                </p>
                <p>
                  <strong>DUE GIORNI DI GARA</strong>
                  <br />
                  adrenalina pura
                </p>
                <p>
                  <strong>SPETTACOLO, PASSIONE</strong>
                  <br />
                  E TERRITORIO
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right-panel">
          <div className="hero-top-copy">
            <p className="hero-kicker">DUE GIORNI DI SPETTACOLO</p>
            <h1>
              SULLE STRADE PIÙ BELLE
              <span> DEL GARDA!</span>
            </h1>
          </div>

          <div className="hero-categories">
            <a
              href="/documenti?cat=moderne"
              className="hero-category hero-category-btn"
            >
              RALLY NAZIONALE
            </a>

            <a
              href="/documenti?cat=storiche"
              className="hero-category hero-category-btn"
            >
              RALLY STORICO
            </a>

            <a
              href="/documenti?cat=regolarita-media50"
              className="hero-category hero-category-btn"
            >
              RALLY REGOLARITÀ
            </a>
          </div>

          <div className="hero-car-stage">
            <img
              src={rallyCarImage}
              alt="Auto del Rally del Garda"
              className="hero-car-image"
            />
          </div>

          <div className="hero-values">
            <div className="hero-value">
              <span>SPORT</span>
              <small>Adrenalina e competizione</small>
            </div>

            <div className="hero-value">
              <span>PASSIONE</span>
              <small>La nostra forza da sempre</small>
            </div>

            <div className="hero-value">
              <span>TERRITORIO</span>
              <small>Valorizziamo il Lago di Garda</small>
            </div>

            <div className="hero-value">
              <span>EMOZIONE</span>
              <small>Un’esperienza unica</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}