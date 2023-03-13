import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <img style={{ width: "50%" }} src="/404.jpg" alt="" />
      <Button onClick={() => navigate("/")} variant="primary">
        Go to Home
      </Button>
    </PageLayout>
  );
};
