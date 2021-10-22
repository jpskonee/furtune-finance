import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core";

const MobileDropDownOption = ({
  name,
  color1,
  color2,
  clickedL,
  setClickedL,
  cat,
}) => {
  //handling option changed

  const handleOptionClick = (name, color1, color2) => {
    setClickedL({ name: name, color1: color1, color2: color2 });
  };

  const useStyles = makeStyles((theme) => ({
    active: {
      background: `linear-gradient(80deg, ${clickedL.color1}, ${clickedL.color2})`,
      "-webkitBackgroundClip": "text",
      "-webkitTextFillColor": "transparent",
    },
    normal: {
      color: "white",
      fontSize: "01rem",
      fontWeight: "lighter",
    },
  }));

  const classes = useStyles();
  return (
    <div
      onClick={() => {
        handleOptionClick(name, color1, color2);
      }}
      className="option"
    >
      <div
        style={{ textTransform: "capitalize" }}
        className={clickedL.name === name ? classes.active : classes.normal}
      >
        {name}
      </div>
      {clickedL.name === name && (
        <DoneIcon
          style={{
            color: clickedL.color2,
            fontSize: "1rem",
          }}
        />
      )}
    </div>
  );
};

export default MobileDropDownOption;
