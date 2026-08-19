// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Programma } from "./components/Programma";
import { Documenti } from "./components/Documenti";
import { Albo_di_gara } from "./components/Albo_di_gara";
import { Media } from "./components/Media";
import { News } from "./components/News";
import { Contatti } from "./components/Contatti";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { CookiePolicy } from "./components/CookiePolicy";
import { TerminiCondizioni } from "./components/TerminiCondizioni";
import { NotFound } from "./components/NotFound";
import { Seo } from "./components/Seo";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <section className="hero-section">
                <Seo
                  path="/"
                  title="News, Programma e Classifiche"
                  description="Tutte le informazioni ufficiali sul Rally del Garda: programma, news, documenti, albo di gara, iscritti, ordine di partenza e classifiche."
                />
                <Hero />
              </section>
            }
          />
          <Route
            path="/programma"
            element={
              <div className="page-section">
                <Seo
                  path="/programma"
                  title="Programma"
                  description="Consulta il programma completo del Rally del Garda: partenza, arrivo, parco assistenza, riordino notturno e prove speciali."
                />
                <Programma />
              </div>
            }
          />
          <Route
            path="/documenti"
            element={
              <div className="page-section">
                <Seo
                  path="/documenti"
                  title="Documenti"
                  description="Documenti ufficiali del Rally del Garda per le discipline Moderne, Storiche e Regolarità Media50: regolamenti, mappe e moduli di iscrizione."
                />
                <Documenti />
              </div>
            }
          />
          <Route
            path="/albo-di-gara"
            element={
              <div className="page-section">
                <Seo
                  path="/albo-di-gara"
                  title="Albo di Gara"
                  description="Albo di gara del Rally del Garda: circolari informative, comunicazioni ufficiali, iscritti, ordine di partenza e classifiche."
                />
                <Albo_di_gara />
              </div>
            }
          />
          <Route
            path="/media"
            element={
              <div className="page-section">
                <Seo
                  path="/media"
                  title="Media"
                  description="Video, foto e riprese ufficiali del Rally del Garda: highlights delle prove speciali e gallerie fotografiche."
                />
                <Media />
              </div>
            }
          />
          <Route
            path="/news"
            element={
              <div className="page-section">
                <Seo
                  path="/news"
                  title="News"
                  description="Ultimi comunicati, aggiornamenti e mappa della gara del Rally del Garda."
                />
                <News />
              </div>
            }
          />
          <Route
            path="/contatti"
            element={
              <div className="page-section">
                <Seo
                  path="/contatti"
                  title="Contatti"
                  description="Contatta l'organizzazione del Rally del Garda per informazioni su iscrizioni, programma e regolamento."
                />
                <Contatti />
              </div>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <div className="page-section">
                <Seo
                  path="/privacy-policy"
                  title="Privacy Policy"
                  description="Informativa sulla privacy e sul trattamento dei dati personali del sito Rally del Garda."
                />
                <PrivacyPolicy />
              </div>
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <div className="page-section">
                <Seo
                  path="/cookie-policy"
                  title="Cookie Policy"
                  description="Informativa sui cookie utilizzati dal sito Rally del Garda."
                />
                <CookiePolicy />
              </div>
            }
          />
          <Route
            path="/termini-e-condizioni"
            element={
              <div className="page-section">
                <Seo
                  path="/termini-e-condizioni"
                  title="Termini e Condizioni"
                  description="Termini e condizioni di utilizzo del sito Rally del Garda."
                />
                <TerminiCondizioni />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
