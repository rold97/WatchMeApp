import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTelegram, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footerFragment}>
      <div className={classes.footerLogo}>
        <Link className={classes.logoFooter} to="/">
          <h1 className={classes.logo}>
            <span>Watch</span>Me
          </h1>
        </Link>
      </div>
      <div className={classes.footerLinks}>
        <Link className={classes.link}>info@watchme.com</Link>
        <div className={classes.links}>
          <Link className={classes.Link}>
            <SiFacebook />
          </Link>
          <Link className={classes.Link}>
            <SiInstagram />
          </Link>
          <Link className={classes.Link}>
            <SiTelegram />
          </Link>
          <Link className={classes.Link}>
            <SiTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
