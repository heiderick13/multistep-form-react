import React from "react";

function Input({ id, name, label, type, placeHolder }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeHolder} />
    </>
  );
}

export default Input;
