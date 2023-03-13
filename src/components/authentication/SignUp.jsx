import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import Button from "../common/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { LinkTextNav } from "../linkTextNav";
import { signupCustomer, signupSeller } from "../../services/ServiceWorker";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCustomerInfo, validateUserSeller } from "./Login";
import { BsArrow90DegLeft } from "react-icons/bs";
import Navbar from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  gap: 30px;
`;
const SignUpWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  gap: 10px;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
`;
const SignUpHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "3.5rem",
  fontWeight: "bold",
  color: "#D41442",
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
  color: #d41442;
  background-color: #fff5f7;
  border: none;
  padding: 10px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Logintext = styled.p`
  color: #d63159;
  font-size: 1rem;
`;

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("First name is required.")
    .min(3, "Minimum 3 characters required"),

  email: yup
    .string()
    .required("Email ID is required")
    .email("Enter valid email id"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  landmark: yup
    .string()
    .required("Landmark is required.")
    .min(3, "Minimum 3 characters required"),
  city: yup
    .string()
    .required("City is required.")
    .min(3, "Minimum 3 characters required"),
  state: yup
    .string()
    .required("State is required.")
    .min(3, "Minimum 3 characters required"),
  country: yup
    .string()
    .required("Country is required.")
    .min(3, "Minimum 3 characters required"),
  pincode: yup
    .string()
    .required("pincode is required.")
    .min(6, "Minimum 6 characters required"),
});

