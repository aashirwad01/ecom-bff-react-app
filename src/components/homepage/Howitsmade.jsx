import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";

const PageBackground = styled.div`
  background: #fff5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding-bottom: 15%;
  padding-top: 10%;
`;

const PageLayout = styled.div`
  background: url("/howitsmadebg.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`;
const PageContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90%;
  gap: 80px;
`;

const HeroHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#D41442",
}));
const HeroHeadingSpan = styled.p(() => ({
  fontFamily: "Titan One",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#FFA5BA",
}));
const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  width: 80%;
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
`;
const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  width: 30vw;
`;
const Text = styled.p`
  color: ${(props) => props.color};
  font-size: 1.2rem;
  font-weight: bold;
`;
const FactsContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;
  width: 80%;
`;
const FactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  text-align: left;
`;
const FactsImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const factsValue = [
  {
    url: "/icon1.png",
    number: "721",
    text: "Daily working Delivery Partners for the BeIcecream Company.",
  },
  {
    url: "/icon2.png",
    number: "16kg",
    text: "Fresh milk used every hour throughout country by our sellers.",
  },
  {
    url: "/icon3.png",
    number: "84",
    text: "Happy Sellers working alongside to serve you all 24 by 7 all year long.",
  },
];

export const Howitsmade = () => {
  const navigate = useNavigate();
  return (
    <PageBackground>
      <PageLayout>
        <PageContentWrapper>
          <HeroHeading>
            <HeroHeadingSpan>TRADITION AND LOVE</HeroHeadingSpan>
            HOW IT'S MADE?
          </HeroHeading>
          <ContentDiv>
            <ImageDiv>
              <Image src="/cowimage.png" alt="" />
            </ImageDiv>
            <TextDiv>
              <Text color="black">
                Our love affair with ice cream is centuries old. The ancient
                Greeks, Romans, and Jews were known to chill wines and juices.
                This practice evolved into fruit ices and, eventually, frozen
                milk and cream mixtures.
              </Text>
              <Text color="#9087A0">
                Today, ice cream is made from a blend of dairy products (cream,
                condensed milk, butterfat), sugar, flavorings, and federally
                approved additives. Eggs are added for some flavorings,
                particularly French vanilla.
              </Text>
              <Text color="#9087A0">Enjoy the freshly made Icecreams.</Text>
              <Button onClick={() => navigate("/products")} variant="primary">
                Buy More &nbsp; <BsArrowRight />
              </Button>
            </TextDiv>
          </ContentDiv>
          <FactsContainerWrapper>
            {factsValue.map((value) => (
              <FactsContainer key={value.url}>
                <FactsImage src={value.url} />
                <HeroHeading>{value.number}</HeroHeading>
                <Text>{value.text}</Text>
              </FactsContainer>
            ))}
          </FactsContainerWrapper>
        </PageContentWrapper>
      </PageLayout>
    </PageBackground>
  );
};
