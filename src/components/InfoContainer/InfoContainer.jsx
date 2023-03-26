import "./InfoContainer.css";
// import { useForm } from "../../hooks/useForm";

function InfoContainer({ title, subtitle, content }) {
  // const { changeStep } = useForm();

  return (
    <div className="info-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {content}
      {/* <div className="actions">
        <button
          className="btn btn-prev"
          onClick={() => changeStep(currentStep - 1)}
        >
          Go back
        </button>
        <button
          className="btn btn-next"
          onClick={() => changeStep(currentStep + 1)}
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
}

export default InfoContainer;
