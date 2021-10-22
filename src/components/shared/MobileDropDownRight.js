import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import MobileDropDownOption from "./MobileDropDownOption";
import { getData } from "../../data/filterDataFunction";

const MobileDropDown = ({
  attr,
  setFilteredData,
  setPosition,
  cat,
  setCat,
}) => {
  //handle nav open/close
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(!open);
  };

  //handling option changed
  const [clickedL, setClickedL] = useState({
    name: cat,
    color1: "#01C094",
    color2: "#1D83A7",
  });

  //hadling data
  const handleBtnClick = (clickedCat, colour1, colour2) => {
    if (clickedCat !== cat) {
      const data = getData(attr, clickedCat);
      setCat(clickedCat);
      setFilteredData(data);
      setPosition(0);
    }
  };

  return (
    <div onClick={handleNavClick} className="nav-div">
      <div
        className="nav-head"
        style={{
          background: `linear-gradient(80deg, ${
            cat === "all" ? "#01C094" : clickedL.color1
          } 40%, ${cat === "all" ? "#1D83A7" : clickedL.color2})`,
          color: "black",
          textTransform: "capitalize",
        }}
      >
        {cat}
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
              handleBtnClick("all", "#01C094", "#1D83A7");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="all"
              color1="#01C094"
              color2="#1D83A7"
              cat={cat}
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("common", "#01C094", "#1D83A7");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="Common"
              color1="#01C094"
              color2="#1D83A7"
              cat={cat}
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("uncommon", "#1D83A7", "#5F30A7");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="uncommon"
              color1="#1D83A7"
              color2="#5F30A7"
              cat={cat}
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("rare", "#1D83A7", "#5F30A7");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="rare"
              color1="#1D83A7"
              color2="#5F30A7"
              cat={cat}
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("epic", "#1D83A7", "#5355C6");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="epic"
              color1="#1D83A7"
              color2="#5355C6"
              cat={cat}
            />
          </div>

          <div
            onClick={() => {
              handleBtnClick("legendary", "#FF4DC3", "#FFC14E");
            }}
          >
            <MobileDropDownOption
              clickedL={clickedL}
              setClickedL={setClickedL}
              name="legendary"
              color1="#FF4DC3"
              color2="#FFC14E"
              cat={cat}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropDown;
