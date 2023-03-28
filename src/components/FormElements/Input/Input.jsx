import "./Input.css";

function Input({ label, type, placeHolder }) {
  return (
    <>
      <label>
        {label}
        <input
          className="personal-input"
          type={type}
          placeholder={placeHolder}
          required
        />
      </label>
    </>
  );
}

export default Input;
