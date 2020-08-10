import React from "react";

function Paragraph({ paragraph, span }) {
  return (
    <>
      <p>
        {paragraph} <span>{span}</span>
      </p>
    </>
  );
}

export default Paragraph;
