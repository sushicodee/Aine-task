import React from "react";
import './Input.scss';

function Input({
  type,
  name,
  placeholder,
  label,
  error,
  value,
  onChange,
  handlekeyup,
  className,
}) {
  return (
    <>
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        className={className || "input"}
        onChange = {onChange}
        autoComplete='off'
        onKeyUp = {handlekeyup}
    />
    </>
  );
}

export default Input;