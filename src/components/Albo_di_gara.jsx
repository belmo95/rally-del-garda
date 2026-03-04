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
  Iscritti_Ordine_Partenza_Classifiche:
    "Iscritti / Ordine di Partenza / Classifiche",
  Varie: "Varie",
};

const FOLDER_ORDER = [
  "Circolari_Informative",
  "Documenti_Commissari_Sportivi",
  "Direttore_di_Gara",
  "Comunicazioni_e_Convocazioni_Individuali",
  "Iscritti_Ordine_Partenza_Classifiche",
  "Varie",
];

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

        const folderPromises = res.prefixes.map(async (folderRef) => {
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

        // Ordinamento personalizzato
        foldersData.sort((a, b) => {
          const iA = FOLDER_ORDER.indexOf(a.name);
          const iB = FOLDER_ORDER.indexOf(b.name);

          if (iA === -1 && iB === -1) {
            return a.name.localeCompare(b.name);
          }
          if (iA === -1) return 1;
          if (iB === -1) return -1;

          return iA - iB;
        });

        setFolders(foldersData);
      } catch (err) {
        console.error(err);
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
    <section className="page-section albo-di-gara">
      <h2>Albo di Gara</h2>
      <p>
        Documenti ufficiali della manifestazione, suddivisi per categoria.
      </p>

      {loading && (
        <p className="albo-loading">Caricamento documenti...</p>
      )}

      {error && (
        <p className="albo-error">{error}</p>
      )}

      {!loading && !error && folders.length === 0 && (
        <p className="albo-empty">Nessun documento presente.</p>
      )}

      <div className="albo-liste">
        {folders.map((folder) => (
          <div key={folder.name} className="albo-categoria">
            <button
              className={
                openFolder === folder.name
                  ? "albo-cat-header open"
                  : "albo-cat-header"
              }
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

              <span className="albo-cat-arrow">
                {openFolder === folder.name ? "−" : "+"}
              </span>
            </button>

            {openFolder === folder.name && (
              <ul className="albo-files">
                {folder.files.length === 0 ? (
                  <li className="albo-empty-folder">
                    Nessun documento presente.
                  </li>
                ) : (
                  folder.files.map((file) => (
                    <li
                      key={file.name}
                      className="albo-file-item"
                    >
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="albo-file-link"
                      >
                        <span className="albo-file-icon">
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
        ))}
      </div>
    </section>
  );
}
