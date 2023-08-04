import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "./UI/Button";

const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <h1 className={classes.logo}>
        <span>Watch</span>Me
      </h1>
      <div className={classes.navLinks}>
        <NavLink className={classes.Link}>
          <h2>Main</h2>
        </NavLink>
        <NavLink className={classes.Link}>
          <h2>Movies</h2>
        </NavLink>
        <NavLink className={classes.Link}>
          <h2>Series</h2>
        </NavLink>
        <NavLink className={classes.Link}>
          <h2>Cartoons</h2>
        </NavLink>
        <NavLink className={classes.Link}>
          <h2>Collections</h2>
        </NavLink>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className={classes.searchBar}
        />
        <Button className={classes.navBtn}>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
