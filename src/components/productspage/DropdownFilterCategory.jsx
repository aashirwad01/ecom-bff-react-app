import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaOpencart } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FaIceCream } from "react-icons/fa";

const Dropdown = styled.div`
  position: relative;
  z-index: 2;
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

const MenuButton = styled.h1(() => ({
  width: "100%",
  height: "100%",
  textAlign: "center",

  border: "none",

  margin: "0",
  font: "Titan One",
  fontSize: "1.2rem",
  cursor: "pointer",
  background: `linear-gradient(
    to right, #f32170, #ff6b08,
     #cf23cf, #eedd44);`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  flexBasis: "100%",
}));

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
  margin: 1px;
  font-family: DM Sans;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background: lightpink;
  }
`;

export const DropdownFilterMenu = ({
  productsFull,
  setSort,
  products,
  setProducts,
  data,
}) => {
  const [productsAll, setProductsAll] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    setProductsAll(productsFull);
  }, [location]);

  console.log(productsAll);

  const handleMenuZero = () => {
    setProducts(productsAll);
  };

  const handleMenuOne = () => {
    setProducts(
      productsAll?.filter(function (obj) {
        return obj.tag == "Coffee";
      })
    );
  };

  const handleMenuTwo = () => {
    setProducts(
      productsAll?.filter(function (obj) {
        return obj.tag == "Icecream";
      })
    );
  };

  const handleMenuThree = () => {
    console.log(products);
    setProducts(
      productsAll?.filter(function (obj) {
        return obj.tag == "Milkshake";
      })
    );
  };

  return (
    <DropdownWindow
      trigger={<MenuButton>{data?.name}</MenuButton>}
      menu={[
        <MenuButtonList onClick={() => handleMenuZero()}>
          {data?.category["value1"]}
        </MenuButtonList>,
        <MenuButtonList onClick={() => handleMenuOne()}>
          {data?.category["value2"]}
        </MenuButtonList>,
        <MenuButtonList onClick={() => handleMenuTwo()}>
          {data?.category["value3"]}
        </MenuButtonList>,
        <MenuButtonList onClick={() => handleMenuThree()}>
          {data?.category["value4"]}
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
