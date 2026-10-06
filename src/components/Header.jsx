// src/components/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerLogo from "../assets/Rally Del Garda targa.png";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/programma", label: "Programma" },
  { to: "/documenti", label: "Documenti" },
  { to: "/albo-di-gara", label: "Albo di gara" },
  { to: "/media", label: "Video PS" },
  { to: "/news", label: "News" },
  { to: "/strutture-convenzionate", label: "Strutture convenzionate" },
  { to: "/contatti", label: "Contatti" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileLinkClass = ({ isActive }) =>
    isActive ? "mobile-link active" : "mobile-link";

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <NavLink
            to="/"
            className="header-logo"
            aria-label="Rally del Garda - Home"
            onClick={closeMobileMenu}
          >
            <img src={headerLogo} alt="Rally del Garda" />
          </NavLink>

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

          <div className="header-right">
            <button
              className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Menu mobile"
      >
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