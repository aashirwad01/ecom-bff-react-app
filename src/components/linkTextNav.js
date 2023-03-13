import styled from "styled-components";

import "@fontsource/dm-sans";

export const LinkTextNav = styled.a((props) => ({
  textDecoration: "none",
  color: props.color ? "#B70932" : "#ffffff",
  fontSize: "1.1rem",
  fontWeight: "bold",
  padding: 0,
  fontFamily: "DM Sans",
  cursor: "pointer",
  "&:hover": {
    color: props.color ? "black" : "#B70932",
  },
  display: "flex",
  gap: "5px",
  alignItems: "flex-start",
}));
