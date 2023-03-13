import React from "react";
import { MdNearbyError } from "react-icons/md";
import { Footer } from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Products } from "../components/productspage/Products";
import { ProductsHero } from "../components/productspage/ProductsHero";
import { InternalServer } from "./InternalServer";

export const ProductsPage = ({
  networkerror,
  productsFull,
  sort,
  setSort,
  setProducts,
  products,
}) => {
  console.log(networkerror);
  return (
    <>
      <ProductsHero />
      <Products
        networkerror={networkerror}
        productsFull={productsFull}
        sort={sort}
        setSort={setSort}
        setProducts={setProducts}
        products={products}
      />

      <Footer background="#fcded2" />
    </>
  );
};
