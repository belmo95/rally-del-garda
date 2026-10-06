// src/components/Media.jsx
import "./Media.css";

const videos = [
  {
    id: "ps1",
    title: "PS 1",
    subtitle: "Le Zette Moncini",
    youtubeUrl: "https://www.youtube.com/watch?v=BXHLkrE5UBA&t=45s", // Incolla qui il link YouTube della PS 1
  },
  {
    id: "ps2",
    title: "PS 2",
    subtitle: "San Michele Palazzani",
    youtubeUrl: "https://www.youtube.com/watch?v=iI9JZlBCPpo", // Incolla qui il link YouTube della PS 2
  },
  {
    id: "ps3",
    title: "PS 3",
    subtitle: "Vobarno Lancini",
    youtubeUrl: "https://www.youtube.com/watch?v=cIvo100yWCU", // Incolla qui il link YouTube della PS 3
  },
  {
    id: "ps4",
    title: "PS 4",
    subtitle: "Capovalle Ghidini",
    youtubeUrl: "https://www.youtube.com/watch?v=z2sIbL74OWk", // Incolla qui il link YouTube della PS 4
  },
  {
    id: "shakedown",
    title: "Shakedown",
    subtitle: "Gaino Franzoni",
    youtubeUrl: "https://www.youtube.com/watch?v=4oo4zGqNEXA&t=7s", // Incolla qui il link YouTube dello shakedown
  },
];

function getYoutubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsedUrl = new URL(url);

    // Link breve: https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube-nocookie.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    // Link classico: https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.pathname === "/watch") {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
    }

    // Link embed già pronto: https://www.youtube.com/embed/VIDEO_ID
    if (parsedUrl.pathname.includes("/embed/")) {
      const videoId = parsedUrl.pathname.split("/embed/")[1];

      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function Media() {
  return (
    <section className="media">
      <div className="media-heading">
        <span className="media-kicker">Rally del Garda</span>
        <h1>Video Prove Speciali</h1>
        <p>Video ufficiali del Rally del Garda.</p>
      </div>

      <div className="media-section">
        <div className="media-section-title">
          <div>
            <h2>Video</h2>
            <p>
              Guarda le riprese ufficiali delle prove speciali e dello
              shakedown.
            </p>
          </div>

          <span className="media-count">{videos.length} video</span>
        </div>

        <div className="youtube-video-list">
          {videos.map((video) => {
            const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl);

            return (
              <article className="youtube-video-item" key={video.id}>
                <div className="youtube-video-title">
                  <span className="media-folder-label">VIDEO</span>
                  <h2>{video.title}</h2>
                  <h3>{video.subtitle}</h3>
                </div>

                {embedUrl ? (
                  <div className="youtube-video-wrapper">
                    <iframe
                      src={embedUrl}
                      title={`${video.title} - ${video.subtitle}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="youtube-video-placeholder">
                    <span>Video in arrivo</span>
                    <p>Incolla il link YouTube nel campo youtubeUrl.</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}