// src/components/Documenti.jsx
import "./Documenti.css";

export function Documenti() {
  return (
    <section className="page-section documenti" id="documenti">
      <h2>Documenti</h2>
      <p>Documenti ufficiali scaricabili in formato PDF.</p>
      <ul>
        <li><a href="#">Regolamento di gara (PDF)</a></li>
        <li><a href="#">Mappa del percorso (PDF)</a></li>
        <li><a href="#">Modulo iscrizione (PDF)</a></li>
      </ul>
    </section>
  );
}
