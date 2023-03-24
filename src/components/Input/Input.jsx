import "./Input.css";

function Input({ id, name, label, type, placeHolder }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeHolder} required />
    </>
  );
}

export default Input;
