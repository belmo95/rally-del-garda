// src/components/Programma.jsx
import "./Programma.css";

export function Programma() {
  return (
    <section className="page-section programma">
      <h2>Programma</h2>
      <p>Programma indicativo della manifestazione.</p>

      <table className="programma-table">
        <thead>
          <tr>
            <th>Giorno</th>
            <th>Ora</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Venerdì</td>
            <td>18:00</td>
            <td>Verifiche tecniche</td>
          </tr>
          <tr>
            <td>Sabato</td>
            <td>09:00</td>
            <td>Partenza 1ª Tappa</td>
          </tr>
          <tr>
            <td>Domenica</td>
            <td>09:00</td>
            <td>Partenza 2ª Tappa</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
