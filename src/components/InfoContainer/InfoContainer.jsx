import "./InfoContainer.css";
import Input from "../Input/Input";

function InfoContainer({ title, subtitle, content }) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {content}
      <button className="btn btn-next">Next Step</button>
    </div>
  );
}

export default InfoContainer;
