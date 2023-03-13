import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import {
  deleteFromCartCustomer,
  getCartCustomer,
  getCustomer,
  getCustomerOrders,
} from "../../services/ServiceWorker";
import { addToCart } from "../product/Product";
import Button from "../common/Button";
import Chip from "../common/Chip";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { ImGift } from "react-icons/im";

// #C1E297
const ProfileLayout = styled.div`
  background: linear-gradient(
      180.87deg,
      #c1e297 -51.75%,
      rgba(29, 24, 192, 0.5) 116.21%
    ),
    url("/icecreamproductimage2.jpg");
  background-repeat: repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  width: 90vw;
  min-height: 80vh;
`;
const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
`;

const ContentHeading = styled.div(() => ({
  fontFamily: "Titan One",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  // background: `linear-gradient(
  //   to left, #C1E297, #C1E297,
  //   #f7bf36, #f7bf36);`,
  // WebkitBackgroundClip: "text",
  // WebkitTextFillColor: "transparent",
}));

const ContentCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentCircleDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
      40.87deg,
      #c1e297 1.75%,
      rgba(205, 145, 145, 0.81) 76.21%
    ),
    url("/waveOrder.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  min-width: 900px;
  width: 100%;
  border-radius: 15px;

  h2 {
    color: white;
  }
`;

const ContentCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: linear-gradient(
    85.87deg,
    #fff5f7 -51.75%,
    rgba(255, 245, 247, 0.461) 80.21%
  );
`;

const Text = styled.p`
  color: white;
  font-weight: bolder;
  font-size: 1.2rem;
`;

// const RightContentHeading = styled.h1(() => ({
//   background: `linear-gradient(
//     to bottom, #8a0323, #B70932,
//     #f7bf36, #f7bf36);`,
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   color: "",
//   fontFamily: "Titan One",
//   fontSize: "6.0rem",
//   fontWeight: "bold",
// }));

// const RightContent = styled.div`
//   margin-top: 10%;

//   flex-basis: 50%;
//   justify-content: center;
// `;
// const getCustomerInfo = async (e) => {
//   const response = await getCustomer(localStorage.getItem("user"));
//   if (response.data.email == localStorage.getItem("user")) {
//     localStorage.setItem("userid", response.data.customerId);
//   }
// };

// const getCustomerCart = async (e) => {
//   const response = await getCartCustomer(localStorage.getItem("userid"));

//   return response?.data?.cartitems;
// };

const initialCartData = {
  product: {
    age: "",
    description: "",
    id: "",
    name: "",
    price: "",
    quantity: "",
    sellerid: "",
    tag: "",
  },
  quantity: "",
};

const getCustomerOrderList = async (e) => {
  const response = await getCustomerOrders(localStorage.getItem("userid"));
  console.log(response.data);
  return response?.data;
};

export const Order = ({ products }) => {
  const [order, setOrder] = useState();
  const [orderItems, setOrderItems] = useState([]);
  const [orderIds, setOrderIds] = useState();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const isSeller = JSON.parse(localStorage.getItem("seller"));

  //  const [cartDataQuantity,setCartDataQuantity]=useState([]);
  //  const [cartDataName,setCartDataName]=useState([]);

  useEffect(() => {
    if (isSeller || !user) {
      navigate("/authenticate");
    }
  }, [user, isSeller, navigate]);
  useEffect(() => {
    async function getData() {
      await getCustomerOrderList().then((res) => {
        setOrder(res);
      });
    }
    getData();
  }, []);

  const getOrderItems = () => {
    let data = [];
    order?.forEach((order) => {
      let a = order.orderitems;
      Object.keys(a).map(function (key) {
        data.push({
          productid: key,
          quantity: a[key],
        });
        console.log(a[key]);
      });
    });

    return data;
  };

  useEffect(() => {
    setOrderItems(getOrderItems());
  }, [order]);

  console.log(order);

  return (
    <ProfileLayout>
      <Navbar />
      <ProfileWrapper>
        <LeftContent>
          {!order ?  <><img height="350vh" src="/sadicecream.png" alt="" />
          <ContentHeading>Nothing in Orders</ContentHeading>
          </>:
          <>
          
          <ContentHeading>Your Orders</ContentHeading>
          <ContentCircleWrapper>
            {order?.map((order) => (
              <ContentCircleDiv>
                <Text>
                  <Chip variant="secondary"> {order?.modeofpayment}</Chip>
                </Text>
                <Text>{localStorage.getItem("user")}</Text>
                <Text>{order?.orderprice}₹</Text>
                <Text> {order?.id}</Text>
                <Button
                  onClick={() => navigate("/products")}
                  variant="secondary"
                >
                  Keep Shopping
                </Button>
              </ContentCircleDiv>
            ))}
          </ContentCircleWrapper>
          
          </>
          
          
          }
        
           
        </LeftContent>
      </ProfileWrapper>
      <Footer />
    </ProfileLayout>
  );
};
