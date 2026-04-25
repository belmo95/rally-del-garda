// src/components/CookiePolicy.jsx
import "./LegalPages.css";

export function CookiePolicy() {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <h1>Cookie Policy</h1>
        <p>
          Questa Cookie Policy spiega cosa sono i cookie, come possono essere utilizzati dal sito
          Rally del Garda e come l’utente può gestirli.
        </p>

        <h2>Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell’utente
          per migliorare l’esperienza di navigazione, memorizzare preferenze o raccogliere informazioni
          tecniche e statistiche.
        </p>

        <h2>Tipologie di cookie utilizzabili</h2>
        <ul>
          <li>cookie tecnici, necessari al corretto funzionamento del sito;</li>
          <li>cookie di preferenza, utili a ricordare impostazioni o scelte dell’utente;</li>
          <li>cookie statistici anonimizzati, se attivati;</li>
          <li>cookie di profilazione o marketing, solo previo consenso dell’utente, se presenti.</li>
        </ul>

        <h2>Cookie tecnici</h2>
        <p>
          I cookie tecnici sono necessari per il funzionamento del sito e non richiedono, di norma,
          il consenso dell’utente.
        </p>

        <h2>Cookie di terze parti</h2>
        <p>
          Il sito potrebbe integrare servizi di terze parti, come mappe, video, social network,
          moduli esterni, strumenti statistici o contenuti incorporati. Tali servizi potrebbero
          installare cookie secondo le rispettive informative privacy e cookie.
        </p>

        <h2>Gestione dei cookie</h2>
        <p>
          L’utente può gestire, limitare o disabilitare i cookie tramite le impostazioni del browser.
          La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
        </p>

        <h2>Consenso</h2>
        <p>
          Quando richiesto dalla normativa applicabile, il sito raccoglie il consenso dell’utente
          prima di installare cookie non tecnici.
        </p>

        <h2>Aggiornamenti</h2>
        <p>
          La presente Cookie Policy può essere modificata o aggiornata in qualsiasi momento.
        </p>

        <h2>Contatti</h2>
        <p>
          Per ulteriori informazioni è possibile contattare info@rallydelgarda.it oppure il numero
          0039 320 2766400.
        </p>
      </div>
    </section>
  );
}