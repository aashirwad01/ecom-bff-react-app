import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import Button from "../common/Button";
import Chip from "../common/Chip";
import { deleteProduct } from "../../services/ServiceWorker";
import { Navigate, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // background: linear-gradient(
  //     40.87deg,
  //     #ffa5ba 1.75%,
  //     rgba(205, 145, 145, 0.81) 76.21%
  //   ),
  //   url("/layer1card.svg");
  // background-repeat: no-repeat;
  // background-size: cover;
  padding: 20px;
  height: 500px;
  height: 100%;
  min-width: 600px;
  width: 90%;
  border-radius: 15px;

  ::-webkit-scrollbar {
    width: 3px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #ffa5ba; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f7d5dd; /* color of the scroll thumb */
    border-radius: 3px; /* roundness of the scroll thumb */
    /* creates padding around scroll thumb */
  }
`;

const Table = styled.table`
  width: 100%;
  min-height: 450px;
  min-width: 800px;
  height: 100%;
  border-collapse: separate;
  color: black;
  font-size: 1.2rem;
`;

const Th = styled.th`
  color: black;
  background-color: #fff5f7;
  border: none;
  padding: 2px;
  border-radius: 5px;
`;
const LastDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Td = styled.td`
  color: black;
  background-color: #fff5f7;
  border: none;
  padding: 1px;
  border-radius: 3px;
  text-align: center;
  padding: 10px;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  :last-child:hover {
    color: red;
    cursor: pointer;
  }
`;

// const data = [
//     {name: "Akram",age: 21,gender: "Male",Roll_Number: "2019meb1235",delete:<AiFillDelete/>},
//     {name: "Michael",age: 22,gender: "FeMale",Roll_Number: "2019csb1225",delete:<AiFillDelete/>},
//     { name: "Manisha", age: 22, gender: "Female", Roll_Number: "2018meb1236" ,delete:<AiFillDelete/>},
//     { name: "Tanishq", age: 21, gender: "Male", Roll_Number: "2018eeb1190" ,delete:<AiFillDelete/>},
//     { name: "Stark", age: 19, gender: "Female", Roll_Number: "2019csb1212" ,delete:<AiFillDelete/>},
//   ];

const deleteProductSeller = async (productid) => {
  const response = await deleteProduct(
    localStorage.getItem("userid"),
    productid
  );

  return response.data;
};

export const ViewProducts = ({ setSellerItems, sellerItems }) => {
  const navigate = useNavigate();

  function handleDelete(e) {
    console.log(e);
    const value = deleteProductSeller(e);
    setSellerItems(
      sellerItems.filter(function (obj) {
        return obj.id !== e;
      })
    );
    console.log(value);
    let toastValue = value;
    toast("deleted", {
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
    navigate(0);
  }

  console.log(sellerItems);
  return (
    <PriceContainer>
      <div>
        <Table>
          <thead>
            <tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Best Before</Th>

              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Tag</Th>
              <Th>Delete</Th>
            </tr>
          </thead>
          <tbody>
            {sellerItems.map((value, key) => {
              return (
                <tr key={key}>
                  <Td>{value?.id}</Td>
                  <Td>{value?.name}</Td>
                  <Td>{value?.description}</Td>
                  <Td>{value?.age}</Td>
                  {value?.quantity < 1 ? (
                    <Td>0</Td>
                  ) : (
                    <Td>{value?.quantity}</Td>
                  )}

                  <Td>{value?.price}</Td>
                  <Td>{value?.tag}</Td>
                  <Td>
                    <Button
                      onClick={() => handleDelete(value?.id)}
                      variant="primary"
                    >
                      <AiFillDelete />
                    </Button>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </PriceContainer>
  );
};
