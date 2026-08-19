// src/components/Media.jsx
import "./Media.css";

export function Media() {
  return (
    <section className="page-section media">
      <h1>Media</h1>
      <p>Video e foto ufficiali del Rally del Garda.</p>

      <div className="media-grid">
        {/* Sezione Video */}
        <div className="media-block">
          <h3>Video</h3>
          <p className="media-subtitle">
            Clip, highlights e riprese on-board delle prove speciali.
          </p>
          <div className="media-items">
            {/* Esempio di card video (poi li caricherai da Firestore/Storage) */}
            <div className="media-item">
              <div className="media-thumb video-thumb">
                <span className="media-pill">Video</span>
              </div>
              <div className="media-text">
                <h4>Onboard PS1</h4>
                <p>Highlights dalla prima prova speciale.</p>
              </div>
            </div>

            <div className="media-item">
              <div className="media-thumb video-thumb">
                <span className="media-pill">Video</span>
              </div>
              <div className="media-text">
                <h4>Rally Recap</h4>
                <p>Riepilogo della giornata di gara.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sezione Foto */}
        <div className="media-block">
          <h3>Foto</h3>
          <p className="media-subtitle">
            Galleria fotografica con le immagini più spettacolari.
          </p>
          <div className="media-items">
            <div className="media-item">
              <div className="media-thumb photo-thumb">
                <span className="media-pill">Foto</span>
              </div>
              <div className="media-text">
                <h4>Parco assistenza</h4>
                <p>Scatti dai box e dalle assistenze.</p>
              </div>
            </div>

            <div className="media-item">
              <div className="media-thumb photo-thumb">
                <span className="media-pill">Foto</span>
              </div>
              <div className="media-text">
                <h4>PS Notturna</h4>
                <p>Immagini delle prove in notturna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
