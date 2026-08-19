// src/components/Albo_di_gara.jsx

import { useEffect, useState } from "react";
import "./Albo_di_gara.css";
import { storage } from "../firebaseConfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const FOLDER_LABELS = {
  Circolari_Informative: "Circolari Informative",
  Documenti_Commissari_Sportivi: "Documenti Commissari Sportivi",
  Direttore_di_Gara: "Direttore di Gara",
  Comunicazioni_e_Convocazioni_Individuali:
    "Comunicazioni e Convocazioni Individuali",
  Varie: "Varie",
};

const FOLDER_ORDER = [
  "Circolari_Informative",
  "Documenti_Commissari_Sportivi",
  "Direttore_di_Gara",
  "Comunicazioni_e_Convocazioni_Individuali",
  "Varie",
];

const CRONOCAR_LINK =
  "https://www.cronocarservice.com/event/26-rally-del-garda/";

export function Albo_di_gara() {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openFolder, setOpenFolder] = useState(null);

  useEffect(() => {
    const loadAlbo = async () => {
      try {
        setLoading(true);
        setError("");

        const baseRef = ref(storage, "albo-di-gara");
        const res = await listAll(baseRef);

        /*
         * Carichiamo solo le cartelle che devono contenere PDF.
         *
         * La cartella:
         * Iscritti_Ordine_Partenza_Classifiche
         *
         * viene esclusa completamente da Firebase perché sarà
         * rappresentata da un pulsante esterno indipendente.
         */
        const folderPromises = res.prefixes
          .filter(
            (folderRef) =>
              folderRef.name !== "Iscritti_Ordine_Partenza_Classifiche"
          )
          .map(async (folderRef) => {
            const folderName = folderRef.name;
            const filesRes = await listAll(folderRef);

            const filePromises = filesRes.items.map(async (itemRef) => {
              const url = await getDownloadURL(itemRef);

              return {
                name: itemRef.name,
                url,
              };
            });

            const files = await Promise.all(filePromises);

            return {
              name: folderName,
              files,
            };
          });

        const foldersData = await Promise.all(folderPromises);

        foldersData.sort((a, b) => {
          const iA = FOLDER_ORDER.indexOf(a.name);
          const iB = FOLDER_ORDER.indexOf(b.name);

          if (iA === -1 && iB === -1) {
            return a.name.localeCompare(b.name);
          }

          if (iA === -1) {
            return 1;
          }

          if (iB === -1) {
            return -1;
          }

          return iA - iB;
        });

        setFolders(foldersData);
      } catch (err) {
        console.error("Errore caricamento Albo di Gara:", err);
        setError("Errore nel caricamento dei documenti.");
      } finally {
        setLoading(false);
      }
    };

    loadAlbo();
  }, []);

  const toggleFolder = (name) => {
    setOpenFolder((prev) => (prev === name ? null : name));
  };

  return (
    <section className="page-section albo-di-gara" id="albo-di-gara">
      <div className="albo-header">
        <span className="albo-label">Rally del Garda</span>

        <h1>Albo di Gara</h1>

        <p>
          Documenti ufficiali della manifestazione, suddivisi per categoria.
        </p>
      </div>

      {loading && (
        <p className="albo-loading" role="status">
          Caricamento documenti...
        </p>
      )}

      {error && (
        <p className="albo-error" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="albo-liste">
          {/* Pulsante esterno indipendente da Firebase */}
          <a
            href={CRONOCAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="albo-categoria albo-cronocar-button"
            aria-label="Apri Iscritti, Ordine di Partenza e Classifiche su CronoCar"
          >
            <span className="albo-cronocar-icon" aria-hidden="true">
              🌐
            </span>

            <span className="albo-cat-title">
              Iscritti / Ordine di Partenza / Classifiche
            </span>

            <span className="albo-cronocar-label">
              Apri CronoCar ↗
            </span>
          </a>

          {/* Categorie PDF caricate da Firebase */}
          {folders.map((folder) => {
            const isOpen = openFolder === folder.name;
            const folderId = `albo-folder-${folder.name}`;

            return (
              <div key={folder.name} className="albo-categoria">
                <button
                  type="button"
                  className={`albo-cat-header ${isOpen ? "open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={folderId}
                  onClick={() => toggleFolder(folder.name)}
                >
                  <span className="albo-cat-title">
                    {FOLDER_LABELS[folder.name] || folder.name}
                  </span>

                  <span className="albo-cat-count">
                    {folder.files.length}{" "}
                    {folder.files.length === 1
                      ? "documento"
                      : "documenti"}
                  </span>

                  <span className="albo-cat-arrow" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <ul id={folderId} className="albo-files">
                    {folder.files.length === 0 ? (
                      <li className="albo-empty-folder">
                        Nessun documento presente.
                      </li>
                    ) : (
                      folder.files.map((file) => (
                        <li
                          key={`${folder.name}-${file.name}`}
                          className="albo-file-item"
                        >
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="albo-file-link"
                          >
                            <span
                              className="albo-file-icon"
                              aria-hidden="true"
                            >
                              PDF
                            </span>

                            <span className="albo-file-name">
                              {file.name}
                            </span>

                            <span className="albo-file-dl">
                              Scarica
                            </span>
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </div>
            );
          })}

          {!loading && !error && folders.length === 0 && (
            <p className="albo-empty" role="status">
              Nessun documento PDF presente.
            </p>
          )}
        </div>
      )}
    </section>
  );
}