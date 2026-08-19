// src/components/Header.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerLogo from "../assets/Rally Del Garda targa.png";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/programma", label: "Programma" },
  { to: "/documenti", label: "Documenti" },
  { to: "/albo-di-gara", label: "Albo di gara" },
  { to: "/media", label: "Media" },
  { to: "/news", label: "News" },
  { to: "/contatti", label: "Contatti" },
];

export function Header() {
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileLinkClass = ({ isActive }) =>
    isActive ? "mobile-link active" : "mobile-link";

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="header-logo" aria-label="Rally del Garda - Home">
            <img src={headerLogo} alt="Rally del Garda" />
          </NavLink>

          {/* MENU DESKTOP */}
          <nav className="header-nav-desktop" aria-label="Menu principale">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Toggle tema + hamburger a destra */}
          <div className="header-right">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Attiva tema scuro" : "Attiva tema chiaro"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Apri menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileMenu}
      />

      <nav className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} aria-label="Menu mobile">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={mobileLinkClass}
            onClick={closeMobileMenu}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
