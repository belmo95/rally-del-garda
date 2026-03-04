// src/components/News.jsx
import "./News.css";

export function News() {
  return (
    <section className="page-section news">
      <h2>News</h2>
      <p>Ultimi comunicati sul Rally del Garda.</p>

      <div className="news-list">
        <article className="news-item">
          <h3>Comunicato n.1</h3>
          <p>Pubblicato il regolamento sportivo del Rally del Garda.</p>
        </article>
        <article className="news-item">
          <h3>Comunicato n.2</h3>
          <p>Aperte le iscrizioni per la gara.</p>
        </article>
      </div>
    </section>
  );
}
