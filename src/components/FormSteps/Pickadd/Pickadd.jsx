import Add from "../../FormElements/Add/Add";

function Pickadd() {
  return (
    <>
      <Add
        service={"Online Service"}
        description={"Access to multiplayer games"}
        price={"1"}
      />
      <Add
        service={"Larger Storage"}
        description={"Extra 1TB of cloud save"}
        price={"2"}
      />
      <Add
        service={"Customizable Profile"}
        description={"Custom theme on your profile"}
        price={"2"}
      />
    </>
  );
}

export default Pickadd;
