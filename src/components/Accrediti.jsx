import "./Accrediti.css";
import accreditoPdf from "../assets/documenti/Richiesta di accredito.pdf";

const PDF_URL = accreditoPdf;

const PRESS_EMAIL = "stampa@rallydelgarda.com";

function DownloadIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 16v4h14v-4" />
    </svg>
  );
}

function DownloadButton({ secondary = false }) {
  return (
    <a
      className={`accrediti-button ${
        secondary
          ? "accrediti-button--secondary"
          : "accrediti-button--primary"
      }`}
      href={PDF_URL}
      download="Richiesta di accredito.pdf"
    >
      <DownloadIcon />
      <span>Scarica il modulo PDF</span>
    </a>
  );
}

export default function Accrediti() {
  return (
    <main className="accrediti-page">
      <section
        className="accrediti-hero"
        aria-labelledby="accrediti-title"
      >
        <div className="accrediti-container accrediti-hero-content">
          <span className="accrediti-eyebrow">
            Rally del Garda 2026
          </span>

          <h1 id="accrediti-title">Accrediti stampa</h1>

          <p className="accrediti-hero-subtitle">
            Rally Nazionale · Rally Storico · Regolarità a Media
          </p>

          <div className="accrediti-event-details">
            <span>31 ottobre – 1 novembre 2026</span>
            <span>Toscolano Maderno</span>
          </div>

          <DownloadButton />
        </div>
      </section>

      <div className="accrediti-container accrediti-content">
        <aside
          className="accrediti-deadline"
          aria-labelledby="accrediti-deadline-title"
        >
          <div className="accrediti-deadline-label">
            Termine invio richieste
          </div>

          <h2 id="accrediti-deadline-title">
            Mercoledì 28 ottobre 2026, ore 24:00
          </h2>

          <p>
            Le richieste di accredito devono essere inviate entro
            le ore 24 di mercoledì 28 ottobre 2026. Le richieste
            che perverranno dopo tale termine non verranno
            accettate.
          </p>
        </aside>

        <section
          className="accrediti-section"
          aria-labelledby="accrediti-documents-title"
        >
          <div className="accrediti-section-heading">
            <span className="accrediti-kicker">
              Richiesta di accredito
            </span>

            <h2 id="accrediti-documents-title">
              Documentazione e disposizioni
            </h2>
          </div>

          <div className="accrediti-documents-grid">
            <article className="accrediti-card">
              <span className="accrediti-card-tag">
                Lettera di incarico
              </span>

              <h3>Attestazione della collaborazione</h3>

              <p>
                Alla richiesta deve essere allegata una lettera
                di incarico su carta intestata, a firma del
                Direttore Responsabile o di chi ne fa le veci,
                comprovante la collaborazione.
              </p>
            </article>

            <article className="accrediti-card">
              <span className="accrediti-card-tag">
                Fotografi e video operatori
              </span>

              <h3>Pettorina e assicurazione</h3>

              <p>
                Per gli accreditati come fotografo e video
                operatore sarà obbligatorio utilizzare la
                pettorina che verrà consegnata al momento
                dell’accredito.
              </p>

              <div className="accrediti-inline-notice">
                ATTENZIONE: fotografi e video operatori devono
                esibire certificato di assicurazione personale
                contro infortuni e responsabilità civile.
              </div>
            </article>

            <article className="accrediti-card">
              <span className="accrediti-card-tag">
                Free lance
              </span>

              <h3>Free lance e liberi professionisti</h3>

              <p>
                I free-lance e i liberi professionisti devono
                documentare la pubblicazione di fotografie e/o
                diffusione di immagini video su giornali ed
                emittenti televisive durante l’anno precedente.
              </p>

              <p>
                È fatto obbligo certificare la propria iscrizione
                alla CCIAA, l’attribuzione della Partita IVA
                (con certificazioni non anteriori a sei mesi)
                e la eventuale iscrizione in corso di validità
                all’Ordine Nazionale dei Giornalisti o altre
                Associazioni di categoria, oltre all’attestazione
                della collaborazione dichiarata.
              </p>
            </article>
          </div>
        </section>

        <section
          className="accrediti-section"
          aria-labelledby="accrediti-rules-title"
        >
          <div className="accrediti-section-heading">
            <span className="accrediti-kicker">
              Regolamento
            </span>

            <h2 id="accrediti-rules-title">
              Norme per l’accredito stampa
            </h2>
          </div>

          <div className="accrediti-rules-grid">
            <article className="accrediti-rule">
              <h3>Richiesta della testata giornalistica</h3>

              <p>
                I giornalisti, i fotoreporter, i cineoperatori,
                anche Free Lance, e gli operatori radiofonici
                dovranno esibire in copia originale la richiesta
                di accredito formulata da una testata
                giornalistica registrata presso il tribunale
                di competenza territoriale.
              </p>
            </article>

            <article className="accrediti-rule">
              <h3>Verifica e accettazione delle domande</h3>

              <p>
                L’accettazione della domanda di accredito è
                subordinata all’avallo dell’ufficio stampa
                dell’organizzatore della manifestazione.
              </p>

              <p>
                Ogni richiesta sarà verificata affinché esistano
                le reali condizioni per il rilascio dell’accredito
                e, nel caso, anche sottoposta alla supervisione
                della competente Federazione Sportiva Nazionale
                o altra entità preposta.
              </p>
            </article>

            <article className="accrediti-rule">
              <h3>Numero massimo di accreditati</h3>

              <p>
                Ogni testata o agenzia potrà accreditare un
                numero massimo di n. 2 giornalisti e/o
                collaboratori e n. 2 fotografi.
              </p>

              <p>
                Ogni altra richiesta non potrà essere accolta
                salvo casi ritenuti idonei dall’ufficio stampa
                e deliberata dalla competente Federazione
                Sportiva Nazionale.
              </p>
            </article>

            <article className="accrediti-rule">
              <h3>Invio della richiesta</h3>

              <p>
                Il solo invio della richiesta di accredito non
                rappresenta in nessun caso l’accoglimento della
                stessa da parte dell’ufficio stampa.
              </p>
            </article>
          </div>
        </section>

        <section
          className="accrediti-section"
          aria-labelledby="accrediti-live-title"
        >
          <div className="accrediti-section-heading">
            <span className="accrediti-kicker">
              Video, TV e social
            </span>

            <h2 id="accrediti-live-title">
              Trasmissioni video e TV in diretta e dirette social
            </h2>
          </div>

          <div className="accrediti-rule">
            <p>
              La concessione del pass NON AUTORIZZA il detentore
              alla diffusione di immagini della manifestazione
              tramite dirette video/TV o dirette social, escluse
              eventuali iniziative concordate, nei modi e nei
              termini, con l’organizzazione dell’evento e previo
              benestare della Federazione Sportiva Nazionale.
            </p>

            <p>
              Ogni abuso comporterà il ritiro della credenziale
              di accredito e verrà segnalato all’autorità
              giudiziaria.
            </p>
          </div>
        </section>

        <section
          className="accrediti-section"
          aria-labelledby="accrediti-responsibility-title"
        >
          <div className="accrediti-section-heading">
            <span className="accrediti-kicker">
              Responsabilità e utilizzo del pass
            </span>

            <h2 id="accrediti-responsibility-title">
              Dichiarazione di responsabilità
            </h2>
          </div>

          <div className="accrediti-rule">
            <p>
              Il richiedente l’accredito come sopra specificato
              dichiara di essere a conoscenza dei pericoli che
              possono esservi nel contesto delle manifestazioni
              automobilistiche e nell’assistere al loro
              svolgimento lungo il percorso di gara.
            </p>

            <p>
              Dichiara altresì di possedere l’esperienza e la
              preparazione professionale per assistere, in
              sicurezza, allo svolgimento di esse e di impegnarsi
              in ogni cautela necessaria ad evitare danni fisici
              e materiali a sé stesso ed agli altri; di rispettare
              gli ordini di sicurezza impartiti dagli Ufficiali
              di Gara e dalle Forze dell’Ordine; di assumersi
              ogni e qualsiasi responsabilità per danni che
              dovesse subire, per propria imprudenza o imperizia.
            </p>

            <p>
              Di sollevare da ogni e qualsiasi responsabilità
              civile e penale il Comitato Organizzatore, il
              Direttore di Gara e qualsiasi altra persona,
              Istituzione o Associazione connessi all’Evento
              per quanto sopra esteso.
            </p>

            <p>
              Il sottoscritto si impegna inoltre ad osservare
              eventuali disposizioni relative all’uso e alla
              validità del pass, eventualmente comunicate
              dall’ufficio stampa.
            </p>

            <p>
              L’accredito Stampa viene rilasciato esclusivamente
              ai maggiori di 18 anni.
            </p>

            <p>
              Il pass viene consegnato dalla sala stampa
              ESCLUSIVAMENTE al titolare che ne ha fatto richiesta
              (non sono ammesse deroghe), è strettamente personale
              ed è severamente vietata la cessione dello stesso
              a terzi.
            </p>

            <p>
              Ogni abuso comporterà il ritiro immediato e verrà
              denunciato alle autorità giudiziarie ed alla
              competente Federazione Sportiva Nazionale o entità
              preposta.
            </p>
          </div>
        </section>

        <section
          className="accrediti-section"
          aria-labelledby="accrediti-privacy-title"
        >
          <div className="accrediti-section-heading">
            <span className="accrediti-kicker">
              Dati personali
            </span>

            <h2 id="accrediti-privacy-title">
              Informazioni sulla privacy
            </h2>
          </div>

          <div className="accrediti-rule">
            <p>
              Ai sensi dell’art. 13 del D. Lgs. 196/2003
              (di seguito “Codice Privacy”) e dell’art. 13
              del Regolamento UE n. 2016/679 (di seguito
              “GDPR 2016/679”), recante disposizioni a tutela
              delle persone e di altri soggetti rispetto al
              trattamento dei dati personali, desideriamo
              informarLa che i dati personali da Lei forniti
              saranno trattati nel rispetto della normativa
              sopra richiamata e degli obblighi di riservatezza
              cui è tenuto l’ente organizzatore della
              manifestazione.
            </p>

            <p>
              I dati personali da Lei forniti sono necessari
              per gli adempimenti previsti per legge, e per
              i fini connessi allo svolgimento della
              manifestazione.
            </p>

            <p>
              Informiamo inoltre che i dati raccolti non saranno
              mai diffusi e non saranno oggetto di comunicazione
              senza Suo esplicito consenso, salvo le comunicazioni
              necessarie che possono comportare il trasferimento
              di dati ad enti pubblici, a consulenti o ad altri
              soggetti per l’adempimento degli obblighi di legge.
            </p>
          </div>
        </section>

        <section
          className="accrediti-submit"
          aria-labelledby="accrediti-submit-title"
        >
          <div className="accrediti-submit-copy">
            <span className="accrediti-kicker">
              Modulo di richiesta
            </span>

            <h2 id="accrediti-submit-title">
              Invio delle richieste di accredito
            </h2>

            <p>
              Le richieste di accredito devono essere inviate
              entro le ore 24 di mercoledì 28 ottobre 2026.
              Le richieste che perverranno dopo tale termine
              non verranno accettate.
            </p>

            <p>
              Tutte le richieste, inviate entro i termini indicati
              all’indirizzo stampa@rallydelgarda.com, verranno
              valutate dall’ufficio stampa della manifestazione.
            </p>

            <a
              className="accrediti-email"
              href={`mailto:${PRESS_EMAIL}`}
            >
              {PRESS_EMAIL}
            </a>
          </div>

          <div className="accrediti-submit-actions">
            <DownloadButton secondary />

            <a
              className="accrediti-preview-link"
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apri il PDF in una nuova scheda
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}