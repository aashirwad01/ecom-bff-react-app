import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import ModalComponent from "../common/Modal";

const ContentCircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      85.87deg,
      #fff5f7 -51.75%,
      rgba(200, 25, 24, 0.661) 80.21%
    ),
    url("/customerprofilebg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  width: 20vw;
  height: 150px;
  border-radius: 15px;
  border: 2px solid black;
  justify-content: center;
  text-align: center;
`;
const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
`;

const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: flex-start;
  gap: 10px;
`;

const Text = styled.p`
  color: black;
  font-family: DM Sans;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
`;

export const ModalCart = ({
  handleCheckout,
  data,
  setconfirmCheckout,
  onClose,
}) => {
  return (
    <ModalComponent>
      <ModalLayout>
        <LeftContent>
          <ContentCircleDiv>
            <img src="" alt="" srcset="" />
            <Text>
              Click to confirm <br /> Checkout
            </Text>

            <ButtonWrapper>
              <Button
                style={{ height: "35px", width: "80px" }}
                variant="secondary"
                onClick={() => {
                  handleCheckout(data);
                  console.log("here");
                  onClose();
                }}
              >
                Checkout
              </Button>
              <Button
                style={{ height: "35px", width: "80px" }}
                variant="secondary"
                onClick={() => onClose()}
              >
                Close
              </Button>
            </ButtonWrapper>
          </ContentCircleDiv>
        </LeftContent>
      </ModalLayout>
    </ModalComponent>
  );
};
