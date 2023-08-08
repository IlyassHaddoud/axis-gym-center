import Package from "./Package";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Package",
      price: 25,
      tag: "per month,bill annualy",
      features: [
        "Unlimited Gym Access",
        "2x Fitness Consultant",
        "Nutrition Tracking",
        "1x Free Suplement",
        "3 Days per week",
        "Personal Trainer",
      ],
    },
    {
      name: "Mid Package",
      price: 55,
      tag: "per month,bill annualy",
      features: [
        "Unlimited Gym Access",
        "4x Fitness Consultant",
        "Nutrition Tracking",
        "3x Free Suplement",
        "5 Days per week",
        "Personal Trainer",
      ],
    },
    {
      name: "Pro Package",
      price: 75,
      tag: "per month,bill annualy",
      features: [
        "Unlimited Gym Access",
        "7x Fitness Consultant",
        "Nutrition Tracking",
        "5x Free Suplement",
        "Gym Card",
        "Personal Trainer",
      ],
    },
    {
      name: "Athlete Package",
      price: 105,
      tag: "per month,bill annualy",
      features: [
        "Unlimited Gym Access",
        "Free Clothes",
        "All Training Program",
        "Free Fitness Consultant",
        "Free Suplement",
        "Gym Card",
      ],
    },
  ];
  return (
    <div className="pricing">
      <h1>Our List Packages</h1>
      <div className="btns">
        <button className="montly">Billed Montly</button>
        <button className="yearly">Billed Yearly</button>
      </div>
      <div className="packages">
        {packages.map((pack) => (
          <Package
            name={pack.name}
            price={pack.price}
            tag={pack.tag}
            features={pack.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
