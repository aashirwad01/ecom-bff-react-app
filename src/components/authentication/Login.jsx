import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getCustomer,
  getSeller,
  isUserSeller,
  loginCustomer,
  loginSeller,
} from "../../services/ServiceWorker";
import { breakpoints } from "../../utils/breakpoints";
import Button from "../common/Button";
import Navbar from "../navbar/Navbar";
import { BsArrow90DegLeft } from "react-icons/bs";
import { LinkTextNav } from "../linkTextNav";
import { Footer } from "../footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    height: auto;
  }
`;
const Logintext = styled.p`
  color: #d63159;
  font-size: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  gap: 30px;
`;
const LoginWrapper = styled.div`
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
const LoginHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "4rem",
  fontWeight: "bold",
  color: "#D41442",
}));

const InputAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  width: 20vw;
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

const initialFormData = {
  email: "",
  password: "",
};
export const validateUserSeller = async () => {
  const response = await isUserSeller(localStorage.getItem("user"));
  console.log(response);
  localStorage.setItem("seller", JSON.parse(response.data));

};

export const getCustomerInfo = async (usertype) => {
  console.log(usertype);
  if (usertype == "seller") {
    const response = await getSeller(localStorage.getItem("user"));

    if (response.data.email == localStorage.getItem("user")) {
      localStorage.setItem("userid", response.data.sellerid);
      localStorage.setItem("seller", true);
    }
  } else {
    const response = await getCustomer(localStorage.getItem("user"));

    if (response.data.email == localStorage.getItem("user")) {
      localStorage.setItem("userid", response.data.customerId);
      localStorage.setItem("seller", false);
    }
  }
};

export const Login = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const params = useParams();
  const [usertype, setUsertype] = useState(params.usertype);
 
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usertype == "customer") {
      const response = await loginCustomer(formData);

      if (response.data == formData.email) {
        
        localStorage.setItem("user", formData.email);

        validateUserSeller();
        getCustomerInfo(usertype);
        localStorage.setItem("seller", false);
        let toastValue =
          "Logged in successfully as customer " + response.data.toString();
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
            role:"status",
            "aria-live": "polite",
          },
        });
        navigate("/");
      } else {
        let toastValue = response.data.toString();
        toast(toastValue, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {},
          className: "",

          // Custom Icon
          icon: "😓",

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
    } else {
      const response = await loginSeller(formData);
      console.log(response);
      if (response.data == formData.email) {
        localStorage.setItem("user", formData.email);
        validateUserSeller();
        getCustomerInfo(usertype);
        localStorage.setItem("seller", true);
        console.log(localStorage.getItem("seller"));
        console.log(localStorage.getItem("user"));

        let toastValue =
          "Logged in successfully as seller " + response.data.toString();
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
        navigate("/");
      } else {
        let toastValue = response.data.toString();
        toast(toastValue, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: {},
          className: "",

          // Custom Icon
          icon: "😓",

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
    }
  };

  return (
    <>
      <Navbar backgroundColor="pink" />
      <LoginLayout>
        <Toaster />
        <LoginWrapper>
          <LeftContent>
            <LoginHeading>Login</LoginHeading>
            <Logintext>
              <Link
                style={{ textDecoration: "none" }}
                to={`/authenticate/${usertype}/signup`}
              >
                <LinkTextNav color="#d63159">
                  {" "}
                  <BsArrow90DegLeft />
                  &nbsp; Back to Signup
                </LinkTextNav>
              </Link>
            </Logintext>
            <Form>
              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="email"></label>
                  <InputBox
                    type="email"
                    id="email"
                    placeholder="Your email"
                    name="email"
                    onChange={handleChange}
                  ></InputBox>
                </InputAreaWrapper>
              </InputDivWrapper>

              <InputDivWrapper>
                <InputAreaWrapper>
                  <label htmlFor="password"></label>
                  <InputBox
                    type="password"
                    id="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleChange}
                  ></InputBox>
                </InputAreaWrapper>
              </InputDivWrapper>

              <Button onClick={handleSubmit} type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </LeftContent>
          <RightContent>
            <img height="450vh" src="/signuppagehero.png" alt="" />
          </RightContent>
        </LoginWrapper>
      </LoginLayout>
      <Footer background="pink" />
    </>
  );
};
