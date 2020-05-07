import React from "react";
import { doBinary, doModulo, countResult } from "./scripts";
import "./resultsTable.css";

function ResultsTable({ base, index, mod }) {
  const binary = doBinary(index).reverse();
  const modulo = doModulo(base, mod, binary);
  const results = countResult(mod, binary, modulo);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              x<sub>i</sub>
            </td>
            <td>
              a<sub>i</sub>
            </td>
            <td>
              t<sub>i</sub>
            </td>
          </tr>
        </thead>
        <tbody>
          {results.map((e, i) => (
            <tr>
              <td>{e}</td>
              <td>{modulo[i]}</td>
              <td>{binary[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ color: "#fff", padding: "15px", border: "2px solid #666" }}>
        {index ? index : "potęga"} = ({binary.reverse()})<sub>2</sub>
      </p>
    </div>
  );
}

export default ResultsTable;
