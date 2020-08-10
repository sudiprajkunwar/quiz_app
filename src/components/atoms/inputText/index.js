import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const InputText = ({ name, type, onChange, placeholder, value }) => (
  <input
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
  />
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
};
export default InputText;
