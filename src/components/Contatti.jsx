// src/components/Contatti.jsx
import "./LegalPages.css";

export function Contatti() {
  return (
    <section className="legal-page" aria-labelledby="contatti-title">
      <div className="legal-container">
        <h1 id="contatti-title">Contatti</h1>
        <p>
          Per informazioni su iscrizioni, programma, regolamento o qualsiasi
          altra richiesta relativa al Rally del Garda, contatta
          l'organizzazione Northon Racing.
        </p>

        <h2>Email</h2>
        <p>
          <a href="mailto:info@rallydelgarda.com">info@rallydelgarda.com</a>
        </p>

        <h2>Telefono</h2>
        <p>
          <a href="tel:+393355904325">0039 335 5904325</a>
        </p>

        <h2>Organizzazione</h2>
        <p>Rally del Garda è organizzato da Northon Racing.</p>
      </div>
    </section>
  );
}
