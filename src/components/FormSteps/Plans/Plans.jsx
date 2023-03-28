import "./Plans.css";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

function Plans({ data, handleInputUpdate }) {
  return (
    <div className="plans">
      <label>
        <div className="card">
          <input
            type="checkbox"
            value={"arcade"}
            checked={data.plan === "arcade"}
            onChange={(e) => {
              handleInputUpdate("plan", e.target.value);
            }}
          />
          <img src={arcadeIcon} alt="Plan Icon" />
          <h3 className="plan-title">{"Arcade"}</h3>
          <p className="plan-price">${"9"}/mo</p>
        </div>
      </label>

      <label>
        <div className="card">
          <input
            type="checkbox"
            value={"advanced"}
            checked={data.plan === "advanced"}
            onChange={(e) => {
              handleInputUpdate("plan", e.target.value);
            }}
          />
          <img src={advancedIcon} alt="Plan Icon" />
          <h3 className="plan-title">{"Advanced"}</h3>
          <p className="plan-price">${"12"}/mo</p>
        </div>
      </label>

      <label>
        <div className="card">
          <input
            type="checkbox"
            value={"pro"}
            checked={data.plan === "pro"}
            onChange={(e) => {
              handleInputUpdate("plan", e.target.value);
            }}
          />
          <img src={proIcon} alt="Plan Icon" />
          <h3 className="plan-title">{"Pro"}</h3>
          <p className="plan-price">${"15"}/mo</p>
        </div>
      </label>
    </div>
  );
}

export default Plans;
