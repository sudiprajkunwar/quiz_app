import React from "react";
import "./style.scss";

function Button({ btnName, onClick, color }) {
  return (
    <div className="button">
      <button className={`button--primary ${color}`} onClick={onClick}>
        {btnName}
      </button>
    </div>
  );
}

export default Button;
