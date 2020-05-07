import React from "react";
import { countRSA } from "./scripts";
import "./resultsTable.css";

function ResultsTable({ base, mod, func }) {
  const rsa = countRSA(base, mod);
  func(rsa[rsa.length - 1].Vi);

  return (
    <table>
      <thead>
        <tr>
          <td>lp</td>
          <td>
            U<sub>i</sub>
          </td>
          <td>
            U'<sub>i</sub>
          </td>
          <td>
            V<sub>i</sub>
          </td>
          <td>
            V'<sub>i</sub>
          </td>
          <td>
            n<sub>i</sub>
          </td>
          <td>
            a<sub>i</sub>
          </td>
          <td>
            q<sub>i</sub>
          </td>
          <td>
            r<sub>i</sub>
          </td>
        </tr>
      </thead>
      <tbody>
        {rsa.map((e) => (
          <tr>
            <td>{e.lp}</td>
            <td>{e.Ui}</td>
            <td>{e.Uip}</td>
            <td>{e.Vi}</td>
            <td>{e.Vip}</td>
            <td>{e.ni}</td>
            <td>{e.ai}</td>
            <td>{e.qi}</td>
            <td>{e.ri}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
