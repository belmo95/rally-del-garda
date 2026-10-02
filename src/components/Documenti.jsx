// src/components/Documenti.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Documenti.css";

// Import dei PDF – Moderne
import moderne_RPG from "../assets/documenti/moderne/RPG.pdf";
import moderne_modulo from "../assets/documenti/moderne/SCHEDA ISCRIZIONE MODERNO.pdf";
import auto_ricognizioni from "../assets/documenti/moderne/AUTO RICOGNIZIONI.PDF";
import dichiarazione_conformita_abbigliamento_2026 from "../assets/documenti/moderne/Dichiarazione Conformita Abbigliamento 2026.pdf";
import dichiarazione_verita_unicarally_2026 from "../assets/documenti/moderne/DICHIARAZIONE DI VERITA' UN ICA RALLY DEL LAGO DI GARDA 2026.pdf";
import dichiarazione_neopatentato from "../assets/documenti/moderne/DICHIARAZIONE NEOPATENTATO.pdf";
import dichiarazione_storico_classifiche_speciali_e_2_spazi_assistenza from "../assets/documenti/moderne/DICHIARAZIONE STORICO CLASSIFICHE SPECIALI E 2° CONDUTTORE.pdf";
import utilizzo_camera_car from "../assets/documenti/moderne/UTILIZZO CAMERA CAR.pdf";
import tdt_garda26_moderno from "../assets/documenti/moderne/_TDT_GARDA26_MODERNO.pdf";
import Cartina_generale from "../assets/documenti/moderne/mappa-gara.pdf";
// Import dei PDF – Storiche
import storiche_modulo from "../assets/documenti/storiche/SCHEDA ISCRIZIONE RALLY STORICO.pdf";
import storiche_rpg_classico from "../assets/documenti/storiche/RPG STORICO E CLASSICO.pdf";
import tdt_garda26_storico from "../assets/documenti/storiche/_TDT_GARDA26_STORICO.pdf";
import mappa_gara from "../assets/documenti/storiche/mappa-gara.pdf";
// Import dei PDF – Regolarità Media50
import regolarita_documento_1 from "../assets/documenti/regolarita/RALLY DEL GARDA.pdf";
import regolarita_modulo from "../assets/documenti/regolarita/SCHEDA ISCRIZIONE REGOLARITA.pdf";
import tdt_garda26_regolarita from "../assets/documenti/regolarita/_TDT_GARDA26_REGOLARITÀ.pdf";
import mappa_gara1 from "../assets/documenti/storiche/mappa-gara.pdf";
const discipline = [
  {
    id: "moderne",
    label: "Moderne",
    description: "Documenti relativi alle vetture moderne.",
    documents: [
      {
        title: "Regolamento Particolare di Gara (RPG)",
        file: moderne_RPG,
        format: "PDF",
      },
      {
        title: "Modulo iscrizioni",
        file: moderne_modulo,
        format: "PDF",
      },
      {
        title: "Auto ricognizioni",
        file: auto_ricognizioni,
        format: "PDF",
      },
      {
        title: "Dichiarazione di conformità abbigliamento 2026",
        file: dichiarazione_conformita_abbigliamento_2026,
        format: "PDF",
      },
      {
        title: "Dichiarazione di verità – Unica Rally del Lago di Garda 2026",
        file: dichiarazione_verita_unicarally_2026,
        format: "PDF",
      },
      {
        title: "Dichiarazione neopatentato",
        file: dichiarazione_neopatentato,
        format: "PDF",
      },
      {
        title:
          "Dichiarazione storico – classifiche speciali e 2° spazi assistenza",
        file: dichiarazione_storico_classifiche_speciali_e_2_spazi_assistenza,
        format: "PDF",
      },
      {
        title: "Utilizzo camera car",
        file: utilizzo_camera_car,
        format: "PDF",
      },
      {
        title: "TDT Garda 2026 – Moderno",
        file: tdt_garda26_moderno,
        format: "PDF",
      },
      {
        title: "Cartina generale",
        file: Cartina_generale,
        format: "PDF",
      },

    ],
  },
  {
    id: "storiche",
    label: "Storiche",
    description: "Documenti relativi alle vetture storiche.",
    documents: [
        {
        title: "RPG Storico e Classico",
        file: storiche_rpg_classico,
        format: "PDF",
      },
      {
        title: "Modulo iscrizioni",
        file: storiche_modulo,
        format: "PDF",
      },
    
      {
        title: "TDT Garda 2026 – Storico",
        file: tdt_garda26_storico,
        format: "PDF",
      },
         {
        title: "Cartina Generale",
        file: mappa_gara,
        format: "PDF",
      },
    ],
  },
  {
    id: "regolarita-media50",
    label: "Regolarità Media50",
    description: "Documenti relativi alla disciplina Regolarità Media50.",
    documents: [
      {
        title: "Programma REG",
        file: regolarita_documento_1,
        format: "PDF",
      },
      {
        title: "Modulo iscrizioni",
        file: regolarita_modulo,
        format: "PDF",
      },
      {
        title: "TDT Garda 2026 – Regolarità",
        file: tdt_garda26_regolarita,
        format: "PDF",
      },
       {
        title: "Cartina Generale",
        file: mappa_gara1,
        format: "PDF",
      },
    ],
  },
];

export function Documenti() {
  const [searchParams] = useSearchParams();
  const [categoriaAttiva, setCategoriaAttiva] = useState(null);

  useEffect(() => {
    const cat = searchParams.get("cat");

    if (cat && ["moderne", "storiche", "regolarita-media50"].includes(cat)) {
      setCategoriaAttiva(cat);
    } else {
      // Nessuna categoria o categoria non valida: mostri tutto
      setCategoriaAttiva(null);
    }
  }, [searchParams]);

  // Se vuoi mostrare subito i documenti, metti true
  const documentiDisponibili = true;

  // Filtra le discipline in base alla categoria selezionata
  const disciplineDaMostrare = categoriaAttiva
    ? discipline.filter((d) => d.id === categoriaAttiva)
    : discipline;

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

      {/* Griglia categorie */}
      <div className="documenti-grid">
        {disciplineDaMostrare.map((categoria) => (
          <div
            className="documenti-categoria-card"
            key={categoria.id}
            id={categoria.id}
          >
            <div className="documenti-categoria-heading">
              <span
                className="documenti-categoria-icon"
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
                      download={documento.format === "DOCX"}
                    >
                      <span aria-hidden="true">📄</span>
                      <span>{documento.title}</span>
                      <span className="documenti-format">
                        {documento.format}
                      </span>
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
          </div>
        ))}
      </div>
    </section>
  );
}