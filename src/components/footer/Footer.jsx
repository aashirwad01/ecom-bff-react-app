import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { useHover } from "../hooks/useHover";
import { useNavigate } from "react-router-dom";

const PageLayout = styled.div((props) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: props.background ? props.background : "",
}));

const PageWrapper = styled.div((props) => ({
  display: "flex",
  padding: "0",
  width: "90%",
  height: "60%",
  justifyContent: "flex-start",
  gap: "40px",
  flexWrap: "wrap",
  paddingTop: "5%",
  paddingBottom: "5%",
}));

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: flex-start;
  gap: 10px;
`;
const HeroHeading = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#D41442",
}));
const HeroHeadingSpan = styled.span((props) => ({
  fontFamily: "Titan One",
  fontSize: "2rem",
  color: props.color,
  letterSpacing: "2px",
}));

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex-wrap: wrap;
  gap: 40px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 40%;
  gap: 30px;
`;

const IconWrapper = styled.div`
  margin-top: 18%;
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Footer = ({ background }) => {
  const hovertwitter = useHover({ color: "#D41442", cursor: "pointer" });
  const hoverfaceboook = useHover({ color: "#D41442", cursor: "pointer" });
  const hoverinstagram = useHover({ color: "#D41442", cursor: "pointer" });
  const navigate = useNavigate();

  return (
    <PageLayout background={background}>
      <PageWrapper>
        <LeftContent>
          <ButtonWrapper>
            <Button onClick={() => navigate("/products")} variant="primary">
              Our Products
            </Button>
            <Button onClick={() => navigate("/")} variant="secondary">
              Home
            </Button>
          </ButtonWrapper>

          <HeroHeadingSpan color={background ? "#FFA5BA" : "white"}>
            Freshly Made Icecream <br />
            <HeroHeading>To Your Doors</HeroHeading>
          </HeroHeadingSpan>
        </LeftContent>
        <RightContent>
          <IconWrapper>
            <FiTwitter
              onClick={() => (window.location = "https://twitter.com/")}
              {...hovertwitter}
              size="2.5rem"
              color={background ? "#FFA5BA" : "white"}
            />
            <FiFacebook
              onClick={() => (window.location = "https://facebook.com/")}
              {...hoverfaceboook}
              size="2.5rem"
              color={background ? "#FFA5BA" : "white"}
            />
            <FiInstagram
              onClick={() => (window.location = "https://instagram.com/")}
              {...hoverinstagram}
              size="2.5rem"
              color={background ? "#FFA5BA" : "white"}
            />
          </IconWrapper>
          <Text color={background ? "black" : "white"}>
            {" "}
            Feel free to Contact <Text color="#D41442">+916205152366</Text>{" "}
          </Text>
        </RightContent>
      </PageWrapper>
      <Text
        color={background ? "#FFA5BA" : "white"}
        style={{ textAlign: "center", fontSize: "1rem" }}
      >
        {" "}
        © 2023 Betheme by aashirwad01 | All Rights Reserved{" "}
      </Text>
    </PageLayout>
  );
};
