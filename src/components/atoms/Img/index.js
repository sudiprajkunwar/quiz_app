import React from "react";
function Img({ alt, image }) {
  return (
    <div className="img">
      <img src={image} alt={alt} />
    </div>
  );
}

export default Img;
