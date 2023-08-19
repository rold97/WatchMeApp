import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTelegram, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className={classes.footerFragment}>
      <div className={classes.logoFooter}>
        <Link to="/">
          <h1 className={classes.logo}>
            <span>Watch</span>Me
          </h1>
        </Link>
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
      <div className={classes.linksSection}>
        <Link className={classes.Link}>FAQ</Link>
        <Link className={classes.Link}>Investor Relations</Link>
        <Link className={classes.Link}>Privacy</Link>
        <Link className={classes.Link}>Speed Test</Link>
      </div>
      <div className={classes.linksSection}>
        <Link className={classes.Link}>Help Center</Link>
        <Link className={classes.Link}>Jobs</Link>
        <Link className={classes.Link}>Cookies Preferences</Link>
        <Link className={classes.Link}>Lega Notices</Link>
      </div>
      <div className={classes.linksSection}>
        <Link className={classes.Link}>Acount</Link>
        <Link className={classes.Link}>Way to Watch</Link>
        <Link className={classes.Link}>Corportate information</Link>
        <Link className={classes.Link}>Only om WatchMe</Link>
      </div>
      <div className={classes.linksSection}>
        <Link className={classes.Link}>Media Center</Link>
        <Link className={classes.Link}>Terms of Use</Link>
        <Link className={classes.Link}>Contact Us</Link>
        <Link className={classes.Link}>Subscription</Link>
      </div>
    </div>
  );
};

export default Footer;
