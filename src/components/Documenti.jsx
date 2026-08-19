// src/components/Documenti.jsx

import { useState } from "react";
import "./Documenti.css";

const discipline = [
  {
    id: "moderne",
    label: "Moderne",
    description: "Documenti relativi alle vetture moderne.",
    documents: [
      {
        title: "Regolamento di gara",
        file: "/documenti/moderne/regolamento-gara.pdf",
      },
      {
        title: "Mappa del percorso",
        file: "/documenti/moderne/mappa-percorso.pdf",
      },
      {
        title: "Modulo iscrizione",
        file: "/documenti/moderne/modulo-iscrizione.pdf",
      },
    ],
  },
  {
    id: "storiche",
    label: "Storiche",
    description: "Documenti relativi alle vetture storiche.",
    documents: [
      {
        title: "Regolamento di gara",
        file: "/documenti/storiche/regolamento-gara.pdf",
      },
      {
        title: "Mappa del percorso",
        file: "/documenti/storiche/mappa-percorso.pdf",
      },
      {
        title: "Modulo iscrizione",
        file: "/documenti/storiche/modulo-iscrizione.pdf",
      },
    ],
  },
  {
    id: "regolarita-media50",
    label: "Regolarità Media50",
    description: "Documenti relativi alla disciplina Regolarità Media50.",
    documents: [
      {
        title: "Regolamento di gara",
        file: "/documenti/regolarita-media50/regolamento-gara.pdf",
      },
      {
        title: "Mappa del percorso",
        file: "/documenti/regolarita-media50/mappa-percorso.pdf",
      },
      {
        title: "Modulo iscrizione",
        file: "/documenti/regolarita-media50/modulo-iscrizione.pdf",
      },
    ],
  },
];

export function Documenti() {
  const [menuAperto, setMenuAperto] = useState(false);
  const documentiDisponibili = false;

  return (
    <section className="page-section documenti" id="documenti">
      <div className="documenti-header">
        <span className="documenti-label">Rally del Garda</span>

        <h1>Documenti</h1>

        <p>
          Seleziona la disciplina per consultare i documenti ufficiali della
          gara.
        </p>
      </div>

      <nav className="documenti-menu" aria-label="Discipline della gara">
        <button
          type="button"
          className={`documenti-menu-button ${
            menuAperto ? "is-open" : ""
          }`}
          aria-expanded={menuAperto}
          aria-controls="documenti-discipline"
          onClick={() => setMenuAperto((aperto) => !aperto)}
        >
          <span className="documenti-menu-icon" aria-hidden="true">
            📁
          </span>

          <span className="documenti-menu-label">Documenti</span>

          <span className="documenti-menu-arrow" aria-hidden="true">
            {menuAperto ? "▲" : "▼"}
          </span>
        </button>

        <div
          id="documenti-discipline"
          className={`documenti-submenu ${
            menuAperto ? "is-open" : ""
          }`}
          hidden={!menuAperto}
        >
          <ul className="documenti-discipline-list">
            {discipline.map((categoria) => (
              <li
                className="documenti-discipline-item"
                key={categoria.id}
              >
                <div className="documenti-discipline-heading">
                  <span
                    className="documenti-discipline-icon"
                    aria-hidden="true"
                  >
                    {documentiDisponibili ? "📄" : "🔒"}
                  </span>

                  <div>
                    <h3>{categoria.label}</h3>
                    <p>{categoria.description}</p>
                  </div>
                </div>

                <ul className="documenti-list">
                  {categoria.documents.map((documento) => (
                    <li className="documenti-item" key={documento.title}>
                      {documentiDisponibili ? (
                        <a
                          href={documento.file}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span aria-hidden="true">📄</span>
                          <span>{documento.title}</span>
                          <span className="documenti-format">PDF</span>
                        </a>
                      ) : (
                        <span
                          className="documento-disponibile"
                          aria-disabled="true"
                        >
                          <span aria-hidden="true">🔒</span>
                          <span>{documento.title}</span>
                          <span className="documenti-format">PDF</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {!documentiDisponibili && (
            <p className="documenti-avviso" role="status">
              I documenti ufficiali saranno disponibili un mese prima della
              gara.
            </p>
          )}
        </div>
      </nav>
    </section>
  );
}