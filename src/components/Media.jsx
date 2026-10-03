// src/components/Media.jsx
import { Link } from "react-router-dom";
import "./Media.css";

const videoFolders = [
  {
    id: "ps1",
    title: "PS 1",
    subtitle: "Le Zette Moncini",
    description: "Guarda il video della prova speciale.",
    path: "/media/video/ps1",
  },
  {
    id: "ps2",
    title: "PS 2",
    subtitle: "San Michele Palazzani",
    description: "Guarda il video della prova speciale.",
    path: "/media/video/ps2-san-michele-ghidini",
  },
  {
    id: "ps3",
    title: "PS 3",
    subtitle: "Vobarno Lancini",
    description: "Guarda il video della prova speciale.",
    path: "/media/video/ps3",
  },
  {
    id: "ps4",
    title: "PS 4",
    subtitle: "Capovalle Ghidini",
    description: "Guarda il video della prova speciale.",
    path: "/media/video/ps4",
  },
  {
    id: "shakedown",
    title: "Shakedown",
    subtitle: "Gaino Franzoni",
    description: "Guarda il video ufficiale.",
    path: "/media/video/shakedown",
  },
];

export function Media() {
  return (
    <section className="media">
      <div className="media-heading">
        <span className="media-kicker">Rally del Garda</span>
        <h1>Media</h1>
        <p>Video e foto ufficiali del Rally del Garda.</p>
      </div>

      <div className="media-section">
        <div className="media-section-title">
          <div>
            <h2>Video</h2>
            <p>Clip, highlights e riprese on-board delle prove speciali.</p>
          </div>

          <span className="media-count">
            {videoFolders.length} video
          </span>
        </div>

        <div className="media-folder-grid">
          {videoFolders.map((folder) => (
            <Link
              key={folder.id}
              to={folder.path}
              className="media-folder-card"
              aria-label={`Apri cartella video ${folder.title} ${folder.subtitle}`}
            >
              <div className="media-folder-icon" aria-hidden="true">
                <span className="play-icon">▶</span>
              </div>

              <div className="media-folder-content">
                <span className="media-folder-label">VIDEO</span>
                <h3>{folder.title}</h3>
                <h4>{folder.subtitle}</h4>
                <p>{folder.description}</p>
              </div>

              <span className="media-folder-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="media-section media-photo-section">
        <div className="media-section-title">
          <div>
            <h2>Foto</h2>
            <p>Gallerie fotografiche ufficiali del Rally del Garda.</p>
          </div>

          <span className="media-count">Prossimamente</span>
        </div>

        <Link
          to="/media/foto"
          className="media-photo-card"
          aria-label="Apri la galleria fotografica"
        >
          <div className="media-photo-icon" aria-hidden="true">
            📷
          </div>

          <div>
            <span className="media-folder-label">FOTO</span>
            <h3>Galleria fotografica</h3>
            <p>Le foto della gara saranno pubblicate qui.</p>
          </div>

          <span className="media-folder-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}