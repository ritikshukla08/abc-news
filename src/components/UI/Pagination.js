import React from "react";
import Button from "./Button";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={classes.pagination}>
      {props.cur > 1 && <Button click={props.prev} name={"previous"} />}
      <Button name={props.cur} />
      {props.cur < props.last && <Button click={props.next} name={"next"} />}
    </div>
  );
};

export default Pagination;
