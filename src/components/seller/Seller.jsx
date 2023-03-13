import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { CgProfile } from "react-icons/cg";
import { ViewProducts } from "./ViewProducts";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { getSeller } from "../../services/ServiceWorker";
import { AddProducts } from "./AddProducts";
import { Profile } from "./Profile";

const ProfileLayout = styled.div`
  background: linear-gradient(
      0.87deg,
      #ffa5ba 8.75%,
      rgba(205, 145, 145, 0.481) 76.21%
    ),
    url("/sellerpageproductbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  color: black;

  width: 90vw;
  min-height: 80vh;
  justify-content: flex-start;
  align-items: ${(props) => props.align};
  border-radius: 10%;
  gap: 8%;
`;
const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;

  justify-content: center;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      180.87deg,
      #ffa5ba 20.75%,
      rgba(205, 145, 145, 0.81) 76.21%
    ),
    url("/layer1card.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  padding-top: 50%;
  min-height: 500px;
  height: 70%;
  border-radius: 15px;
  gap: 20px;

  h2 {
    color: white;
  }
`;

const ContentHeading = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",

  color: "#D41442",
  textAlign: "center",
  // background: `linear-gradient(
  //   to left, #C1E297, #C1E297,
  //   #f7bf36, #f7bf36);`,
  // WebkitBackgroundClip: "text",
  // WebkitTextFillColor: "transparent",
}));
const ContentHeadingFull = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",

  color: "#D41442",
  textAlign: "center",
  // background: `linear-gradient(
  //   to left, #C1E297, #C1E297,
  //   #f7bf36, #f7bf36);`,
  // WebkitBackgroundClip: "text",
  // WebkitTextFillColor: "transparent",
}));

const ContentCircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ContentCircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      40.87deg,
      #ffa5ba 1.75%,
      rgba(205, 145, 145, 0.81) 76.21%
    ),
    url("/layer1card.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  width: 20vw;
  border-radius: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: space-between;
`;

const ContentCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    85.87deg,
    #fff5f7 -51.75%,
    rgba(212, 20, 66, 1) 80.21%
  );
`;
const ContentCircleNameandCircle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const Text = styled.p`
  color: white;
  font-family: Titan One;
  font-size: 1.3rem;
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Seller = ({ products, setProducts }) => {
  const [selected, setSelected] = useState("profile");
  const [sellerinfo, setSellerInfo] = useState();
  const [sellerItems, setSellerItems] = useState();
  const user = localStorage.getItem("user");
  const isSeller = JSON.parse(localStorage.getItem("seller"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSeller || !user) {
      navigate("/authenticate");
    }
  }, [user, isSeller, navigate]);

  const getSellerInfo = async () => {
    const response = await getSeller(localStorage.getItem("user"));
    return response.data;
  };

  useEffect(() => {
    async function getData() {
      await getSellerInfo().then((res) => {
        setSellerInfo(res);
      });
    }
    getData();
    console.log(sellerinfo);
  }, [user, isSeller, navigate, selected]);

  useEffect(() => {
    var data = [];
    products?.map((product) => {
      if (product?.sellerid == sellerinfo?.sellerid) {
        data.push(product);
        console.log(product);
      }
    });
    setSellerItems(data);
    console.log(sellerItems);
  }, [user, isSeller, navigate, selected, sellerinfo]);

  return (
    <>
      <ProfileLayout>
        <Navbar />

        <ProfileWrapper align={selected == "view" ? "flex-end" : "flex-start"}>
          <LeftContent>
            <PriceContainer>
              <Button
                variant={selected == "profile" ? "primary" : "secondary"}
                onClick={() => setSelected("profile")}
              >
                <CgProfile /> &nbsp; Profile
              </Button>
              <Button
                variant={selected == "add" ? "primary" : "secondary"}
                onClick={() => setSelected("add")}
              >
                Add <br /> Products
              </Button>
              <Button
                variant={selected == "view" ? "primary" : "secondary"}
                onClick={() => setSelected("view")}
              >
                View <br /> Products
              </Button>
            </PriceContainer>
          </LeftContent>
          {selected == "view" ? (
            <RightContent>
              <ContentHeadingFull>SELLER PAGE</ContentHeadingFull>
              {selected == "view" ? (
                <ViewProducts
                  setSellerItems={setSellerItems}
                  sellerItems={sellerItems}
                />
              ) : (
                <></>
              )}
            </RightContent>
          ) : (
            <></>
          )}
          {selected == "add" ? (
            <RightContent>
              {selected == "add" ? (
                <AddProducts setProducts={setProducts} products={products} />
              ) : (
                <></>
              )}
            </RightContent>
          ) : (
            <></>
          )}
          {selected == "profile" ? (
            <RightContent>
              {selected == "profile" ? (
                <Profile sellerinfo={sellerinfo} setSelected={setSelected} />
              ) : (
                <></>
              )}
            </RightContent>
          ) : (
            <></>
          )}
        </ProfileWrapper>

        <Footer />
      </ProfileLayout>
    </>
  );
};
