import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Navbar from "../navbar/Navbar";

const HeroBackground = styled.div`
  background: url("/productpageheroall.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;
const HeroLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const HeroContentWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  jusify-content: center;
  align-items: center;
  height: 100%;
  gap: 80px;
  text-align: center;
`;
const HeroHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "5rem",
  lineHeight: "5rem",
  letterSpacing: "1.05rem",
  fontWeight: "bold",
  background: `linear-gradient(
      to right, #f32170, #ff6b08,
       #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  flexBasis: "100%",
}));
export const ProductsHero = () => {
  return (
    <HeroBackground>
      <HeroLayout>
        <Navbar />
        <HeroContentWrapper>
          <HeroHeading>
            100% NATURAL <br />
            PRODUCTS
          </HeroHeading>
        </HeroContentWrapper>
      </HeroLayout>
    </HeroBackground>
  );
};
