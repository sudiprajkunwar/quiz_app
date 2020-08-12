import { useState } from "react";

const useForm = (submit, validate) => {
  const [values, setValues] = useState({ name: "", password: "" });
  const [errors, setErrors] = useState({ name: "", password: "" });

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
    submit();
    setErrors(validate(values));
  };

  return { loginHandleChange, handleSubmit, values, errors };
};

export default useForm;
