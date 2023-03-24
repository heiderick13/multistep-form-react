import "./FormContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import InfoContainer from "../InfoContainer/InfoContainer";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

function FormContainer() {
  const personalInputs = <PersonalInfo />;
  return (
    <div className="container">
      <Sidebar />
      <InfoContainer
        title={"Personal Info"}
        subtitle={"Please provide your name, email address, and phone number."}
        content={personalInputs}
      />
    </div>
  );
}

export default FormContainer;
