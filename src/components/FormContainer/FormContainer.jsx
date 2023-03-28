import "./FormContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import InfoContainer from "../InfoContainer/InfoContainer";
import PersonalInfo from "../FormSteps/PersonalInfo/PersonalInfo";
import Plans from "../FormSteps/Plans/Plans";
import Pickadd from "../FormSteps/Pickadd/Pickadd";
import ThankYou from "../FormSteps/ThankYou/ThankYou";

import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  addOn: "",
};

function FormContainer() {
  const [data, setData] = useState(formTemplate);

  const handleInputUpdate = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const personalInfo = (
    <InfoContainer
      data={data}
      handleInputUpdate={handleInputUpdate}
      title={"Personal Info"}
      subtitle={"Please provide your name, email address, and phone number."}
      content={
        <PersonalInfo data={data} handleInputUpdate={handleInputUpdate} />
      }
    />
  );
  const plansInfo = (
    <InfoContainer
      data={data}
      title={"Select your plan"}
      subtitle={"Choose your monthly subscription."}
      content={<Plans data={data} />}
    />
  );

  const addOns = (
    <InfoContainer
      data={data}
      title={"Pick add-ons"}
      subtitle={"Add-ons help enhance your gaming experience."}
      content={<Pickadd data={data} />}
    />
  );

  const finishUp = (
    <InfoContainer
      data={data}
      title={"Finishing up"}
      subtitle={"Double-check if everything looks OK before confirming"}
      content={""}
    />
  );

  const thankYou = <ThankYou />;

  const formSteps = [personalInfo, plansInfo, addOns, finishUp, thankYou];

  const {
    currentStep,
    currentComponent,
    changeStep,
    isLastStep,
    isFirstStep,
    isThankYouStep,
  } = useForm(formSteps);

  return (
    <div className="container">
      <Sidebar currentStep={currentStep} />
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        {currentComponent}
        <div className="actions">
          {!isFirstStep && (
            <button
              className="btn btn-prev"
              onClick={() => changeStep(currentStep - 1)}
            >
              Go back
            </button>
          )}
          {!isLastStep ? (
            <button className="btn btn-next">Next Step</button>
          ) : (
            <button
              className="btn btn-confirm"
              onClick={() => {
                changeStep(currentStep + 1);
                let btns = document.querySelectorAll(".btn");
                btns.forEach((btn) => {
                  btn.style.display = "none";
                });
              }}
            >
              Confirm
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormContainer;
