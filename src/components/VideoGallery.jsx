// src/components/VideoGallery.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";
import "./Gallery.css";

const videoGalleries = {
  ps1: {
    title: "PS 1 Le Zette Moncini",
    description: "Video ufficiale della prova speciale PS 1 Le Zette Moncini.",
    videos: [
      {
        id: "ps1-video",
        title: "PS 1 Le Zette Moncini",
        storagePath: "video/SPS 1 le zette Gianni Moncini comp.mp4",
      },
    ],
  },

  "ps2-san-michele-ghidini": {
    title: "PS 2 San Michele Palazzani",
    description: "Video ufficiale della prova speciale PS 2 San Michele Palazzani.",
    videos: [
      {
        id: "ps2-video",
        title: "PS 2 San Michele Palazzani",
        storagePath: "video/PS 2 San Michele Vittorio Palazzani.mp4",
      },
    ],
  },

  ps3: {
    title: "PS 3 Vobarno Lancini",
    description: "Video ufficiale della prova speciale PS 3 Vobarno Lancini.",
    videos: [
      {
        id: "ps3-video",
        title: "PS 3 Vobarno Lancini",
        storagePath: "video/PS 3 Vobarno comp.mp4",
      },
    ],
  },

  ps4: {
    title: "PS 4 Capovalle Ghidini",
    description: "Video ufficiale della prova speciale PS 4 Capovalle Ghidini.",
    videos: [
      {
        id: "ps4-video",
        title: "PS 4 Capovalle Ghidini",
        storagePath: "video/PS 4 Capovalle Sandro Ghidini.mp4",
      },
    ],
  },

  shakedown: {
    title: "Shakedown",
    description: "Video ufficiale dello shakedown del Rally del Garda.",
    videos: [
      {
        id: "shakedown-video",
        title: "Shakedown Gaino Franzoni",
        storagePath: "video/S.d Gaino Franzoni comp.mp4",
      },
    ],
  },
};

export function VideoGallery() {
  const { galleryId } = useParams();
  const gallery = videoGalleries[galleryId];

  const [videoUrls, setVideoUrls] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!gallery) {
      return;
    }

    let isMounted = true;

    async function loadVideoUrls() {
      setIsLoading(true);
      setHasError(false);

      try {
        const entries = await Promise.all(
          gallery.videos.map(async (video) => {
            const videoRef = ref(storage, video.storagePath);
            const url = await getDownloadURL(videoRef);

            return [video.id, url];
          })
        );

        if (isMounted) {
          setVideoUrls(Object.fromEntries(entries));
        }
      } catch (error) {
        console.error("Errore nel caricamento dei video da Firebase Storage:", error);

        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadVideoUrls();

    return () => {
      isMounted = false;
    };
  }, [galleryId]);

  if (!gallery) {
    return (
      <section className="gallery-page">
        <h1>Cartella non trovata</h1>

        <Link className="back-link" to="/media">
          ← Torna a Media
        </Link>
      </section>
    );
  }

  return (
    <section className="gallery-page">
      <Link className="back-link" to="/media">
        ← Torna a Media
      </Link>

      <h1>{gallery.title}</h1>
      <p>{gallery.description}</p>

      {isLoading && (
        <p className="gallery-status">
          Caricamento video in corso...
        </p>
      )}

      {hasError && (
        <div className="gallery-status gallery-error">
          <p>Non è stato possibile caricare il video.</p>

          <p>
            Controlla che il file sia presente in Firebase Storage, nella
            cartella <strong>video</strong>, e che il nome corrisponda
            esattamente.
          </p>
        </div>
      )}

      {!isLoading && !hasError && (
        <div className="gallery-video-grid">
          {gallery.videos.map((video) => (
            <article className="gallery-video-card" key={video.id}>
              <video controls preload="metadata" playsInline>
                <source src={videoUrls[video.id]} type="video/mp4" />
                Il tuo browser non supporta la riproduzione video.
              </video>

              <h3>{video.title}</h3>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}