// sudip raj kunwar

import React, { useState } from "react";
import "./style.scss";
import { InputText, Button, Paragraph } from "../../atoms";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "./useForm";
import validate from "./validateLogin";
const Form = () => {
  const [login, setLogin] = useState(false);
  const { loginHandleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("submitted form");
    const regList = JSON.parse(localStorage.getItem("reglist")) || [];

    regList.map((list) => {
      if (values.name === list.name && values.password === list.password) {
        localStorage.setItem("token", "asdfghjkl");
        setLogin(true);
        localStorage.setItem("admin", JSON.stringify(list.name));
        toast("sucessfully login", {
          autoClose: 3000,
        });
      }
    });
  }

  const token = localStorage.getItem("token");
  let logIn = true;
  if (token == null) {
    logIn = false;
  }

  if (login || logIn) return <Redirect to="/welcome" />;

  return (
    <form>
      <div className="username">
        <InputText
          type="name"
          name="name"
          placeholder="Username"
          value={values.name}
          onChange={loginHandleChange}
        />
      </div>
      {errors.name && <p className="ermsg">{errors.name}</p>}

      <div className="password">
        <InputText
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={loginHandleChange}
        />
      </div>
      {errors.password && <p className="ermsg">{errors.password}</p>}
      <Paragraph paragraph="Forget password?" />
      <Button type="submit" btnName="Login" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
