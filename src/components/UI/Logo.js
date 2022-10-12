import React from "react";

import classes from "./Logo.module.css";
import logo from "../../image/newsLogo.png";

const Logo = () => {
  return <img src={logo} alt="abc news" className={classes.img} />;
};

export default Logo;
