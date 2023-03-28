import "./Sidebar.css";
import bgImage from "../../assets/images/bg-sidebar-desktop.svg";
import Step from "../Step/Step";

function Sidebar({ currentStep }) {
  return (
    <nav className="side-bar" style={{ backgroundImage: `url(${bgImage})` }}>
      <Step
        active={currentStep >= 0 ? "active" : ""}
        stepNum={"1"}
        title={"YOUR INFO"}
      />
      <Step
        active={currentStep >= 1 ? "active" : ""}
        stepNum={"2"}
        title={"SELECT PLAN"}
      />
      <Step
        active={currentStep >= 2 ? "active" : ""}
        stepNum={"3"}
        title={"ADD-ONS"}
      />
      <Step
        active={currentStep >= 3 ? "active" : ""}
        stepNum={"4"}
        title={"SUMMARY"}
      />
    </nav>
  );
}

export default Sidebar;
