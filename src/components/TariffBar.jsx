import React from "react";
import classes from "./TariffBar.module.css";
import Button from "./UI/Button";
import { IoMdCheckmarkCircle } from "react-icons/io";

const TariffBar = ({ title, price, description, trial, advantages }) => {
  return (
    <div className={classes.padding}>
      <div className={classes.bar}>
        <h3 className={classes.title}>{title}</h3>
        <h2 className={classes.price}>{price}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.trial}>{trial}</p>
        <p>
          {advantages.map((advantage) => {
            return (
              <ul>
                <li>
                  <IoMdCheckmarkCircle className={classes.checkMark} />
                  {advantage}
                </li>
              </ul>
            );
          })}
        </p>
        <div className={classes.buttonComp}>
          <Button className={classes.btn}>Choose a tariff</Button>
        </div>
      </div>
    </div>
  );
};

export default TariffBar;
