import "./Add.css";

function Add({ service, description, price }) {
  return (
    <label className="add-on">
      <input type="checkbox" name={service} value={service} />
      <span className="service-info">
        <p className="service">{service}</p>
        <p className="service-description">{description}</p>
      </span>
      <span>+${price}/mo</span>
    </label>
  );
}

export default Add;
