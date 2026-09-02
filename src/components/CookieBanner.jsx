// src/components/CookieBanner.jsx
import { useEffect, useState } from "react";
import "./CookieBanner.css";

const COOKIE_CONSENT_KEY = "rally_cookie_consent";

export function CookieBanner() {
  const [mostraBanner, setMostraBanner] = useState(false);
  const [consenso, setConsenso] = useState(null); // "accettato" | "rifiutato" | null

  useEffect(() => {
    const salvato = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!salvato) {
      // Nessun consenso registrato: mostra banner
      setMostraBanner(true);
    } else {
      setConsenso(salvato);
    }
  }, []);

  const accettaCookie = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accettato");
    setConsenso("accettato");
    setMostraBanner(false);
    // Qui potrai attivare script di terze parti (analytics, marketing, ecc.)
    // ad esempio caricando dinamicamente Google Analytics, pixel, ecc.
  };

  const rifiutaCookie = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rifiutato");
    setConsenso("rifiutato");
    setMostraBanner(false);
    // Nessun caricamento di script di profilazione/marketing
  };

  const gestisciPreferenze = () => {
    // Opzionale: apri un modal o vai a una pagina impostazioni cookie
    // Per ora, resetta il consenso per mostrare di nuovo il banner
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setConsenso(null);
    setMostraBanner(true);
  };

  if (!mostraBanner && consenso !== null) {
    // Banner nascosto, ma puoi usare "consenso" per abilitare/disabilitare script
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true">
      <div className="cookie-banner-content">
        <p className="cookie-banner-text">
          Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie
          statistici e di profilazione per migliorare l’esperienza di navigazione
          e analizzare il traffico. Per saperne di più, consulta la nostra{" "}
          <a href="/cookie-policy" className="cookie-banner-link">
            Cookie Policy
          </a>.
        </p>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-button cookie-banner-button-secondary"
            onClick={rifiutaCookie}
          >
            Rifiuta
          </button>

          <button
            type="button"
            className="cookie-banner-button cookie-banner-button-primary"
            onClick={accettaCookie}
          >
            Accetta
          </button>

          <button
            type="button"
            className="cookie-banner-button cookie-banner-button-tertiary"
            onClick={gestisciPreferenze}
            title="Gestisci le preferenze cookie"
          >
            Preferenze
          </button>
        </div>
      </div>
    </div>
  );
}