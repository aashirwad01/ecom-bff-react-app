import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { breakpoints } from "../../utils/breakpoints";
import Button from "../common/Button";
import Chip from "../common/Chip";
import { Footer } from "../footer/Footer";
import { addToCart } from "../product/Product";
import { DropdownFilterMenu } from "./DropdownFilterCategory";
import { DropdownSortMenu } from "./DropdownSortCategory";

const ProductsLayout = styled.div`
  padding-top: 12%;
  background: linear-gradient(
      180.87deg,
      #fff5f7 -51.75%,
      rgba(250, 100, 39, 0.281) 116.21%
    ),
    url("/homepageproductbg.jpg");
  background-repeat: repeat;

  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;
const ProductsContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  width: 80vw;
  gap: 20px;
  min-height: 80vh;
`;

const ProductBlock = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: center;
  padding-bottom: 5%;
`;

const ProductWrapper = styled.div`    
display:flex;
 
  width:85%;
  flex-direction :column;
  justify-content:center;
  align-items:center;
  height:85vh;

  background-color:white;
  padding:15%;
  border-radius: 20px;

.subheader{
  font-size:1rem;
  font-family:Titan One;
 color:black;
 
  font-weight: 400;
}

.header{


  color:green;

  font-size:1.2rem;
  font-weight:bold;
 
  
  
  
  
}

.content{
 
  color:#907E82;
 
  letter-spacing: 0px;
  
}
.info{

  width:100%;
  display:flex;
  justify-content:space-between;
}
.infocontent{
  border-radius:10px;
  color:pink;

  font-size:1.2rem;
  font-weight:bold;
}
img
{
  height:40px;
  width:40px;
}
}`;

const FilterBoxWrapper = styled.div`
  display: flex;
  background: linear-gradient(
      180.87deg,
      #fff5f7 51.75%,
      rgba(250, 100, 39, 0.181) 116.21%
    ),
    url("/homepageproductbg.jpg");
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const FilterBox = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  width: 20%;
  text-align: center;
`;

const Product = styled.div`
  display: flex;

  position: relative;
  top: -45px;

  height: 45%;
  border-radius: 15px;

  align-items: center;

  img {
    display: block;
    max-height: 35vh;
    max-width: 25vw;
    width: auto;
    height: auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: ${(props) => props.justify};
  align-items: center;
  width: 100%;
  padding-bottom: 10px;

  padding-top: 10px;
`;

export const Products = ({
  networkerror,
  productsFull,
  setProducts,
  products,
}) => {
  const [sort, setSort] = useState();
  var isSeller = JSON.parse(localStorage.getItem("seller"));

  const sortbyprice = {
    name: "Sort By Price",
    category: {
      value1: "Ascending",
      value2: "Descending",
    },
  };

  const sortbyname = {
    name: "Sort By Name",
    category: {
      value1: "A-Z",
      value2: "Z-A",
    },
  };

  const filterbycategory = {
    name: "Filter By Category",
    category: {
      value1: "All",
      value2: "Coffee",
      value3: "IceCream",
      value4: "Milkshake",
    },
  };

  useEffect(() => {
    console.log(products);
  }, [sort]);

  return (
    <>
      <FilterBoxWrapper>
        <FilterBox>
          <DropdownSortMenu
            setSort={setSort}
            setProducts={setProducts}
            data={sortbyprice}
            products={products}
          />
        </FilterBox>
        <FilterBox>
          <DropdownSortMenu
            setSort={setSort}
            setProducts={setProducts}
            data={sortbyname}
            products={products}
          />
        </FilterBox>
        <FilterBox>
          <DropdownFilterMenu
            productsFull={productsFull}
            setSort={setSort}
            setProducts={setProducts}
            data={filterbycategory}
            products={products}
          />
        </FilterBox>
      </FilterBoxWrapper>
      <ProductsLayout>
        <ProductsContentWrapper>
          {products?.map((prd) => (
            <ProductBlock key={prd.id}>
              <ProductWrapper>
                <Product productsFull={productsFull}>
                  <img src={prd.imageURL} alt="" />
                </Product>
                <p className="header">{prd.name}</p>
                <div className="info">
                  <Chip variant="primary">{prd.tag}</Chip>
                  <Chip variant="secondary">{prd.price}₹</Chip>
                </div>

                <p className="content">{prd.description} </p>

                <ButtonWrapper justify={isSeller ? "center" : "space-between"}>
                  <Link to={`/products/${prd.name}/${prd.id}`}>
                    <Button
                      variant="secondary"
                      style={{ width: "90px", fontSize: "1rem" }}
                    >
                      {" "}
                      <img src="/arrowright.png" alt="" />
                    </Button>
                  </Link>
                  {isSeller ? (
                    <></>
                  ) : (
                    <Button
                      onClick={() => addToCart(prd?.id)}
                      style={{ width: "60px", fontSize: "1rem" }}
                    >
                      Add To Cart
                    </Button>
                  )}
                </ButtonWrapper>
              </ProductWrapper>
            </ProductBlock>
          ))}
        </ProductsContentWrapper>
      </ProductsLayout>
    </>
  );
};
