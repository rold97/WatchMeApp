import React from "react";
import classes from "./ButtonTransparent.module.css";

const ButtonTransparent = (props) => {
  return (
    <btn className={classes.btn} type={props.type || "button"}>
      {props.children}
    </btn>
  );
};

export default ButtonTransparent;
