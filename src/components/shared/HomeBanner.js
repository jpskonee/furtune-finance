import React from "react";
// import { Container } from "@material-ui/core";
import ColourBtn from "./ColourBtn";

const HomeBanner = () => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-logo">
          <img src="/images/logo.png" alt="logo" className="logo-img" />

          <div className="hero-connect">
            <img
              src="/images/connect-btn.png"
              alt="logo"
              className="connect-img"
            />
            <p> Connect Wallet</p>
          </div>
        </div>

        <div className="hero-text">Going live in</div>
        <div className="banner-btn-div">
          <ColourBtn
            text="Mint Cookie"
            textColor="white"
            color1="#7540d0"
            color2="#338889"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
