import { Container, Grid } from "@material-ui/core";

import HomeBanner from "../shared/HomeBanner";
import HeaderText from "../shared/HeaderText";
import DespText from "../shared/DespText";
import CircleImg from "../shared/CircleImg";
import ColourBtn from "../shared/ColourBtn";
import ColourTag from "../shared/ColourTag";

export default function Index() {
  return (
    <div>
      <div>
        <HomeBanner />
      </div>
      <div className="welcome-div">
        <img
          style={{ marginRight: "1rem" }}
          src="/images/hand.png"
          alt="hand"
          width={70}
          height={60}
        />
        <HeaderText text="Welcome" color="white" align="center" />
      </div>
      <div className="desp-div">
        <DespText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate
      tincidunt enim sed pulvinar. Nullam ipsum dolor, venenatis in iaculis
      vitae, ullamcorper eu risus. Aliquam nulla erat, tempor eget ligula ut,
      vestibulum eleifend tortor. Praesent nibh eros, tristique congue nunc a,
      auctor tristique libero. Mauris et massa ornare, ullamcorper ligula vitae,
      consequat metus."
        />
      </div>

      <Container id="circle-img-div" maxWidth="lg">
        <CircleImg img="images/nft3.png" />
        <CircleImg img="images/nft4.png" />
        <CircleImg img="images/nft2.png" />
        <CircleImg img="images/nft1.png" />
      </Container>

      <div className="get-ready-div">
        <HeaderText text="Get ready for minting" color="white" align="center" />
        <div className="get-ready-desp"> September XX</div>
        <DespText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate
      tincidunt enim sed pulvinar. Nullam ipsum dolor, venenatis in iaculis
      vitae, ullamcorper eu risus. Aliquam nulla erat, tempor eget ligula ut,
      vestibulum eleifend tortor. Praesent nibh eros, tristique congue nunc a,
      auctor tristique libero. Mauris et massa ornare, ullamcorper ligula vitae,
      consequat metus."
        />
      </div>
      <Container id="shop-div" maxWidth="lg">
        <div id="shop-div-1">
          <HeaderText text="Trait Rarity " color="white" align="left" />
          <div>
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
            All cookies are equal, but some cookies are more equal than others.
            That’s why we’ve established a trait rarity system to tell which of
            our students are likely destined for greatness. <br /> <br /> There
            are 137 total traits in the academy and these have been categorized
            into a tier based system (seen on the right). Traits are ranked from
            ‘common’ all the way through to ‘mythic’ and each rank has a
            corresponding % chance of being minted. All of the Academy’s traits
            and their rarity % can be viewed over in our ‘traits’ section. Click
            below to check them out.
          </div>
          <div className="desp-btn">
            <ColourBtn
              text="View Traits"
              textColor="black"
              color1="#fe50bf"
              color2="#ffb75a"
            />
          </div>
        </div>
        <div id="shop-div-2">
          <img
            className="cookie-stand"
            src="images/FortuneCookieStand2.png"
            alt="Cookie stand"
          />
        </div>
      </Container>
    </div>
  );
}
