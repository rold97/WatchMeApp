import React from "react";
import classes from "./TariffPlansRow.module.css";
import TariffBar from "./TariffBar";

const TariffPlansRow = (props) => {
  const TariffArray = [
    {
      title: "Base",
      price: "$8.99",
      description: "For warm and cozy views with the family",
      trial: "30 days free",
      advantages: [
        "Unlimited movies, TV series and more",
        "Simultaneous viewing on 1 screen",
        "High Quality",
      ],
      id: "1",
    },
    {
      title: "Comfort",
      price: "$10.99",
      description: "For fun views with family and friends",
      trial: "30 days free",
      advantages: [
        "Unlimited movies, TV series and more",
        "Simultaneous viewing on 2 screen",
        "HD Quality",
      ],
      id: "2",
    },
    {
      title: "Comfort +",
      price: "$12.99",
      description: "For true connoisseurs of cinema",
      trial: "30 days free",
      advantages: [
        "Unlimited movies, TV series and more",
        "Simultaneous viewing on 3 screen",
        "UltraHD quality",
      ],
      id: "3",
    },
    {
      title: "Premium",
      price: "$14.99",
      description: "For a home cinema feel",
      trial: "30 days free",
      advantages: [
        "Unlimited movies, TV series and more",
        "Simultaneous viewing on 5 screen",
        "4K quality",
      ],
      id: "4",
    },
  ];

  return (
    <div className={classes.rowFragment}>
      <h2 className={classes.title}>Tariff plan</h2>
      <div className={classes.rowBar}>
        {TariffArray.map((bar) => {
          return (
            <TariffBar
              title={bar.title}
              price={bar.price}
              description={bar.description}
              trial={bar.trial}
              advantages={bar.advantages}
              key={bar.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TariffPlansRow;
