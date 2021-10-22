import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import MobileDropDownOption from "./MobileDropDownOption";
import { getData } from "../../data/filterDataFunction";

const MobileDropDownLeft = ({
  attr,
  setAttr,
  setFilteredData,
  setPosition,
  setCat,
}) => {
  //handle option open/close
  const [open, setOpen] = useState(false);

  //handling colour changed
  const [clickedL, setClickedL] = useState({
    name: "Cookies",
    color1: "#01C094",
    color2: "#1D83A7",
  });

  const handleBtnClick = (clickedAttr) => {
    if (clickedAttr !== attr) {
      const data = getData(clickedAttr, "all");
      setAttr(clickedAttr);
      setFilteredData(data);
      setPosition(0);
      setCat("all");
    }
  };

  const handleNavClick = () => {
    setOpen(!open);
  };

  return (
    <div onClick={handleNavClick} className="nav-div">
      <div
        className="nav-head"
        style={{
          background: `linear-gradient(80deg, ${clickedL.color1} 40%, ${clickedL.color2})`,
          color: "black",
          textTransform: "capitalize",
        }}
      >
        {clickedL.name}
        {open ? (
          <ArrowDropUpIcon style={{ fontSize: "2.2rem" }} />
        ) : (
          <ArrowDropDownIcon style={{ fontSize: "2.2rem" }} />
        )}
      </div>

      {open && (
        <div className="nav-option-div">
          <div
            onClick={() => {
              handleBtnClick("cookies");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Cookies"
              color1="#01C094"
              color2="#1D83A7"
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("dips");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Dips"
              color1="#01C094"
              color2="#1D83A7"
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("hats");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Hats"
              color1="#1D83A7"
              color2="#5F30A7"
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("toppings");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Toppings"
              color1="#1D83A7"
              color2="#5F30A7"
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("insides");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Insides"
              color1="#1D83A7"
              color2="#5355C6"
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("accessories");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Accessories"
              color1="#FF4DC3"
              color2="#FFC14E"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropDownLeft;
