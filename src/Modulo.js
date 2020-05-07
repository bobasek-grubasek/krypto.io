import React, { useState } from "react";
import Input from "./Input";
import ResultsTable from "./ResultsTable";

function Modulo() {
  const [base, setBase] = useState("");
  const [index, setIndex] = useState("");
  const [mod, setMod] = useState("");

  return (
    <div className="modulo">
      <Input val={base} func={setBase} />
      <sup>
        <Input
          val={index}
          func={setIndex}
          style={{ height: "8px", width: "30px" }}
        />
      </sup>
      <span> mod</span>
      <Input val={mod} func={setMod} />
      <ResultsTable base={base} index={index} mod={mod} />
    </div>
  );
}

export default Modulo;
