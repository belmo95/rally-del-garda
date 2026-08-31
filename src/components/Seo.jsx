// src/components/Seo.jsx
// Componente leggero per gestire i meta tag SEO in modo dinamico per ogni pagina
// (title, description, canonical, Open Graph, Twitter Card) senza dipendenze esterne.
import { useEffect } from "react";

const SITE_NAME = "Rally del Garda";
const SITE_URL = "https://rallydelgarda.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

/**
 * Aggiorna title, description, canonical e Open Graph/Twitter per la pagina corrente.
 * path deve iniziare con "/" (es. "/programma").
 */
export function Seo({ title, description, path = "/", image, noindex = false }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | News, Programma e Classifiche`;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const ogImage = image || DEFAULT_IMAGE;

    document.title = fullTitle;

    setMetaByName("description", description);
    setMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", ogImage);

    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", ogImage);

    // Riporta la pagina in cima quando si cambia sezione tramite router
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [title, description, path, image]);

  return null;
}

export { SITE_URL, SITE_NAME };
