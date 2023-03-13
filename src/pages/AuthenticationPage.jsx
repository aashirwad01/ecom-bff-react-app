import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignUp } from "../components/authentication/SignUp";
import Button from "../components/common/Button";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { breakpoints } from "../utils/breakpoints";

const AuthenticationLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const AuthenticationWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  gap: 50px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  gap: 10px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
`;

const AuthenticationHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3.5rem",
  fontWeight: "bold",
  color: "#D41442",
}));
export const AuthenticationPage = () => {
  const user = localStorage.getItem("user");
  const isSeller = JSON.parse(localStorage.getItem("seller"));
  const navigate = useNavigate();

  //  const [cartDataQuantity,setCartDataQuantity]=useState([]);
  //  const [cartDataName,setCartDataName]=useState([]);

  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, isSeller, navigate]);

  const navigateSignupSeller = () => {
    navigate(`/authenticate/seller/signup`);
  };
  const navigateSignupCustomer = () => {
    navigate(`/authenticate/customer/signup`);
  };
  return (
    <>
      <Navbar color="red" backgroundColor="#7ED4C9" />
      <AuthenticationLayout>
        <AuthenticationWrapper>
          <LeftContent>
            <Button
              onClick={() => {
                navigateSignupSeller();
              }}
            >
              SignUp as Seller
            </Button>
            <Button
              onClick={() => {
                navigateSignupCustomer();
              }}
            >
              SignUp as Customer
            </Button>
          </LeftContent>
          <RightContent>
            <img height="450vh" src="/signuppagehero.png" alt="" />
          </RightContent>
        </AuthenticationWrapper>
      </AuthenticationLayout>

      <Footer background="#7ED4C9" />
    </>
  );
};
