import React from "react";
import Wall from "../../../assets/images/wall-wallpape.jpg";
import { Img } from "../../atoms";
import "./style.scss";

function Background() {
  return <Img image={Wall} alt="banner" />;
}

export default Background;
