// src/App.jsx
import { useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Programma } from "./components/Programma";
import { Documenti } from "./components/Documenti";
import { Albo_di_gara } from "./components/Albo_di_gara";
import { Media } from "./components/Media";
import { News } from "./components/News";
import { Footer } from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "programma":
        return <Programma />;
      case "documenti":
        return <Documenti />;
      case "albo":
        return <Albo_di_gara />;
      case "media":
        return <Media />;
      case "news":
        return <News />;
      case "contatti":
        return <Footer />;
      case "home":
      default:
        return <Hero onChangeSection={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      <Header
        onChangeSection={setActiveSection}
        activeSection={activeSection}
      />

      <main className="main">
        {renderSection()}
      </main>

      {activeSection !== "contatti" && <Footer />}
    </div>
  );
}

export default App;
