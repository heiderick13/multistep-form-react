import "./InfoContainer.css";
import Input from "../Input/Input";

function InfoContainer({ title }) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <Input
        id={"name"}
        label={"Name"}
        type={"text"}
        placeHolder={"First and Lastname"}
      />
      <Input
        id={"name"}
        label={"Name"}
        type={"text"}
        placeHolder={"First and Lastname"}
      />
      <Input
        id={"name"}
        label={"Name"}
        type={"text"}
        placeHolder={"First and Lastname"}
      />
    </div>
  );
}

export default InfoContainer;
