import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import HeaderText from "../shared/HeaderText";
import SplashBtn from "../shared/SplashBtn";
import ImageSlider from "../shared/ImageSlider";

export default function SplashModal({
  openSplash,
  setSplashOpen,
  handleSplashOpen,
  handleSplashClose,
}) {
  //handling Btn clicks Bgcolor

  const [clickedL, setClickedL] = useState({
    active: "btnL1",
  });
  const [clickedT, setClickedT] = useState({
    active: "btnT1",
  });

  const handleBtnClickL = (e) => {
    const name = e.target.name;
    setClickedL({ active: name });
  };
  const handleBtnClickT = (e) => {
    const name = e.target.name;
    setClickedT({ active: name });
  };
  // console.log(clickedL.active);
  const body = (
    <div className="modal-container">
      <div>
        <CloseIcon onClick={handleSplashClose} className="close-icon" />
      </div>
      <div className="modal-inner">
        <div className="cookie-text">
          <HeaderText text="Cookie Rarity" color="white" align="left" />
        </div>
        <div className="slider-root">
          <div className="slider-l">
            <div className="attribute-text">Attributes</div>
            <div className="each-btn-div">
              <SplashBtn
                text="Head"
                textColor="white"
                align="left"
                color1="#01C094"
                color2="#1D83A7"
                name="btnL1"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                text="Clothing"
                textColor="white"
                align="left"
                color1="#01C094"
                color2="#1D83A7"
                name="btnL2"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                text="Mouth"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5F30A7"
                name="btnL3"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                text="Fur/Skin"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5F30A7"
                name="btnL4"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>

            <div className="each-btn-div">
              <SplashBtn
                text="Teeth"
                textColor="white"
                align="left"
                color1="#1D83A7"
                color2="#5355C6"
                name="btnL5"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                text="Eyewear"
                textColor="white"
                align="left"
                color1="#FF4DC3"
                color2="#FFC14E"
                name="btnL6"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
            <div className="each-btn-div">
              <SplashBtn
                text="Background"
                textColor="white"
                align="left"
                color1="#FF4DC3"
                color2="#FFC14E"
                name="btnL7"
                active={clickedL.active}
                onClick={handleBtnClickL}
              />
            </div>
          </div>
          <div className="slider-r">
            <div className="splash-btn-top">
              <div className="each-btn-div">
                <SplashBtn
                  text="All"
                  textColor="white"
                  align="center"
                  color1="#01C094"
                  color2="#1D83A7"
                  name="btnT1"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>
              <div className="each-btn-div">
                <SplashBtn
                  text="Common"
                  textColor="white"
                  align="center"
                  color1="#01C094"
                  color2="#1D83A7"
                  name="btnT2"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>
              <div className="each-btn-div">
                <SplashBtn
                  text="Uncommon"
                  textColor="white"
                  align="center"
                  color1="#1D83A7"
                  color2="#5F30A7"
                  name="btnT3"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>
              <div className="each-btn-div">
                <SplashBtn
                  text="Rare"
                  textColor="white"
                  align="center"
                  color1="#1D83A7"
                  color2="#5F30A7"
                  name="btnT4"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>

              <div className="each-btn-div">
                <SplashBtn
                  text="Super Rare"
                  textColor="white"
                  align="center"
                  color1="#1D83A7"
                  color2="#5355C6"
                  name="btnT5"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>
              <div className="each-btn-div">
                <SplashBtn
                  text="Mythic"
                  textColor="white"
                  align="center"
                  color1="#FF4DC3"
                  color2="#FFC14E"
                  name="btnT6"
                  active={clickedT.active}
                  onClick={handleBtnClickT}
                />
              </div>
            </div>
            <div className="splash-slider">
              <ImageSlider />
            </div>
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
