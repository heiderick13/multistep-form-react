import "./Plans.css";
import PlanCard from "../../FormElements/PlanCard/PlanCard";
import arcadeIcon from "../../../assets/images/icon-arcade.svg";
import advancedIcon from "../../../assets/images/icon-advanced.svg";
import proIcon from "../../../assets/images/icon-pro.svg";

function Plans() {
  return (
    <div className="plans">
      <PlanCard photo={arcadeIcon} title={"Arcade"} price={"9"} />
      <PlanCard photo={advancedIcon} title={"Advanced"} price={"12"} />
      <PlanCard photo={proIcon} title={"Pro"} price={"15"} />
    </div>
  );
}

export default Plans;
