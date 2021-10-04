import React from "react";
import { Container } from "@material-ui/core";
import ColourBtn from "./ColourBtn";

const HomeBanner = () => {
  return (
    <div className="hero">
      <Container maxWidth="lg" className="hero-inner">
        <div className="hero-logo">
          <img src="/images/logo.png" alt="logo" className="logo-img" />
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
      </Container>
    </div>
  );
};

export default HomeBanner;
