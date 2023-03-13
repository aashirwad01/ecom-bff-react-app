import React from "react";
import styled from "styled-components";
import { ProductReview } from "./ProductReview";

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const PageContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90%;
  gap: 80px;
`;

const ImageContainer = styled.div`
background: url("/homepageallproducts.jpg");
background-size:100%;
background-repeat:no-repeat;
  display: flex;
  flex-direction: column;
  height:450px;
  width:100%;
`;

const Image = styled.img`
  height: 80vh;
  width: 99.5vw;
`;

export const Review = () => {
  return (
    <PageLayout>
      <PageContentWrapper>
        <ImageContainer>
          {/* <Image src="/homepageallproducts.jpg" alt="" /> */}
        </ImageContainer>
        <ProductReview />
      </PageContentWrapper>
    </PageLayout>
  );
};
