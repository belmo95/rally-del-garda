// src/components/Programma.jsx

import pdfUrl from "../assets/programma.pdf";
import "./Programma.css";

export function Programma() {
  return (
    <section className="page-section programma" aria-labelledby="programma-title">
      <div className="programma-header">
        <div>
          <span className="programma-label">Manifestazione</span>
          <h1 id="programma-title">Programma</h1>
          <p>Consulta il programma completo direttamente dal sito.</p>
        </div>

        <a
          className="programma-open-link"
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apri in una nuova scheda
        </a>
      </div>

      <div className="programma-viewer">
        <object
          data={pdfUrl}
          type="application/pdf"
          aria-label="Programma completo della manifestazione"
        >
          <p className="programma-fallback">
            Il tuo browser non riesce a visualizzare il PDF direttamente.
            <br />
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Apri il programma in una nuova scheda
            </a>
          </p>
        </object>
      </div>
    </section>
  );
}