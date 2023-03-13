import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";
import Button from "../../common/Button";
import { LinkTextNav } from "../../linkTextNav";
import "@fontsource/titan-one";
import Navbar from "../../navbar/Navbar";
import ModalComponent from "../../common/Modal";
import { ModalHero } from "./ModalHero";

// const MainWrapper = styled.div`
//   background: #FFB8C9;
//    height: 85vh;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: top right;
// `;

const HeroLayout = styled.div`
  background: #ffb8c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 110vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const HeroContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 90%;
  gap: 80px;
`;
const HeroLeftContent = styled.div(() => ({
  marginTop: "2%",
  display: "flex",
  flexDirection: "column",
  flexBasis: "30%",
}));

const HeroHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3.5rem",
  fontWeight: "bold",
  color: "#ffffff",
}));
const HeroHeadingSpan = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "5rem",
  fontWeight: "bold",
  color: "#D41442",
}));

const HeroLeftBottomContent = styled.div`
  display: flex;
  color: white;

  align-items: center;
  font-family: DM Sans;
  font-weight: bold;

  p {
    text-align: left;
  }
`;

const HeroCenterContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "50%",
  justifyContent: "space-between",
  alignItems: "center",
  background: `url(${"/herocentercircle.png"})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
}));
const HeroRightContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "10%",
  justifyContent: "space-around",
}));
const SubheadingRight = styled.p(() => ({
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
}));

const ButtonWrapper = styled.button((props) => ({
  marginBottom: "2%",
  display: "flex",
  backgroundColor: "rgba(0,0,0,0)",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "auto",
  height: "auto",
  border: "0",
  gap: "10px",
}));

const ContentCircle = styled.div`
  display: block;
 
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    85.87deg,
    #fff5f7 -51.75%,
    rgba(255, 245, 247, 0.461) 80.21%
  );
`;

export const Hero = ({ setProducts }) => {
  return (
    <>
      <HeroLayout>
        <Navbar setProducts={setProducts} />
        <HeroContentWrapper>
          <HeroLeftContent>
            <HeroHeading>
              ICE CREAM <br /> MADE WITH <br />{" "}
              <HeroHeadingSpan>PASSION</HeroHeadingSpan>{" "}
            </HeroHeading>
            <ButtonWrapper>
              <Button variant="primary">Products</Button>
              <Button
                onClick={() =>
                  window.scrollTo({
                    top: 1600,
                    behavior: "smooth",
                  })
                }
                variant="secondary"
              >
                How it's made
              </Button>
            </ButtonWrapper>
            <HeroLeftBottomContent>
              <img src="/header-milk.png" alt="" />
              <p>
                Ice cream contains at least 10% milk fat, and at least 20% total
                milk solids.
              </p>
            </HeroLeftBottomContent>
          </HeroLeftContent>
          <HeroCenterContent>
            <img width="250vw" height="98%" src="icecreamcenter.png" alt="" />
          </HeroCenterContent>
          <HeroRightContent>
            <SubheadingRight>
              <HeroHeadingSpan>84</HeroHeadingSpan> <br /> Sellers
            </SubheadingRight>
            <SubheadingRight>
              <HeroHeadingSpan>23</HeroHeadingSpan> <br /> Food trucks
            </SubheadingRight>
            <ContentCircle>
          
              <img style={{position:'relative' , top:'10px',left:'-40px'}} width="230px" src="/herogirlpic.png" alt="" />
            </ContentCircle>
          </HeroRightContent>
        </HeroContentWrapper>
      </HeroLayout>
    </>
  );
};
