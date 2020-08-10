import React, { useState } from "react";
import { Heading, Button } from "../../atoms";
import "./style.scss";
import { Link, Redirect } from "react-router-dom";
function Start() {
  const [back, setBack] = useState({ isBack: false });
  const handleBackChange = () => {
    setBack({
      isBack: true,
    });
    localStorage.removeItem("token");
  };

  if (back.isBack) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="start">
        <button className="log" onClick={handleBackChange}>
          Logout
        </button>
        <Heading title="Welcome Admin" />
        <h3 className="train">Train Your Brain</h3>
        <Link to="/welcome/quiz">
          <Button btnName="START the GAME" />
        </Link>
      </div>
    </>
  );
}

export default Start;
