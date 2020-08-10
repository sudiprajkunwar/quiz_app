import React, { useState } from "react";
import "./style.scss";
import { Heading, Paragraph } from "../../atoms";
import RegForm from "../regForm";
import { LoginBack } from "..";

const Register = () => {
  const [back, setBack] = useState({ isBack: false });
  const handleBackChange = () => {
    setBack({
      isBack: true,
    });
  };
  // return back.isBack ? (
  //   <div className="regContent">
  //     <p className="login" onClick={handleBackChange}>
  //       <span className="back">
  //         <a>
  //           <i className="fas fa-long-arrow-alt-left"></i>
  //         </a>
  //         {/* <span>login</span> */}
  //       </span>
  //     </p>
  //     <Heading title="Create an Account" />
  //     <Paragraph paragraph="Dive into the world" />
  //     <RegForm />
  //   </div>
  // ) : (
  //   <LoginBack />
  // );

  return (
    <>
      <div className="regContent">
        <p className="login" onClick={handleBackChange}>
          <span className="back">
            <a>
              <i className="fas fa-long-arrow-alt-left"></i>
            </a>
          </span>
        </p>
        <Heading title="Create an Account" />
        <Paragraph paragraph="Dive into the world" />
        <RegForm />
      </div>
      {back.isBack && <LoginBack />}
    </>
  );
};

export default Register;
