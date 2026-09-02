// src/components/Documenti.jsx

import { useState } from "react";
import "./Documenti.css";

// Import dei PDF (percorsi relativi a src)
import moderne_RPG from "../assets/documenti/moderne/RPG.pdf";
import moderne_modulo from "../assets/documenti/moderne/SCHEDA ISCRIZIONE MODERNO.pdf";


import storiche_modulo from "../assets/documenti/storiche/SCHEDA ISCRIZIONE STORICO.pdf";

const discipline = [
  {
    id: "moderne",
    label: "Moderne",
    description: "Documenti relativi alle vetture moderne.",
    documents: [
      {
        title: "Regolamento Particolare di Gara (RPG)",
        file: moderne_RPG,
      },
      {
        title: "Modulo iscrizioni",
        file: moderne_modulo,
      },
  
    ],
  },
  {
    id: "storiche",
    label: "Storiche",
    description: "Documenti relativi alle vetture storiche.",
    documents: [
      {
        title: "Modulo iscrizioni",
        file: storiche_modulo,
      },
    ],
  },
  {
    id: "regolarita-media50",
    label: "Regolarità Media50",
    description: "Documenti relativi alla disciplina Regolarità Media50.",
    documents: [],
  },
];

export function Documenti() {
  const [menuAperto, setMenuAperto] = useState(false);

  // Se vuoi mostrare subito i documenti, metti true
  const documentiDisponibili = true;

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
                    {categoria.documents.length > 0 && documentiDisponibili
                      ? "📄"
                      : "🔒"}
                  </span>

                  <div>
                    <h3>{categoria.label}</h3>
                    <p>{categoria.description}</p>
                  </div>
                </div>

                {categoria.documents.length > 0 && documentiDisponibili ? (
                  <ul className="documenti-list">
                    {categoria.documents.map((documento) => (
                      <li className="documenti-item" key={documento.title}>
                        <a
                          href={documento.file}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span aria-hidden="true">📄</span>
                          <span>{documento.title}</span>
                          <span className="documenti-format">PDF</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="documenti-avviso" role="status">
                    I documenti ufficiali saranno disponibili un mese prima della
                    gara.
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}