// src/components/News.jsx

import mappaUrl from "../assets/mappa-gara.pdf";
import "./News.css";

export function News() {
  return (
    <section className="page-section news" aria-labelledby="news-title">
      <div className="news-header">
        <div>
          <span className="news-label">Rally del Garda</span>
          <h1 id="news-title">News</h1>
          <p>Ultimi comunicati e aggiornamenti sulla gara.</p>
        </div>
      </div>

      {/* Mappa della gara come prima news */}
      <div className="news-mappa-section">
        <h3 className="news-mappa-title">Mappa della gara</h3>
        <p className="news-mappa-desc">
          Consulta la mappa ufficiale del percorso direttamente dal sito.
        </p>

        <div className="news-mappa-viewer">
          <object
            data={mappaUrl}
            type="application/pdf"
            aria-label="Mappa ufficiale del Rally del Garda"
          >
            <p className="news-mappa-fallback">
              Il tuo browser non riesce a visualizzare il PDF direttamente.
              <br />
              <a href={mappaUrl} target="_blank" rel="noopener noreferrer">
                Apri la mappa in una nuova scheda
              </a>
            </p>
          </object>
        </div>

        <a
          className="news-mappa-link"
          href={mappaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apri mappa in una nuova scheda
        </a>
      </div>

      {/* Lista comunicati */}
      <div className="news-list">
        <article className="news-item">
          <h3>Comunicato n.1</h3>
          <p>Pubblicato il regolamento sportivo del Rally del Garda.</p>
        </article>

        <article className="news-item">
          <h3>Comunicato n.2</h3>
          <p>Aperte le iscrizioni per la gara.</p>
        </article>
      </div>
    </section>
  );
}
