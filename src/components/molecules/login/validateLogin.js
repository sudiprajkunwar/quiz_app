export default function validateLogin(values) {
  let errors = {};
  let usernameReg = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  if (!values.name) {
    errors.name = "username is required";
  } else if (!usernameReg.test(values.name)) {
    errors.name = "Enter correct username";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password =
      "Password needs to be correct and  more than 8 characters";
  }
  return errors;
}