export const SignUpSeller = ({ usertype }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    onSubmit: async (values) => {
      const response = await signupSeller(values);
      console.log(response);

      if (response.data == "User Registration Successfully as Seller.") {
        localStorage.setItem("user", values.email);

        validateUserSeller();
        getCustomerInfo("seller");
      } else {
        console.log("nahi yaha hai response");
      }

      navigate("/");
      formik.resetForm();
    },
    validationSchema: validationSchema,
  });

  const renderErrorMessage = (field) => {
    return formik.touched[field] && <div>{formik.errors[field]}</div>;
  };
  return (
    <>
      <Navbar backgroundColor="pink" />
      <SignUpLayout>
        <SignUpWrapper>
          <LeftContent>
            <SignUpHeading>SIGN UP NOW</SignUpHeading>
            <Logintext>
              Already a User Login Instead &nbsp;
              <Link
                style={{ textDecoration: "none" }}
                to={`/authenticate/${usertype}/login`}
              >
                <LinkTextNav color="#d63159">Login</LinkTextNav>
              </Link>
            </Logintext>
            <Logintext>
              <Link style={{ textDecoration: "none" }} to={`/authenticate`}>
                <LinkTextNav color="#d63159">
                  {" "}
                  <BsArrow90DegLeft />
                  &nbsp; Back to Authetication
                </LinkTextNav>
              </Link>
            </Logintext>
            <Form onSubmit={formik.handleSubmit}>
              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="name"></label>
                  <InputBox
                    type="text"
                    id="name"
                    placeholder="Your name"
                    {...formik.getFieldProps("name")}
                  ></InputBox>
                  {renderErrorMessage("name")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="email"></label>
                  <InputBox
                    type="email"
                    id="email"
                    placeholder="Your email"
                    {...formik.getFieldProps("email")}
                  ></InputBox>
                  {renderErrorMessage("email")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="password"></label>
                  <InputBox
                    type="password"
                    id="password"
                    placeholder="Your password"
                    {...formik.getFieldProps("password")}
                  ></InputBox>
                  {renderErrorMessage("password")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="landmark"></label>
                  <InputBox
                    type="text"
                    placeholder="landmark"
                    {...formik.getFieldProps("landmark")}
                  ></InputBox>
                  {renderErrorMessage("landmark")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="city"></label>
                  <InputBox
                    type="text"
                    placeholder="city"
                    {...formik.getFieldProps("city")}
                  ></InputBox>
                  {renderErrorMessage("city")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="state"></label>
                  <InputBox
                    type="text"
                    placeholder="state"
                    {...formik.getFieldProps("state")}
                  ></InputBox>
                  {renderErrorMessage("state")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="country"></label>
                  <InputBox
                    type="text"
                    placeholder="country"
                    {...formik.getFieldProps("country")}
                  ></InputBox>
                  {renderErrorMessage("country")}
                </InputAreaWrapper>
              </InputDivWrapper>
              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="pincode"></label>
                  <InputBox
                    type="text"
                    placeholder="pincode"
                    {...formik.getFieldProps("pincode")}
                  ></InputBox>
                  {renderErrorMessage("pincode")}
                </InputAreaWrapper>
              </InputDivWrapper>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </LeftContent>
          <RightContent>
            <img height="450vh" src="/signuppagehero.png" alt="" />
          </RightContent>
        </SignUpWrapper>
      </SignUpLayout>
      <Footer background="pink" />
    </>
  );
};

export const SignUpCustomer = ({ usertype }) => {
  const navigate = useNavigate();

  console.log(usertype);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      dob: "",
      landmark: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    onSubmit: async (values) => {
      alert(
        "Registration Form Submitted \n " + JSON.stringify(values, null, 2)
      );

      const response = await signupCustomer(values);
      console.log(response);

      if (response.data == "User Registration Successfully as Customer.") {
        console.log("yaha hai response");
        localStorage.setItem("user", values.email);

        validateUserSeller();
        getCustomerInfo("customer");
      } else {
        console.log("nahi yaha hai response");
      }

      navigate("/");
      formik.resetForm();
    },
    validationSchema: validationSchema,
  });

  const renderErrorMessage = (field) => {
    return formik.touched[field] && <div>{formik.errors[field]}</div>;
  };
  return (
    <>
      <Navbar backgroundColor="pink" />
      <SignUpLayout>
        <SignUpWrapper>
          <LeftContent>
            <SignUpHeading>SIGN UP NOW</SignUpHeading>
            <Logintext>
              Already a User Login Instead &nbsp;
              <Link
                style={{ textDecoration: "none" }}
                to={`/authenticate/${usertype}/login`}
              >
                <LinkTextNav color="#d63159">Login</LinkTextNav>
              </Link>
            </Logintext>
            <Logintext>
              <Link style={{ textDecoration: "none" }} to={`/authenticate`}>
                <LinkTextNav color="#d63159">
                  {" "}
                  <BsArrow90DegLeft />
                  &nbsp; Back to Authetication
                </LinkTextNav>
              </Link>
            </Logintext>
            <Form onSubmit={formik.handleSubmit}>
              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="name"></label>
                  <InputBox
                    type="text"
                    id="name"
                    placeholder="Your name"
                    {...formik.getFieldProps("name")}
                  ></InputBox>
                  {renderErrorMessage("name")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="email"></label>
                  <InputBox
                    type="email"
                    id="email"
                    placeholder="Your email"
                    {...formik.getFieldProps("email")}
                  ></InputBox>
                  {renderErrorMessage("email")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="password"></label>
                  <InputBox
                    type="password"
                    id="password"
                    placeholder="Your password"
                    {...formik.getFieldProps("password")}
                  ></InputBox>
                  {renderErrorMessage("password")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="dob"></label>
                  <InputBox
                    width="10vw"
                    type="date"
                    id="dob"
                    placeholder="Date of Birth"
                    {...formik.getFieldProps("dob")}
                  ></InputBox>
                  {renderErrorMessage("dob")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="landmark"></label>
                  <InputBox
                    type="text"
                    placeholder="landmark"
                    {...formik.getFieldProps("landmark")}
                  ></InputBox>
                  {renderErrorMessage("landmark")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="city"></label>
                  <InputBox
                    type="text"
                    placeholder="city"
                    {...formik.getFieldProps("city")}
                  ></InputBox>
                  {renderErrorMessage("city")}
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="state"></label>
                  <InputBox
                    type="text"
                    placeholder="state"
                    {...formik.getFieldProps("state")}
                  ></InputBox>
                  {renderErrorMessage("state")}
                </InputAreaWrapper>
                <InputAreaWrapper>
                  <label htmlFor="country"></label>
                  <InputBox
                    type="text"
                    placeholder="country"
                    {...formik.getFieldProps("country")}
                  ></InputBox>
                  {renderErrorMessage("country")}
                </InputAreaWrapper>
              </InputDivWrapper>
              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="pincode"></label>
                  <InputBox
                    type="text"
                    placeholder="pincode"
                    {...formik.getFieldProps("pincode")}
                  ></InputBox>
                  {renderErrorMessage("pincode")}
                </InputAreaWrapper>
              </InputDivWrapper>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </LeftContent>
          <RightContent>
            <img height="450vh" src="/signuppagehero.png" alt="" />
          </RightContent>
        </SignUpWrapper>
      </SignUpLayout>
      <Footer background="pink" />
    </>
  );
};

export const SignUp = () => {
  const params = useParams();
  const [usertype, setUsertype] = useState(params.usertype);

  return (
    <>
      {usertype == "customer" ? (
        <SignUpCustomer usertype={usertype} />
      ) : (
        <SignUpSeller usertype={usertype} />
      )}
    </>
  );
};
