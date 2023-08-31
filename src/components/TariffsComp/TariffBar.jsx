import React, { useState } from "react";
import classes from "./TariffBar.module.css";
import Button from "../UI/Button/Button";
import { IoMdCheckmarkCircle } from "react-icons/io";

const TariffBar = ({ title, price, description, trial, advantages, id }) => {
  const [barIsActive, setBarIsActive] = useState(true);

  const changeBarStatus = () => {
    setBarIsActive(!barIsActive);
  };

  return (
    <div className={classes.padding}>
      <div
        className={barIsActive ? classes.bar : classes.activeBar}
        onClick={changeBarStatus}
      >
        <h3 className={classes.title}>{title}</h3>
        <h2 className={classes.price}>{price}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.trial}>{trial}</p>
        <ul>
          {advantages.map((advantage) => {
            return (
              <li key={Math.random() * 3}>
                <IoMdCheckmarkCircle className={classes.checkMark} />
                {advantage}
              </li>
            );
          })}
        </ul>

        <div className={classes.buttonComp}>
          <Button className={classes.btn}>Choose a tariff</Button>
        </div>
      </div>
    </div>
  );
};

export default TariffBar;
