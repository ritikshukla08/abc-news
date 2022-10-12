import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../UI/Logo";
import Card from "../UI/Card";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const newsCategories = useSelector((state) => state.news.categories);

  const [categoryState, setCategoryState] = useState("general");

  const changeCategory = (e) => {
    let value = e.target.innerText.toLowerCase();
    setCategoryState(value);
  };

  return (
    <Card>
      <div className={classes.navbar}>
        <div className={classes.navLogo}>
          <Logo />
        </div>
        <div>
          <ul className={classes.catagories}>
            {newsCategories.map((cat, i) => (
              <li key={i} onClick={changeCategory} className={classes.navItem}>
                <NavLink
                  to={"/" + cat}
                  className={({ isActive }) =>
                    isActive ? classes.activeStyle : undefined
                  }
                >
                  {cat}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default NavBar;
