// src/components/Header.jsx
import { useEffect, useState } from "react";
import "./Header.css";
import headerLogo from "../assets/Rally Del Garda targa.png";

export function Header({ onChangeSection, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // all'avvio, leggi tema salvato o usa light
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const handleNavClick = (section) => {
    onChangeSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div
            className="header-logo"
            onClick={() => handleNavClick("home")}
            style={{ cursor: "pointer" }}
          >
            <img src={headerLogo} alt="Rally del Garda" />
          </div>

          {/* MENU DESKTOP */}
          <nav className="header-nav-desktop">
            <button
              className={activeSection === "home" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("home")}
            >
              Home
            </button>
            <button
              className={activeSection === "programma" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("programma")}
            >
              Programma
            </button>
            <button
              className={activeSection === "documenti" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("documenti")}
            >
              Documenti
            </button>
            <button
              className={activeSection === "albo" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("albo")}
            >
              Albo di gara
            </button>
            <button
              className={activeSection === "media" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("media")}
            >
              Media
            </button>
            <button
              className={activeSection === "news" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("news")}
            >
              News
            </button>
            <button
              className={activeSection === "contatti" ? "nav-link active" : "nav-link"}
              onClick={() => handleNavClick("contatti")}
            >
              Contatti
            </button>
          </nav>

          {/* Toggle tema + hamburger a destra */}
          <div className="header-right">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Apri menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "show" : ""}`} />

      <nav className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <button
          className={activeSection === "home" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("home")}
        >
          Home
        </button>
        <button
          className={activeSection === "programma" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("programma")}
        >
          Programma
        </button>
        <button
          className={activeSection === "documenti" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("documenti")}
        >
          Documenti
        </button>
        <button
          className={activeSection === "albo" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("albo")}
        >
          Albo di gara
        </button>
        <button
          className={activeSection === "media" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("media")}
        >
          Media
        </button>
        <button
          className={activeSection === "news" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("news")}
        >
          News
        </button>
        <button
          className={activeSection === "contatti" ? "mobile-link active" : "mobile-link"}
          onClick={() => handleNavClick("contatti")}
        >
          Contatti
        </button>
      </nav>
    </>
  );
}
