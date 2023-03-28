import "./Pickadd.css";

function Pickadd({ data, handleInputUpdate }) {
  return (
    <>
      <label className="add-on">
        <input
          type="checkbox"
          value="online"
          checked={data.addOn === "online"}
          onChange={(e) => {
            handleInputUpdate("addOn", e.target.value);
          }}
        />
        <span className="service-info">
          <p className="service">Online Service</p>
          <p className="service-description">Access to multiplayer games</p>
        </span>
        <span>+$1/mo</span>
      </label>

      <label className="add-on">
        <input
          type="checkbox"
          value="storage"
          checked={data.addOn === "storage"}
          onChange={(e) => {
            handleInputUpdate("addOn", e.target.value);
          }}
        />
        <span className="service-info">
          <p className="service">Larger Storage</p>
          <p className="service-description">Extra 1TB of cloud save</p>
        </span>
        <span>+$2/mo</span>
      </label>

      <label className="add-on">
        <input
          type="checkbox"
          value="customizable"
          checked={data.addOn === "customizable"}
          onChange={(e) => {
            handleInputUpdate("addOn", e.target.value);
          }}
        />
        <span className="service-info">
          <p className="service">Customizable Profile</p>
          <p className="service-description">Custom theme on your profile</p>
        </span>
        <span>+$2/mo</span>
      </label>
    </>
  );
}

export default Pickadd;
