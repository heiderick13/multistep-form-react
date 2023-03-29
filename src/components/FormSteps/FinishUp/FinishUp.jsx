import "./FinishUp.css";

function FinishUp({ data }) {
  const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };

  const addOns = {
    1: {
      name: "Online Service",
      price: 1,
    },
    2: {
      name: "Larger Storage",
      price: 2,
    },
    3: {
      name: " Customizable Profile",
      price: 2,
    },
  };

  const plan = data.plan;
  return (
    <div className="finish">
      <span>plan:</span>
      <div className="flex">
        <h2>{plan} </h2>
        <p>$ {planPrices[plan]}/mo</p>
      </div>
      <span>add on:</span>
      <div className="flex">
        <p>{addOns[data.addOn].name}</p>
        <p>$ {addOns[data.addOn].price}/mo</p>
      </div>
      <div className="flex">
        <h2>total</h2>
        <p>$ {planPrices[plan] + addOns[data.addOn].price} /mo</p>
      </div>
    </div>
  );
}

export default FinishUp;
