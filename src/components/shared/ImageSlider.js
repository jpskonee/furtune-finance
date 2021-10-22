import React, { useState } from "react";
import SquareImgFrame from "./SquareImgFrame";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ButtonBase } from "@material-ui/core";
import "animate.css";

const ImageSlider = ({ data, position, setPosition }) => {
  // const [activeData, setActiveData] = useState(data[position]);
  const [animateActive, setAnimateActive] = useState("");
  const [animateActiveFakeL, setAnimateActiveFakeL] = useState("hide-fake");
  const [animateActiveFakeR, setAnimateActiveFakeR] = useState("hide-fake");
  const [animatePassiveL, setAnimatePassiveL] = useState("");
  const [animatePassiveR, setAnimatePassiveR] = useState("");

  const totalData = data.length - 1;

  const handleSlide = (dir, index) => {
    if (dir === "next" && index + 1 > totalData) {
      setPosition(index);
    } else if (dir === "next" && index + 1 <= totalData) {
      setAnimateActive("active-move-left");
      setAnimateActiveFakeR("active-fake-next");
      setAnimatePassiveL("passive-left-forward");
      setAnimatePassiveR("passive-right-next ");

      setTimeout(() => {
        setPosition(index + 1);
        setAnimatePassiveL("animate__animated animate__flash animate__swing");
        setAnimatePassiveR("animate__animated animate__flash animate__swing");
        setAnimateActive("");
        setAnimateActiveFakeR("hide-fake");
      }, 810);
    } else if (dir === "prev" && !(index - 1) < 0) {
      setPosition(index);
    } else if (dir === "prev" && index - 1 >= 0) {
      setAnimateActive("active-move-right");
      setAnimatePassiveL("passive-left-prev");
      setAnimatePassiveR("passive-right-forward");
      setAnimateActiveFakeL("active-fake-prev");
      setTimeout(() => {
        setPosition(index - 1);
        setAnimatePassiveL("animate__animated animate__flash animate__swing");
        setAnimatePassiveR("animate__animated animate__flash animate__swing");
        setAnimateActive("");
        setAnimateActiveFakeL("hide-fake");
      }, 810);
    }
  };
  // console.log(data[position]);
  return (
    <div className="slider-cont">
      <div className="passive-div">
        <div
          className={`${animatePassiveL}`}
          style={{ visibility: position - 1 < 0 ? "hidden" : "visible" }}
        >
          <SquareImgFrame
            img={data[position - 1 < 0 ? position : position - 1].img}
            state="passive"
          />
        </div>

        <div
          className={`${animatePassiveR}`}
          style={{
            visibility: position + 1 > totalData ? "hidden" : "visible",
          }}
        >
          <SquareImgFrame
            img={data[position + 1 > totalData ? position : position + 1].img}
            state="passive"
          />
        </div>
      </div>

      <div>
        <div className={`active-div ${animateActive}`}>
          {data[position] ? (
            <SquareImgFrame
              img={data[position].img}
              attr={data[position].attr}
              cat={data[position].cat}
              name={data[position].name}
              props={data[position].props}
              state="active"
            />
          ) : (
            <div>
              <h1>Loading....</h1>
            </div>
          )}
        </div>
        <div className={`active-div-fake-R ${animateActiveFakeR}`}>
          {data[position + 1] ? (
            <SquareImgFrame
              img={data[position + 1].img}
              attr={data[position + 1].attr}
              cat={data[position + 1].cat}
              name={data[position + 1].name}
              props={data[position + 1].props}
              state="active"
            />
          ) : (
            <div>
              <h1>Loading....</h1>
            </div>
          )}
        </div>
        <div className={`active-div-fake-L ${animateActiveFakeL}`}>
          {data[position - 1] ? (
            <SquareImgFrame
              img={data[position - 1].img}
              attr={data[position - 1].attr}
              cat={data[position - 1].cat}
              name={data[position - 1].name}
              props={data[position - 1].props}
              state="active"
            />
          ) : (
            <div>
              <h1>Loading....</h1>
            </div>
          )}
        </div>
      </div>
      <div className="img-ctr-div">
        <div
          style={{
            visibility: position !== 0 && totalData > 2 ? "visible" : "hidden",
          }}
        >
          <ButtonBase
            onClick={() => {
              handleSlide("prev", position);
            }}
          >
            <ArrowBackIcon name="prev" className="img-ctr" />
          </ButtonBase>
        </div>

        <div
          style={{ visibility: position < totalData ? "visible" : "hidden" }}
        >
          <ButtonBase
            onClick={() => {
              handleSlide("next", position);
            }}
          >
            <ArrowForwardIcon name="next" className="img-ctr" />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
