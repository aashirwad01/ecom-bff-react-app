import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const ProfileLayout = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;
const ProfileContainer = styled.div`
  display: block;
  background: url("/blob.svg");
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 500px;
  width: 550px;
  height: 60%;

  gap: 20px;

  h2 {
    color: white;
  }
`;

const SignUpHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#D41442",
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
  top: 20px;
  left: 90px;
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
  width: 60%;
`;

const InputDiv = styled.div`
  display: flex;
  padding: 8px;
  color: black;
  background-color: #fff5f7;
  border-radius: 5px;
  width: 50%;
`;

export const Profile = ({ sellerinfo, setSelected }) => {
  return (
    <ProfileLayout>
      <ProfileContainer>
        <SignUpHeading>SELLER PAGE</SignUpHeading>
        <ContentWrapper>
          <ContentCircle>
            <img
              style={{ borderRadius: "50%", height: "140px", width: "140px" }}
              src="/icecreamproductimage.jpg"
              alt=""
            />
          </ContentCircle>
          <InputDivWrapper>
            <InputDiv>Name : &nbsp;{sellerinfo?.name}</InputDiv>

            <InputDiv>Email : &nbsp;{sellerinfo?.email}</InputDiv>
            <InputDiv>Seller ID : &nbsp;{sellerinfo?.sellerid}</InputDiv>
          </InputDivWrapper>
        </ContentWrapper>
      </ProfileContainer>
    </ProfileLayout>
  );
};
