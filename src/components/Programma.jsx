// src/components/Programma.jsx

import { useState } from "react";
import rallyModernoPdf from "../assets/rally-moderno.pdf";
import regolaritaPdf from "../assets/regolarita.pdf";
import "./Programma.css";

const programmi = [
  {
    id: "rally-moderno",
    titolo: "Rally moderno",
    pdf: rallyModernoPdf,
  },
  {
    id: "regolarita",
    titolo: "Regolarità",
    pdf: regolaritaPdf,
  },
];

export function Programma() {
  const [programmaAttivo, setProgrammaAttivo] = useState(programmi[0]);

  return (
    <section className="page-section programma" aria-labelledby="programma-title">
      <div className="programma-header">
        <div>
          <span className="programma-label">Manifestazione</span>
          <h1 id="programma-title">Programma</h1>
          <p>Consulta il programma della categoria che ti interessa.</p>
        </div>

        <a
          className="programma-open-link"
          href={programmaAttivo.pdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apri in una nuova scheda
        </a>
      </div>

      <div className="programma-tabs" role="tablist" aria-label="Seleziona il programma">
        {programmi.map((programma) => (
          <button
            key={programma.id}
            id={`tab-${programma.id}`}
            className={`programma-tab ${
              programmaAttivo.id === programma.id ? "active" : ""
            }`}
            type="button"
            role="tab"
            aria-selected={programmaAttivo.id === programma.id}
            aria-controls="programma-panel"
            onClick={() => setProgrammaAttivo(programma)}
          >
            {programma.titolo}
          </button>
        ))}
      </div>

      <div
        className="programma-viewer"
        id="programma-panel"
        role="tabpanel"
        aria-labelledby={`tab-${programmaAttivo.id}`}
      >
        <object
          key={programmaAttivo.id}
          data={programmaAttivo.pdf}
          type="application/pdf"
          aria-label={`Programma ${programmaAttivo.titolo}`}
        >
          <p className="programma-fallback">
            Il tuo browser non riesce a visualizzare il PDF direttamente.
            <br />
            <a
              href={programmaAttivo.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apri il programma {programmaAttivo.titolo} in una nuova scheda
            </a>
          </p>
        </object>
      </div>
    </section>
  );
}