import "./FormContainer.css";
import Sidebar from "../Sidebar/Sidebar";
import InfoContainer from "../InfoContainer/InfoContainer";
import Input from "../Input/Input";

function FormContainer() {
  return (
    <div className="container">
      <Sidebar />
      <InfoContainer title={"Personal Info"} />
    </div>
  );
}

export default FormContainer;
