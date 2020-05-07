import React from "react";

function Input({ val, func, style = {} }) {
  return (
    <input
      type="text"
      style={style}
      value={val}
      onChange={(e) => {
        if (!isNaN(e.target.value)) {
          func(e.target.value);
        } else {
          e.preventDefault();
        }
      }}
    />
  );
}

export default Input;
