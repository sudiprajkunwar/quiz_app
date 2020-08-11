import React, { useState } from "react";
import "./style.scss";
import { InputText, Button, Paragraph } from "../../atoms";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const [values, setValues] = useState({ name: "", password: "" });
  const [login, setLogin] = useState(false);
  const loginHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // let myData = localStorage.getItem("userData");

    // myData = JSON.parse(myData) || [];
    // console.log(myData.name);

    // if (values.name === myData.name && values.password === myData.password) {
    //   localStorage.setItem("token", "asdfghjkl");
    //   console.log("helloe");
    //   setLogin(true);
    //   toast("sucessfully login", {
    //     autoClose: 3000,
    //   });
    // } else {
    //   toast("please enter valid name and password", {
    //     autoClose: 3000,
    //   });
    // }

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

    values.name === "" &&
      values.password === "" &&
      toast("please enter valid name and password", {
        autoClose: 3000,
      });

    // (values.name != "" ||(values.name === "" && values.password != "") ||values.password === "") {
    //   toast("please enter valid name and password", {
    //     autoClose: 3000,
    //   });
    // }

    //  toast("sucessfully login", {
    //     autoClose: 3000,
    //   })
    // : toast("please enter valid name and password", {
    //     autoClose: 3000,
    //   });
  };

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

      <div className="password">
        <InputText
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={loginHandleChange}
        />
      </div>
      <Paragraph paragraph="Forget password?" />
      <Button type="submit" btnName="Login" onClick={handleSubmit} />
    </form>
  );
};

export default Form;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import "./style.scss";
// import { Link } from "react-router-dom";
// import { InputText, Button } from "../../atoms";

// const Form = () => {
//   const { register, reset, handleSubmit, errors } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data, e) => {
//     // console.log(data);
//     e.target.reset();
//     let myData = localStorage.getItem("userData");
//     myData = JSON.parse(myData);
//     console.log(myData.email);
//     // if (defaultValues.email == myData.email && password == myData.password) {
//     //   console.log("hello");
//     // }
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="email">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           ref={register({
//             required: true,
//             pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//           })}
//         />
//       </div>
//       {errors.email && errors.email.type === "required" && (
//         <p className="ermsg">This is required field.</p>
//       )}
//       {errors.email && errors.email.type === "pattern" && (
//         <p className="ermsg">Email Invalid.</p>
//       )}

//       <div className="password">
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           ref={register({
//             required: true,
//             minLength: {
//               value: 8,
//               message: "Password must have at least 8 characters",
//             },
//           })}
//         />
//       </div>
//       {errors.password && errors.password.type === "required" && (
//         <p className="ermsg">Password is required field.</p>
//       )}
//       {errors.password && <p className="ermsg">{errors.password.message}</p>}

//       {/* <Link to="/welcome"> */}
//       <Button type="submit" btnName="Login" />
//       {/* </Link> */}
//     </form>
//   );
// };

// export default Form;
