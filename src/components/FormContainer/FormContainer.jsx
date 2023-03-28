import "./FormContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import InfoContainer from "../InfoContainer/InfoContainer";
import PersonalInfo from "../FormSteps/PersonalInfo/PersonalInfo";
import Plans from "../FormSteps/Plans/Plans";
import Pickadd from "../FormSteps/Pickadd/Pickadd";

import { useForm } from "../../hooks/useForm";

function FormContainer() {
  const personalInfo = (
    <InfoContainer
      title={"Personal Info"}
      subtitle={"Please provide your name, email address, and phone number."}
      content={<PersonalInfo />}
    />
  );
  const plansInfo = (
    <InfoContainer
      title={"Select your plan"}
      subtitle={"Choose your monthly subscription."}
      content={<Plans />}
    />
  );

  const addOns = (
    <InfoContainer
      title={"Pick add-ons"}
      subtitle={"Add-ons help enhance your gaming experience."}
      content={<Pickadd />}
    />
  );

  const formSteps = [personalInfo, plansInfo, addOns];

  const { currentStep, currentComponent, changeStep } = useForm(formSteps);

  return (
    <div className="container">
      <Sidebar />
      {currentComponent}
      <div className="actions">
        <button
          className="btn btn-prev"
          onClick={() => changeStep(currentStep - 1)}
        >
          Go back
        </button>
        <button
          className="btn btn-next"
          onClick={() => changeStep(currentStep + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default FormContainer;
