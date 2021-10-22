import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import HeaderText from "../shared/HeaderText";
import SplashBtn from "../shared/SplashBtn";
import ImageSlider from "../shared/ImageSlider";
import MobileDropDownLeft from "../shared/MobileDropDownLeft";
import MobileDropDownRight from "../shared/MobileDropDownRight";
import { getData } from "../../data/filterDataFunction";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SplashModal({
  openSplash,
  setSplashOpen,
  handleSplashOpen,
  handleSplashClose,
}) {
  //getting Data to show
  const [attr, setAttr] = useState("cookies");
  const [cat, setCat] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [position, setPosition] = useState(0);

  //handle btn clicks
  const handleBtnClick = (clickedAttr, clickedCat) => {
    if (clickedAttr === attr) {
      const data = getData(clickedAttr, clickedCat);
      setFilteredData(data);
      setCat(clickedCat);
      setPosition(0);
    } else {
      const data = getData(clickedAttr, "all");
      setFilteredData(data);
      setAttr(clickedAttr);
      setCat("all");
      setPosition(0);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
    const data = getData("cookies", "all");
    setFilteredData(data);
    return data;
  }, []);
  const body = (
    <div className="modal-container">
      <div>
        <CloseIcon onClick={handleSplashClose} className="close-icon" />
      </div>
      <div className="modal-inner">
        <div className="cookie-text">
          <HeaderText text="Cookie Rarity" color="white" align="left" />
        </div>

        <div className="top-nav">
          <div className="attribute-text">Attributes</div>
          <div className="splash-btn-top">
            <div className="each-btn-div">
              <SplashBtn
                name="All"
                textColor="white"
                align="center"
                color1="#01C094"
                color2="#1D83A7"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "all");
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Common"
                textColor="white"
                align="center"
                color1="#01C094"
                color2="#1D83A7"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "common");
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Uncommon"
                textColor="white"
                align="center"
                color1="#1D83A7"
                color2="#5F30A7"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "uncommon");
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Rare"
                textColor="white"
                align="center"
                color1="#1D83A7"
                color2="#5F30A7"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "rare");
                }}
              />
            </div>

            <div className="each-btn-div">
              <SplashBtn
                name="Epic"
                textColor="white"
                align="center"
                color1="#1D83A7"
                color2="#5355C6"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "epic");
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Legendary"
                textColor="white"
                align="center"
                color1="#FF4DC3"
                color2="#FFC14E"
                active={cat}
                onClick={() => {
                  handleBtnClick(attr, "legendary");
                }}
              />
            </div>
          </div>
        </div>

        <div className="mobile-nav">
          <div>
            <MobileDropDownLeft
              setFilteredData={setFilteredData}
              filteredData={filteredData}
              setPosition={setPosition}
              setAttr={setAttr}
              attr={attr}
              setCat={setCat}
              cat={cat}
            />
          </div>
          <div>
            <MobileDropDownRight
              setFilteredData={setFilteredData}
              filteredData={filteredData}
              setPosition={setPosition}
              setAttr={setAttr}
              attr={attr}
              setCat={setCat}
              cat={cat}
            />
          </div>
        </div>

        <div className="slider-root">
          <div className="btn-part">
            <div className="each-btn-div">
              <SplashBtn
                name="Cookies"
                textColor="white"
                align="left"
                color1="#01C094"
                color2="#1D83A7"
                active={attr}
                onClick={() => {
                  handleBtnClick("cookies", cat);
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Dips"
                textColor="white"
                align="left"
                color1="#01C094"
                color2="#1D83A7"
                active={attr}
                onClick={() => {
                  handleBtnClick("dips", cat);
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Hats"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5F30A7"
                active={attr}
                onClick={() => {
                  handleBtnClick("hats", cat);
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Toppings"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5F30A7"
                active={attr}
                onClick={() => {
                  handleBtnClick("toppings", cat);
                }}
              />
            </div>

            <div className="each-btn-div">
              <SplashBtn
                name="Insides"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5355C6"
                active={attr}
                onClick={() => {
                  handleBtnClick("insides", cat);
                }}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                name="Accessories"
                textColor="white"
                align="left"
                color1="#FF4DC3"
                color2="#FFC14E"
                active={attr}
                onClick={() => {
                  handleBtnClick("accessories", cat);
                }}
              />
            </div>
          </div>
          <div className="splash-slider">
            {filteredData === undefined ? (
              <h1>Loading.... </h1>
            ) : (
              <ImageSlider
                data={filteredData}
                position={position}
                setPosition={setPosition}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={openSplash}
        onClose={handleSplashClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-root"
      >
        {body}
      </Modal>
    </div>
  );
}
