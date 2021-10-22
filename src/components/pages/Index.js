import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import HeaderText from "../shared/HeaderText";
import DespText from "../shared/DespText";
import CircleImg from "../shared/CircleImg";
import ColourBtn from "../shared/ColourBtn";
import ColourTag from "../shared/ColourTag";
import SplashModal from "../pages/SplashModal";
import TeamCard from "../shared/TeamCard";
import FaqSection from "../shared/FaqSection";
import Footer from "../shared/Footer";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FaDiscord } from "react-icons/fa";
import HeroSection from "../shared/HeroSection";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Index() {
  const [openSplash, setOpenSplash] = useState(false);

  const handleSplashOpen = () => {
    setOpenSplash(true);
  };

  const handleSplashClose = () => {
    setOpenSplash(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div style={{ overflowY: "hidden" }} className="hero-section">
        <HeroSection />
      </div>
      <Container maxWidth="lg">
        <div className="welcome-div">
          <HeaderText
            text="👋 Soltar beckons you…"
            color="white"
            align="center"
          />
        </div>
        <div className="desp-div">
          <DespText text="Try your luck, find your destiny, and gain good fortune by minting one of the 8,888 finely crafted recipes utilized by Soltar in his quest for the recipe of the tastiest and most powerful Fortune Cookie!" />
        </div>
      </Container>
      <Container data-aos="fade-right" id="circle-img-div" maxWidth="lg">
        <CircleImg img="images/animated_nft4.png" />
        <CircleImg img="images/animated_nft3.png" />
        <CircleImg img="images/animated_nft2.png" />
        <CircleImg img="images/animated_nft1.png" />
      </Container>

      <Container maxWidth="lg">
        <div className="get-ready-div">
          <HeaderText
            text="Get ready for a Fateful Launch"
            color="white"
            align="center"
          />
          <div className="get-ready-desp"> OCTOBER 16</div>
          <DespText text="It's almost time to find out your luck with Soltar’s Fortune Cookies. You might discover your fate sooner than expected, may those who mint be happy with abundant fortune and luck." />
          <div className="get-ready-desp-2">
            <DespText text="Owning one of the “freshly baked” batch of cookies will bring you lots of fortune, including future airdrops and chances to win other NFTs. All cookie holders will be able to to crack their fortune cookie open and earn more rewards. Hold those cookies tight and you will be blessed with good fortune." />
          </div>
        </div>
      </Container>
      <Container id="shop-div" maxWidth="lg">
        <div id="shop-div-1">
          <div data-aos="fade-right">
            <HeaderText text="Trait Rarity " color="white" align="left" />
          </div>
          <div data-aos="fade-right" className="color-tag-div">
            <ColourTag
              text="Satoshi’s Favour"
              textColor="white"
              percent="64%"
              percentColor="#2AC4FF"
              color1="#003A35"
              color2="#083041"
            />
            <ColourTag
              text="Vitalik’s Whims"
              textColor="white"
              percent="20%"
              percentColor="#00FFBD"
              color1="#222241"
              color2="#063537"
            />
            <ColourTag
              text="Anatoly’s Blessings"
              textColor="white"
              percent="10%"
              percentColor="#9C8EFF"
              color1="#0E3B57"
              color2="#223159"
            />
            <ColourTag
              text="Trabucco’s Boons"
              textColor="white"
              percent="5%"
              percentColor="#E740BB"
              color1="#302A57"
              color2="#4A1D4B"
            />
            <ColourTag
              text="SBF’s Fortunes"
              textColor="white"
              percent="1%"
              percentColor="#FFCB45"
              color1="#331836"
              color2="#332E20"
            />
          </div>
          <div data-aos="fade-right" className="stand-descp">
            In his quest to bake the ultimate fortune cookie, Soltar tried a lot
            of different ingredients for a lot of different recipes, with
            ingredients that were usually offered to ancient crypto deities.
            Some ingredients were easier to come by, but he grew more desperate
            by the day, trying even more desperate combinations. Realizing that
            the scarcer the ingredient, the more powerful it would be, and
            wanting to make some sense of the arcane knowledge granted to him by
            the ledger, Soltar ordered the 4 chefs to categorize every
            ingredient by their rarity.
            <br />
            <br />
            Everyone is lucky, but some have been blessed with more fortune than
            others, only the luckiest will obtain the best fortune
            <br />
            <br />
            There are 150+ total ingredients in the ledger An’alos and these
            were sorted into categories by the chefs. These categories were
            ranked by the power of the deities they were offered to from
            ‘Satoshi’s Favours’, which could be found in any ancient market to
            be presented at Satoshi’s temple, all the way to mythic ‘SBF’s
            Fortunes. The chance of obtaining every kind of ingredient rarity
            are listed above. They go from common to mythical.
          </div>
          <div className="desp-btn">
            <ColourBtn
              text="View Traits"
              textColor="black"
              color1="#fe50bf"
              color2="#ffb75a"
              width="89%"
              onClick={() => {
                handleSplashOpen();
              }}
            />
          </div>
        </div>
        <div data-aos="fade-left" id="shop-div-2">
          <img
            className="cookie-stand"
            src="images/Machine_v02.png"
            alt="Soltars Fortune Machine"
          />
        </div>
      </Container>
      <Container className="team-faq" maxWidth="lg">
        <Grid container>
          <Grid item md={6} xs={12} className="team-div">
            <HeaderText text="Team" color="white" align="left" />
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#AE46A9"
                color2="#842CE0"
                img="images/nft1.png"
                name="CookieKing"
              />
            </div>
            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#45AD4A"
                color2="#78C843"
                img="images/nft2.png"
                name="Fortune Teller"
              />
            </div>
            <div data-aos="zoom-in" className="each-team">
              <TeamCard
                color1="#FFCD57"
                color2="#EBAF59"
                img="images/nft4.png"
                name="Cookie Monster"
              />
            </div>
            <div data-aos="zoom-in" className="each-team img-right">
              <TeamCard
                color1="#5299BB"
                color2="#3ABAAB"
                img="images/nft3.png"
                name="Soltars Assistant"
              />
            </div>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid data-aos="fade-left" item md={5} xs={12} className="faq-div">
            <HeaderText
              className="faq-header"
              text="FAQ"
              color="white"
              align="left"
            />
            <FaqSection />
          </Grid>
        </Grid>
      </Container>
      <Container className="social-btn" maxWidth="lg">
        <Grid container>
          <Grid data-aos="fade-right" item md={6} xs={12} className="btn-l">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://twitter.com/fortunefinance_"
              rel="noreferrer"
            >
              <ColourBtn
                icon={
                  <TwitterIcon
                    style={{ marginRight: "1rem", fontSize: "1.6rem" }}
                  />
                }
                text="/Fortunefinance_"
                textColor="black"
                color1="#19C9FF"
                color2="#19C9FF"
                width="90%"
              />
            </a>
          </Grid>
          <Grid data-aos="fade-left" item md={6} xs={12} className="btn-r">
            <a
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://discord.gg/fortunefinance"
              rel="noreferrer"
            >
              <ColourBtn
                icon={
                  <FaDiscord
                    style={{ marginRight: "1rem", fontSize: "1.6rem" }}
                  />
                }
                text="/Fortunefinance_"
                textColor="black"
                color1="#A962FF"
                color2="#A962FF"
                width="90%"
              />
            </a>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Footer />
      </Container>
      {openSplash && (
        <SplashModal
          openSplash={openSplash}
          setOpenSplash={setOpenSplash}
          handleSplashOpen={handleSplashOpen}
          handleSplashClose={handleSplashClose}
        />
      )}
    </div>
  );
}
