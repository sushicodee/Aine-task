import React from "react";
import './Button.scss'
function Button({
  type,
  placeholder,
  label,
  error,
  value,
  handleclick,
  className,
  icon
}) {
  return (
    <>
      <button
        className={`${className}` || "btn"}
        onClick = {handleclick}
      >
         {icon ? 
         <span className = 'btn-icon'>
             <img src={icon} alt = {value}/> 
            {value}
          </span>
         :value
        }
      </button>
    </>
  );
}

export default Button;