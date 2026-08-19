// src/components/NotFound.jsx
import { Link } from "react-router-dom";
import { Seo } from "./Seo";
import "./LegalPages.css";

export function NotFound() {
  return (
    <section className="legal-page" aria-labelledby="notfound-title">
      <Seo
        title="Pagina non trovata"
        description="La pagina richiesta non esiste sul sito del Rally del Garda."
        path="/404"
        noindex
      />
      <div className="legal-container">
        <h1 id="notfound-title">Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste o è stata spostata.</p>
        <p>
          <Link to="/">Torna alla home del Rally del Garda</Link>
        </p>
      </div>
    </section>
  );
}
