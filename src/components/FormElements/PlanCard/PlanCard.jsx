import "./PlanCard.css";

function PlanCard({ photo, title, price }) {
  return (
    <label>
      <div className="card">
        <input type="checkbox" />
        <img src={photo} alt="Plan Icon" />
        <h3 className="plan-title">{title}</h3>
        <p className="plan-price">${price}/mo</p>
      </div>
    </label>
  );
}

export default PlanCard;
