import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCustomer } from "../../services/ServiceWorker";
import Button from "../common/Button";
import { Footer } from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const ProfileLayout = styled.div`
  display: flex;
  background: url("/blobcustomer.svg");
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: block;
  padding-top: 80px;
  min-height: 500px;

  height: 80%;
  text-align: left;
  gap: 20px;

  h2 {
    color: white;
  }
`;

const SignUpHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "white",
  paddingLeft: "50px",
  paddingTop: "5px",
}));

const ContentCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #fff5f7;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 30px;
  left: 20px;
  gap: 20px;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 8px;

  background: linear-gradient(
    85.87deg,
    #fff5f7 -51.75%,
    rgba(255, 245, 247, 0.461) 80.21%
  );
`;

const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 460px;
`;

const InputDiv = styled.div`
  display: flex;
  padding: 8px;
  color: black;
  background-color: #fff5f7;
  border-radius: 5px;
  width: 50%;
`;

export const Customer = ({ sellerinfo, setSelected }) => {
  const [customerinfo, setCustomerInfo] = useState();

  const user = localStorage.getItem("user");
  const isSeller = JSON.parse(localStorage.getItem("seller"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/authenticate");
    }
  }, [user, isSeller, navigate]);

  const getCustomerInfo = async () => {
    const response = await getCustomer(localStorage.getItem("user"));
    return response.data;
  };

  useEffect(() => {
    async function getData() {
      await getCustomerInfo().then((res) => {
        setCustomerInfo(res);
      });
    }
    getData();
    console.log(customerinfo);
  }, [user, isSeller, navigate]);
  return (
    <>
      <Navbar backgroundColor="lightpink" />
      <ProfileLayout>
        <ProfileContainer>
          <SignUpHeading>Customer PAGE</SignUpHeading>
          <ContentWrapper>
            <ContentCircle>
              <img
                style={{ borderRadius: "50%", height: "140px", width: "140px" }}
                src="/icecreamblue.png"
                alt=""
              />
            </ContentCircle>
            <InputDivWrapper>
              <InputDiv>Name : &nbsp;{customerinfo?.name}</InputDiv>

              <InputDiv>Email : &nbsp;{customerinfo?.email}</InputDiv>
              <InputDiv>Date of Birth : &nbsp;{customerinfo?.dob}</InputDiv>
              <InputDiv>Age : &nbsp;{customerinfo?.age}</InputDiv>
            </InputDivWrapper>
          </ContentWrapper>
        </ProfileContainer>
        <Footer />
      </ProfileLayout>
    </>
  );
};
