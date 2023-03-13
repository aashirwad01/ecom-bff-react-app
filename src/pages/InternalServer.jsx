import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const PageLayout = styled.div`
  background: url("/icespill.png");

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "5rem",
  fontWeight: "bold",
  color: "red",
}));

const HeadingSecond = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "white",
}));

const HeadingThird = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "green",
}));
export const InternalServer = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Navbar />
      <Heading>It's not you. It's Us</Heading>
      <HeadingSecond>Fixing it up. Real soon.</HeadingSecond>
      <HeadingThird>Keep Refreshing</HeadingThird>
      <Footer />
    </PageLayout>
  );
};
