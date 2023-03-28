import "./FinishUp.css";

function FinishUp({ data }) {
  return (
    <div className="finish">
      <span>plan:</span>
      <h2>{data.plan} </h2>
      <span>add on:</span>
      <p>{data.addOn}</p>
    </div>
  );
}

export default FinishUp;
