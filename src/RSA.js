import React, { useState } from "react";
import Input from "./Input";
import RSATable from "./RSATable";

function RSA() {
  const [val_p, setVal_p] = useState(null);
  const [val_q, setVal_q] = useState(null);
  const [val_e, setVal_e] = useState(null);
  const [val_d, setVal_d] = useState(null);

  let n = val_p * val_q;
  let phi = (val_p - 1) * (val_q - 1);

  return (
    <div className="rsa">
      <div>
        <p>
          <span>p = </span>
          <Input val={val_p} func={setVal_p} />
        </p>
        <p>
          <span>q = </span>
          <Input val={val_q} func={setVal_q} />
        </p>
        <p>
          <span>e = </span>
          <Input val={val_e} func={setVal_e} />
        </p>

        <p>
          <span className="answer">n = p * q = {n}</span>
        </p>
        <p>
          <span className="answer">Φ = ( p - 1 ) * ( q - 1 ) = {phi}</span>
        </p>
        <p>
          <span className="answer">e = {val_e}</span>
        </p>
        <p>
          <span className="answer">
            d = {val_e} <sup>-1</sup> mod {phi}
          </span>
        </p>

        <RSATable base={val_e} mod={phi} func={setVal_d} />

        <div className="answer">
          <p>
            Ostatni V<sub>i</sub> mod n !!!
          </p>
          <p>
            {" "}
            d  = {val_d} mod {phi} = {val_d >= 0 ? val_d % phi : val_d + phi}
          </p>

          <p>
            <span>
              k<sub>1</sub> = (e, n) = ({val_e + ", " + n}){" "}
            </span>
          </p>
          <p>
            <span>
              k<sub>2</sub> = (d, n) = ({(val_d % phi) + ", " + n})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RSA;
