import React, { useState } from "react";
import { Img, Heading, Paragraph } from "../../atoms";
import "./style.scss";
import Quizz from "../../../assets/images/quiz.jpg";
import { Login } from "..";
// import { Link } from "react-router-dom";

import Register from "../register";

function LoginBack() {
  const [signup, setSignup] = useState({ isClick: "true" });
  const handleClick = () => {
    setSignup({
      isClick: false,
    });
  };
  console.log(signup.isClick);

  return (
    <div className="card">
      <div className="card__login">
        <div className="card__login--white">
          {signup.isClick ? (
            <div className="content">
              <Heading title="Welcome Back" />
              <Paragraph paragraph="Start to Explore" />
              <Login />
              <p className="click">
                Don't have an account?
                <span onClick={handleClick}> Click here</span>
              </p>
            </div>
          ) : (
            <Register />
          )}
        </div>
      </div>
      <Img image={Quizz} alt="quiz" />
    </div>
  );
}

export default LoginBack;
