import React from "react";
import "@fontsource/titan-one";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import { Link, useNavigate } from "react-router-dom";

const ProductsLayout = styled.div`
  margin-top: 15%;
  background: url("/homepageproductbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 94vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const ProductsContentWrapper = styled.div`
  position: relative;
  top: -12%;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  width: 85%;
  gap: 10px;
`;
const ProductsContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ProductWrapper = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "35%",
  justifyContent: "center",
  alignItems: "center",
}));

const HeroHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#D93159",
  textAlign: "center",
}));
const HeroHeadingSpan = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "5rem",
  fontWeight: "bold",
  color: "#D41442",
}));

const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -100px;
  background-color: ${(props) => props.background};
  color: white;
  border-radius: 15px;
  height: 55vh;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 15vw;

  h2 {
    margin-top: 8%;
    font-size: 1.3rem;
    font-family: Titan One;

    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0px;
  }
  h3 {
    font-size: 1.3rem;
    font-family: Titan One;
    margin-bottom: 20%;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0px;
  }
  p {
    color: white;
    margin-bottom: 10%;
    font-weight: bold;
  }
  img {
    height: 40px;
    width: 40px;
  }
`;

export const TopProducts = () => {
  const navigate = useNavigate();

  return (
    <ProductsLayout>
      <ProductsContentWrapper>
        <HeroHeading>
          100% NATURAL <br />
          <HeroHeadingSpan>PRODUCTS</HeroHeadingSpan>
        </HeroHeading>
        <ProductsContent>
          <ProductWrapper>
            <img width="300vw" src="/topproductpic1.png" alt="" />
            <Product background="#FFB8C9">
              <h2>ICE CREAM</h2>
              <h3>...</h3>
              <p>
                Ice cream is a frozen dairy dessert obtained by freezing the ice
                cream mix with continuous agitation. It contains milk products,
                sweetening materials, stabilizers, colors.
              </p>
              <Link to={`/products`}>
                <img src="/arrowright.png" alt="" />
              </Link>
            </Product>
          </ProductWrapper>
          <ProductWrapper>
            <img width="300vw" src="/topproductpic2.png" alt="" />
            <Product background="#EFD1A5">
              <h2>ICE COFFEE</h2>
              <h3>...</h3>
              <p>
                This creamy, thick iced coffee with ice cream is the best summer
                coffee drink. Blended together for an easy milkshake-like coffee
                drink that takes only 5 minutes to make.
              </p>
              <Link to={`/products`}>
                <img src="/arrowright.png" alt="" />
              </Link>
            </Product>
          </ProductWrapper>

          <ProductWrapper>
            <img width="300vw" src="/topproductpic3.png" alt="" />
            <Product background="#C1E297">
              <h2>MILKSHAKES</h2>
              <h3>...</h3>
              <p>
                A milkshake (sometimes simply called a shake) is a sweet
                beverage made by blending milk, ice cream, and flavorings or
                sweeteners and sauce alongwith choco.
              </p>
              <Link to={`/products`}>
                <img src="/arrowright.png" alt="" />
              </Link>
            </Product>
          </ProductWrapper>
        </ProductsContent>
      </ProductsContentWrapper>
    </ProductsLayout>
  );
};
