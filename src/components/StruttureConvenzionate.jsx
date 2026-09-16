// src/components/StruttureConvenzionate.jsx
import "./StruttureConvenzionate.css";
import anticoMonasteroImg from "../assets/antico-monastero.jpg";
import reginaDelGardaImg from "../assets/regina-del-garda.jpg";

const STRUTTURE = [
  {
    nome: "Hotel Antico Monastero",
    immagine: anticoMonasteroImg,
    link: "https://www.horstmannhotels.com/hotel-e-camping/hotel-antico-monastero",
    indirizzo: "Via Religione 84, Toscolano Maderno (BS)",
    telefono: "0365 954026",
    ristorante: {
      nome: "Ristorante Pizzeria Antico Monastero",
      telefono: "0365 641346",
    },
    descrizione:
      "Hotel convenzionato per il Rally del Garda, con ristorante e servizi dedicati agli ospiti.",
  },
  {
    nome: "Hotel Regina del Garda",
    immagine: reginaDelGardaImg,
    link: "https://www.horstmannhotels.com/hotel-e-camping/regina-del-garda-suite",
    indirizzo: "Toscolano Maderno (BS)",
    telefono: "0365 954026",
    descrizione:
      "Hotel e suite convenzionati per il Rally del Garda, ideali per partecipanti e ospiti della manifestazione.",
  },
];

export function StruttureConvenzionate() {
  return (
    <section className="page-section">
      <div className="container">
        <h1 className="page-title">Strutture convenzionate</h1>
        <p className="page-subtitle">
          Per il Rally del Garda abbiamo selezionato alcune strutture convenzionate,
          comode e vicine al percorso di gara.
        </p>

        <div className="strutture-grid">
          {STRUTTURE.map((s) => (
            <article key={s.nome} className="struttura-card">
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="struttura-link"
              >
                <img
                  src={s.immagine}
                  alt={s.nome}
                  className="struttura-immagine"
                />
                <div className="struttura-content">
                  <h3 className="struttura-nome">{s.nome}</h3>

                  {s.descrizione && (
                    <p className="struttura-descrizione">{s.descrizione}</p>
                  )}

                  <div className="struttura-info">
                    <div className="struttura-info-row">
                      <span className="struttura-info-label">Indirizzo:</span>
                      <span className="struttura-info-value">{s.indirizzo}</span>
                    </div>

                    <div className="struttura-info-row">
                      <span className="struttura-info-label">Telefono:</span>
                      <a
                        className="struttura-info-value struttura-link-tel"
                        href={`tel:${s.telefono.replace(/\s+/g, "")}`}
                      >
                        {s.telefono}
                      </a>
                    </div>

                    {s.ristorante && (
                      <>
                        <div className="struttura-info-row">
                          <span className="struttura-info-label">
                            Ristorante:
                          </span>
                          <span className="struttura-info-value">
                            {s.ristorante.nome}
                          </span>
                        </div>
                        <div className="struttura-info-row">
                          <span className="struttura-info-label">
                            Prenotazioni ristorante:
                          </span>
                          <a
                            className="struttura-info-value struttura-link-tel"
                            href={`tel:${s.ristorante.telefono.replace(
                              /\s+/g,
                              ""
                            )}`}
                          >
                            {s.ristorante.telefono}
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  <span className="struttura-cta">Visita il sito</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}