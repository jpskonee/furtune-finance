import React, { useState } from "react";
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

export default function Index() {
  const [openSplash, setOpenSplash] = useState(false);

  const handleSplashOpen = () => {
    setOpenSplash(true);
  };

  const handleSplashClose = () => {
    setOpenSplash(false);
  };

  return (
    <div>
      <div className="hero-section">
        {/* <HomeBanner /> */}
        <HeroSection />
      </div>
      <Container style={{ background: "black", zIndex: "999" }} maxWidth="lg">
        <div className="welcome-div">
          <HeaderText
            text="👋 Soltar Welcomes you"
            color="white"
            align="center"
          />
        </div>
        <div className="desp-div">
          <DespText text="Join our 8888 uniquely generated, beautiful and collectible high quality fortune cookies with proof of ownership stored on the Solana blockchain." />
        </div>
      </Container>
      <Container id="circle-img-div" maxWidth="lg">
        <CircleImg img="images/nft3.png" />
        <CircleImg img="images/nft4.png" />
        <CircleImg img="images/nft2.png" />
        <CircleImg img="images/nft1.png" />
      </Container>

      <Container maxWidth="lg">
        <div className="get-ready-div">
          <HeaderText
            text="Get ready for a Fair Launch"
            color="white"
            align="center"
          />
          <div className="get-ready-desp"> OCTOBER 16</div>
          <DespText text="It's time to find out your luck with Soltar’s Fortune Cookies. You might discover how blessed you are sooner than expected, may those who mint be happy with abundant fortune and luck." />
          <div className="get-ready-desp-2">
            <DespText text="Owning a first generation fortune cookie will bring you lots of fortune with future airdrops, chances to win other NFTS, and the ability to crack your fortune cookie open and earn more rewards. Hold those fortunes tight and you will be blessed with good fortune" />
          </div>
        </div>
      </Container>
      <Container id="shop-div" maxWidth="lg">
        <div id="shop-div-1">
          <HeaderText text="Trait Rarity " color="white" align="left" />
          <div className="color-tag-div">
            <ColourTag
              text="Common"
              textColor="white"
              percent="95%"
              percentColor="#2AC4FF"
              color1="#003A35"
              color2="#083041"
            />
            <ColourTag
              text="Uncommon"
              textColor="white"
              percent="15%"
              percentColor="#00FFBD"
              color1="#222241"
              color2="#063537"
            />
            <ColourTag
              text="Rare"
              textColor="white"
              percent="3%"
              percentColor="#9C8EFF"
              color1="#0E3B57"
              color2="#223159"
            />
            <ColourTag
              text="Super Rare"
              textColor="white"
              percent="94%"
              percentColor="#E740BB"
              color1="#302A57"
              color2="#4A1D4B"
            />
            <ColourTag
              text="Mythic"
              textColor="white"
              percent="94%"
              percentColor="#FFCB45"
              color1="#331836"
              color2="#332E20"
            />
          </div>
          <div className="stand-descp">
            Everyone is lucky, but some have been blessed with more fortune than
            others, only the luckiest will obtain the best fortune. <br /> There
            are X amount of traits in the fortune machine. They go from common
            to mythical rarity. Blessed by Satoshi - 1 <br />
            Blessed by Vitalik - 2<br />
            Blessed by Anatoly - 3 <br /> Blessed by Trabucco- 4 <br />
            Blessed by SBF - 5 <br /> <br />
            All cookies are equal, but some cookies are more equal than others.
            That’s why we’ve established a trait rarity system to tell which of
            our students are likely destined for greatness. There are 137 total
            traits in the academy and these have been categorized into a tier
            based system (seen on the right). Traits are ranked from ‘common’
            all the way through to ‘mythic’ and each rank has a corresponding %
            chance of being minted. All of the Academy’s traits and their rarity
            % can be viewed over in our ‘traits’ section. Click below to check
            them out
          </div>
          <div className="desp-btn">
            <ColourBtn
              text="View Traits"
              textColor="black"
              color1="#fe50bf"
              color2="#ffb75a"
              width="89%"
            />
          </div>
        </div>
        <div id="shop-div-2">
          <img
            className="cookie-stand"
            src="images/Machine_v02.png"
            alt="Cookie stand"
          />
        </div>
      </Container>
      <Container className="team-faq" maxWidth="lg">
        <Grid container>
          <Grid item md={6} xs={12} className="team-div">
            <HeaderText text="Team" color="white" align="left" />
            <div className="each-team">
              <TeamCard
                color1="#AE46A9"
                color2="#842CE0"
                img="images/nft1.png"
                name="CookieKing"
              />
            </div>
            <div className="each-team img-right">
              <TeamCard
                color1="#45AD4A"
                color2="#78C843"
                img="images/nft2.png"
                name="Fortune Teller"
              />
            </div>
            <div className="each-team">
              <TeamCard
                color1="#FFCD57"
                color2="#EBAF59"
                img="images/nft4.png"
                name="Cookie Master"
              />
            </div>
            <div className="each-team img-right">
              <TeamCard
                color1="#5299BB"
                color2="#3ABAAB"
                img="images/nft3.png"
                name="Soltars Assistant"
              />
            </div>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={5} xs={12} className="faq-div">
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
          <Grid item md={6} xs={12} className="btn-l">
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
          <Grid item md={6} xs={12} className="btn-r">
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
