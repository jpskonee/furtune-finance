import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function ColourBtn({ text, textColor, mt, color1, color2 }) {
  return (
    <div
      style={{
        background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        color: textColor,
      }}
      className="colour-btn"
    >
      <div>{text}</div>
      <div>
        <ArrowForwardIcon />
      </div>
    </div>
  );
}

export default ColourBtn;
