import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Button from "../common/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { LinkTextNav } from "../linkTextNav";
import {
  addProduct,
  signupCustomer,
  signupSeller,
} from "../../services/ServiceWorker";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUpLayout = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  gap: 10px;
`;
const SignUpWrapper = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SignUpHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#D41442",
  paddingLeft: "50px",
  paddingTop: "5px",
}));

const InputAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;

const InputBox = styled.input`
  color: black;
  background-color: #fff5f7;
  border: none;
  padding: 8px;
  border-radius: 5px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const SellerIDInputBox = styled.input`
  color: black;
  background-color: lightgrey;
  border: none;
  padding: 10px;

  height: ${(props) => props.height};
  width: ${(props) => props.width};
  :focus {
    outline: none;
  }
`;

const Logintext = styled.p`
  color: #d63159;
  font-size: 1rem;
`;
const ProfileContainer = styled.div`
  display: block;
  background: url("/blob.svg");
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 500px;
  width: 550px;
  height: 80%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 2px;
  left: 105px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  padding-left: 50px;
  padding-top: 10px;
`;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .min(3, "Minimum 3 characters required"),

  description: yup.string().required("Description is required"),

  age: yup.number().required("Please enter Date to be used by"),
  imageurl: yup.string().required(),

  tag: yup
    .string()
    .required("Tag is required.")
    .min(3, "Minimum 3 characters required"),
  price: yup.number().required("Price is required."),

  sellerid: yup.number().required("Seller ID is required."),
  quantity: yup.number().required("Quantity is required."),
});

export const AddProducts = ({ products, setProducts }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      age: "",
      imageurl: "",
      tag: "",
      price: "",
      sellerid: "",
      quantity: "",
    },
    onSubmit: async (values) => {
      console.log(JSON.stringify(values, null, 2));
      const response = await addProduct(localStorage.getItem("userid"), values);
      console.log(response);

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

      setProducts((old) => [...old, values]);
      console.log(products);
      navigate(0);
      formik.resetForm();
    },
    validationSchema: validationSchema,
  });

  const renderErrorMessage = (field) => {
    return formik.touched[field] && <div>{formik.errors[field]}</div>;
  };
  return (
    <>
      <SignUpLayout>
        <SignUpWrapper>
          <Toaster />
          <ProfileContainer>
            <SignUpHeading>ADD PRODUCTS</SignUpHeading>
            <ContentWrapper>
              <Form onSubmit={formik.handleSubmit}>
                <InputDivWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="name"></label>
                    <InputBox
                      type="text"
                      id="name"
                      placeholder="Name"
                      {...formik.getFieldProps("name")}
                    ></InputBox>
                    {renderErrorMessage("name")}
                  </InputAreaWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="description"></label>
                    <InputBox
                      type="text"
                      id="description"
                      placeholder="Description"
                      {...formik.getFieldProps("description")}
                    ></InputBox>
                    {renderErrorMessage("description")}
                  </InputAreaWrapper>
                </InputDivWrapper>

                <InputDivWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="age"></label>
                    <InputBox
                      type="number"
                      id="age"
                      placeholder="To be used by"
                      {...formik.getFieldProps("age")}
                    ></InputBox>
                    {renderErrorMessage("age")}
                  </InputAreaWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="imageurl"></label>
                    <InputBox
                      type="text"
                      id="imageurl"
                      placeholder="Image URL"
                      {...formik.getFieldProps("imageurl")}
                    ></InputBox>
                    {renderErrorMessage("imageurl")}
                  </InputAreaWrapper>
                </InputDivWrapper>

                <InputDivWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="tag"></label>
                    <InputBox
                      type="text"
                      placeholder="Category"
                      {...formik.getFieldProps("tag")}
                    ></InputBox>
                    {renderErrorMessage("tag")}
                  </InputAreaWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="price"></label>
                    <InputBox
                      type="number"
                      placeholder="Price"
                      {...formik.getFieldProps("price")}
                    ></InputBox>
                    {renderErrorMessage("price")}
                  </InputAreaWrapper>
                </InputDivWrapper>

                <InputDivWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="sellerid"></label>
                    <InputBox
                      type="number"
                      placeholder="Seller Id"
                      {...formik.getFieldProps("sellerid")}
                    ></InputBox>
                    {renderErrorMessage("sellerid")}
                  </InputAreaWrapper>
                  <InputAreaWrapper>
                    <label htmlFor="quantity"></label>
                    <InputBox
                      type="number"
                      placeholder="quantity"
                      {...formik.getFieldProps("quantity")}
                    ></InputBox>
                    {renderErrorMessage("quantity")}
                  </InputAreaWrapper>
                </InputDivWrapper>
                <ButtonWrapper>
                  {" "}
                  <Button
                    style={{ width: "120px" }}
                    type="submit"
                    variant="primary"
                  >
                    Submit
                  </Button>
                </ButtonWrapper>
              </Form>
            </ContentWrapper>
          </ProfileContainer>
        </SignUpWrapper>
      </SignUpLayout>
    </>
  );
};
