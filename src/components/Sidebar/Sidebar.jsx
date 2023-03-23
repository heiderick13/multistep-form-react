import "./Sidebar.css";
import bgImage from "../../assets/images/bg-sidebar-desktop.svg";
import Step from "../Step/Step";

function Sidebar() {
  return (
    <nav className="side-bar" style={{ backgroundImage: `url(${bgImage})` }}>
      <Step stepNum={'1'} title={'YOUR INFO'}/>
      <Step stepNum={'2'} title={'SELECT PLAN'}/>
      <Step stepNum={'3'} title={'ADD-ONS'}/>
      <Step stepNum={'4'} title={'SUMMARY'}/>

    </nav>
  );
}

export default Sidebar;
