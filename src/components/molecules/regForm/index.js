// import React, { useState } from "react";
// import "./style.scss";
// import { InputText, Button, Paragraph } from "../../atoms";
// import { useForm } from "react-hook-form";

// function RegForm() {
//   const [values, setValues] = useState({
//     email: "",
//     username: "",
//     password: "",
//   });

//   const loginHandleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//   };
//   return (
//     <form>
//       <div className="username">
//         <InputText
//           type="text"
//           name="username"
//           placeholder="Name"
//           value={values.name}
//           onChange={loginHandleChange}
//         />
//       </div>
//       <div className="email">
//         <InputText
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={values.email}
//           onChange={loginHandleChange}
//         />
//       </div>

//       <div className="password">
//         <InputText
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={values.password}
//           onChange={loginHandleChange}
//         />
//       </div>
//       <Button type="submit" btnName="Signup" onClick={handleSubmit} />
//     </form>
//   );
// }

// export default RegForm;

import React from "react";
import "./style.scss";
import { Button } from "../../atoms";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function RegForm() {
  const { handleSubmit, register, errors } = useForm();

  // const handleClick = () => {
  //   //
  //   // let myData = JSON.parse(localStorage.getItem("userData"), []);
  //   let myData = localStorage.getItem("userData");

  //   myData = JSON.parse(myData) || [];

  //   // console.log(myData.name);

  //   let regList = JSON.parse(localStorage.getItem("reglist")) || [];
  //   console.log(regList);

  //   const detail = {
  //     name: myData.name,
  //     password: myData.password,
  //   };
  //   console.log(detail);

  //   regList.push(detail);

  //   localStorage.setItem("reglist", JSON.stringify(regList));

  //   //
  // };

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    localStorage.setItem("userData", JSON.stringify(data));
    toast("sucessfully register", {
      autoClose: 3000,
    });

    //
    // let myData = JSON.parse(localStorage.getItem("userData"), []);
    let myData = localStorage.getItem("userData");

    myData = JSON.parse(myData) || [];

    // console.log(myData.name);

    let regList = JSON.parse(localStorage.getItem("reglist")) || [];
    console.log(regList);

    const detail = {
      name: myData.name,
      password: myData.password,
    };
    console.log(detail);

    regList.push(detail);

    localStorage.setItem("reglist", JSON.stringify(regList));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="username">
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: true,
          })}
        />
      </div>
      {errors.name && errors.name.type === "required" && (
        <p className="ermsg">Name is required field.</p>
      )}
      <div className="email">
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
      </div>
      {errors.email && errors.email.type === "required" && (
        <p className="ermsg">This is required field.</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p className="ermsg">Email Invalid.</p>
      )}
      <div className="password">
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({
            required: true,
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
        />
      </div>
      {errors.password && errors.password.type === "required" && (
        <p className="ermsg">Password is required field.</p>
      )}
      {errors.password && <p className="ermsg">{errors.password.message}</p>}

      <Button
        type="submit"
        btnName="Signup"
        // onClick={handleClick}
      />
    </form>
  );
}

export default RegForm;
