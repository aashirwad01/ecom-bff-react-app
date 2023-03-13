import React, { useRef } from "react";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/homepage/herosection/Hero";
import { Howitsmade } from "../components/homepage/Howitsmade";
import { Review } from "../components/homepage/ReviewSection/Review";
import { TopProducts } from "../components/homepage/TopProducts";
import Navbar from "../components/navbar/Navbar";

export const HomePage = ({ setProducts }) => {
  return (
    <>
      <Hero setProducts={setProducts} />
      <TopProducts />
      <Howitsmade />
      <Review />
      <Footer background="#FFF5F7" />
    </>
  );
};
