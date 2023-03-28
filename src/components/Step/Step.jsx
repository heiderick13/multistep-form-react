import "./Step.css";

function Step({ stepNum, title, active }) {
  return (
    <div className="step">
      <span className={active}>{stepNum}</span>
      <div className="text">
        <p>Step {stepNum}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Step;
