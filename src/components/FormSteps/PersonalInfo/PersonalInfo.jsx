import Input from "../../FormElements/Input/Input";

function PersonalInfo() {
  return (
    <>
      <Input
        id={"name"}
        label={"Name"}
        type={"text"}
        placeHolder={"e.g. Jonh Doe"}
      />
      <Input
        id={"email"}
        label={"Email Address"}
        type={"email"}
        placeHolder={"e.g. john@example.com"}
      />
      <Input
        id={"phone"}
        label={"Phone Number"}
        type={"tel"}
        placeHolder={"e.g. 12 34567-8910"}
      />
    </>
  );
}

export default PersonalInfo;
