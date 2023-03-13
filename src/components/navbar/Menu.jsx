import styled from "styled-components";
import React, { useContext, useRef, useState } from "react";
import { LinkTextNav } from "../linkTextNav";
import { FaOpencart } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaIceCream } from "react-icons/fa";
import {MdHomeWork} from "react-icons/md"
import { FiChevronDown } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import Button from "../common/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GetAllProducts } from "../../services/ServiceWorker";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { DropdownMenu } from "../common/DropdownMenu";
import Chip from "../common/Chip";
import toast, { Toaster } from "react-hot-toast";
// import useOnClickOutside from '../../hooks/Common/useOnClickOutside';

const MenuWrapper = styled.div((props) => ({
  display: "flex",
  alignItems: "space-between",
  justifyContent: "flex-end",
  flexBasis: "100%",
  height: "auto",
  width: "auto",
}));

const MenuContentWrapper = styled.div((props) => ({
  display: "flex",
  flexBasis: "90%",
  justifyContent: "flex-start",
  width: "auto",
  height: "100%",
  alignItems: "center",
  gap: "20px",
}));

const ButtonWrapper = styled.button((props) => ({
  display: "flex",
  backgroundColor: "rgba(0,0,0,0)",

  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  height: "auto",
  border: "0",
  gap: "10px",
}));

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 20px;
  width: 180px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

// const AvatarWrapper = styled.div`
// margin-left:2%;
// border-radius: 50%;
// width: 55px;
// height: 55px;
// border: 2px solid black;
// background-color:red;

// `

const Avatar = styled.h2`
  border: 2px solid black;
  border-radius: 35%;
  margin-left: 3%;

  height: 50px;
  width: 50px;
  background: black;
`;

const ContentCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-family: Titan One;
  background: linear-gradient(
    85.87deg,
    #fff5f7 -51.75%,
    rgba(212, 20, 66, 1) 80.21%
  );
`;
const MenuButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;

  background: none;
  color: white;
  border: none;
  padding: 5px;
  margin: 0;
  font: Titan One;
  font-size: 2rem;
  cursor: pointer;
`;

export const Menu = ({
  backgroundColor,
  handleCoursesScrollClick,
  color,
  setProducts,
}) => {
  const [modalLoginOpen, setModalLoginOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [extra, setExtra] = useState(0);
  var user = localStorage.getItem("user");
  var userid = localStorage.getItem("userid");
  var isSeller = JSON.parse(localStorage.getItem("seller"));

  const navigate = useNavigate();
  React.useEffect(() => {
    console.log("here", extra);
    user = localStorage.getItem("user");
    userid = localStorage.getItem("userid");
    isSeller = JSON.parse(localStorage.getItem("seller"));
    console.log(user);
    console.log(isSeller);
  }, [extra, navigate]);
  //  console.log(isSeller)
  console.log(user && !isSeller);
  //   const { currentUser } = React.useContext(AuthContext);
  const ref = useRef();

  //   useOnClickOutside(ref, () => setDropdownOpen(false));

  //   const handleLogout = () => {
  //     logout();
  //     setDropdownOpen(false);
  //   };

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    localStorage.removeItem("seller");
    setExtra((old) => old + 1);
    let toastValue = "Logged out successfully";
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

    console.log(isSeller);
    navigate("/");
  }

  function handleLogin() {
    setExtra((old) => old + 1);
    console.log(extra);
    console.log(isSeller);

    navigate("/authenticate");
  }

  return (
    <MenuWrapper>
      <Toaster />
      <MenuContentWrapper>
        <LinkTextNav color={color} href="/">
          <AiFillHome /> Home
        </LinkTextNav>
        <Link style={{ textDecoration: "none" }} to="/products">
          {" "}
          <LinkTextNav color={color}>
            <FaIceCream /> Our products
          </LinkTextNav>
        </Link>

        {user && !isSeller ? (
          <Link
            style={{ textDecoration: "none" }}
            to={"/authenticated/" + localStorage.getItem("user") + "/order"}
          >
            <LinkTextNav color={color}>
              <BiPurchaseTag /> Orders
            </LinkTextNav>
          </Link>
        ) : (
          ""
        )}

        {user && !isSeller ? (
          <Link
            style={{ textDecoration: "none" }}
            to={"/authenticated/" + localStorage.getItem("user") + "/cart"}
          >
            <LinkTextNav color={color}>
              <FaOpencart /> Cart
            </LinkTextNav>
          </Link>
        ) : (
          ""
        )}

        {user && isSeller ? (
          <Link
            style={{ textDecoration: "none" }}
            to={"/authenticated/seller/" + localStorage.getItem("user")}
          >
            <LinkTextNav color={color}> <MdHomeWork/> Seller Page</LinkTextNav>
          </Link>
        ) : (
          ""
        )}
      </MenuContentWrapper>
      <ButtonWrapper>
        {!localStorage.getItem("user") && (
          <Link
            style={{ textDecoration: "none" }}
            onClick={handleLogin}
            to={`/authenticate`}
          >
            <Button variant="secondary">
              {" "}
              Login/Signup <MdKeyboardArrowRight />
            </Button>
          </Link>
        )}

        {localStorage.getItem("user") &&
          JSON.parse(localStorage.getItem("seller")) && (
            <>
              <ContentCircle>
                {" "}
                <MenuButton
                  onClick={() =>
                    navigate(
                      "/authenticated/seller/" + localStorage.getItem("user")
                    )
                  }
                >
                  {localStorage.getItem("user").charAt(0).toUpperCase()}
                </MenuButton>
              </ContentCircle>
              <Link
                onClick={handleLogout}
                style={{ textDecoration: "none" }}
                to={`/`}
              >
                <Button variant="secondary">
                  {" "}
                  Logout <MdKeyboardArrowRight />
                </Button>
              </Link>
            </>
          )}
        {localStorage.getItem("user") &&
          !JSON.parse(localStorage.getItem("seller")) && (
            <>
              <ContentCircle>
                {" "}
                <DropdownMenu />
              </ContentCircle>
              <Link
                onClick={handleLogout}
                style={{ textDecoration: "none" }}
                to={`/`}
              >
                <Button variant="secondary">
                  {" "}
                  Logout <MdKeyboardArrowRight />
                </Button>
              </Link>
            </>
          )}
      </ButtonWrapper>
    </MenuWrapper>
  );
};
