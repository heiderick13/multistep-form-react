import "./PlanCard.css";

function PlanCard({ photo, title, price }) {
  return (
    <div className="card">
      <img src={photo} alt="Plan Icon" />
      <h3 className="plan-title">{title}</h3>
      <p className="plan-price">${price}/mo</p>
    </div>
  );
}

export default PlanCard;
