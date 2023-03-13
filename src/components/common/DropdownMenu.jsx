import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaIceCream } from "react-icons/fa";
const Dropdown = styled.div`
  position: relative;
`;

const Menu = styled.ul`
  position: absolute;

  list-style-type: none;
  margin: 5px 0;
  padding: 0;

  border: 2px solid white;
  border-radius: 5px;
  width: 150px;
`;

const MenuVal = styled.div`
  margin: 0;
  background-color: white;
  border-radius: 15px;
`;

const MenuButton = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;

  background: none;
  color: white;
  border: none;
  padding: 5px;
  margin: 0;
  font: Titan One;
  font-size: 2rem;
  cursor: pointer;
`;

const MenuButtonList = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 5px;
  background: #c91e47;
  color: white;
  border: none;
  padding: 5px;
  margin: 1.5px;
  font-family: DM Sans;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background: lightpink;
  }
`;

export const DropdownMenu = () => {
  const navigate = useNavigate();

  const handleMenuZero = () => {
    navigate("/authenticated/customer/" + localStorage.getItem("user"));
    console.log("clicked zero");
  };
  const handleMenuOne = () => {
    navigate("/authenticated/" + localStorage.getItem("user") + "/cart");
    console.log("clicked one");
  };

  const handleMenuTwo = () => {
    navigate("/authenticated/" + localStorage.getItem("user") + "/order");
    console.log("clicked two");
  };
  const handleMenuThree = () => {
    navigate("/products");

    console.log("clicked three");
  };

  return (
    <DropdownWindow
      trigger={
        <MenuButton>
          {localStorage.getItem("user").charAt(0).toUpperCase()}
        </MenuButton>
      }
      menu={[
        <MenuButtonList onClick={handleMenuZero}>
          <ImProfile /> &nbsp;Your Profile
        </MenuButtonList>,
        <MenuButtonList onClick={handleMenuOne}>
          <FaOpencart />
          &nbsp;Your Cart
        </MenuButtonList>,
        <MenuButtonList onClick={handleMenuTwo}>
          {" "}
          <BiPurchaseTag />
          &nbsp;Your Orders
        </MenuButtonList>,
        <MenuButtonList onClick={handleMenuThree}>
          {" "}
          <FaIceCream />
          &nbsp;Our Products
        </MenuButtonList>,
      ]}
    />
  );
};

const DropdownWindow = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Dropdown>
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <Menu>
          {menu.map((menuItem, index) => (
            <MenuVal key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </MenuVal>
          ))}
        </Menu>
      ) : null}
    </Dropdown>
  );
};
