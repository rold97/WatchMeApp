import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  const { children, style } = props;
  return (
    <>
      <button className={style ? style : classes.btn}>{children}</button>
    </>
  );
}
export default Button;
