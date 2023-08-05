import React, { Fragment, useEffect } from "react";
import classes from "./Row.module.css";
import axios from "axios";

const Row = (title, fetchURL) => {
  useEffect(() => {
    axios.get(fetchURL);
  }, [fetchURL]);

  return (
    <Fragment>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.row}></div>
      <div id={"slider"}></div>
    </Fragment>
  );
};

export default Row;
