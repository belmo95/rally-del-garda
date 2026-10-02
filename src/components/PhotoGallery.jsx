// src/components/PhotoGallery.jsx
import { Link } from "react-router-dom";
import "./Gallery.css";

export function PhotoGallery() {
  return (
    <section className="gallery-page">
      <Link className="back-link" to="/media">
        ← Torna a Media
      </Link>

      <h1>Galleria fotografica</h1>

      <p>
        Le foto ufficiali del Rally del Garda saranno pubblicate in questa
        sezione.
      </p>

      <div className="empty-gallery">
        <span className="empty-gallery-icon" aria-hidden="true">
          📷
        </span>

        <h2>Nessuna foto disponibile</h2>

        <p>
          Torna a visitare questa pagina prossimamente per vedere le immagini
          della gara.
        </p>
      </div>
    </section>
  );
}