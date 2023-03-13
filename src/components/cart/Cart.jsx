import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import {
  addToOrderCustomer,
  deleteCartCustomer,
  deleteFromCartCustomer,
  getCartCustomer,
  getCustomer,
  getOrderlistPrice,
} from "../../services/ServiceWorker";
import { addToCart } from "../product/Product";
import Button from "../common/Button";
import { Navigate, useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { ModalCart } from "./ModalCart";
import toast, { Toaster } from "react-hot-toast";
// #C1E297
const ProfileLayout = styled.div`
  background: linear-gradient(
      0.87deg,
      #ffa5ba 8.75%,
      rgba(205, 145, 145, 0.481) 76.21%
    ),
    url("/homepageproductbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  color: black;

  width: 55vw;
  min-height: 70vh;
  justify-content: center;
  border-radius: 10%;
`;
const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 50px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
      40.87deg,
      #ffa5ba 1.75%,
      rgba(205, 145, 145, 0.81) 76.21%
    ),
    url("/layer1card.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  min-width: 500px;
  width: 100%;
  border-radius: 15px;

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

  color: "black",
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
    rgba(255, 245, 247, 0.461) 80.21%
  );
`;
const ContentCircleNameandCircle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Text = styled.p`
  color: white;
  font-family: Titan One;
  font-size: 1.3rem;
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

const getCustomerCart = async (e) => {
  const response = await getCartCustomer(localStorage.getItem("userid"));

  return response?.data?.cartitems;
};

const getOrderPrice = async (data) => {
  const response = await getOrderlistPrice(data);
  return response?.data;
};

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

export const Cart = ({ products }) => {
  const [cart, setCart] = useState();
  const [cartItems, setCartItems] = useState();
  const [cartIds, setCartIds] = useState();
  const [extra, setExtra] = useState([]);
  const [orderprice, setOrderPrice] = useState();

  const [modalState, setModalState] = useState(false);
  const [confirmCheckout, setconfirmCheckout] = useState(false);
  const user = localStorage.getItem("user");
  const isSeller = JSON.parse(localStorage.getItem("seller"));
  const navigate = useNavigate();

  //  const [cartDataQuantity,setCartDataQuantity]=useState([]);
  //  const [cartDataName,setCartDataName]=useState([]);

  useEffect(() => {
    if (isSeller || !user) {
      navigate("/authenticate");
    }
  }, [user, isSeller, navigate]);

  useEffect(() => {
    async function getData() {
      await getCustomerCart().then((res) => {
        setCart(res);
      });
    }

    getData();
  }, [extra]);

  const getCartItem = (input) => {
    let data = [];
    let iddata = [];
    for (const key in input) {
      data.push({
        product: products?.find(({ id }) => id == key),
        quantity: input[key],
      });
      var val = key.toString();
      var obj = { [val]: input[key] };
      iddata.push(obj);
    }

    setCartIds(iddata);
    return data;
  };

  useEffect(() => {
    async function getData() {
      await getOrderPrice(cartIds).then((res) => {
        setOrderPrice(res);
      });
    }

    getData();
  }, [cartIds]);

  useEffect(() => {
    setCartItems(getCartItem(cart));
  }, [cart]);

  function handleAddFunction(e) {
    setExtra(cartItems);
    addToCart(e);
  }

  const deleteFromCart = async (e) => {
    setExtra(cartItems);

    const response = await deleteFromCartCustomer(
      localStorage.getItem("userid"),
      e
    );
    console.log(response.data);
    let toastValue = response.data.toString();
    toast(toastValue, {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };

  const ordercheckoutCart = async (data) => {
    setExtra(cartItems);

    const response = await addToOrderCustomer(
      localStorage.getItem("userid"),
      data
    );
    console.log(response);
  };

  const deletecheckoutCart = async () => {
    setExtra(cartItems);

    const response = await deleteCartCustomer(localStorage.getItem("userid"));
    console.log(response);
    setCartItems(null);
    setCartIds(null);
    setOrderPrice(0);
    navigate(`/authenticated/${localStorage.getItem("user")}/order`);
  };

  const handleCheckout = (data) => {
    ordercheckoutCart(data);
    deletecheckoutCart();

    setExtra(cartItems);
  };

  const handleNavigate = () => {
    navigate("/products");
  };

  console.log(cartItems);

  return (
    <>
      {modalState && (
        <ModalCart
          handleCheckout={handleCheckout}
          data={cartIds}
          setconfirmCheckout={setconfirmCheckout}
          onClose={() => setModalState(false)}
        />
      )}
      <ProfileLayout>
        <Toaster />
        <Navbar />
        <ProfileWrapper>
          <LeftContent>
            <ContentHeadingFull>
              ICECREAM &nbsp;
              <ContentHeading>CART</ContentHeading>
            </ContentHeadingFull>

            <ContentCircleWrapper>
              {cartItems?.map((item) => (
                <ContentCircleDiv key={item?.product?.id}>
                  <ContentCircleNameandCircle>
                    {" "}
                    <ContentCircle>
                      {" "}
                      <Image src={item?.product?.imageURL} alt="" />
                    </ContentCircle>
                    <Text>{item?.product?.name}</Text>
                  </ContentCircleNameandCircle>

                  <ButtonWrapper>
                    <AiFillPlusCircle
                      style={{ color: "pink", fontSize: "4rem" }}
                      onClick={() => handleAddFunction(item?.product?.id)}
                    />
                    <Text>{item?.quantity}</Text>
                    <AiFillMinusCircle
                      style={{ color: "pink", fontSize: "4rem" }}
                      onClick={() => deleteFromCart(item?.product?.id)}
                    />
                  </ButtonWrapper>
                </ContentCircleDiv>
              ))}
            </ContentCircleWrapper>
            {cartItems?.length != 0 ? (
              <PriceContainer>
                <Text>Total Cart Price</Text>
                <Text>{orderprice}₹</Text>
                <Button onClick={() => setModalState(true)} variant="secondary">
                  Cart Checkout{" "}
                </Button>
              </PriceContainer>
            ) : (
              <PriceContainer>
                <Text>
                  Cart is empty. <br /> Add items
                </Text>
                <Button onClick={() => handleNavigate()} variant="secondary">
                  Go to Products{" "}
                </Button>
              </PriceContainer>
            )}
          </LeftContent>
        </ProfileWrapper>

        <Footer />
      </ProfileLayout>
    </>
  );
};
