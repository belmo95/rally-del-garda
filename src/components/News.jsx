// src/components/News.jsx

import mappaUrl from "../assets/mappa-gara.pdf";
import "./News.css";

export function News() {
  const mappaDisponibile = false;

  return (
    <section className="page-section news" aria-labelledby="news-title">
      <div className="news-header">
        <div>
          <span className="news-label">Rally del Garda</span>
          <h1 id="news-title">News</h1>
          <p>Ultimi comunicati e aggiornamenti sulla gara.</p>
        </div>
      </div>

      {/* Mappa della gara come prima “news” */}
      <div className="news-mappa-section">
        <h3 className="news-mappa-title">Mappa della gara</h3>

        {mappaDisponibile ? (
          <>
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
                  <a
                    href={mappaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          </>
        ) : (
          <div
            className="news-mappa-locked"
            role="status"
            aria-label="Mappa non ancora disponibile"
          >
            <span className="news-mappa-lock" aria-hidden="true">
              🔒
            </span>

            <p className="news-mappa-locked-title">
              Mappa temporaneamente non disponibile
            </p>

            <p className="news-mappa-locked-text">
              La mappa ufficiale sarà visibile un mese prima della gara.
            </p>
          </div>
        )}
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