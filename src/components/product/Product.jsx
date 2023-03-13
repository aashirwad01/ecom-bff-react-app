import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "@fontsource/titan-one";
import Navbar from "../navbar/Navbar";
import { breakpoints } from "../../utils/breakpoints";
import Button from "../common/Button";
import {
  addReviewCustomer,
  addToCartCustomer,
  addToOrderCustomer,
  GetAllProducts,
} from "../../services/ServiceWorker";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Footer } from "../footer/Footer";
import { ModalProduct } from "./ModalProduct";

// const MainWrapper = styled.div`
//   background: #FFB8C9;
//    height: 85vh;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: top right;
// `;

const ProductLayout = styled.div`
  background: linear-gradient(
      90.87deg,
      #ffa5ba 8.75%,
      rgba(181, 230, 224, 0.81) 76.21%
    ),
    url("/pdpbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const ProductContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 90%;
  gap: 100px;
  padding-bottom: 150px;
`;
const ProductLeftContent = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "25%",
  justifyContent: "center",
}));

const ProductHeading = styled.h1(() => ({
  background: `linear-gradient(
    to right, #f32170, #ff6b08,
     #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "",
  fontFamily: "Titan One",
  fontSize: "2rem",
 
}));
const ProductHeadingSpan = styled.span(() => ({
  fontFamily: "Titan One",
  fontSize: "2rem",
 
  color: "#D41442",
}));

const ProductLeftBottomContent = styled.div`
  display: flex;
  color: white;

  align-items: center;
  font-family: DM Sans;
  font-weight: bold;

  p {
    text-align: left;
  }
`;

const ReviewBox = styled.textarea`
  height: 60px;
  width: 250px;
  border-radius: 20px;
  color: black;
  padding: 10px;
`;
const ReviewDiv = styled.div`
position:relative;
top:${props=>props.top};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductCenterContent = styled.div(() => ({
 
  display: "flex",
  flexDirection: "column",
  flexBasis: "30%",
  justifyContent: "space-between",
  alignItems: "center",
 gap:'65px',
}));
const ProductRightContent = styled.div(() => ({
  display: "block",
 
}));
const SubheadingRight = styled.p(() => ({
  background: `linear-gradient(
    to right, #f32170, #ff6b08,
     #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1rem",
  
  textAlign:'center'
}));

const SubheadingReview = styled.p(() => ({
  background: `linear-gradient(
    to right, #f32170, #ff6b08,
     #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1rem",
  
  textAlign:'left'
}));

const Description = styled.p(() => ({
  background: `#B70932`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.2rem",
  fontWeight: "bold",
}));

const Price = styled.p(() => ({
  background: `linear-gradient(
    to right, #f32170, #ff6b08,
     #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Titan One",
  fontSize: "2.5rem",
  fontWeight: "bold",
}));

const ButtonWrapper = styled.button((props) => ({
  marginBottom: "2%",
  display: "flex",
  backgroundColor: "rgba(0,0,0,0)",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "auto",
  height: "auto",
  border: "0",
  gap: "10px",
  marginTop: "10px",
  padding: "0",
  marginLeft: "0",
}));

export const addToOrder = async (e) => {
  let iddata = [];

  var val = e.toString();

  const obj = {
    [val]: 1,
  };
  iddata.push(obj);

  console.log(iddata);
  const user = localStorage.getItem("user");
  const response = await addToOrderCustomer(
    localStorage.getItem("userid"),
    iddata
  );
  console.log(response.data);

  if (!user && response.message == "Request failed with status code 400") {
    toast("Login to Continue", {
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
    return redirect("/authenticate");
  }
  let toastValue = response.data;
  toast(toastValue, {
    duration: 2000,
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
export const addToCart = async (e) => {
  const response = await addToCartCustomer(localStorage.getItem("userid"), e);
  console.log(response);
  const user = localStorage.getItem("user");

  if (!user && response.message == "Request failed with status code 400") {
    toast("Login to Continue", {
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
    return redirect("/authenticate");
  } else {
    toast("Item Added to Cart Successfully", {
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
  }
};

export const Product = ({ products,productsFull }) => {
  const [commentText, setCommentText] = useState("");
  const [productid, setProductId] = useState();
  const [modalState, setModalState] = useState(false);
  const user = localStorage.getItem("user");
  var isSeller=JSON.parse(localStorage.getItem('seller'));

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // productid,customerid,review
    console.log(commentText);
    const response = await addReviewCustomer(
      productid,
      localStorage.getItem("userid"),
      commentText
    );
    console.log(response);
    if ((response.data = "Review Added")) {
      setCommentText("");
    }
  };

  const navigate = useNavigate();

  const params = useParams();
  var data = products?.find(({ id }) => id == params.ids);
  



  

  // useEffect(() => {

  //   if(!data){

  //     navigate("*")
  //   }

  // }, [])

  return (
    
    <>
    {
      modalState && 
      (
        <ModalProduct
          addToOrder={addToOrder}
         productid={productid}
        
          onClose={() => setModalState(false)}
        />
      )
    }
      <ProductLayout>
        <Toaster />
        <Navbar color={"black"} />
        <ProductContentWrapper>
          <ProductLeftContent>
            <img
              style={{}}
              width="200px"
              height="200px"
              src={data?.imageURL}
              alt=""
            />
            <ProductHeading>{data?.name} </ProductHeading>
            <Description>{data?.description}</Description>

            {!(data?.quantity < 1) ? (
              <ButtonWrapper>
              {isSeller?<Button onClick={()=>navigate('/authenticate')}>Login as Customer</Button>:<>  <Button onClick={() => {setProductId(data?.id)
                setModalState(true)} 
                  
                  } variant="primary">
                  Buy Now
                </Button>
                <Button onClick={() => addToCart(data?.id)} variant="secondary">
                  Add to Cart
                </Button></>}
              </ButtonWrapper>
            ) : (
              <ButtonWrapper>
                <Button variant="secondary">Out of Stock</Button>
              </ButtonWrapper>
            )}
          </ProductLeftContent>

          <ProductCenterContent>

          <SubheadingRight>
              <ProductHeadingSpan>{data?.age}</ProductHeadingSpan> <br />
              days to be used by
            </SubheadingRight>
           { !(data?.quantity < 1) ?  <SubheadingRight>
              <ProductHeadingSpan>{data?.quantity}</ProductHeadingSpan> <br />{" "}
              Items
            </SubheadingRight>:  <SubheadingRight>
              <ProductHeadingSpan>0</ProductHeadingSpan> <br />{" "}
              Items
            </SubheadingRight>}
          

            <SubheadingRight>
              <ProductHeadingSpan>{data?.tag}</ProductHeadingSpan> <br />{" "}
              Category
            </SubheadingRight>
            <Price>{data?.price}₹</Price>
           
          </ProductCenterContent>

          <ProductRightContent >
          
            {
  (user && !(isSeller))?<>  <ReviewDiv top='310px'>
    <SubheadingReview>
  <ProductHeadingSpan>Add Reviews</ProductHeadingSpan>{" "}
</SubheadingReview>
  <form id="reviewForm" onSubmit={handleOnSubmit}>
    <ReviewBox
      name="commentTextArea"
      type="text"
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
    />
    <Button
      onClick={() => setProductId(data?.id)}
      type="submit"
      form="reviewForm"
      style={{ height: "40px", width: "100px", fontSize: "1rem" }}
      variant="primary"
    >
      Submit
    </Button>
  </form>
</ReviewDiv>
</>
:<>
<ReviewDiv top='400px'>
<SubheadingReview>
  <ProductHeadingSpan>Login to Add Reviews</ProductHeadingSpan>{" "}
</SubheadingReview>
</ReviewDiv>
</>
            }
           
          </ProductRightContent>
        </ProductContentWrapper>
        <Footer />
      </ProductLayout>
    </>
  )
};
