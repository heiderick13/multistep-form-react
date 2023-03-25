import "./FormContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import InfoContainer from "../InfoContainer/InfoContainer";
import PersonalInfo from "../FormSteps/PersonalInfo/PersonalInfo";
import Plans from "../FormSteps/Plans/Plans";

function FormContainer() {
  const personalInputs = <PersonalInfo />;
  const plansInfo = <Plans />;
  return (
    <div className="container">
      <Sidebar />
      <InfoContainer
        title={"Personal Info"}
        subtitle={"Please provide your name, email address, and phone number."}
        content={plansInfo}
      />
    </div>
  );
}

export default FormContainer;
