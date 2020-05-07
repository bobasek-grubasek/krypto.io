import React from "react";
import { alfabet } from "./scripts";

function Alfabet() {
  let a = alfabet;

  return (
    <div className="alfabet">
      <table className="tab">
        <tr>
          {a.map((e) => (
            <th>{e[0]}</th>
          ))}
        </tr>
        {a.map((e) => (
          <td>{e[1]}</td>
        ))}
      </table>
    </div>
  );
}

export default Alfabet;
